import React from 'react';

const STATUS = {
  CLICKED: 'hovered',
  NORMAL: 'normal',
};

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), class: STATUS.NORMAL};

    this._onClick = this._onClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _onClick() {
   this.setState({class: STATUS.CLICKED});
 }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div onClick={this._onClick} className={this.state.class}>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>{this.props.info}</p>
      </div>
    );
  }
}
