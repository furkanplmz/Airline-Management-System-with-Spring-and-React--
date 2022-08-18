import axios from 'axios';

const Ticket_BASE_URL="http://localhost:8080/api/v1/ticket";

class TicketService {
    
    getTicket(){
        return axios.get(Ticket_BASE_URL); 
    }
    createTicket(Ticket){
        return axios.post(Ticket_BASE_URL, Ticket);
    }
    
    getTicketById(TicketId){
        return axios.get(Ticket_BASE_URL + '/' + TicketId);
    }
}

export default new TicketService()