import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Styles
import { Container, UiText } from './styled';

class App extends Component {
  static contextTypes = {
    localText: PropTypes.instanceOf(Object).isRequired,
  };

  state = {};

  render() {
    const { localText } = this.context;
    return (
      <Container>
        <UiText>{localText.intro.welcome}</UiText>
      </Container>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
