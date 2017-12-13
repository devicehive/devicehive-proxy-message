const Message = require(`./Message`);
const MessageUtils = require(`./MessageUtils`);


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
            payload: payload
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
            payload: payload
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
            payload: payload
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
            payload: payload
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
            payload: payload
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
