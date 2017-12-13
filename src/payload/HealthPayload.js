const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message health payload class
 */
class HealthPayload extends Payload {

    /**
     * Transforms raw DeviceHive message health payload to JS object with full named fields
     * @param prx - proxy status
     * @param mb - message buffer status
     * @param mbfp - message buffer fill percentage
     * @param comm - internal message broker status
     * @returns {HealthPayload}
     */
    static normalize({ prx, mb, mbfp, comm } = {}) {
        return new HealthPayload({
            proxy: prx,
            messageBuffer: mb,
            messageBufferFillPercentage: mbfp,
            communicator: comm
        });
    }

    /**
     * Creates new DeviceHive proxy message health payload object
     * @param proxy - proxy status
     * @param messageBuffer - message buffer status
     * @param messageBufferFillPercentage - message buffer fill percentage
     * @param communicator - internal message broker status
     */
    constructor({ proxy, messageBuffer, messageBufferFillPercentage, communicator } = {}) {
        super();

        const me = this;

        me.proxy = proxy;
        me.messageBuffer = messageBuffer;
        me.messageBufferFillPercentage = messageBufferFillPercentage;
        me.communicator = communicator;
    }

    get proxy() {
        const me = this;

        return me._proxy;
    }

    set proxy(value) {
        const me = this;

        me._proxy = value;
    }

    get messageBuffer() {
        const me = this;

        return me._messageBuffer;
    }

    set messageBuffer(value) {
        const me = this;

        me._messageBuffer = value;
    }

    get messageBufferFillPercentage() {
        const me = this;

        return me._messageBufferFillPercentage;
    }

    set messageBufferFillPercentage(value) {
        const me = this;

        me._messageBufferFillPercentage = value;
    }

    get communicator() {
        const me = this;

        return me._communicator;
    }

    set communicator(value) {
        const me = this;

        me._communicator = value;
    }

    /**
     * Transforms full named DeviceHive proxy message health payload to raw proxy message
     * @returns {{prx: *, mb: *, mbfp: *, comm: *}}
     */
    toObject() {
        const me = this;

        return {
            prx: me.proxy,
            mb: me.messageBuffer,
            mbfp: me.messageBufferFillPercentage,
            comm: me.communicator
        }
    }
}


module.exports = HealthPayload;