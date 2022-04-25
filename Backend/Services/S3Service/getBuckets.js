const { ListBucketsCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../../libs/s3Client.js"); // Helper function that creates an Amazon S3 service client module.

const getBuckets = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success", data.Buckets);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {getBuckets} ;