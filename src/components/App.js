import React, { useState } from 'react'
import SideNav from './SideNav';
import MainSection from './MainSection';
import Header from './Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css';
const App = () => {

  const[listitem,changeitem]=useState('INBOX');
  return (
    <div id="main">
    <Header />
      <div className='row'>
        <div className='col-md-2'>
          <SideNav change={changeitem}/>
        </div>
        <div className='col-md-10'>
          <MainSection active={listitem}/>
        </div>
      </div>
    </div>
  )
}


export default App;
