import React from "react";
import viewInformation from "./viewInformation";

function Table (props) {
    return (
        <div className="wrapper-table">
            <table>
                <thead>
                    <tr>
                        <th onClick={ props.sortUsers } data-name="id">Id</th>
                        <th onClick={ props.sortUsers } data-name="firstName">FirstName</th>
                        <th onClick={ props.sortUsers } data-name="lastName">LastName</th>
                        <th onClick={ props.sortUsers } data-name="email">Email</th>
                        <th onClick={ props.sortUsers } data-name="phone">Phone</th>
                    </tr>
                </thead>
                <tbody>
                {props.usersData.map((user, i) => {
                    return (
                        <tr key={i} onClick={ () => { viewInformation(user, props.userDataInformation, props.setUserDataInformation)} }>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;