### RABBITMQ
```


1. createChannel: Setting up the Router
This function establishes the connection and sets up the Exchange.

connection.createChannel(): Creates a virtual connection inside the TCP connection. All commands (publish, consume) happen here.

channel.assertExchange(..., 'direct', ...): This declares the Exchange.

In RabbitMQ, you never send messages directly to a Queue. You send them to an Exchange.

The 'direct' type means: "Only route a message to a Queue if the message's Routing Key exactly matches the Queue's Binding Key."

- ye wala function hum ek channel(with exchange defined that will communicate with the queue) lene k liye kr rhe hai jis channel ka use hm niche wali functions me krenge to publish or subscribe.

2. subscribeMessage: Setting up the Storage
This function sets up the Queue and the Consumer (the code that processes the data).

channel.assertQueue(QUEUE_NAME): Ensures a Queue exists. The Queue is the buffer where messages are stored until they are processed.

channel.bindQueue(queue, exchange, binding_key): This creates a Binding.

A Binding is a rule that links the Exchange to the Queue.

It tells the Exchange: "Forward any message with this specific binding_key into this queue."

channel.consume(..., msg => { ... }): This attaches a listener to the Queue.

channel.ack(msg): This is the Acknowledgement.

Queues in RabbitMQ do not delete a message immediately when it is sent to the consumer.

The message remains "Unacked" (pending).

Once you call .ack(msg), the Queue knows the data was handled safely and permanently deletes it from memory.

3. publishMessage: Sending the Data
This function acts as the Producer.

channel.publish(exchange, binding_key, ...): This pushes data to the Exchange.

Notice you do not specify the Queue name here. You only specify the Exchange and the Routing Key (variable binding_key).

The Exchange looks at this key, checks its list of bindings, and routes the data to the correct Queue.
```