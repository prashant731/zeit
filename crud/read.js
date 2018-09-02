var AWS = require("aws-sdk");
let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIAIASZIDUX4MXOTNKA", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
exports.fetchOneByKey = function (params) {
/*    var params = {
        TableName: "users",
        Key: {
            "email_id": "example@gmail.com"
        }
    };
  */
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })

}
