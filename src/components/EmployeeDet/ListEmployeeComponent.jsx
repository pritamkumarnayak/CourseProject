import React, { Component } from 'react'
import VechileService from '../../services/VechileService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        VechileService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        VechileService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Driver List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add New Driver</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee Registration Id</th>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Gender</th>
                                    <th> Employee Email Id</th>
                                    <th> Employee Phone Number</th>
                                    <th> Employee Assigned Job Role</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.registrationId}</td>
                                             <td> {employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.gender}</td>
                                             <td> {employee.emailId}</td>
                                             <td> {employee.phoneNumber}</td>
                                             <td> {employee.assignedJobRole}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
