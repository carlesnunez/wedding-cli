const React = require("react");
const {useState, useEffect} = require("react");
const PropTypes = require("prop-types");
const { Text, Color, Box } = require("ink");
const Divider = require('ink-divider');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const Center = importJsx('./Center');


const renderProgressBar = percentage => {
	return Array(percentage).fill(null).map((_, i) => <Box key={i}><Color hex={'#379392'} >█</Color></Box>)
}

const sentences = [
    'Comunicant enllaç als convidats',
    'Ramificant l’arbre genealògic',
    'Equilibrant corbata',
    'Habilitant llàgrimes i emocions',
    'Escollint el vestit de núvia',
    'Contractant fotògraf',
    'Tramitant documents per al casament',
    'Dissenyant invitacions per als convidats',
    'Ajustant hora i lloc de la cerimònia'
];

const sentencesES = [
    'Comunicando enlace a los invitados',
    'Ramificando árbol genealógico',
    'Equilibrando corbata',
    'Habilitando lágrimas y emociones',
    'Escogiendo el vestido de novia',
    'Contratando fotógrafo',
    'Tramitando documentos para la boda',
    'Diseñando invitaciones para los invitados',
    'Ajustando hora y lugar para la ceremonia'
];

const Couples = () => {
    const [percentage, setPercentage] = useState(0);
	const [loadingDots, setLoadingDots] = useState('      ');
    const [currentSentence, setCurrentSentence] = useState('Cargando')
	const percentageCompleted = 100

	useEffect(() => {
		if(percentage < percentageCompleted) {
			setTimeout(() => setPercentage(percentage + 1), 150)
		}
    })
    
    useEffect(() => {
        if(!(percentage % 5)) {
            const current = (loadingDots.match(/\./g) || []).length
            switch(current) {
                case 0:
                    setLoadingDots('.    ')
                break;
                case 1:
                    setLoadingDots('. .  ')
                break;
                case 2:
                    setLoadingDots('. . .')
                break;
                case 3:
                    setLoadingDots('     ')
                break;
            } 
        }
    }, [percentage])

    useEffect(() => {
        if(percentage === 0 || !(percentage % 12)) {
            setCurrentSentence(sentencesES.pop())
        }
    }, [percentage])
	return (
			<>
            <Center><BigText font={'chrome'}  text="Save the date"/></Center>
                <Center><Text bold><Divider title={`${currentSentence} ${loadingDots}`} /></Text></Center>
                <Box marginLeft={15}><Text>{renderProgressBar(percentage)}</Text></Box>
                <Box marginLeft={15}><Text>{renderProgressBar(percentage)}</Text></Box>
                <Center>
                    <Divider title={percentage === 100 ? `Judith \u221E Carles` : `${percentage}%`} />
                </Center>
        {percentage === 100 && 
        <Center>
            <BigText font={'block'} colors={['white', 'cyan']} text="27-06-2020"/>
        </Center>}

			</>
	);
};

module.exports = Couples;
