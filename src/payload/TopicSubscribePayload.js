const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message topic subscribe payload class
 */
class TopicSubscribePayload extends Payload {

    /**
     * Transforms raw DeviceHive message topic subscribe payload to JS object with full named fields
     * @param t - topics list
     * @returns {TopicSubscribePayload}
     */
    static normalize({ t } = {}) {
        return new TopicSubscribePayload({
            topicList: t
        });
    }

    /**
     * Creates new DeviceHive proxy message topic subscribe payload object
     * @param topicList - topics list
     */
    constructor({ topicList } = {}) {
        super();

        const me = this;

        me.topicList = topicList;
    }

    get topicList() {
        const me = this;

        return me._topicList;
    }

    set topicList(value) {
        const me = this;

        me._topicList = value;
    }

    /**
     * Transforms full named DeviceHive proxy message topic subscribe payload to raw proxy message
     * @returns {{t: *}}
     */
    toObject() {
        const me = this;

        return {
            t: me.topicList
        }
    }
}


module.exports = TopicSubscribePayload;