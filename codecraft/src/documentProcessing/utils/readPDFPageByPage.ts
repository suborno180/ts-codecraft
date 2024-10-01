import * as fs from 'fs';
import * as pdf from 'pdf-parse';

export interface PDFData {
    totalPages: number;
    content: string | string[];
    metadata?: object; // Optional metadata
    performanceMetrics?: { totalTime: number; pageTimes: number[] }; // Performance metrics
}

export interface OutputFileOptions {
    outerDir: string; // Directory to save the output file
    fileName: string; // Name of the output file
}

export interface PDFOptions {
    enableRealtime?: boolean; // Enable real-time logging of page content
    maxPages?: number;        // Maximum number of pages to read
    outputFormat?: 'string' | 'array'; // Format of the output
    filterKeywords?: string[]; // Keywords to filter out from content
    progressCallback?: (page: number) => void; // Progress callback
    extractMetadata?: boolean; // Whether to extract metadata
    outputToFile?: OutputFileOptions; // Object to specify output file path
    pageRange?: { start: number; end: number }; // Page range to read
    customSeparator?: string; // Custom separator for output
    highlightKeywords?: string[]; // Keywords to highlight in the output
}

async function readPDFPageByPage(filePath: string, options: PDFOptions = {}): Promise<PDFData> {
    const { 
        enableRealtime = false, 
        maxPages = Infinity, 
        outputFormat = 'array', 
        filterKeywords = [], 
        progressCallback, 
        extractMetadata = false, 
        outputToFile, // Updated to object type
        pageRange, 
        customSeparator = '\n\n', 
        highlightKeywords = [] 
    } = options;

    const startTime = Date.now();
    const pageTimes: number[] = [];
    
    try {
        const pdfBuffer = fs.readFileSync(filePath);
        const data = await pdf(pdfBuffer);

        const totalPages = data.numpages || 0;
        const simulatedPages = data.text.split(/\n\s*\n/).map((pageText, index) => {
            return `--- Page ${index + 1} ---\n${pageText.trim()}`;
        });

        // Determine the page range
        const startPage = pageRange?.start ? Math.max(0, pageRange.start - 1) : 0;
        const endPage = pageRange?.end ? Math.min(totalPages, pageRange.end) : totalPages;
        const limitedPages = simulatedPages.slice(startPage, Math.min(endPage, maxPages));

        // Filter out unwanted content
        const filteredPages = limitedPages.filter(page => {
            return !filterKeywords.some(keyword => page.includes(keyword));
        });

        // Highlight keywords
        const highlightedPages = filteredPages.map(page => {
            let highlightedPage = page;
            highlightKeywords.forEach(keyword => {
                const regex = new RegExp(`(${keyword})`, 'gi');
                highlightedPage = highlightedPage.replace(regex, '**$1**'); // Highlight with markdown syntax
            });
            return highlightedPage;
        });

        if (enableRealtime) {
            highlightedPages.forEach((page, index) => {
                console.log(page);
                if (progressCallback) {
                    progressCallback(startPage + index + 1);
                }
            });
        }

        // Save to file if specified
        if (outputToFile) {
            const outputPath = `${outputToFile.outerDir}/${outputToFile.fileName}`;
            fs.writeFileSync(outputPath, highlightedPages.join(customSeparator), 'utf8');
        }

        const result: PDFData = {
            totalPages: totalPages,
            content: outputFormat === 'string' ? highlightedPages.join(customSeparator) : highlightedPages,
        };

        // Extract metadata if requested
        if (extractMetadata) {
            result.metadata = {
                title: data.info?.Title || 'Unknown',
                author: data.info?.Author || 'Unknown',
                subject: data.info?.Subject || 'Unknown',
                keywords: data.info?.Keywords || 'Unknown',
                creationDate: data.info?.CreationDate || 'Unknown',
                modificationDate: data.info?.ModDate || 'Unknown',
            };
        }

        // Performance metrics
        const endTime = Date.now();
        result.performanceMetrics = {
            totalTime: endTime - startTime,
            pageTimes: pageTimes, // Could be populated with actual page processing times if needed
        };

        return result;

    } catch (error: unknown) {
        console.error(`Error reading PDF file at ${filePath}:`, error);
        throw new Error(`Failed to read PDF: ${(error as Error).message}`);
    }
}

export default readPDFPageByPage; // Default export of the function

// Example usage
/*
async function main() {
    const filePath = 'path/to/your/file.pdf'; // Specify your PDF file path
    const options: PDFOptions = {
        enableRealtime: true,
        maxPages: 5,
        outputFormat: 'array',
        filterKeywords: ['skip this'], // Example keywords to filter out
        progressCallback: (page) => console.log(`Processing page ${page}...`),
        extractMetadata: true, // Extract metadata
        outputToFile: { outerDir: 'output', fileName: 'output.txt' }, // Save output to a file
        pageRange: { start: 1, end: 5 }, // Read pages 1 to 5
        customSeparator: '\n--- End of Page ---\n', // Custom separator for output
        highlightKeywords: ['important', 'highlight'], // Keywords to highlight
    };

    try {
        const pdfData = await readPDFPageByPage(filePath, options);
        console.log(`Total Pages: ${pdfData.totalPages}`);
        console.log(pdfData.content);
        console.log('Metadata:', pdfData.metadata);
        console.log('Performance Metrics:', pdfData.performanceMetrics);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
*/
