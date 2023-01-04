exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'taeYeon',
      age: 97,
      email: 'eun210818@gmail.com'
    })
  }
}