
import React from 'react';
/* use "this" in a component*/

class UseThis extends React.Component {
	// name property goes here:
get name (){
    return 'Gse';


}

  render() {
    const style= {
              color: 'red'
            }
    return <h2>My name is: <h3  style={style}>{this.name}.</h3>  </h2>;

  }
}
export default UseThis
