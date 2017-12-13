
/**
 * DeviceHive proxy Message utility class
 */
class MessageUtils {

    static get TOPIC_TYPE() { return `topic`; }
    static get NOTIFICATION_TYPE() { return `notif`; }
    static get HEALTH_CHECK_TYPE() { return `health`; }
    static get PLUGIN_TYPE() { return `plugin`; }
    static get ACK_TYPE() { return `ack`; }

    static get NO_ACTION() { return undefined; }
    static get CREATE_ACTION() { return `create`; }
    static get LIST_ACTION() { return `list`; }
    static get SUBSCRIBE_ACTION() { return `subscribe`; }
    static get UNSUBSCRIBE_ACTION() { return `unsubscribe`; }
    static get AUTHENTICATE_ACTION() { return `authenticate`; }

    static get SUCCESS_STATUS() { return 0; }
    static get FAILED_STATUS() { return 1; }

    static get REQUEST() { return `request`; }
    static get RESPONSE() { return `response`; }
}


module.exports = MessageUtils;