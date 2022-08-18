import './App.css';



import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';


import ListPassengerrComponent from './components/Passenger/ListPassengerrComponent';
import HeaderComponent from './components/Passenger/HeaderComponent';
import FooterComponent from './components/Passenger/FooterComponent';
import CreatePassengerComponent from './components/Passenger/CreatePassengerComponent';
import UpdatePassengerComponent from './components/Passenger/UpdatePassengerComponent';

import ListPlaneComponent from './components/Plane/ListPlaneComponent';
import CreatePlaneComponent from './components/Plane/CreatePlaneComponent';
import UpdatePlaneComponent from './components/Plane/UpdatePlaneComponent';

import ListFlightComponent from './components/Flight/ListFlightComponent';
import CreateFlightComponent from './components/Flight/CreateFlightComponent';
import UpdateFlightComponent from './components/Flight/UpdateFlightComponent';

import ListTicketComponent from './components/Ticket/ListTicketComponent';
import CreateTicketComponent from './components/Ticket/CreateTicketComponent';

import ListCancellationComponent from './components/Cancellation/ListCancellationComponent';
import CreateCancellationComponent from './components/Cancellation/CreateCancellationComponent';



function App() {
  return (
    <div>
      <Router>
          
            <HeaderComponent/>
              <div className="container">
              <Routes> 
                  <Route  path ="/" exact element={<ListPassengerrComponent/>}/>
                  <Route  path ="/passengerrs" element={<ListPassengerrComponent/>}/>
                  <Route  path ="/add-passengerr" element={<CreatePassengerComponent/>}/>
                  <Route  path ="/update-passengerr/:pid" element={<UpdatePassengerComponent/>}/>

                  <Route  path ="/planes" element={<ListPlaneComponent/>}/>
                  <Route  path ="/add-plane" element={<CreatePlaneComponent/>}/>
                  <Route  path ="/update-plane/:plane_id" element={<UpdatePlaneComponent/>}/>

                  <Route  path ="/flights" element={<ListFlightComponent/>}/>
                  <Route  path ="/add-flight" element={<CreateFlightComponent/>}/>
                  <Route  path ="/update-flight/:fl_code" element={<UpdateFlightComponent/>}/>

                  <Route  path ="/ticket" element={<ListTicketComponent/>}/>
                  <Route  path ="/add-ticket" element={<CreateTicketComponent/>}/>
                  
                  <Route  path ="/cancellation" element={<ListCancellationComponent/>}/>
                  <Route  path ="/add-cancellation" element={<CreateCancellationComponent/>}/>
              </Routes>
             </div>
            <FooterComponent/>  
      </Router>
    </div>
  );
}

export default App;
