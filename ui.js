'use strict';
const React = require('react');
const PropTypes = require('prop-types');
const chalk = require('chalk');
const importJsx = require('import-jsx');
const {Box, Text, Color} = require('ink');
const Couples = importJsx('./components/Couples');
const Date = importJsx('./components/Date');


const App = ({command}) => {
	console.log(chalk.green("\r\n __     __     ______     ______     _____     __     __   __     ______        ______     __         __    \r\n\/\\ \\  _ \\ \\   \/\\  ___\\   \/\\  ___\\   \/\\  __-.  \/\\ \\   \/\\ \"-.\\ \\   \/\\  ___\\      \/\\  ___\\   \/\\ \\       \/\\ \\   \r\n\\ \\ \\\/ \".\\ \\  \\ \\  __\\   \\ \\  __\\   \\ \\ \\\/\\ \\ \\ \\ \\  \\ \\ \\-.  \\  \\ \\ \\__ \\     \\ \\ \\____  \\ \\ \\____  \\ \\ \\  \r\n \\ \\__\/\".~\\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\____-  \\ \\_\\  \\ \\_\\\\\"\\_\\  \\ \\_____\\     \\ \\_____\\  \\ \\_____\\  \\ \\_\\ \r\n  \\\/_\/   \\\/_\/   \\\/_____\/   \\\/_____\/   \\\/____\/   \\\/_\/   \\\/_\/ \\\/_\/   \\\/_____\/      \\\/_____\/   \\\/_____\/   \\\/_\/ \r\n                                                                                                            \r\n                                                                            Judith \u221E Carles marriage tool \r\n\r\n\r\n\r\n"))
	switch(command) {
		case 'about':
			return <Couples />
		case 'date':
			return <Date />
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
