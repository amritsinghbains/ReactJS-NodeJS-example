﻿var React = require('react');
var DefaultLayout = require('./layout/master');

var IndexComponent = React.createClass({
	render: function() {
		return (
			<DefaultLayout name={this.props.name}>
				<div>
					<h1>built with react</h1>
				</div>
			</DefaultLayout>
		)
	}
});

module.exports = IndexComponent;