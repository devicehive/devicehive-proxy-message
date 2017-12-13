const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message error payload class
 */
class ErrorPayload extends Payload {

    /**
     * Transforms raw DeviceHive message error payload to JS object with full named fields
     * @param m - error message
     * @param c - error code
     * @returns {ErrorPayload}
     */
    static normalize({ m, c } = {}) {
        return new ErrorPayload({
            message: m,
            code: c
        });
    }

    /**
     * Creates new DeviceHive proxy message error payload object
     * @param message - error message
     * @param code - error code
     */
    constructor({ message, code } = {}) {
        super();

        const me = this;

        me.message = message;
        me.code = code;
    }

    get message() {
        const me = this;

        return me._message;
    }

    set message(value) {
        const me = this;

        me._message = value;
    }

    get code() {
        const me = this;

        return me._code;
    }

    set code(value) {
        const me = this;

        me._code = value;
    }

    /**
     * Transforms full named DeviceHive proxy message error payload to raw proxy message
     * @returns {{m: *, c: *}}
     */
    toObject() {
        const me = this;

        return {
            m: me.message,
            c: me.code
        }
    }
}


module.exports = ErrorPayload;