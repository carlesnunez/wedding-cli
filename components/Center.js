const React = require("react");
const { Text, Color, Box } = require("ink");

const Center = ({children, ...props}) => <Box justifyContent="center" {...props}><Box>{children}</Box></Box>

module.exports = Center;
