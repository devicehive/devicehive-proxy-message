const MessageUtils = require(`./MessageUtils`);
const PayloadBuilder = require(`./payload/PayloadBuilder`);


/**
 * DeviceHive proxy message class
 */
class Message {

    /**
     * Transforms raw DeviceHive message to JS object with full named fields
     * Internally transforms message payload via PayloadNormalizer
     * @param id - raw message id
     * @param t - raw message type
     * @param a - raw message action
     * @param p - raw message payload
     * @param s - raw message status
     * @returns {Message}
     */
    static normalize({ id, t, a, p, s } = {}) {
        return new Message({
            id: id,
            type: t,
            action: a,
            status: s,
            payload: p ? PayloadBuilder.normalize({
                type: t,
                action: a || MessageUtils.NO_ACTION,
                status: s,
                payload: p
            }) : p
        });
    }

    /**
     * Creates new DeviceHive proxy message object
     * @param id - message id
     * @param type - message type
     * @param action - message action
     * @param payload - message payload
     * @param status - message status
     */
    constructor({ id, type, action, payload, status } = {}) {
        const me = this;

        me.id = id;
        me.type = type;
        me.action = action;
        me.status = status;
        me.payload = payload ? (payload.isNormalized ? payload : PayloadBuilder.build({
            type: type,
            action: action || MessageUtils.NO_ACTION,
            status: status,
            payload: payload
        })) : payload;
    }

    get id() {
        const me = this;

        return me._id;
    }

    set id(value) {
        const me = this;

        me._id = value;
    }

    get type() {
        const me = this;

        return me._type;
    }

    set type(value) {
        const me = this;

        me._type = value;
    }

    get action() {
        const me = this;

        return me._action;
    }

    set action(value) {
        const me = this;

        me._action = value;
    }

    get payload() {
        const me = this;

        return me._payload;
    }

    set payload(value) {
        const me = this;

        me._payload = value;
    }

    get status() {
        const me = this;

        return me._status;
    }

    set status(value) {
        const me = this;

        me._status = value;
    }

    /**
     * Transforms full named DeviceHive proxy message to raw proxy message
     * @returns {{id: *, t: *, a: *, s: *, p: *}}
     */
    toObject() {
        const me = this;
        const payload = me.payload ? me.payload.toObject() : me.payload;

        return {
            id: me.id,
            t: me.type,
            a: me.action,
            s: me.status,
            p: payload
        }
    }

    /**
     * Returns raw proxy message as string
     * @returns {string}
     */
    toString() {
        const me = this;

        return JSON.stringify(me.toObject());
    }
}


module.exports = Message;