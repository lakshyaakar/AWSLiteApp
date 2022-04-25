const { IAMClient } = require("@aws-sdk/client-iam");
// Set the AWS Region.
const REGION = "us-east-1"; // For example, "us-east-1".
// Create an IAM service client object.
const iamClient = new IAMClient({ region: REGION });
module.exports = { iamClient };