const { DescribeInstancesCommand } = require("@aws-sdk/client-ec2");
const { ec2Client } = require("../..//libs/ec2Client");
const getInstance = async () => {
  try {
    const data = await ec2Client.send(new DescribeInstancesCommand({}));
    // console.log("Success", JSON.stringify(data));
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
module.exports = {getInstance};