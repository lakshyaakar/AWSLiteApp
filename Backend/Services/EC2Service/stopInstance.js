const {
    StopInstancesCommand
  } = require("@aws-sdk/client-ec2");
  const { ec2Client } = require("../../libs/ec2Client");
  
  
  const stopInstance = async (instanceParams) => {
    console.log("Instance parameters are" , instanceParams)
    const params = { InstanceIds: [Object.keys(instanceParams)[0]] }; // Array of INSTANCE_IDs

      try {
        const data = await ec2Client.send(new StopInstancesCommand(params));
        // console.log("Success", data.StoppingInstances);
        return data;
      } catch (err) {
        console.log("Error", err);
      }
  };
  module.exports = {stopInstance};
  