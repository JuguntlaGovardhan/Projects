import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegistrationForm from './Components/RegistrationForm';
import AddPizzastore from './Components/AddPizzastore'
import LoginForm from './Components/LoginForm';
import HomePage from './Components/HomePage';
import AdminPage from './Components/AdminPage';
import UpdatePizzastore from './Components/UpdatePizzastore';
import ViewPizzastore from './Components/ViewPizzastore';
import AddFoodItems from './Components/AddFoodItems';
import UpdateFoodItems from './Components/updateFoodItems';
import Autunticate from './Components/Autunticate';
import ViewFoodItems from './Components/ViewFoodItems';
import ViewStore from './Components/ViewStore';
import Menu from './Components/Menu';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/auth" element={<Autunticate />} />
      <Route path='/AdminPage' element={<AdminPage/>}/>
      <Route path='/AdminPage/AddPizzastore' element={<AddPizzastore/>}/>
      <Route path='/AdminPage/UpdatePizzastore' element={<UpdatePizzastore/>}/>
      <Route path='/AdminPage/ViewPizzastore' element={<ViewPizzastore/>}/>
      <Route path='/AdminPage/AddFoodItems' element={<AddFoodItems/>}/>
      <Route path='/AdminPage/view' element={<ViewFoodItems/>}/>
      <Route path='/AdminPage/update' element={<UpdateFoodItems/>}/>
      <Route path='/user' element={<ViewStore/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      

      </Routes>
    </Router>
  );
}

export default App;
