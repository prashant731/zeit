var AWS = require("aws-sdk");
let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIAIASZIDUX4MXOTNKA", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

exports.save = function (params,res) {

  /*  var input = {
        "email_id": "example-1@gmail.com", "created_by": "clientUser", "created_on": new Date().toString(),
        "updated_by": "clientUser", "updated_on": new Date().toString(), "is_deleted": false
    };
    var params = {
        TableName: "users",
        Item:  input
    };
    */
    docClient.put(params, function (err, data) {

        if (err) {
            res.send(JSON.stringify({"status":false,"error":err}));
        } else {
            res.send({status:"true"});
        }
    });
}
