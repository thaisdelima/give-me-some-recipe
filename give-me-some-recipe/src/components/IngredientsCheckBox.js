import React, { Component } from "react";

import { Box, Container, Checkbox, Divider } from "@chakra-ui/react";

export default class IngredientsCheckBox extends Component {
  render() {
    return (
      <Container>
        <Box minW={440} p={4} bg="tomato">
          <Checkbox>{this.props.name}</Checkbox>
          <Divider />
        </Box>
      </Container>
    );
  }
}
