const { iamClient } = require("../../libs/iamClient.js");
const { DeleteRoleCommand } = require("@aws-sdk/client-iam");

// Set the parameters.
const params = {
    RoleName: "ROLE_NAME"
}

const deleteRole = async () => {
    try {
        const data = await iamClient.send(new DeleteRoleCommand(params));
        console.log("Success. Role deleted.", data);
    } catch (err) {
        console.log("Error", err);
    }
};

module.exports = {deleteRole}