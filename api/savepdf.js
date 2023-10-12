const PDFDocument = require('pdfkit');
const fs = require('fs');
import aws from 'aws-sdk';

export default async function handler(req, res) {
  //Send the data for the pdf in the request as query params such as the title and filename
  const {
    query: { title, filename },
  } = req;
  const doc = new PDFDocument();
  //use the tmp serverless function folder to create the write stream for the pdf
  let writeStream = fs.createWriteStream(`/tmp/${filename}.pdf`);
  doc.pipe(writeStream);
  doc.text(title);
  doc.end();

  writeStream.on('finish', function () {
    //once the doc stream is completed, read the file from the tmp folder
    const fileContent = fs.readFileSync(`/tmp/${filename}.pdf`);
    //create the params for the aws s3 bucket
    var params = {
      Key: `${filename}.pdf`,
      Body: fileContent,
      Bucket: 'your-s3-bucket-name',
      ContentType: 'application/pdf',
    };

    //Your AWS key and secret pulled from environment variables
    const s3 = new aws.S3({
      accessKeyId: process.env.YOUR_AWS_KEY,
      secretAccessKey: process.env.YOUR_AWS_SECRET,
    });

    s3.putObject(params, function (err, response) {
      res.status(200).json({ response: `File ${filename} saved to S3` });
    });
  });
}