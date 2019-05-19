import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Styles
import { Container } from './styled';

class Translate extends Component {
  static childContextTypes = {
    localText: PropTypes.instanceOf(Object).isRequired,
  };

  getChildContext = () => {
    const { localText } = this.props;
    return { localText };
  };

  render() {
    const { children } = this.props;
    return <Container>{children}</Container>;
  }
}

Translate.propTypes = {
  localText: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired,
};

Translate.childContextTypes = {
  localText: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  localText: state.localeState.localText,
});

export default connect(mapStateToProps)(Translate);
