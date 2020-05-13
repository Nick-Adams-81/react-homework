import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card">
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Position:</strong> {props.position}
                    </li>
                    <li>
                        <strong>Salary:</strong> {props.salary}
                    </li>
                </ul>

            </div>

            <button onClick={() => props.removeEmployee(props.id)}
                id="remove"
                type="button"
                class="btn btn-light">Remove here
            </button>
        </div>
    );
}

export default EmployeeCard;
