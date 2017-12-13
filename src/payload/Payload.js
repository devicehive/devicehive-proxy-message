
/**
 * DeviceHive proxy message base payload class
 */
class Payload {

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