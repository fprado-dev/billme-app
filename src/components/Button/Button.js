import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { ButtonContainer, TextButton } from './styled';

class Button extends Component {
  state = {};

  render() {
    const { children, mb, onPress } = this.props;
    return (
      <ButtonContainer mb={mb} onPress={onPress}>
        <TextButton>{children}</TextButton>
      </ButtonContainer>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  mb: PropTypes.bool,
};

export default Button;
