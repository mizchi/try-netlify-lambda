exports.handler = async (event: any) => {
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: `Hello xxxx ${subject}!`,
  };
};
