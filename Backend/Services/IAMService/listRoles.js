const { iamClient } = require("./libs/iamClient.js");
const { ListRolesCommand } = require("@aws-sdk/client-iam");

// Set the parameters.
const params = {
    Marker: 'MARKER', // This is a string value.
    MaxItems: 'MAX_ITEMS' // This is a number value.
};

const listRoles = async () => {
        try {
            const results = await iamClient.send(new ListRolesCommand(params));
            console.log("Success", results);
            return results;
        } catch (err) {
            console.log("Error", err);
        }
};

module.exports = {listRoles};