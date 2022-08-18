import axios from 'axios';

const PASSENGER_API_BASE_URL="http://localhost:8080/api/v1/passengerrs";

class PassengerrService {
    
    getPassengers(){
        return axios.get(PASSENGER_API_BASE_URL); 
    }
    createPassengerr(passengerr){
        return axios.post(PASSENGER_API_BASE_URL, passengerr);
    }
    
    getPassengerrById(passengerrId){
        return axios.get(PASSENGER_API_BASE_URL + '/' + passengerrId);
    }

    updatePassengerr(passengerr,passengerrId){
        return axios.put(PASSENGER_API_BASE_URL + '/' + passengerrId , passengerr);
    }

    deletePassengerr(passengerrId){
        return axios.delete(PASSENGER_API_BASE_URL+'/'+passengerrId);
    }
}

export default new PassengerrService()