import React, {Component} from 'react';
import './Content.css';
import Button from "../UI/Button/Button";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h1>{this.props.text}</h1>
        <h3>{this.props.text}</h3>
        <p>{this.props.text}</p>
        <Button btnType="Danger" click={this.props.switchToButton_1}>{this.props.button_1}</Button>
        <Button btnType="Success" click={this.props.switchToButton_2}>{this.props.button_2}</Button>
      </div>
    );
  }
}
export default Content;