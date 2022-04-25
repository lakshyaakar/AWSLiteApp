const { iamClient } = require("../../libs/iamClient.js");
const { GetUserCommand, CreateUserCommand } = require("@aws-sdk/client-iam");

const createUser = async (userParams) => {
  try {
    const data = await iamClient.send(new GetUserCommand(userParams));
    console.log(
      "User " + UserName + " already exists",
      data.User.UserId
    );
    return data;
  } catch (err) {
    try {
      const results = await iamClient.send(new CreateUserCommand(userParams));
      console.log("Success", results);
      return results;
    } catch (err) {
      console.log("Error", err);
    }
  }
};
module.exports = {createUser};