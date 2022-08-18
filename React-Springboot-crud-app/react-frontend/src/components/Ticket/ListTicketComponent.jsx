import React, { Component } from 'react';
import TicketService from'./TicketService';
import { Link } from 'react-router-dom';




class ListTicketComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
        passengerrs: []
        }

        this.addPassengerr= this.addPassengerr.bind(this);
        this.editPassengerr=this.editPassengerr.bind(this);
        this.deletePassengerr=this.deletePassengerr(this);
        
    }

    deletePassengerr(pid){
        TicketService.deletePassengerr(pid).then(res=>{
            this.setState({passengerrs:this.state.passengerrs.filter(passengerr=>passengerr.pid !== pid)})
        });
    }

    editPassengerr(pid){
        this.history.push('/update-passengerr/${pid}')
    }
    
    componentDidMount(){
        TicketService.getPassengers().then((res)=>{
             this.setState({ passengerrs: res.data});
        });
    }
    
    addPassengerr(){
        
         this.props.history.push("/add-passengerr");
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Yolcu Listesi</h2>
                <Link to ="/add-passengerr" className='btn btn-primary'>Yolcu Kaydet</Link>
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Adi </th>
                                <th> Soyadi </th>
                                <th> Milliyeti </th>
                                <th> Cinsiyeti </th>
                                <th> Pasaportu </th>
                                <th> Adresi </th>
                                <th> Telefonu </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.passengerrs.map(
                                    passengerr =>
                                    <tr key = {passengerr.pid}>
                                            <td>{passengerr.pname}</td>
                                            <td>{passengerr.last}</td>
                                            <td>{passengerr.pnat}</td>
                                            <td>{passengerr.pgen}</td>
                                            <td>{passengerr.ppass}</td>
                                            <td>{passengerr.padd}</td>
                                            <td>{passengerr.pphone}</td>
                                            <td>
                                            <Link to ={`/update-passengerr/${passengerr.pid}`} className='btn btn-info'>Guncelle</Link>
                                            <Link style={{marginLeft:"10px"}}  to ={()=>this.deletePassengerr(this.passengerr.pid)} className='btn btn-danger'>Sil</Link>
                                            </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default (ListTicketComponent);
