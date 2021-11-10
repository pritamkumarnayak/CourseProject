import React, { Component } from 'react';
import VechileService from '../../services/VechileService';

class ListVechileReportComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                report_det: []
        }
        this.addVechileReport = this.addVechileReport.bind(this);
        this.editVechileReport = this.editVechileReport.bind(this);
        this.deleteVechileReport = this.deleteVechileReport.bind(this);
    }
    
    deleteVechileReport(id){
        VechileService.deleteVechileReport(id).then( res => {
            this.setState({report_det: this.state.report_det.filter(report => report.id !== id)});
        });
    }
    viewVechileReport(id){
        this.props.history.push(`/view-report/${id}`);
    }
    editVechileReport(id){
        this.props.history.push(`/update-report/${id}`);
    }

    componentDidMount(){
        VechileService.getVechileReport().then((res) => {
            this.setState({ report_det: res.data});
        });
    }

    addVechileReport(){
        this.props.history.push('/add-report/_add');
    }

    

    render() {
        return (
            <div>
                <h2 className="text-center">Vehicle Daily Report</h2>
                
                
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Vehicle Reg. No. <br /> (assigned by university)</th>
                                <th>Vehicle Number</th>
                                <th>Jurney Date</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.report_det.map(
                                    report =>
                                    <tr key = {report.id}>
                                        <td> {report.vechilRegno} </td>
                                        <td> {report.vechileNumber} </td>
                                        <td> {report.jurneyDate} </td>
                                        <td>
                                            <button onClick = { () => this.editVechileReport(report.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVechileReport(report.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewVechileReport(report.id)} className="btn btn-info">View </button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                    <div>
                    <button style={{marginLeft: "800px"}} className="btn btn-primary" onClick={this.addVechileReport}>Enter Daily Report of Vehicle</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default ListVechileReportComponent;