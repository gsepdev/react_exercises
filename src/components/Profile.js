
import React from 'react';
import selfie from '../images/selfie.jpg';

class Profile extends React.Component {
  render() {
    return (
      <div>

        <h1>All About Me!</h1>
        <p>I like cats and more cats</p>
        <img src={selfie}/>
      </div>
    );
  }
}
export default Profile
