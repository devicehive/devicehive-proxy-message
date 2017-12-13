const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message notification payload class
 */
class NotificationPayload extends Payload {

    /**
     * Transforms raw DeviceHive message notification payload to JS object with full named fields
     * @param m - notification message
     * @returns {NotificationPayload}
     */
    static normalize({ m } = {}) {
        return new NotificationPayload({
            message: m
        });
    }

    /**
     * Creates new DeviceHive proxy message notification payload object
     * @param message - notification message
     */
    constructor({ message } = {}) {
        super();

        const me = this;

        me.message = message;
    }

    get message() {
        const me = this;

        return me._message;
    }

    set message(value) {
        const me = this;

        me._message = value;
    }

    /**
     * Transforms full named DeviceHive proxy message notification payload to raw proxy message
     * @returns {{m: *}}
     */
    toObject() {
        const me = this;

        return {
            m: me.message
        }
    }
}


module.exports = NotificationPayload;