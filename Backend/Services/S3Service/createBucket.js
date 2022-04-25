const { CreateBucketCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../../libs/s3Client.js");


// Create the Amazon S3 bucket.
const createBucket = async (bucket) => {
  
  try {
    const data = await s3Client.send(new CreateBucketCommand(bucket));
    console.log("Success", data);
    return data; 
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {createBucket};