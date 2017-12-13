[DeviceHive]: https://devicehive.com "DeviceHive framework"
[DeviceHive WebSocket proxy]: https://github.com/devicehive/devicehive-ws-kafka-proxy "DeviceHive WebSocket proxy"

# devicehive-proxy-message
DeviceHive proxy messages classes

[DeviceHive] server entities and plugins should connect to the [DeviceHive WebSocket proxy]
[DeviceHive WebSocket proxy] has it's own messages formats. This module helps to work with this formats transforms raw 
proxy messages to JS object with fully named fields.

# Module structure

- **_Message_** - Base Proxy Message class
- **_MessageUtils_** - Utility Message class
- **_MessageBuilder_** - Message Builder
- **_PayloadNormalizer_** - Normalizer for Message payload
- payload:
    * **_TopicCreatePayload_** - Payload for topic create request/response
    * **_TopicListPayload_** - Payload for topic list request/response
    * **_TopicSubscribePayload_** - Payload for topic subscribe request/response
    * **_TopicUnsubscribePayload_** - Payload for topic unsubscribe request/response
    * **_NotificationCreatePayload_** - Payload for notification create request
    * **_NotificationPayload_** - Payload for notification push message
    * **_PluginAuthenticatePayload_** - Payload for plugin authentication request
    * **_HealthPayload_** - Payload for health check response
    * **_TokenPayload_** - Payload for plugin token (plugin authentication response)
    * **_ErrorPayload_** - Error response payload
    
## Message
Raw message: 
```
{
    "id": <message id>, 
    "t": <message type>, 
    "a": <message action>, 
    "p": <message payload>, 
    "s": <message status>
}
```

Message object: 
```
{
    "id": <message id>, 
    "type": <message type>, 
    "action": <message action>, 
    "payload": <message payload>, 
    "status": <message status>
}
```

Usage example:
```js
const { Message } = require(`devicehive-proxy-message`);

const requestMessage = new Message({
    "id": 1, 
    "type": "topic", 
    "action": "list"
});

const responseMessage = Message.normalize({
    "id": 1, 
    "t": "topic", 
    "a": "list", 
    "p": { "t": ["testTopic"] }, 
    "s": 0
});
```

## MessageUtils
MessageUtils is a class with next static members:

- _MessageUtils_.**TOPIC_TYPE** = "topic"
- _MessageUtils_.**NOTIFICATION_TYPE** = "notif"
- _MessageUtils_.**HEALTH_CHECK_TYPE** = "health"
- _MessageUtils_.**PLUGIN_TYPE** = "plugin"
- _MessageUtils_.**ACK_TYPE** = "ack"
- _MessageUtils_.**NO_ACTION** = undefined
- _MessageUtils_.**CREATE_ACTION** = "create"
- _MessageUtils_.**LIST_ACTION** = "list"
- _MessageUtils_.**SUBSCRIBE_ACTION** = "subscribe"
- _MessageUtils_.**UNSUBSCRIBE_ACTION** = "unsubscribe"
- _MessageUtils_.**AUTHENTICATE_ACTION** = "authenticate"
- _MessageUtils_.**SUCCESS_STATUS** = 0
- _MessageUtils_.**FAILED_STATUS** = 1

Usage example:
```js
const { Message, MessageUtils } = require(`devicehive-proxy-message`);

const requestMessage = new Message({
    "id": 1, 
    "type": MessageUtils.TOPIC_TYPE, 
    "action": MessageUtils.LIST_ACTION
});
```

## MessageBuilder
MessageBuilder is a class with next static members:

- _MessageBuilder_.**createTopic**(payload, id), payload is an object like for TopicCreatePayload constructor, id - message id; 
- _MessageBuilder_.**listTopics**(id), id - message id
- _MessageBuilder_.**subscribeTopic**(payload, id), payload is an object like for TopicSubscribePayload constructor, id - message id; 
- _MessageBuilder_.**unsubscribeTopic**(payload, id) , payload is an object like for TopicUnsubscribePayload constructor, id - message id; 
- _MessageBuilder_.**createNotification**(payload, id) , payload is an object like for NotificationCreatePayload constructor, id - message id; 
- _MessageBuilder_.**authenticatePlugin**(payload, id) , payload is an object like for PluginAuthenticatePayload constructor, id - message id; 
- _MessageBuilder_.**health**(id), id - message id

Usage example:
```js
const { MessageBuilder } = require(`devicehive-proxy-message`);

const requestMessage = MessageBuilder.listTopics(1);
```

PayloadNormalizer is used by Message class in normalize method.

# Payloads

All fields in payloads objects prefixed by '\_' and has corresponding javascript get/set function without '\_' prefix

## TopicCreatePayload
Raw payload: 
```
{
    "t": <list of topics>
}
```

TopicCreatePayload object: 
```
{
    "topicList": <list of topics>
}
```

## TopicListPayload
Raw payload: 
```
{
    "t": <list of topics>
}
```

TopicListPayload object: 
```
{
    "topicList": <list of topics>
}
```

## TopicSubscribePayload
Raw payload: 
```
{
    "t": <list of topics>
}
```

TopicSubscribePayload object: 
```
{
    "topicList": <list of topics>
}
```

## TopicUnsubscribePayload
Raw payload: 
```
{
    "t": <list of topics>
}
```

TopicUnsubscribePayload object: 
```
{
    "topicList": <list of topics>,
}
```

## NotificationCreatePayload
Raw payload: 
```
{
    t: <topic name>,
    m: <notification message>,
    part: <topic partition>
}
```

NotificationCreatePayload object: 
```
{
    topic: <topic name>,
    message: <notification message>,
    partition: <topic partition>
}
```

## NotificationPayload
Raw payload: 
```
{
    "m": <notification message>
}
```

NotificationPayload object: 
```
{
    "message": <notification message>
}
```

## PluginAuthenticatePayload
Raw payload: 
```
{
    "token": <plugin access token>
}
```

PluginAuthenticatePayload object: 
```
{
    "token": <plugin access token>
}
```

## HealthPayload
Raw payload: 
```
{
    prx: <proxy status>,
    mb: <message buffer status>,
    mbfp: <message buffer fill percentage>,
    comm: <internal message broker status>
}
```

HealthPayload object: 
```
{
    proxy: <proxy status>,
    messageBuffer: <message buffer status>,
    messageBufferFillPercentage: <message buffer fill percentage>,
    communicator: <internal message broker status>
}
```

## TokenPayload
Raw payload: 
```
{
    e: <token expiration date>,
    t: <token type>,
    tpc: <plugin topic>
}
```

TokenPayload object: 
```
{
    expirationDate: <token expiration date>,
    type: <token type>,
    topic: <plugin topic>
}
```

## ErrorPayload
Raw payload: 
```
{
    m: <error message>,
    c: < error code>
}
```

TokenPayload object: 
```
{
    message: <error message>,
    code: <error code>
}
```
