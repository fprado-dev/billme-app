import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { Drawing } from './styled';

class Draw extends Component {
  state = {};

  render() {
    const { url } = this.props;
    return <Drawing source={url} />;
  }
}

Draw.propTypes = {
  url: PropTypes.number.isRequired,
};

export default Draw;
