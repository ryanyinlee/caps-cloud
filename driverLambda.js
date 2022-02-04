exports.handler = async (event) => {
    // TODO implement
    console.log(event.Records[0].Sns.Message);
    const response = {
        statusCode: 200,
        body: JSON.stringify('Driver Lambda hit!'),
    };
    return response;
};
