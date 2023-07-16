import React from "react";

function Table (props) {
    return (
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
                    <tr key={i}>
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
    );
};

export default Table;