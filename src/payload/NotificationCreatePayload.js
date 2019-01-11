const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message notification create payload class
 */
class NotificationCreatePayload extends Payload {

    /**
     * Transforms raw DeviceHive message notification create payload to JS object with full named fields
     * @param t - notification topic
     * @param m - notification message
     * @param part - notification partition
     * @param type - notification type
     * @returns {NotificationCreatePayload}
     */
    static normalize({ t, m, part, type } = {}) {
        return new NotificationCreatePayload({
            topic: t,
            message: m,
            partition: part,
            type: type
        });
    }

    /**
     * Creates new DeviceHive proxy message notification create payload object
     * @param topic - notification topic
     * @param message - notification message
     * @param partition - notification partition
     * @param type - notification type
     */
    constructor({ topic, message, partition, type } = {}) {
        super();

        const me = this;

        me.topic = topic;
        me.message = message;
        me.partition = partition;
        me.type = type;
    }

    get topic() {
        const me = this;

        return me._topic;
    }

    set topic(value) {
        const me = this;

        me._topic = value;
    }

    get message() {
        const me = this;

        return me._message;
    }

    set message(value) {
        const me = this;

        me._message = value;
    }

    get partition() {
        const me = this;

        return me._partition;
    }

    set partition(value) {
        const me = this;

        me._partition = value;
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
     * Transforms full named DeviceHive proxy message notification create payload to raw proxy message
     * @returns {{t: *, m: *, part: *}}
     */
    toObject() {
        const me = this;

        return {
            t: me.topic,
            m: me.message,
            part: me.partition,
            type: me.type
        }
    }
}


module.exports = NotificationCreatePayload;
