# PDF_Merger
A PDF-Merger Application Developed using NodeJs, ExpressJs, and Multer Middleware

# About Multer
Multer is a NodeJs Middleware used to handle multipart form data (used for uploading files)
The app.post method in server.js posts the merged pdf as output on the browser once merging is done. 
This functionality is implemented using Multer.
We can limit the file count to be merged using Multer 
MulterOutput folder stores the merged pdf content in raw format 

# Things that were installed
Node Express Nodemon Multer pdf-merger-js

# About Project
merged.pdf is a sample output of test.js file which merges the hard coded pdf1 and pdf2</h1>
Public folder is used to store the merged pdf 
Test.js haas hard coded pdfs where we provide pdf1 and pdf2 manually
merge.js is the actual js file which takes dynamic pdfs 
Merge.js just serves the logic of merging. It can be written inside server.js as well
But for better readability it's written separately
If we provide more than mentioned files, Multer array throws Unexpected Field error"

# Existed issues and provided Solutions
Pdf merging was overlapped with the previous one(was getting appended). Resolved using reset function of pdf-merger-js
Given timestamps so that the pdf name would be unique since earlier it was saved as 'merged.pdf'(a single name for all pdfs) So it was overlapping the pdfs.
To avoid server overload users can be asked to take out their pdfs within 24 hrs else pdf would be lost 
Only 2 pdfs can be merged... Resolved using Rest Operator in async function (mergePdfs) of merge.js
  
# Changes that can be done 
Page wise selection of pdfs to be merged 
File Name can be saved in a particular naming convention
Can view JSon format 
View Metadata pdf-merger-js function  
File location to be downloaded can be manual 
Encrypted files gives error which is not human readable 
