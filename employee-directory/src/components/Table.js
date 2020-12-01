import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Table(props){
    return(
        <div className="rounded mx-5">
            <table className="table table-striped table-dark rounded">
                <thead>
                    <tr>
                    <th scope="col"><button className="btn btn-info">ID</button></th>
                    <th scope="col"><button className="btn btn-info">FIRST</button></th>
                    <th scope="col"><button className="btn btn-info">LAST</button></th>
                    <th scope="col"><button className="btn btn-info">ROLE</button></th>
                    <th scope="col"><button className="btn btn-info">SALARY</button></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {props.employees.map(employee => (
                        
                        <tr>
                            <th scope="row" key={employee.id}>{employee.id}</th>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.role}</td>
                            <td>{employee.salary}</td>
                         </tr>
                    
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table;