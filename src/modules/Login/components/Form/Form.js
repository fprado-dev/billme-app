import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Input, Button } from '~/components';

// Styles
import { Container, LinkText } from './styled';

class Form extends Component {
  state = {
    pass: '',
    user: '',
  };

  handleChangeUser = (user) => {
    this.setState({
      user,
    });
  };

  handleChangePass = (pass) => {
    this.setState({
      pass,
    });
  };

  handleOnSubmit = () => {
    const { onSubmit } = this.props;
    const { pass, user } = this.state;
    onSubmit(pass, user);
    this.setState({
      pass: '',
      user: '',
    });
  };

  render() {
    const { pass, user } = this.state;
    return (
      <Container>
        <Input
          placeholder="Usuário:"
          icon="user"
          name="user"
          onChange={this.handleChangeUser}
          hasError
          value={user}
        />
        <Input
          placeholder="Senha:"
          icon="pass"
          name="password"
          onChange={this.handleChangePass}
          hasError
          value={pass}
        />

        <LinkText textDecorationLine="underline">ESQUECI MINHA SENHA</LinkText>
        <Button onPress={this.handleOnSubmit} mb>
          ACESSAR
        </Button>
        <LinkText center>CADASTRAR</LinkText>
      </Container>
    );
  }
}

Form.defaultProps = {};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
