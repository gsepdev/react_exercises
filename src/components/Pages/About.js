

import React, { useState } from 'react';
 import Count from "../../components/Count";

/* 3 ways to create components: const, function, class
/*  this component can be created also  as a function*/
/* then in app.js  when you import you should write this way :
import About  from "./components/Pages/About"; */
/*function About(){
  return(
    <div>
      <h1>About</h1>
    </div>
  )
}
export default About*/
/**********const*******************/



 function About() {
  const [color, setColor] = useState();/* return 2 values  current state, statesetter */

 const divStyle = {backgroundColor: color};

  return (
    <div className="container">
    <h2>Update Function Component State</h2>
    <div style={divStyle}>

      <p>The color is: {color}</p>
      <button onClick={() => setColor('purple')}>
        Purple
      </button>
      <button onClick={() => setColor('Aquamarine')}>
    Aquamarine
      </button>
      <button onClick={() => setColor('red')}>
        red
      </button>
      <button onClick={() => setColor('Chartreuse')}>
      Chartreuse
      </button>
    </div>
    < Count />
      </div>
  );
}
export default About
