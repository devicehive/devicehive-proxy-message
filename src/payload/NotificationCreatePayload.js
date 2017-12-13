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
     * @returns {NotificationCreatePayload}
     */
    static normalize({ t, m, part } = {}) {
        return new NotificationCreatePayload({
            topic: t,
            message: m,
            partition: part
        });
    }

    /**
     * Creates new DeviceHive proxy message notification create payload object
     * @param topic - notification topic
     * @param message - notification message
     * @param partition - notification partition
     */
    constructor({ topic, message, partition } = {}) {
        super();

        const me = this;

        me.topic = topic;
        me.message = message;
        me.partition = partition;
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

    /**
     * Transforms full named DeviceHive proxy message notification create payload to raw proxy message
     * @returns {{t: *, m: *, part: *}}
     */
    toObject() {
        const me = this;

        return {
            t: me.topic,
            m: me.message,
            part: me.partition
        }
    }
}


module.exports = NotificationCreatePayload;