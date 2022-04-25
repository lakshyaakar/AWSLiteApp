const {
    CreateTagsCommand,
    RunInstancesCommand
} = require("@aws-sdk/client-ec2");
const { ec2Client } = require("../../libs/ec2Client");

// Set the parameters
// const instanceParams = {
//     ImageId: "ami-04505e74c0741db8d", //AMI_ID
//     InstanceType: "t2.micro",
//     MinCount: 1,
//     MaxCount: 1,
// };

const createInstance = async (instanceData) => {
    try {
        const data = await ec2Client.send(new RunInstancesCommand(instanceData));
        console.log(data.Instances[0].InstanceId);
        const instanceId = data.Instances[0].InstanceId;
        console.log("Created instance", instanceId);
        // Add tags to the instance
        const tagParams = {
            Resources: [instanceId],
            Tags: [
                {
                    Key: "Name",
                    Value: "SDK Sample",
                },
            ],
        };
        try {
            const data = await ec2Client.send(new CreateTagsCommand(tagParams));
            console.log("Instance tagged");
        } catch (err) {
            console.log("Error", err);
        }
    } catch (err) {
        console.log("Error", err);
    }
};

module.exports = {createInstance} ;