const Payload = require(`./Payload`);


/**
 * DeviceHive proxy message topic unsubscribe payload class
 */
class TopicUnsubscribePayload extends Payload {

    /**
     * Transforms raw DeviceHive message topic unsubscribe payload to JS object with full named fields
     * @param sg - subscription group
     * @param t - topics list
     * @returns {TopicUnsubscribePayload}
     */
    static normalize({ sg, t } = {}) {
        return new TopicUnsubscribePayload({
            subscriptionGroup: sg,
            topicList: t
        });
    }

    /**
     * Creates new DeviceHive proxy message topic unsubscribe payload object
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
     * Transforms full named DeviceHive proxy message topic unsubscribe payload to raw proxy message
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


module.exports = TopicUnsubscribePayload;