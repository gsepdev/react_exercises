import React from 'react';

import Toggle from "../../components/Toggle";
class FirstName extends React.Component {
  render() {

    return(
      <div>
      <h2>Do you want to know how to render a components'props?
      check it out (FirstName.js)</h2>
      <h1>Hi there, {this.props.firstName}</h1>;
      <Toggle />
      </div>
    );
  }
}
/* add index.js
ReactDOM.render(
  <Firstname firstName='Gaby' />,
  document.getElementById('app')
);*/

export default FirstName
