const React = require('react');

class Keypad extends React.Component {

  constructor(props) {
    super();
    this.printPass = this.printPass.bind(this)
  }


  printPass() {
    console.log("Entering password...")
  }

  render() {
    return(
      <input onKeyUp={this.printPass} type="password"/>
    )
  }


}


module.exports = Keypad;
