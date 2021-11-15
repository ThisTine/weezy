import { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuidv4 } from 'uuid';
const awsConfig = {
    "region": "us-east-2",
    "endpoint": "https://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId":"AKIA2KWG77TINE2P2CVC",
    "secretAccessKey":"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"
}
const AWS = require("aws-sdk")
AWS.config.update(awsConfig)
const docClient = new AWS.DynamoDB.DocumentClient();
export default async function register(req:NextApiRequest ,res:NextApiResponse){
    const params = {
        TableName:"register_user",
        Item:{
            "uuid": uuidv4(),
            "email": req.body.email,
            "type": req.body.type
        }
    }
    const queryparams = {
        TableName : "register_user",
        ProjectionExpression: "email",
        FilterExpression: "#email = :mmmm",
        ExpressionAttributeNames: {
            "#email": "email",
        },
        ExpressionAttributeValues: {
             ":mmmm": req.body.email,
        }
    }
    if(req.method === "POST" && req.body.email && req.body.type){
        try{
        const data = await docClient.scan(queryparams).promise()

        if(data.Count > 0){
            throw new Error("อีเมลที่ใช้ซ้ำ")
        }
        await  docClient.put(params).promise()

        }catch(err){
               return res.status(200).json({isok:false,message: typeof err === "string" ? err : "error" })
        }
        return res.status(200).json({isok:true})
    }else{
        return res.status(200).json({isok:false,message:"error"})
    }
}