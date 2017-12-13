const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message token payload class
 */
class TokenPayload extends Payload {

    static get REFRESH_TOKEN_TYPE() { return 0; }
    static get ACCESS_TOKEN_TYPE() { return 1; }

    /**
     * Transforms raw DeviceHive message token payload to JS object with full named fields
     * @param e - token expiration date
     * @param t - token type
     * @param tpc - plugin topic
     * @returns {TokenPayload}
     */
    static normalize({ e, t, tpc } = {}) {
        return new TokenPayload({
            expirationDate: e,
            type: t,
            topic: tpc
        });
    }

    /**
     * Creates new DeviceHive proxy message token payload payload object
     * @param expirationDate - token expiration date
     * @param type - token type
     * @param topic - plugin topic
     */
    constructor({ expirationDate, type, topic } = {}) {
        super();

        const me = this;

        me.expirationDate = expirationDate;
        me.type = type;
        me.topic = topic;
    }

    get topic() {
        const me = this;

        return me._topic;
    }

    set topic(value) {
        const me = this;

        me._topic = value;
    }

    get expirationDate() {
        const me = this;

        return me._expirationDate;
    }

    set expirationDate(value) {
        const me = this;

        me._expirationDate = value;
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
     * Transforms full named DeviceHive proxy message token payload to raw proxy message
     * @returns {{e: *, t: *, tpc: *}}
     */
    toObject() {
        const me = this;

        return {
            e: me.expirationDate,
            t: me.type,
            tpc: me.topic
        }
    }
}


module.exports = TokenPayload;