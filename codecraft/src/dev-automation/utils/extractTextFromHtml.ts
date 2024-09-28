export default function extractTextFromHtml(html: string): string {
    // Create a temporary DOM element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Select all table rows
    const rows = tempDiv.querySelectorAll('tr');
    const paragraphTexts: string[] = [];

    // Iterate through each row and get the text content
    rows.forEach(row => {
        const text = Array.from(row.children)
            .map(cell => cell.textContent?.trim())
            .filter(text => text) // Filter out empty strings
            .join(' '); // Join cell texts with a space
        if (text) {
            paragraphTexts.push(text);
        }
    });

    // Join all rows into a single paragraph
    return paragraphTexts.join('. ') + '.';
}

// Example usage:
// const htmlTable = `
// <table>
//     <tr><td>Row 1, Cell 1</td><td>Row 1, Cell 2</td></tr>
//     <tr><td>Row 2, Cell 1</td><td>Row 2, Cell 2</td></tr>
// </table>
// `;

// const result = extractTextFromHtml(htmlTable);
// console.log(result); 
// // Output: "Row 1, Cell 1 Row 1, Cell 2. Row 2, Cell 1 Row 2, Cell 2."
