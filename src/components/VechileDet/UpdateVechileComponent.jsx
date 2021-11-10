import React, { Component } from 'react';
import VechileService from '../../services/VechileService';

class UpdateVechileComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vechilRegno: '',
            vechileNumber: '',
            vechileType: '',
            vechileDriver: '',
            vechileHelper: '',
            driverNumber: '',
            fastagId: ''
        }
        this.changeVechilRegnoHandler = this.changeVechilRegnoHandler.bind(this);
        this.changeVechileNumberHandler = this.changeVechileNumberHandler.bind(this);
        this.changeVechileTypeHandler = this.changeVechileTypeHandler.bind(this);
        this.changeVechileDriverHandler = this.changeVechileDriverHandler.bind(this);
        this.changeVechileHelperHandler = this.changeVechileHelperHandler.bind(this);
        this.changeDriverNumberHandler = this.changeDriverNumberHandler.bind(this);
        this.updateVechile = this.updateVechile.bind(this);
    }


    saveOrUpdateVechile = (e) => {
        e.preventDefault();
        let vechile = {vechilRegno: this.state.vechilRegno, vechileNumber: this.state.vechileNumber, vechileType: this.state.vechileType, vechileDriver: this.state.vechileDriver, vechileHelper: this.state.vechileHelper, driverNumber: this.state.driverNumber, fastagId: this.state.fastagId};
        console.log('vechile => ' + JSON.stringify(vechile));

        // step 5
        if(this.state.id === '_add'){
            VechileService.createVechile(vechile).then(res =>{
                this.props.history.push('/vechile');
            });
        }else{
            VechileService.updateVechile(vechile, this.state.id).then( res => {
                this.props.history.push('/vechile');
            });
        }
    }

    componentDidMount(){
        VechileService.getVechileById(this.state.id).then( (res) =>{
            let vechile = res.data;
            this.setState({ vechilRegno: vechile.vechilRegno, 
                vechileNumber: vechile.vechileNumber, 
                vechileType: vechile.vechileType, 
                vechileDriver: vechile.vechileDriver, 
                vechileHelper: vechile.vechileHelper, 
                driverNumber: vechile.driverNumber, 
                fastagId: vechile.fastagId
                

                
            });
        });
    }
    updateVechile = (e) => {
        e.preventDefault();
        let vechile = {vechilRegno: this.state.vechilRegno, vechileNumber: this.state.vechileNumber, vechileType: this.state.vechileType, vechileDriver: this.state.vechileDriver, vechileHelper: this.state.vechileHelper, driverNumber: this.state.driverNumber, fastagId: this.state.fastagId};
        console.log('vechile => ' + JSON.stringify(vechile));
        VechileService.updateVechile(vechile, this.state.id).then( res => {
            this.props.history.push('/vechile');
        });
    }

    changeVechilRegnoHandler= (event) => {
        this.setState({vechilRegno: event.target.value});
    }
    changeVechileNumberHandler= (event) => {
        this.setState({vechileNumber: event.target.value});
    }
    changeVechileTypeHandler= (event) => {
        this.setState({vechileType: event.target.value});
    }
    changeVechileDriverHandler= (event) => {
        this.setState({vechileDriver: event.target.value});
    }
    changeVechileHelperHandler= (event) => {
        this.setState({vechileHelper: event.target.value});
    }
    changeDriverNumberHandler= (event) => {
        this.setState({driverNumber: event.target.value});
    }
    changeFastagIdHandler= (event) => {
        this.setState({fastagId: event.target.value});
    }

    cancel(){
        this.props.history.push("/vechile")
    }
    

    render() {
        return (
            <div>
                <div className ="container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Vehicle</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Vehicle Reg. No. :</label>
                                        <input placeholder="Vehicle Reg. No." name="vechilRegno" className="form-control"
                                            value={this.state.vechilRegno} onChange={this.changeVechilRegnoHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Vehicle No. :</label>
                                        <input placeholder="Vehicle No." name="vechileNumber" className="form-control"
                                            value={this.state.vechileNumber} onChange={this.changeVechileNumberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Vehicle Type :</label>
                                        <input placeholder="Vehicle Type" name="vechileType" className="form-control"
                                            value={this.state.vechileType} onChange={this.changeVechileTypeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Vehicle Driver :</label>
                                        <input placeholder="Vehicle Driver" name="vechileDriver" className="form-control"
                                            value={this.state.vechileDriver} onChange={this.changeVechileDriverHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Vehicle Helper :</label>
                                        <input placeholder="Vehicle Helper" name="vechileHelper" className="form-control"
                                            value={this.state.vechileHelper} onChange={this.changeVechileHelperHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Driver Number :</label>
                                        <input placeholder="Driver Number" name="driverNumber" className="form-control"
                                            value={this.state.driverNumber} onChange={this.changeDriverNumberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>FASTag Id :</label>
                                        <input placeholder="FASTag Id" name="fastagId" className="form-control"
                                            value={this.state.fastagId} onChange={this.changeFastagIdHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateVechile}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                     </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default UpdateVechileComponent;