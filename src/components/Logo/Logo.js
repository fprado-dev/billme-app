import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LOGO_PATH from '~/assets/images/logo.png';
// Styles
import { WrapperLogo } from './styled';

class Logo extends Component {
  state = {};

  render() {
    return <WrapperLogo source={LOGO_PATH} />;
  }
}

Logo.defaultProps = {};

Logo.propTypes = {};

export default Logo;
