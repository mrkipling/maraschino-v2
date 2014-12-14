/** @jsx React.DOM */

/**
 * The container that renders the columns and modules.
 */

Maraschino.Container.Base = React.createClass({
    getInitialState: function() {
        var columns = Maraschino.Tools.getSetting('columns', 'json');
        var num_columns = Math.min(columns.length, Maraschino.Tools.getSetting('num_columns', 'int'));
        columns = columns.slice(0, num_columns);

        return {
            columns: columns
        };
    },

    componentDidMount: function() {
        // set the number of columns in the grid, for the benefit of the CSS
        $('#container').addClass('columns-' + this.state.columns.length);
    },

    render: function() {
        var columns = this.state.columns.map(function(column, index) {
            return (
                <Maraschino.Container.Column key={'column-' + index} module_names={column} />
            );
        });

        return (
            <div className="row">
                {columns}
            </div>
        );
    }
});

Maraschino.Container.Column = React.createClass({
    render: function() {
        var modules = this.props.module_names.length === 0 ? (
            <span>&nbsp;</span>
        ) : this.props.module_names.map(function(module_name) {
            return (
                <Maraschino.Container.Module key={'module-' + module_name} name={module_name} />
            );
        });

        return (
            <div className="column">
                {modules}
            </div>
        );
    }
});

Maraschino.Container.Module = React.createClass({
    getInitialState: function () {
        var url = '/module/' + this.props.name + '/';
        return {};
    },

    render: function() {
        var module = this.props.name;
        return (
            <div className="module">
                <p>Module: {module}</p>
            </div>
        );
    }
});
