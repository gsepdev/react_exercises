/* listener in a component*/


import React from 'react';


class Button extends React.Component {
  scream() {
    alert('ahhhhhhhhhhhhhhhhh!');
  }

  render() {
    return <button  class="btn btn-secondary" onClick={this.scream}>Help</button>;
  }
}
export default Button
