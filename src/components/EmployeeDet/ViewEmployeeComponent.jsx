import React, { Component } from 'react'
import VechileService from '../../services/VechileService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        VechileService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Employee Registration Id: </label>
                            <div> { this.state.employee.registrationId }</div>
                        </div>
                        <div className = "row">
                            <label> Employee First Name:  </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name:  </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Gender:  </label>
                            <div> { this.state.employee.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email Id:  </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Phone Number:  </label>
                            <div> { this.state.employee.phoneNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Permanent Address:  </label>
                            <div> { this.state.employee.permanentAddress }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Present Address:  </label>
                            <div> { this.state.employee.presentAddress }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Age:  </label>
                            <div> { this.state.employee.age }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Date Of Birth:  </label>
                            <div> { this.state.employee.dateOfBirth }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Martial Status:  </label>
                            <div> { this.state.employee.martialStatus }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Joined Date:  </label>
                            <div> { this.state.employee.joinedDate }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Assigned Job Role:  </label>
                            <div> { this.state.employee.assignedJobRole }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Experienced About Vehicle:  </label>
                            <div> { this.state.employee.experiencedAboutVehicle }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
