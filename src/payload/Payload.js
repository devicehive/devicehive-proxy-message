
/**
 * DeviceHive proxy message base payload class
 */
class Payload {

    /**
     * Normalized payload check flag
     * @returns {boolean}
     */
    get isNormalized() {
        return true;
    }

    /**
     * Returns raw proxy message payload as string
     * @returns {string}
     */
    toString() {
        const me = this;

        return JSON.stringify(me.toObject());
    }
}


module.exports = Payload;