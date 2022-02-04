'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:075301808340:pickup';
const queueArn = 'arn:aws:sqs:us-west-2:075301808340:vendor1';

const payload = {
    Message: JSON.stringify({ orderId: '1234', customer: 'Senor Realcustomeros', vendorId: queueArn}),
    TopicArn: topic,
};

sns.publish(payload).promise()
    .then(data => console.log(data))
    .catch(err => console.error(err));