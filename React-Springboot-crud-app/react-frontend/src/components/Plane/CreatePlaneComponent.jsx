import axios from 'axios';
import React, { Component } from 'react';
import PlaneService from './PlaneService';


class CreatePlaneComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            planename:"",
            planeseats:"",
        }
        this.changeplanenameHandler=this.changeplanenameHandler.bind(this);
        this.changeplaneseatsHandler=this.changeplaneseatsHandler.bind(this);

        this.saveplane=this.saveplane.bind(this);
        
    }
    
    saveplane=(e)=>{
        e.preventDefault();
        let plane = {planename:this.state.planename, planeseats:this.state.planeseats};
            console.log('plane => '+JSON.stringify(plane));

        PlaneService.createplane(plane).then(res =>{
            this.props.history.push('/planes'); 
            });
    }

    changeplanenameHandler=(e)=>{
        this.setState({planename: e.target.value})   
    }
    changeplaneseatsHandler=(e)=>{
        this.setState({planeseats: e.target.value})   
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Ucak Kaydet</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label >Ucak Adi:</label>
                                        <input placeholder='UcakAd' name='planename'className='form-control'
                                        value={this.stateplanename}onChange={this.changeplanenameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label >Koltuk Sayisi:</label>
                                        <input placeholder='KoltukSayisi' name='planeseats'className='form-control'
                                        value={this.state.planeseats}onChange={this.changeplaneseatsHandler}/>
                                    </div>
                                    <button className='btn btn-success'onClick={this.saveplane}>Kaydet</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
export default CreatePlaneComponent;