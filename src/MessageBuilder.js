const Message = require(`./Message`);
const MessageUtils = require(`./MessageUtils`);
const TopicCreatePayload = require(`./payload/TopicCreatePayload.js`);
const TopicSubscribePayload = require(`./payload/TopicSubscribePayload.js`);
const TopicUnsubscribePayload = require(`./payload/TopicUnsubscribePayload.js`);
const NotificationCreatePayload = require(`./payload/NotificationCreatePayload.js`);
const PluginAuthenticatePayload = require(`./payload/PluginAuthenticatePayload.js`);


/**
 * DeviceHive proxy message builder class
 */
class MessageBuilder {

    /**
     * Creates topic creation message
     * @param payload {Object} - TopicCreatePayload payload object
     * @param id - message id
     * @returns {Message}
     */
    static createTopic(payload, id) {
        return new Message({
            id: id,
            type: MessageUtils.TOPIC_TYPE,
            action: MessageUtils.CREATE_ACTION,
            payload: new TopicCreatePayload(payload)
        });
    };

    /**
     * Creates topic list message
     * @param id - message id
     * @returns {Message}
     */
    static listTopics(id) {
        return new Message({
            id: id,
            type: MessageUtils.TOPIC_TYPE,
            action: MessageUtils.LIST_ACTION
        });
    };

    /**
     * Creates topic subscription message
     * @param payload {Object} - TopicSubscribePayload payload object
     * @param id - message id
     * @returns {Message}
     */
    static subscribeTopic(payload, id) {
        return new Message({
            id: id,
            type: MessageUtils.TOPIC_TYPE,
            action: MessageUtils.SUBSCRIBE_ACTION,
            payload: new TopicSubscribePayload(payload)
        });
    };

    /**
     * Creates topic unsubscription message
     * @param payload {Object} - TopicUnsubscribePayload payload object
     * @param id - message id
     * @returns {Message}
     */
    static unsubscribeTopic(payload, id) {
        return new Message({
            id: id,
            type: MessageUtils.TOPIC_TYPE,
            action: MessageUtils.UNSUBSCRIBE_ACTION,
            payload: new TopicUnsubscribePayload(payload)
        });
    };

    /**
     * Creates notification creation message
     * @param payload {Object} - NotificationCreatePayload payload object
     * @param id - message id
     * @returns {Message}
     */
    static createNotification(payload, id) {
        return new Message({
            id: id,
            type: MessageUtils.NOTIFICATION_TYPE,
            action: MessageUtils.CREATE_ACTION,
            payload: new NotificationCreatePayload(payload)
        });
    };

    /**
     * Creates plugin authentication message
     * @param payload {Object} - PluginAuthenticatePayload payload object
     * @param id - message id
     * @returns {Message}
     */
    static authenticatePlugin(payload, id) {
        return new Message({
            id: id,
            type: MessageUtils.PLUGIN_TYPE,
            action: MessageUtils.AUTHENTICATE_ACTION,
            payload: new PluginAuthenticatePayload(payload)
        });
    };

    /**
     * Creates health check message
     * @param id - message id
     * @returns {Message}
     */
    static health(id) {
        return new Message({
            id: id,
            type: MessageUtils.HEALTH_CHECK_TYPE,
        });
    };

}


module.exports = MessageBuilder;
