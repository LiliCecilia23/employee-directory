import React, { Component } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../utils/API";

class Table extends Component {
    state = {
        employees: [],
        // sortBy: id
    };

    componentDidMount() {
       this.loadUsers();
    }  
    
    handleBtnClick = event => {
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        const newState = { ...this.state };

        function sort(sortBy) {
            
        }

        // if (btnType === "id") {
        //     newState.sortBy = id;
        // }
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
                        <th scope="col">PHOTO</th>
                        <th scope="col"><button className="btn btn-info" data-value="first">FIRST</button></th>
                        <th scope="col"><button className="btn btn-info" data-value="last">LAST</button></th>
                        <th scope="col"><button className="btn btn-info" data-value="email">EMAIL</button></th>
                        <th scope="col"><button className="btn btn-info" data-value="cell">CELL</button></th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {this.state.employees.map(employee => (
                            
                            <tr>
                                <th scope="row"><img src={employee.picture.thumbnail} alt="employee" className="rounded"></img></th>
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