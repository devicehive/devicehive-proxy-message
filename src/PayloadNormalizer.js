const MessageUtils = require(`./MessageUtils`);
const TopicCreatePayload = require(`./payload/TopicCreatePayload.js`);
const TopicListPayload = require(`./payload/TopicListPayload.js`);
const TopicSubscribePayload = require(`./payload/TopicSubscribePayload.js`);
const TopicUnsubscribePayload = require(`./payload/TopicUnsubscribePayload.js`);
const NotificationCreatePayload = require(`./payload/NotificationCreatePayload.js`);
const NotificationPayload = require(`./payload/NotificationPayload.js`);
const HealthPayload = require(`./payload/HealthPayload.js`);
const PluginAuthenticatePayload = require(`./payload/PluginAuthenticatePayload.js`);
const TokenPayload = require(`./payload/TokenPayload.js`);
const ErrorPayload = require(`./payload/ErrorPayload.js`);

const typeActionPayloadMap = new Map();

typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.CREATE_ACTION}:${MessageUtils.RESPONSE}`, TopicCreatePayload);
typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.LIST_ACTION}:${MessageUtils.RESPONSE}`, TopicListPayload);
typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.SUBSCRIBE_ACTION}:${MessageUtils.RESPONSE}`, TopicSubscribePayload);
typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.UNSUBSCRIBE_ACTION}:${MessageUtils.RESPONSE}`, TopicUnsubscribePayload);
typeActionPayloadMap.set(`${MessageUtils.NOTIFICATION_TYPE}:${MessageUtils.NO_ACTION}:${MessageUtils.RESPONSE}`, NotificationPayload);
typeActionPayloadMap.set(`${MessageUtils.PLUGIN_TYPE}:${MessageUtils.AUTHENTICATE_ACTION}:${MessageUtils.RESPONSE}`, TokenPayload);
typeActionPayloadMap.set(`${MessageUtils.HEALTH_CHECK_TYPE}:${MessageUtils.NO_ACTION}:${MessageUtils.RESPONSE}`, HealthPayload);
typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.CREATE_ACTION}:${MessageUtils.REQUEST}`, TopicCreatePayload);
typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.LIST_ACTION}:${MessageUtils.REQUEST}`, TopicListPayload);
typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.SUBSCRIBE_ACTION}:${MessageUtils.REQUEST}`, TopicSubscribePayload);
typeActionPayloadMap.set(`${MessageUtils.TOPIC_TYPE}:${MessageUtils.UNSUBSCRIBE_ACTION}:${MessageUtils.REQUEST}`, TopicUnsubscribePayload);
typeActionPayloadMap.set(`${MessageUtils.NOTIFICATION_TYPE}:${MessageUtils.NO_ACTION}:${MessageUtils.REQUEST}`, NotificationCreatePayload);
typeActionPayloadMap.set(`${MessageUtils.PLUGIN_TYPE}:${MessageUtils.AUTHENTICATE_ACTION}:${MessageUtils.REQUEST}`, PluginAuthenticatePayload);

/**
 * DeviceHive message payload normalizer class
 */
class PayloadNormalizer {

    /**
     * Transforms raw DeviceHive proxy message payload to JS object with full named fields
     * @param type - message type
     * @param action - message action
     * @param status - message status
     * @param payload - payload data
     * @returns {Payload}
     */
    static normalize({ type, action, status, payload } = {}) {
        let payloadClass;

        if (status === MessageUtils.FAILED_STATUS) {
            payloadClass = ErrorPayload;
        } else {
            payloadClass = typeActionPayloadMap.get(`${type}:${action}:${status ? MessageUtils.RESPONSE : MessageUtils.REQUEST}`);
        }

        return payloadClass ? payloadClass.normalize(payload) : payloadClass;
    }
}


module.exports = PayloadNormalizer;