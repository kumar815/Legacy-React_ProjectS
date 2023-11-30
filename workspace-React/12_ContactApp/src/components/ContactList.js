import React from 'react';
import Axios from 'axios';

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            errorMessage: ''
        };
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = async() => {
        try {
            let dataURL = 'https://jsonplaceholder.typicode.com/users';
            let response = await Axios.get(dataURL);
            this.setState({
                ...this.state,
                users: response.data
            });
        } catch (error) {
            console.error(error);
            this.setState({
                ...this.state,
                errorMessage: error
            });
        }
    }

    clickUser = (user) => {
        this.props.sendUser(user);
    }

    render() {
        return ( <
            React.Fragment >
            <
            table className = 'table table-hover text-center table-striped table-primary' >
            <
            thead className = 'bg-dark text-primary' >
            <
            tr >
            <
            th > sno < /th> <
            th > name < /th> <
            th > address < /th> <
            th > city < /th> <
            th > location < /th> < /
            tr > <
            /thead> <
            tbody > {
                this.state.users.map((user) => ( <
                    tr key = { user.id }
                    onClick = {
                        () => this.clickUser(user)
                    } >
                    <
                    td > { user.id } < /td> <
                    td > { user.name } < /td> <
                    td > { user.username } < /td> <
                    td > { user.email } < /td> <
                    td > { user.address.city } < /td> < /
                    tr >
                ))
            } <
            /tbody> < /
            table >
            <
            /React.Fragment>

        );
    }
}

export default ContactList;