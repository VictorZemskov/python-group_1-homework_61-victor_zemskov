import React, {Component} from 'react';
import Content from '../../components/Content/Content';

class Contacts extends Component {
  state = {text: 'Contacts', button_1: 'Home', button_2: 'About us'};

  switchToHome = () => {
    this.props.history.push({
      pathname: '/'
    });
  };
  switchToAboutUs = () => {
    this.props.history.push({
      pathname: '/about_us'
    });
  };

  render() {
    return <Content
      text={this.state.text}
      button_1={this.state.button_1}
      button_2={this.state.button_2}
      switchToButton_1={this.switchToHome}
      switchToButton_2={this.switchToAboutUs}
    />;
  }
}

export default Contacts;