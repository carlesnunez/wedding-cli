const React = require("react");
const BigText = require('ink-big-text');
const PropTypes = require("prop-types");
const importJsx = require('import-jsx');
const { Text, Color, Box } = require("ink");
const Date = importJsx('./Date');
const Center = importJsx('./Center');


const Couples = () => {
    console.log("This tool was made just for fun, if you have suggestions contact me on tiwtter: @carlesnunez \n\r")
    return (
		<>
            <Center><BigText font={'chrome'}  text="Wedding info"/></Center>
            <Center><Text><Text bold>Couples info:</Text> Judith Gallardo & Carles Núñez</Text></Center>
            <Center><Text><Text bold>Place:</Text> Mas d'Osor - Viladrau, Osona</Text></Center>
            <Center><Text><Text bold>Date:</Text> 27/06/2020</Text></Center>
		</>
	);
};

module.exports = Couples;
