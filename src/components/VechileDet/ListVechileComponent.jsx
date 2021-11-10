import React, { Component } from 'react';
import VechileService from '../../services/VechileService';
class ListVechileComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                vechile: []
        }
        this.addVechile = this.addVechile.bind(this);
        this.editVechile = this.editVechile.bind(this);
        this.deleteVechile = this.deleteVechile.bind(this);
    }
    
    deleteVechile(id){
        VechileService.deleteVechile(id).then( res => {
            this.setState({vechile: this.state.vechile.filter(vechile => vechile.id !== id)});
        });
    }
    viewVechile(id){
        this.props.history.push(`/view-vechile/${id}`);
    }
    editVechile(id){
        this.props.history.push(`/update-vechile/${id}`);
    }

    componentDidMount(){
        VechileService.getVechile().then((res) => {
            this.setState({ vechile: res.data});
        });
    }

    addVechile(){
        this.props.history.push('/add-vechile/_add');
    }

    

    render() {
        return (
            <div>
                <h2 className="text-center">Vehicle List</h2>
                
                <div>
                    <button className="btn btn-primary" onClick={this.addVechile}>Register New Vehicle</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Vehicle Reg. No. <br /> (assigned by university)</th>
                                <th>Vehicle Number</th>
                                <th>Vehicle Type</th>
                                <th>Vehicle Driver</th>
                                <th>Vehicle Helper</th>
                                <th>Driver Number</th>
                                <th>FASTag Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.vechile.map(
                                    vechile =>
                                    <tr key = {vechile.id}>
                                        <td> {vechile.vechilRegno} </td>
                                        <td> {vechile.vechileNumber} </td>
                                        <td> {vechile.vechileType} </td>
                                        <td> {vechile.vechileDriver} </td>
                                        <td> {vechile.vechileHelper} </td>
                                        <td> {vechile.driverNumber} </td>
                                        <td> {vechile.fastagId} </td>
                                        <td>
                                            <button onClick = { () => this.editVechile(vechile.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVechile(vechile.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewVechile(vechile.id)} className="btn btn-info">View </button>
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

export default ListVechileComponent;