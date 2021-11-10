import React, { Component } from 'react'
import VechileService from '../services/VechileService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            registrationId:'',
            firstName: '',
            lastName: '',
            gender: '',
            emailId: '',
            phoneNumber: '',
            permanentAddress: '',
            presentAddress: '',
            age: '',
            dateOfBirth: '',
            martialStatus: '',
            joinedDate: '',
            assignedJobRole: '',
            experiencedAboutVehicle: ''
        }
        this.changeRegistrationIdHandler = this.changeRegistrationIdHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changePermanentAddressHandler = this.changePermanentAddressHandler.bind(this);
        this.changePresentAddressHandler = this.changePresentAddressHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changeMartialStatusHandler = this.changeMartialStatusHandler.bind(this);
        this.changeJoinedDateHandler = this.changeJoinedDateHandler.bind(this);
        this.changeAssignedJobRoleHandler = this.changeAssignedJobRoleHandler.bind(this);
        this.changeExperiencedAboutVehicleHandler = this.changeExperiencedAboutVehicleHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({registrationId: employee.registrationId,
                firstName: employee.firstName,
                lastName: employee.lastName,
                gender: employee.gender,
                emailId : employee.emailId,
                phoneNumber: employee.phoneNumber,
                permanentAddress: employee.permanentAddress,
                presentAddress: employee.presentAddress,
                age: employee.age,
                dateOfBirth: employee.dateOfBirth,
                martialStatus: employee.martialStatus,
                joinedDate: employee.joinedDate,
                assignedJobRole: employee.assignedJobRole,
                experiencedAboutVehicle: employee.experiencedAboutVehicle
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {registrationId: this.state.registrationId, firstName: this.state.firstName, lastName: this.state.lastName, gender: this.state.gender, emailId: this.state.emailId, phoneNumber: this.state.phoneNumber, permanentAddress: this.state.permanentAddress, presentAddress: this.state.presentAddress, age: this.state.age, dateOfBirth: this.state.dateOfBirth, martialStatus: this.state.martialStatus, joinedDate: this.state.joinedDate, assignedJobRole: this.state.assignedJobRole, experiencedAboutVehicle: this.state.experiencedAboutVehicle};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        VechileService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeRegistrationIdHandler= (event) => {
        this.setState({registrationId: event.target.value});
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    
    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }
    
    changePermanentAddressHandler= (event) => {
        this.setState({permanentAddress: event.target.value});
    }
    
    changePresentAddressHandler= (event) => {
        this.setState({presentAddress: event.target.value});
    }
    
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    
    changeDateOfBirthHandler= (event) => {
        this.setState({dateOfBirth: event.target.value});
    }
    
    changeMartialStatusHandler= (event) => {
        this.setState({martialStatus: event.target.value});
    }
    
    changeJoinedDateHandler= (event) => {
        this.setState({joinedDate: event.target.value});
    }
    
    changeAssignedJobRoleHandler= (event) => {
        this.setState({assignedJobRole: event.target.value});
    }
    
    changeExperiencedAboutVehicleHandler= (event) => {
        this.setState({experiencedAboutVehicle: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Registration Id: </label>
                                            <input placeholder="Registration Id" name="RegistrationId" className="form-control" 
                                                value={this.state.registrationId} onChange={this.changeRegistrationIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="FirstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="Gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Id" name="EmailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone Number" name="PhoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Permanent Address: </label>
                                            <input placeholder="Permanent Address" name="PermanentAddress" className="form-control" 
                                                value={this.state.permanentAddress} onChange={this.changePermanentAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Present Address: </label>
                                            <input placeholder="Present Address" name="PresentAddress" className="form-control" 
                                                value={this.state.presentAddress} onChange={this.changePresentAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="Age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date Of Birth: </label>
                                            <input placeholder="Date Of Birth" name="DateOfBirth" className="form-control" 
                                                value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Martial Status: </label>
                                            <input placeholder="Martial Status" name="MartialStatus" className="form-control" 
                                                value={this.state.martialStatus} onChange={this.changeMartialStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Joined Date: </label>
                                            <input placeholder="Joined Date" name="JoinedDate" className="form-control" 
                                                value={this.state.joinedDate} onChange={this.changeJoinedDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Assigned Job Role: </label>
                                            <input placeholder="Assigned Job Role" name="AssignedJobRole" className="form-control" 
                                                value={this.state.assignedJobRole} onChange={this.changeAssignedJobRoleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Experienced About Vehicle: </label>
                                            <input placeholder="Experienced About Vehicle" name="ExperiencedAboutVehicle" className="form-control" 
                                                value={this.state.experiencedAboutVehicle} onChange={this.changeExperiencedAboutVehicleHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
