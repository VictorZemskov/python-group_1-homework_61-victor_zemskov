import React, {Component} from 'react';
import Content from '../../components/Content/Content';

class Home extends Component {
  state = {text: 'Home', button_1: 'About us', button_2: 'Contacts'};

  switchToAboutUs = () => {
    this.props.history.push({
      pathname: '/about_us'
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
      switchToButton_1={this.switchToAboutUs}
      switchToButton_2={this.switchToContacts}
    />;
  }
}

export default Home;