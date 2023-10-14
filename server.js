
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const multer = require('multer')
const upload = multer({ dest: 'MulterOutput/' })
// Since mergepdfs is an object we use destructuring
const { mergePdfs } = require('./merge')
// const { PDFDocument, rgb } = require('pdf-lib');





// Serving Static files once merged pdf is generated
app.use('/static', express.static('Public'))

app.get('/', (req, res) => {
    //   res.send('Hello World Shubham!')
    res.sendFile(path.join(__dirname, "Templates/index.html"))
})

// This functioning is done using Multer 
// limit of pdf acceptance is 2 currently
// app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
//     // console.log(req)
//     // Async function is used because jab tak pdf is not ready don't redirect it to http://localhost:3000/static/merged.pdf
//     let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
//     // res.send({data: req.files})  This shows the pdf merged content in json format
//     res.redirect(`http://localhost:3000/static/${d}.pdf`)
// })


// Limit provided of 4
app.post('/merge', upload.array('mypdf', 4), async (req, res) => {
    // console.log("Inside app.post")
    try {
        // console.log("Inside try block")
        const pdfPaths = req.files.map((file) => path.join(__dirname, file.path));

        if (pdfPaths.length < 2) {
            const alertScript = `
          <script>
            alert('Please upload at least 2 PDF files.');
            window.location.href = '/'; // Redirect to the home page or any other page
          </script>`;

            res.send(alertScript);
            return;  // Return to stop further execution
        }

        const mergedPdfPath = await mergePdfs(...pdfPaths);
        //   res.send({data: req.files})  //This shows the pdf merged content in json format
        res.sendFile(path.join(__dirname, mergedPdfPath));  // If you want output at : http://localhost:3000/merge
    } catch (error) {
        console.error('Error merging PDFs:', error);
        res.status(500).send('Error merging PDF files: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})