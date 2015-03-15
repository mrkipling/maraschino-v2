var React = require('react');

var AppStore = require('./stores/AppStore');
var AppActionCreators = require('./actions/AppActionCreators');

var App = React.createClass({

    getStateFromStore: function() {
        return AppStore.getSettings();
    },

    onChange: function() {
        this.setState(this.getStateFromStore());
    },

    getInitialState: function() {
        return this.getStateFromStore();
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this.onChange);
    },

    render: function() {
        return (
            <div>
            </div>
        );
    }

});

React.render(<App />, document.getElementById('app'));
