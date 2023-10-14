
const { PDFDocument, rgb } = require('pdf-lib'); 
const fs = require('fs');
const path = require('path')
async function mergePdfs(...pdfPaths) {
    // Load and merge the PDFs based on the provided paths
    const mergedPdfDoc = await PDFDocument.create();
  
    for (const pdfPath of pdfPaths) {
      const pdfBytes = fs.readFileSync(pdfPath);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => mergedPdfDoc.addPage(page));
    }
  
    // Save the merged PDF to a new file
    let d = new Date().getTime();
    const mergedPdfPath = path.join('Public', `PDF - MERGER ${d}.pdf`);
    const mergedPdfBytes = await mergedPdfDoc.save();
    fs.writeFileSync(mergedPdfPath, mergedPdfBytes);
  
    return mergedPdfPath;
  }
  
module.exports = {mergePdfs}