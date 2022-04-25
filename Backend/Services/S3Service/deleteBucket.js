const { DeleteBucketCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../../libs/s3Client.js"); 


const deleteBucket = async (bucket) => {
  console.log(bucket)

// Set the bucket parameters
  const bucketParams = { Bucket: Object.keys(bucket)[0] };

  try {
    const data = await s3Client.send(new DeleteBucketCommand(bucketParams));
    console.log("Success - bucket deleted");
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {deleteBucket}