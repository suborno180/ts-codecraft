import * as fs from 'fs';
import * as pdf from 'pdf-parse';

interface PDFData {
    totalPages: number;
    content: string[];
}

async function readPDFPageByPage(filePath: string): Promise<PDFData> {
    try {
        const pdfBuffer = fs.readFileSync(filePath);
        const data = await pdf(pdfBuffer);
        
        // Simulate page separation based on line breaks (adjust as needed)
        const simulatedPages = data.text.split(/\n\s*\n/).map((pageText, index) => {
            return `--- Page ${index + 1} ---\n${pageText.trim()}`;
        });

        return {
            totalPages: simulatedPages.length,
            content: simulatedPages,
        };
    } catch (error: unknown) {
        console.error(`Error reading PDF file at ${filePath}:`, error);
        throw new Error(`Failed to read PDF: ${(error as Error).message}`);
    }
}

export default readPDFPageByPage; // Default export of the function


// async function main() {
//     const filePath = 'path/to/your/file.pdf'; // Specify your PDF file path
//     try {
//         const pdfData = await readPDFPageByPage(filePath);
//         console.log(`Total Pages: ${pdfData.totalPages}`);
//         pdfData.content.forEach(page => console.log(page));
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// main();