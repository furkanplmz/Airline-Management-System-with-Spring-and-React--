import axios from 'axios';
import React, { Component } from 'react';
import CancellationService from './CancellationService';



class CreateCancellationComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            pname:"",
            last:"",
            pnat:"",
            pgen:"",
            ppass:"",
            padd:"",
            pphone:""
        }
        this.changepnameHandler=this.changepnameHandler.bind(this);
        this.changelastHandler=this.changelastHandler.bind(this);
        this.changepnatHandler=this.changepnatHandler.bind(this);
        this.changepgenHandler=this.changepgenHandler.bind(this);
        this.changeppassHandler=this.changeppassHandler.bind(this);
        this.changepaddHandler=this.changepaddHandler.bind(this);
        this.changepphoneHandler=this.changepphoneHandler.bind(this);
     
        this.savePassengerr=this.savePassengerr.bind(this);
        
    }
    
    


    savePassengerr=(e)=>{
        e.preventDefault();
        let passengerr = {pname:this.state.pname, last:this.state.last, pnat:this.state.pnat, pgen:this.state.pgen,
            ppass:this.state.ppass, padd:this.state.padd,pphone:this.state.pphone};
            console.log('passengerr => '+JSON.stringify(passengerr));

        CancellationService.createPassengerr(passengerr).then(res =>{
            this.props.history.push('/passengerrs'); 
            });
    }

    changepnameHandler=(e)=>{
        this.setState({pname: e.target.value})   
    }
    changelastHandler=(e)=>{
        this.setState({last: e.target.value})   
    }
    changepnatHandler=(e)=>{
        this.setState({pnat: e.target.value})   
    }
    changepgenHandler=(e)=>{
        this.setState({pgen: e.target.value})   
    }
    changeppassHandler=(e)=>{
        this.setState({ppass: e.target.value})   
    }
    changepaddHandler=(e)=>{
        this.setState({padd: e.target.value})   
    }
    changepphoneHandler=(e)=>{
        this.setState({pphone: e.target.value})   
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Yolcu Kaydet</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label >Adi:</label>
                                        <input placeholder='Ad' name='pname'className='form-control'
                                        value={this.statepname}onChange={this.changepnameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label >Soyadi:</label>
                                        <input placeholder='Soyad' name='last'className='form-control'
                                        value={this.state.last}onChange={this.changelastHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label >Milliyeti:</label>
                                        <input placeholder='Milliyet' name='pnat'className='form-control'
                                        value={this.state.pnat}onChange={this.changepnatHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label >Cinsiyeti:</label>
                                        <input placeholder='Cinsiyet' name='pgen'className='form-control'
                                        value={this.state.pgen}onChange={this.changepgenHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label >PassaportNo:</label>
                                        <input placeholder='PasapartNo' name='ppass'className='form-control'
                                        value={this.state.ppass}onChange={this.changeppassHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label >Adresi:</label>
                                        <input placeholder='Adres' name='padd'className='form-control'
                                        value={this.state.padd}onChange={this.changepaddHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label >Telefonu:</label>
                                        <input placeholder='Telefon' name='pphone'className='form-control'
                                        value={this.state.pphone}onChange={this.changepphoneHandler}/>
                                    </div>
                                    <button className='btn btn-success'onClick={this.savePassengerr}>Kaydet</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
export default CreateCancellationComponent;