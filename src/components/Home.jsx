import React from 'react';
import Header from './shared/Header'

const Home = () => {
  return (
    <>
    <Header title="Home"/>
    <div className="container mt-3">
       <h3>Welcome </h3>
       <p>This application is a for an assignmment using React components.</p>
       <p>For more information about this application please visit the About page.</p>
    </div>
    </>
  );
}
 
export default Home;