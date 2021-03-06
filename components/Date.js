const React = require("react");
const {useState, useEffect} = require("react");
const PropTypes = require("prop-types");
const { Text, Color, Box } = require("ink");
const importJsx = require('import-jsx');
const BigText = require('ink-big-text');
const Center = importJsx('./Center');
const Divider = require('ink-divider');

const renderProgressBar = percentage => {
	return Array(percentage).fill(null).map((_, i) => <Box key={i}><Color green >█</Color></Box>)
}
const Couples = () => {
	const [percentage, setPercentage] = useState(0)
	const currentDay = new Date().getTime();
	const weddingDay = new Date('2020-06-27').getTime()
	const engageDay = new Date('2019-08-12').getTime()
	const remainingDays = Math.round((weddingDay - currentDay) / (1000 * 3600 * 24));
	const daysSinceEngage = Math.round((currentDay-engageDay) / (1000 * 3600 * 24));
	const totalDays = Math.round((weddingDay - engageDay) / (1000 * 3600 * 24));
	const percentageCompleted = Math.floor(((totalDays - remainingDays) * 60) / 320)
	const maxNumOfBlocks = 60
	useEffect(() => {
		if(percentage < percentageCompleted) {
			setTimeout(() => setPercentage(percentage + 1), 100)
		}
	})
	return (
		<>
            <Center><BigText font={'chrome'}  text="Timeleft to #judles wedding"/></Center>
			<Box marginLeft={15}>{renderProgressBar(percentage)}</Box>
			<Box marginLeft={15}>{renderProgressBar(percentage)}</Box>
			<Center><Divider title={`${percentage}% - Day: ${daysSinceEngage}/${remainingDays}`} /></Center>
		</>
	);
};

module.exports = Couples;
