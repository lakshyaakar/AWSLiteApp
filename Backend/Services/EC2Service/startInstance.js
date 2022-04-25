const {
    StartInstancesCommand
  } = require("@aws-sdk/client-ec2");
  const { ec2Client } = require("../../libs/ec2Client");
    
  const startInstance = async (instanceParams) => {
    
      console.log("Instance parameters are" , instanceParams)
      const params = { InstanceIds: [Object.keys(instanceParams)[0]] }; // Array of INSTANCE_IDs

      try {
        const data = await ec2Client.send(new StartInstancesCommand(params));
        // console.log("Success", data.StartingInstances);
        return data;
      } catch (err) {
        console.log("Error2", err);
      }
   
  };
  module.exports = {startInstance};
  