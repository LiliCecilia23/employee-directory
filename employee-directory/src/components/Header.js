import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <div className="page-header text-center m-5">
            <h1>Employee Directory</h1>
            <p>Click buttons on top of the table to sort results</p>
        </div>
    )
}

export default Header;