import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Images
import LOGIN_DRAW from '~/assets/images/draws/draw-login.png';

// Styles
import { Container, SmallText } from './styled';
import { Logo, Draw } from '~/components';

// Self components
import { Form } from '../components';

class Login extends Component {
  state = {};

  handleSubmit = (pass, user) => {
    console.tron.log(pass, user);
  };

  render() {
    return (
      <Container>
        <Logo />
        <Draw url={LOGIN_DRAW} />
        <SmallText>Jeito mais fácil de controlar suas contas</SmallText>
        <Form onSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

Login.defaultProps = {};

Login.propTypes = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Login);
