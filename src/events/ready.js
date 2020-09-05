const BaseEvent = require('../Structures/BaseEvent');

module.exports = class extends BaseEvent {
    constructor(...args) {
        super(...args, {
            once: true
        })
    }

    run() {
        console.log(`Logged in as ${this.client.user.tag}`)
        this.client.user.setActivity('with GitHub');
    }
}