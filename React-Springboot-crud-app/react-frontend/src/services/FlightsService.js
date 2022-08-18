import axios from 'axios';

const FLIGHTS_BASE_URL="http://localhost:8080/api/v1/flights";

class FlightsService {
    
    getFlights(){
        return axios.get(FLIGHTS_BASE_URL); 
    }
    createFlight(flight){
        return axios.post(FLIGHTS_BASE_URL, flight);
    } 
    getFlightById(flightId){
        return axios.get(FLIGHTS_BASE_URL + '/' + flightId);
    }
    updateFlight(Flight,FlightId){
        return axios.put(FLIGHTS_BASE_URL + '/' + FlightId , Flight);
    }

    deleteFlight(FlightId){
        return axios.delete(FLIGHTS_BASE_URL+'/'+FlightId);
    }
}

export default new FlightsService()