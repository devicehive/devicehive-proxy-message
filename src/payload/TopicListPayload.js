const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message topic list payload class
 */
class TopicListPayload extends Payload {

    /**
     * Transforms raw DeviceHive message topic list payload to JS object with full named fields
     * @param t - topics list
     * @returns {TopicListPayload}
     */
    static normalize({ t } = {}) {
        return new TopicListPayload({
            topicList: t
        });
    }

    /**
     * Creates new DeviceHive proxy message topic list payload object
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
     * Transforms full named DeviceHive proxy message topic list payload to raw proxy message
     * @returns {{t: *}}
     */
    toObject() {
        const me = this;

        return {
            t: me.topicList
        }
    }
}


module.exports = TopicListPayload;