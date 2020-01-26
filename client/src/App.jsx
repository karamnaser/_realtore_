
import React from 'react';
import logo from './logo.svg';
import Form from './new_componenet/form/form'
import './App.css';
import ForgotPassword from './forgotpasswordpage/forgotpasswordpage'
import HomePage  from './new_componenet/homePage/homepage'
import HeaderNave from './new_componenet/header copy/header-navigation';
import AdminPage from './new_componenet/AdminPage/adminpage';
import AddApartmentPage from './new_componenet/addapartmentpage/addapartmentpage'
import  { BrowserRouter as Router
  ,Switch
  ,Route
} from "react-router-dom";
import SinglePageApartment from './new_componenet/single_page_apartment/single_page_apartment'
 
function App() {

  
  return (
    <Router>
    <div className="App">
    <HeaderNave/>
    <Switch>

          <Route path="/home" component={HomePage}/>


          <Route path={"/apartment/:id"} component={SinglePageApartment}/>

          <Route path="/apartments" component={()=><Form
                  img_type="apartments"
                  img_sorce="main_image"
                  main_image={"main_image"}
                  title={"title"}
                  bool={true}
                  gallarydata={"apartments"}
                  />}>
  
          </Route>

          <Route path={`/addapartment`} component={AddApartmentPage}/>
          <Route path={`/AdminPage`} component={AdminPage}/>
          <Route path={`/ForgotPassword`} component={ForgotPassword}/>
        <Route path="/" component={HomePage}/>
    </Switch>
    </div>
    </Router>
  );
}



export default App;
