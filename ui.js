'use strict';
const React = require('react');
const PropTypes = require('prop-types');
const chalk = require('chalk');
const importJsx = require('import-jsx');
const {Box, Text, Color} = require('ink');
const Couples = importJsx('./components/Couples');
const Date = importJsx('./components/Date');
const SaveTheDate = importJsx('./components/SaveTheDate');


const App = ({command}) => {
	switch(command) {
		case 'about':
			return <Couples />
		case 'timeleft':
			return <Date />
		case 'save-the-date':
			return <SaveTheDate />
	}

	return <Couples />
} 



App.propTypes = {
	name: PropTypes.string
};

App.defaultProps = {
	name: 'Stranger'
};

module.exports = App;
