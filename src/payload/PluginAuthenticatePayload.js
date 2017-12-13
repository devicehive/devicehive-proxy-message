const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message plugin authenticate payload class
 */
class PluginAuthenticatePayload extends Payload {

    /**
     * Transforms raw DeviceHive message plugin authenticate payload to JS object with full named fields
     * @param token - plugin access token
     * @returns {PluginAuthenticatePayload}
     */
    static normalize({ token } = {}) {
        return new PluginAuthenticatePayload({
            token: token
        });
    }

    /**
     * Creates new DeviceHive proxy message plugin authenticate payload object
     * @param token - plugin access token
     */
    constructor({ token } = {}) {
        super();

        const me = this;

        me.token = token;
    }

    get token() {
        const me = this;

        return me._token;
    }

    set token(value) {
        const me = this;

        me._token = value;
    }

    /**
     * Transforms full named DeviceHive proxy message plugin authenticate payload to raw proxy message
     * @returns {{token: *}}
     */
    toObject() {
        const me = this;

        return {
            token: me.token
        }
    }
}


module.exports = PluginAuthenticatePayload;