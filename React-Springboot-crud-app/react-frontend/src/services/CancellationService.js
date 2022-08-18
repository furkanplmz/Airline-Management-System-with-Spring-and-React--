import axios from 'axios';

const CANCELLATION_BASE_URL="http://localhost:8080/api/v1/cancellation";

class CancellationService {
    
    getCancellation(){
        return axios.get(CANCELLATION_BASE_URL); 
    }
    createPassengerr(passengerr){
        return axios.post(CANCELLATION_BASE_URL, passengerr);
    }
    
    getPassengerrById(passengerrId){
        return axios.get(CANCELLATION_BASE_URL + '/' + passengerrId);
    }

    updatePassengerr(passengerr,passengerrId){
        return axios.put(CANCELLATION_BASE_URL + '/' + passengerrId , passengerr);
    }

    deletePassengerr(passengerrId){
        return axios.delete(CANCELLATION_BASE_URL+'/'+passengerrId);
    }
}

export default new CancellationService()