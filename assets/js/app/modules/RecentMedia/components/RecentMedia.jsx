var React = require('react/addons');

var RecentStore = require('../../../stores/RecentStore');
var StoreWatchMixin = require('../../../mixins/StoreWatchMixin');

var Paginator = require('../../../components/Paginator');

/**
 * Displays recent media.
 */

var RecentMedia = React.createClass({

    propTypes: {
        type: React.PropTypes.string.isRequired,
        renderItem: React.PropTypes.func.isRequired
    },

    mixins: [StoreWatchMixin(RecentStore)],

    getStateFromStore: function() {
        return {
            media: RecentStore.getRecent(this.props.type)
        };
    },

    render: function() {
        var type = this.props.type;
        var renderItem = this.props.renderItem;

        return (
            <div className="module module-recent">
                <h2 className="module--title">Recent {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                <div className="module-recent--list">
                    <Paginator items={this.state.media} renderItem={renderItem} />
                </div>
            </div>
        );
    }
});

module.exports = RecentMedia;
