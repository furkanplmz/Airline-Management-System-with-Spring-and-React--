import React, { Component } from 'react';
import PlaneService from '../../services/PlaneService';
import { Link } from 'react-router-dom';





class ListPlaneComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
        planes: []
        }

       this.addPlane= this.addPlane.bind(this);
       this.editPlane=this.editPlane.bind(this);
        this.deletePlane=this.deletePlane(this);
    }

    deletePlane(plane_id){
        PlaneService.deletePlane(plane_id).then(res=>{
            this.setState({planes:this.state.planes.filter(plane=>plane.plane_id !== plane_id)})
       });
    }

   editPlane(plane_id){
        this.history.push('/update-plane/${plane_id}')
   }
    
    componentDidMount(){
        PlaneService.getPlane().then((res)=>{
             this.setState({ planes: res.data});
        });
    }
    
   addPlane(){
        
       this.props.history.push("/add-plane");
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Uçak Listesi</h2>
                <Link to ="/add-plane" className='btn btn-primary'>Uçak Kaydet</Link>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Ucak Adi </th>
                                <th> Koltuk Sayisi </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.planes.map(
                                    plane =>
                                    <tr key = {plane.plane_id}>
                                            <td>{plane.planename}</td>
                                            <td>{plane.planeseats}</td>
                                            <td>
                                            <Link to ={`/update-plane/${plane.plane_id}`} className='btn btn-info'>Guncelle</Link>
                                            <Link style={{marginLeft:"10px"}}  to ={()=>this.deletePlane(this.plane.plane_id)} className='btn btn-danger'>Sil</Link>
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

export default new ListPlaneComponent();
