import React, { Component } from 'react';
import VechileService from '../../services/VechileService';

class UpdateVechileComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vechilRegno: '',
            vechileNumber: '',
            jurneyDate: '',
            startingKm: '',
            endingKm: '',
            purposeJurney: '',
            startingTime: '',
            endingTime: '',
            tollFare: ''
        }
        this.changeVechilRegnoHandler = this.changeVechilRegnoHandler.bind(this);
        this.changeVechileNumberHandler = this.changeVechileNumberHandler.bind(this);
        this.changeJurneyDateHandler = this.changeJurneyDateHandler.bind(this);
        this.changeStartingKmHandler = this.changeStartingKmHandler.bind(this);
        this.changeEndingKmHandler = this.changeEndingKmHandler.bind(this);
        this.changePurposeJurneyHandler = this.changePurposeJurneyHandler.bind(this);
        this.changeStartingTimeHandler = this.changeStartingTimeHandler.bind(this);
        this.changeEndingTimeHandler = this.changeEndingTimeHandler.bind(this);
        this.changeTollFareHandler = this.changeTollFareHandler.bind(this);
        this.updateVechileReport = this.updateVechileReport.bind(this);
    }


    saveOrUpdateVechile = (e) => {
        e.preventDefault();
        let report = {vechilRegno: this.state.vechilRegno, vechileNumber: this.state.vechileNumber, jurneyDate: this.state.jurneyDate, startingKm: this.state.startingKm, endingKm: this.state.endingKm, purposeJurney: this.state.purposeJurney, startingTime: this.state.startingTime, endingTime: this.state.endingTime, tollFare: this.state.tollFare};
        console.log('report => ' + JSON.stringify(report));

        // step 5
        if(this.state.id === '_add'){
            VechileService.createVechileReport(report).then(res =>{
                this.props.history.push('/report');
            });
        }else{
            VechileService.updateVechileReport(report, this.state.id).then( res => {
                this.props.history.push('/report');
            });
        }
    }

    componentDidMount(){
        VechileService.getVechileReportById(this.state.id).then( (res) =>{
            let report = res.data;
            this.setState({ vechilRegno: report.vechilRegno, 
                
                vechileNumber: report.vechileNumber,
                jurneyDate: report.jurneyDate,
                startingKm: report.startingKm,
                endingKm: report.endingKm,
                purposeJurney: report.purposeJurney,
                startingTime: report.startingTime,
                endingTime: report.endingTime,
                tollFare: report.tollFare
                

                
            });
        });
    }
    updateVechileReport = (e) => {
        e.preventDefault();
        let report = {vechilRegno: this.state.vechilRegno, vechileNumber: this.state.vechileNumber, jurneyDate: this.state.jurneyDate, startingKm: this.state.startingKm, endingKm: this.state.endingKm, purposeJurney: this.state.purposeJurney, startingTime: this.state.startingTime, endingTime: this.state.endingTime, tollFare: this.state.tollFare};
        console.log('report => ' + JSON.stringify(report));
        VechileService.updateVechileReport(report, this.state.id).then( res => {
            this.props.history.push('/report');
        });
    }

    changeVechilRegnoHandler= (event) => {
        this.setState({vechilRegno: event.target.value});
    }
    changeVechileNumberHandler= (event) => {
        this.setState({vechileNumber: event.target.value});
    }
    changeJurneyDateHandler= (event) => {
        this.setState({jurneyDate: event.target.value});
    }
    changeStartingKmHandler= (event) => {
        this.setState({startingKm: event.target.value});
    }
    changeEndingKmHandler= (event) => {
        this.setState({endingKm: event.target.value});
    }
    changePurposeJurneyHandler= (event) => {
        this.setState({purposeJurney: event.target.value});
    }
    
    changeStartingTimeHandler= (event) => {
        this.setState({startingTime: event.target.value});
    }
    changeEndingTimeHandler= (event) => {
        this.setState({endingTime: event.target.value});
    }
    changeTollFareHandler= (event) => {
        this.setState({tollFare: event.target.value});
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
                            <h3 className="text-center">Update Vehicle Report</h3>
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
                                        <label>Jurney Date :</label>
                                        <input placeholder="Jurney Date" type="date" name="jurneyDate" className="form-control"
                                            value={this.state.jurneyDate} onChange={this.changeJurneyDateHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Starting Km :</label>
                                        <input placeholder="Starting Km" name="startingKm" className="form-control"
                                            value={this.state.startingKm} onChange={this.changeStartingKmHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Ending Km :</label>
                                        <input placeholder="Ending Km" name="endingKm" className="form-control"
                                            value={this.state.endingKm} onChange={this.changeEndingKmHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Purpose Jurney :</label>
                                        <input placeholder="Purpose Jurney" name="purposeJurney" className="form-control"
                                            value={this.state.purposeJurney} onChange={this.changePurposeJurneyHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Starting Time :</label>
                                        <input placeholder="Starting Time" name="startingTime" className="form-control"
                                            value={this.state.startingTime} onChange={this.changeStartingTimeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Ending Time :</label>
                                        <input placeholder="Ending Time" name="endingTime" className="form-control"
                                            value={this.state.endingTime} onChange={this.changeEndingTimeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Toll Fare :</label>
                                        <input placeholder="Toll Fare" name="tollFare" className="form-control"
                                            value={this.state.tollFare} onChange={this.changeTollFareHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateVechileReport}>Save</button>
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