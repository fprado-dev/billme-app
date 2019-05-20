import React, { Component } from 'react';
import {
} from 'react-native';
import PropTypes from 'prop-types';

// Icons Path
import USER_ICON from '~/assets/images/icons/user.png';
import PASS_ICON from '~/assets/images/icons/lock.png';
import EMAIL_ICON from '~/assets/images/icons/mail.png';
import CALENDAR_ICON from '~/assets/images/icons/calendar.png';
// import BILL_ICON from '~/assets/images/icons/clipboard.png';
// import MONEY_ICON from '~/assets/images/icons/dollar-sign.png';

// Styles
import {
  Icon,
  MainInput,
  ErrorMessage,
  Container,
} from './styled';


class Input extends Component {
  handleIcon = (icon) => {
    let iconRender;
    switch (icon) {
      case 'user':
        iconRender = <Icon source={USER_ICON} />;
        break;
      case 'pass':
        iconRender = <Icon source={PASS_ICON} />;
        break;
      case 'email':
        iconRender = <Icon source={EMAIL_ICON} />;
        break;
      case 'calendar':
        iconRender = <Icon source={CALENDAR_ICON} />;
        break;
      default:
        break;
    }
    return iconRender;
  }


  render() {
    const {
      onChange, name, placeholder, icon, hasError, errorMessage, value,
    } = this.props;
    return (
      <Container>
        {icon && this.handleIcon(icon)}
        <MainInput
          autoCapitalize="none"
          secureTextEntry={icon === 'pass'}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          name={name}
        />
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    );
  }
}

Input.defaultProps = {};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Input;
