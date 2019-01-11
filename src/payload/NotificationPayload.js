const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message notification payload class
 */
class NotificationPayload extends Payload {

    /**
     * Transforms raw DeviceHive message notification payload to JS object with full named fields
     * @param m - notification message
     * @param type - notification type
     * @returns {NotificationPayload}
     */
    static normalize({ m, type } = {}) {
        return new NotificationPayload({
            message: m,
            type: type
        });
    }

    /**
     * Creates new DeviceHive proxy message notification payload object
     * @param message - notification message
     * @param type - notification type
     */
    constructor({ message, type } = {}) {
        super();

        const me = this;

        me.message = message;
        me.type = type;
    }

    get message() {
        const me = this;

        return me._message;
    }

    set message(value) {
        const me = this;

        me._message = value;
    }

    get type() {
        const me = this;

        return me._type;
    }

    set type(value) {
        const me = this;

        me._type = value;
    }

    /**
     * Transforms full named DeviceHive proxy message notification payload to raw proxy message
     * @returns {{m: *}}
     */
    toObject() {
        const me = this;

        return {
            m: me.message,
            type: me.type
        }
    }
}


module.exports = NotificationPayload;
