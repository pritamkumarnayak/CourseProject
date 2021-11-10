import React, { Component } from 'react'
import VechileService from '../../services/VechileService';

class ViewVechileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vechile: {}
        }
    }

    componentDidMount(){
        VechileService.getVechileById(this.state.id).then( res => {
            this.setState({vechile: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Details Of  Vehicle</h3>
                    <div className = "card-body">
                                <div className = "row">
                                    <label>Vehicle Reg. No. :</label>
                                    <div> { this.state.vechile.vechilRegno }</div>
                                </div>
                                <div className = "row">
                                    <label>Vehicle Number :</label>
                                    <div> { this.state.vechile.vechileNumber }</div>
                                </div>
                                <div className = "row">
                                    <label>Vehicle Type :</label>
                                    <div> { this.state.vechile.vechileType }</div>
                                </div>
                                <div className = "row">
                                    <label>Vehicle Driver :</label>
                                    <div> { this.state.vechile.vechileDriver }</div>
                                </div>
                                <div className = "row">
                                    <label>Vehicle Helper :</label>
                                    <div> { this.state.vechile.vechileHelper }</div>
                                </div>
                                <div className = "row">
                                    <label>Driver Number :</label>
                                    <div> { this.state.vechile.driverNumber }</div>
                                </div>
                                <div className = "row">
                                    <label>FASTag Id :</label>
                                    <div> { this.state.vechile.fastagId }</div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default ViewVechileComponent
