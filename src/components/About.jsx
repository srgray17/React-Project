import React from 'react';
import Header from './shared/Header'

const About = () => {
  return (
    <>
    <Header title="About"/>
    <div className="container mt-4">
      <h3>What does this application do?</h3>
      <p>
      This application uses two interactive components.  
      It allows the user to sort and filter tv show data from a local JSON file.
      </p>
    </div>
    
    </> 
  );
}
 
export default About;