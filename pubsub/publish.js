// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');
const attr = {domain: 'com'};

async function quickstart(
  projectId = 'kubenetes-tutorial-272611', // Your Google Cloud Platform project ID
) {
  // Instantiates a client
  const pubsub = new PubSub({projectId});
  const topic = pubsub.topic("my-topic")
  // Send a message to the topic
  topic.publish(Buffer.from("Test Message!!!"), attr);
}

quickstart()
