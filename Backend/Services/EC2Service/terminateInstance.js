const {TerminateInstancesCommand} = require("@aws-sdk/client-ec2");
const { ec2Client } = require("../../libs/ec2Client");

const terminateInstance = async (instanceParams) => {

    console.log("Instance parameters are" , instanceParams)
    const params = { InstanceIds: [Object.keys(instanceParams)[0]] }; // Array of INSTANCE_IDs

    try {
      const data = await ec2Client.send(new TerminateInstancesCommand(params));
      // console.log("Success", data.TerminatingInstances);
      return data;
    } catch (err) {
      console.log("Error2", err);
    }
 
};
module.exports = {terminateInstance};