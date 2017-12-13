const Message = require(`./src/Message`);
const MessageUtils = require(`./src/MessageUtils`);
const MessageBuilder = require(`./src/MessageBuilder`);
const TopicCreatePayload = require(`./src/payload/TopicCreatePayload.js`);
const TopicListPayload = require(`./src/payload/TopicListPayload.js`);
const TopicSubscribePayload = require(`./src/payload/TopicSubscribePayload.js`);
const TopicUnsubscribePayload = require(`./src/payload/TopicUnsubscribePayload.js`);
const NotificationCreatePayload = require(`./src/payload/NotificationCreatePayload.js`);
const NotificationPayload = require(`./src/payload/NotificationPayload.js`);
const PluginAuthenticatePayload = require(`./src/payload/PluginAuthenticatePayload.js`);
const HealthPayload = require(`./src/payload/HealthPayload.js`);
const TokenPayload = require(`./src/payload/TokenPayload.js`);
const ErrorPayload = require(`./src/payload/ErrorPayload.js`);
const PayloadNormalizer = require(`./src/PayloadNormalizer.js`);


module.exports = {
    Message: Message,
    MessageBuilder: MessageBuilder,
    MessageUtils: MessageUtils,
    PayloadNormalizer: PayloadNormalizer,
    payload: {
        TopicCreatePayload: TopicCreatePayload,
        TopicListPayload: TopicListPayload,
        TopicSubscribePayload: TopicSubscribePayload,
        TopicUnsubscribePayload: TopicUnsubscribePayload,
        NotificationCreatePayload: NotificationCreatePayload,
        NotificationPayload: NotificationPayload,
        PluginAuthenticatePayload: PluginAuthenticatePayload,
        HealthPayload: HealthPayload,
        TokenPayload: TokenPayload,
        ErrorPayload: ErrorPayload
    }
};