const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message topic subscribe payload class
 */
class TopicSubscribePayload extends Payload {

    /**
     * Transforms raw DeviceHive message topic subscribe payload to JS object with full named fields
     * @param sg - subscription group
     * @param t - topics list
     * @returns {TopicSubscribePayload}
     */
    static normalize({ sg, t } = {}) {
        return new TopicSubscribePayload({
            subscriptionGroup: sg,
            topicList: t
        });
    }

    /**
     * Creates new DeviceHive proxy message topic subscribe payload object
     * @param subscriptionGroup - subscription group
     * @param topicList - topics list
     */
    constructor({ subscriptionGroup, topicList } = {}) {
        super();

        const me = this;

        me.subscriptionGroup = subscriptionGroup;
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

    get subscriptionGroup() {
        const me = this;

        return me._subscriptionGroup;
    }

    set subscriptionGroup(value) {
        const me = this;

        me._subscriptionGroup = value;
    }

    /**
     * Transforms full named DeviceHive proxy message topic subscribe payload to raw proxy message
     * @returns {{sg: *, t: *}}
     */
    toObject() {
        const me = this;

        return {
            sg: me.subscriptionGroup,
            t: me.topicList
        }
    }
}


module.exports = TopicSubscribePayload;