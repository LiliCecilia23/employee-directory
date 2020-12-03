import React, { Component } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../utils/API";

class Table extends Component {
    state = {
        employees: [],
        sortBy: "first"
    };

    componentDidMount() {
       this.loadUsers();
    }  
    
    firstNameSort = () => {
        const employees = this.state.employees.sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
        this.setState({ employees: employees });
    };

    lastNameSort = () => {
        const employees = this.state.employees.sort((a, b) =>
          a.name.last.localeCompare(b.name.last)
        );
        this.setState({ employees: employees });
    };

    emailSort = () => {
        const employees = this.state.employees.sort((a, b) =>
          a.email.localeCompare(b.email)
        );
        this.setState({ employees: employees });
    }
    
    loadUsers = () => {
        API.getRandomUsers()
        .then(res => this.setState({ employees: res.data.results}))
        .catch(err => console.log(err));
    }
    
    render(){
        
        return(
            <div className="rounded mx-5">
                <table className="table table-striped table-dark rounded">
                    <thead>
                        <tr>
                        <th scope="col" className="text-info">PHOTO</th>
                        <th scope="col"><button className="btn btn-info" data-value="name.first" onClick={this.firstNameSort}>FIRST</button></th>
                        <th scope="col"><button className="btn btn-info" data-value="name.last" onClick={this.lastNameSort}>LAST</button></th>
                        <th scope="col"><button className="btn btn-info" data-value="email" onClick={this.emailSort}>EMAIL</button></th>
                        <th scope="col" className="text-info">CELL</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {this.state.employees.map(employee => (
                            
                            <tr>
                                <th scope="row" key={employee.email}><img src={employee.picture.thumbnail} alt="employee" className="rounded"></img></th>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                            </tr>
                    
                        ))}
                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;