const MessageUtils = require(`../MessageUtils`);
const TopicCreatePayload = require(`./TopicCreatePayload.js`);
const TopicListPayload = require(`./TopicListPayload.js`);
const TopicSubscribePayload = require(`./TopicSubscribePayload.js`);
const TopicUnsubscribePayload = require(`./TopicUnsubscribePayload.js`);
const NotificationCreatePayload = require(`./NotificationCreatePayload.js`);
const NotificationPayload = require(`./NotificationPayload.js`);
const HealthPayload = require(`./HealthPayload.js`);
const PluginAuthenticatePayload = require(`./PluginAuthenticatePayload.js`);
const TokenPayload = require(`./TokenPayload.js`);
const ErrorPayload = require(`./ErrorPayload.js`);

const typeActionPayloadMap = new Map();

typeActionPayloadMap.set(`${MessageUtils.ERROR}`, ErrorPayload);
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
typeActionPayloadMap.set(`${MessageUtils.NOTIFICATION_TYPE}:${MessageUtils.CREATE_ACTION}:${MessageUtils.REQUEST}`, NotificationCreatePayload);
typeActionPayloadMap.set(`${MessageUtils.PLUGIN_TYPE}:${MessageUtils.AUTHENTICATE_ACTION}:${MessageUtils.REQUEST}`, PluginAuthenticatePayload);


/**
 * DeviceHive proxy message builder class
 */
class PayloadBuilder {

    static get payloadClassMap() {
        return typeActionPayloadMap;
    }

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

        if (type !== MessageUtils.ACK_TYPE || status === MessageUtils.FAILED_STATUS) {
            payloadClass = status === MessageUtils.FAILED_STATUS ?
                PayloadBuilder.payloadClassMap.get(MessageUtils.ERROR) :
                PayloadBuilder.payloadClassMap
                    .get(`${type}:${action}:${status === MessageUtils.SUCCESS_STATUS ? MessageUtils.RESPONSE : MessageUtils.REQUEST}`);
        }

        return payloadClass ? payloadClass.normalize(payload) : payloadClass;
    }

    /**
     * Creates specific message payload object
     * @param type - message type
     * @param action - message action
     * @param status - message status
     * @param payload - payload data
     * @returns {Payload}
     */
    static build({ type, action, status, payload } = {}) {
        let payloadClass;

        if (type !== MessageUtils.ACK_TYPE || status === MessageUtils.FAILED_STATUS) {
            payloadClass = status === MessageUtils.FAILED_STATUS ?
                PayloadBuilder.payloadClassMap.get(MessageUtils.ERROR) :
                PayloadBuilder.payloadClassMap
                    .get(`${type}:${action}:${status === MessageUtils.SUCCESS_STATUS ? MessageUtils.RESPONSE : MessageUtils.REQUEST}`);
        }

        return payloadClass ? new payloadClass(payload) : payloadClass;
    }
}


module.exports = PayloadBuilder;
