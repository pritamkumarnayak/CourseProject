import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListVechileComponent from './components/VechileDet/ListVechileComponent';
import HeaderComponent from './components/VechileDet/HeaderComponent';
//import FooterComponent from './components/VechileDet/FooterComponent';
import CreateVechileComponent from './components/VechileDet/CreateVechileComponent';
import UpdateVechileComponent from './components/VechileDet/UpdateVechileComponent';
import ViewVechileComponent from './components/VechileDet/ViewVechileComponent';
import ListVechileReportComponent from './components/Reportdet/ListVechileReportComponent';

import CreateVechileReportComponent from './components/Reportdet/CreateVechileReportComponent';
import UpdateVechileReportComponent from './components/Reportdet/UpdateVechileReportComponent';
import ViewVechileReportComponent from './components/Reportdet/ViewVechileReportComponent';
import ListEmployeeComponent from './components/EmployeeDet/ListEmployeeComponent';
import CreateEmployeeComponent from './components/EmployeeDet/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/EmployeeDet/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
            <div className="container">
              <Switch> 
                <Route path = "/" exact component = {ListVechileComponent}/>
                <Route path = "/vechile" component = {ListVechileComponent}/>
                <Route path = "/add-vechile" component = {CreateVechileComponent}></Route>
                <Route path = "/view-vechile/:id" component = {ViewVechileComponent}></Route>
                <Route path = "/update-vechile/:id" component = {UpdateVechileComponent}></Route> 
                {/* Report */}
                
                <Route path = "/report" component = {ListVechileReportComponent}></Route>
                <Route path = "/add-report" component = {CreateVechileReportComponent}></Route>
                <Route path = "/view-report/:id" component = {ViewVechileReportComponent}></Route>
                <Route path = "/update-report/:id" component = {UpdateVechileReportComponent}></Route>
                {/* Employee */}

                
                <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

              </Switch>
            </div>
          {/* <FooterComponent /> */}
      </Router>
    </div>
    
  );
}

export default App;
