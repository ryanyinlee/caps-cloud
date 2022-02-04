'use strict';

const { Consumer } = require('sqs-consumer');

AWS.config.update({region: 'us-west-2'});
const sns = new AWS.SNS();


const app = Consumer.create({
    queueUrl: 'https://sqs.us-west-2.amazonaws.com/075301808340/pickup',
    handleMessage: (message) => {
        console.log(message);
    },
})

app.start();