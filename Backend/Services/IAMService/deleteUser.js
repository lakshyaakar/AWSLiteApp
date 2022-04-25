const { iamClient } = require("../../libs/iamClient.js");
const { DeleteUserCommand, GetUserCommand } = require("@aws-sdk/client-iam");

// Set the parameters.
const params = { UserName: "lakshya" }; //USER_NAME

const deleteUser = async () => {
  try {
    const data = await iamClient.send(new GetUserCommand(params));
    try {
        const results = await iamClient.send(new DeleteUserCommand(params));
        console.log("Success", results);
        return results;
      } catch (err) {
        console.log("Error", err);
    }
    return data;
    
  } catch (err) {
    console.log("User " + "USER_NAME" + " does not exist.");
  }
};

module.exports = {deleteUser}