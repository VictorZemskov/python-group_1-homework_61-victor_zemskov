import React, {Component} from 'react';
import Content from '../../components/Content/Content';

class AboutUs extends Component {
  state = {text: 'About us', button_1: 'Home', button_2: 'Contacts'};

  switchToHome = () => {
    this.props.history.push({
      pathname: '/'
    });
  };
  switchToContacts = () => {
    this.props.history.push({
      pathname: '/contacts'
    });
  };

  render() {
    return <Content
      text={this.state.text}
      button_1={this.state.button_1}
      button_2={this.state.button_2}
      switchToButton_1={this.switchToHome}
      switchToButton_2={this.switchToContacts}
    />;
  }
}

export default AboutUs;