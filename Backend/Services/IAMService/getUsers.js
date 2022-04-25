const { iamClient } = require ("../../libs/iamClient");
const { ListUsersCommand } = require ("@aws-sdk/client-iam");

// Set the parameters.
const params = { MaxItems: 10 };

const getUsers = async () => {
  try {
    const data = await iamClient.send(new ListUsersCommand(params));
    const users = data.Users || [];
    users.forEach(function (user) {
      console.log("User " + user.UserName + " created", user.CreateDate);
    });
    return data;
    
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {getUsers};