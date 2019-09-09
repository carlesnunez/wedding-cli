const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color, Box } = require("ink");

const Couples = () => {
    console.log("This tool was made just for fun, if you have suggestions contact me on tiwtter: @carlesnunez \n\r")
	return (
		<Text>
            <Text bold>Couples info: </Text>
			<Color magentaBright>Judith Gallardo</Color>{" & "}
			<Color greenBright>Carles Núñez</Color>
            {"\n\r"}
            <Text bold>Place:</Text> Mas d'Osor - Viladrau, Osona
		</Text>
	);
};

module.exports = Couples;
