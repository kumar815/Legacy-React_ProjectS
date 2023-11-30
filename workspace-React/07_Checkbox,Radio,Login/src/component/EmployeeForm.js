import React, { Component } from "react";

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            image: "",
            country: "",
            phoneNumber: "",
            email: "",
            department: "",
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Send the employee details to the server via an API call for storage.
        // You can implement the API part as needed.
        // Example API call: axios.post('/api/employees', this.state);
    }

    render() {
        return ( <
            div >
            <
            h2 > Add Employee < /h2> <
            form onSubmit = { this.handleSubmit } >
            <
            label > ID:
            <
            input type = "text"
            name = "id"
            value = { this.state.id }
            onChange = { this.handleInputChange }
            /> < /
            label > <
            br / >
            <
            label > Name:
            <
            input type = "text"
            name = "name"
            value = { this.state.name }
            onChange = { this.handleInputChange }
            /> < /
            label > <
            br / >
            <
            label > Image URL:
            <
            input type = "text"
            name = "image"
            value = { this.state.image }
            onChange = { this.handleInputChange }
            /> < /
            label > <
            br / >
            <
            label > Country:
            <
            input type = "text"
            name = "country"
            value = { this.state.country }
            onChange = { this.handleInputChange }
            /> < /
            label > <
            br / >
            <
            label > Phone Number:
            <
            input type = "text"
            name = "phoneNumber"
            value = { this.state.phoneNumber }
            onChange = { this.handleInputChange }
            /> < /
            label > <
            br / >
            <
            label > Email:
            <
            input type = "email"
            name = "email"
            value = { this.state.email }
            onChange = { this.handleInputChange }
            /> < /
            label > <
            br / >
            <
            label > Department:
            <
            input type = "text"
            name = "department"
            value = { this.state.department }
            onChange = { this.handleInputChange }
            /> < /
            label > <
            br / >
            <
            button type = "submit" > Submit < /button> < /
            form > <
            /div>
        );
    }
}

export default EmployeeForm;