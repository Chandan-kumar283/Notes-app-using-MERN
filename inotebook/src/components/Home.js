import React, { useContext, useEffect } from 'react';
import UserContext from '../userContext';
import Notes from './Notes';
import logo from '../img/logo.png'

const Home = ({ showAlert }) => {
  const { user, getuser } = useContext(UserContext);

    useEffect(() => {
        getuser();
        //eslint-disable-next-line
    }, []);
  return (
    
    <div> 
      <div className="container mt-0" style={{backgroundColor: 'rgb(161 165 169)',color:'black'}}> 
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1 className="display-5"> Welcome <b style={{color:'#ffc516'}}>{user.name}</b>  <br /> <img src={logo} alt="notebook" className="img-fluid"style={{ maxHeight: '50px' }} /> </h1>
        </div>
      </div><hr />
      <Notes showAlert={showAlert} user={user}/>
    </div>
    </div>
  );
};

export default Home;
