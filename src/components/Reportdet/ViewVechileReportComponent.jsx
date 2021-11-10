import React, { Component } from 'react'
import VechileService from '../../services/VechileService'

class ViewVechileReportComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            report: {}
        }
    }

    componentDidMount(){
        VechileService.getVechileReportById(this.state.id).then( res => {
            this.setState({report: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Details Of  Vehicle Daily Report</h3>
                    <div className = "card-body">
                                <div className = "row">
                                    <label>Vehicle Reg. No. :</label>
                                    <div> { this.state.report.vechilRegno }</div>
                                </div>
                                <div className = "row">
                                    <label>Vehicle Number :</label>
                                    <div> { this.state.report.vechileNumber }</div>
                                </div>
                                <div className = "row">
                                    <label>Jurney Date :</label>
                                    <div> { this.state.report.jurneyDate }</div>
                                </div>
                                <div className = "row">
                                    <label>Starting Km :</label>
                                    <div> { this.state.report.startingKm }</div>
                                </div>
                                <div className = "row">
                                    <label>Ending Km :</label>
                                    <div> { this.state.report.endingKm }</div>
                                </div>
                                <div className = "row">
                                    <label>Purpose Jurney :</label>
                                    <div> { this.state.report.purposeJurney }</div>
                                </div>
                                <div className = "row">
                                    <label>Starting Time :</label>
                                    <div> { this.state.report.startingTime }</div>
                                </div>
                                <div className = "row">
                                    <label>Ending Time :</label>
                                    <div> { this.state.report.endingTime }</div>
                                </div>
                                <div className = "row">
                                    <label>Toll Fare :</label>
                                    <div> { this.state.report.tollFare }</div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default ViewVechileReportComponent
