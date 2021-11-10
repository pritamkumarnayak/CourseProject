import axios from "axios";

const VECHILE_API_BASE_URL = "http://localhost:8080/api/v1/vechile"
const URL_REP = "http://localhost:8080/api/v1/report"
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class VechileService {

    // Vechile
    getVechile(){
        return axios.get(VECHILE_API_BASE_URL);
    }
    createVechile(vechile){
        return axios.post(VECHILE_API_BASE_URL, vechile);
    }
    getVechileById(vechileId){
        return axios.get(VECHILE_API_BASE_URL + '/'  + vechileId);
    }
    
    updateVechile(vechile, vechileId){
        return axios.put(VECHILE_API_BASE_URL + '/' + vechileId, vechile)
    }
    deleteVechile(vechileId){
        return axios.delete(VECHILE_API_BASE_URL + '/' + vechileId);
    }

    // Employee

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    // REPORT
    getVechileReport(){
        return axios.get(URL_REP);
    }
    createVechileReport(report){
        return axios.post(URL_REP, report);
    }
    getVechileReportById(reportId){
        return axios.get(URL_REP + '/'  + reportId);
    }
    
    updateVechileReport(report, reportId){
        return axios.put(URL_REP + '/' + reportId, report);
    }
    deleteVechileReport(reportId){
        return axios.delete(URL_REP + '/' + reportId);
    }
}

export default new VechileService()