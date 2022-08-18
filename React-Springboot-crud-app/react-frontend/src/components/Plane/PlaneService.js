import axios from 'axios';

const PLANE_BASE_URL="http://localhost:8080/api/v1/planes";

class PlaneService {
    
    getPlane(){
        return axios.get(PLANE_BASE_URL); 
    }
    createPlane(plane){
        return axios.post(PLANE_BASE_URL, plane);
    }
    getPlaneById(planeId){
        return axios.get(PLANE_BASE_URL + '/' + planeId);
    }
    updatePlane(plane,planeId){
        return axios.put(PLANE_BASE_URL + '/' + planeId , plane);
    }
    deletePlane(planeId){
        return axios.delete(PLANE_BASE_URL+'/'+planeId);
    }
}

export default new PlaneService()