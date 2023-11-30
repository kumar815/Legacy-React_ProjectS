import React from 'react';
import Axios from 'axios';
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            errorMessage: ''
        };
    }


    componentDidMount = () => {
        //this.getAllUsers();
    }

    clickGetUser = () => {
        this.getAllUsers();

    }
    getAllUsers = () => {
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                users: response.data
            })
        }).catch((error) => {
            console.error(error);
            this.setState({
                ...this.state,
                errorMessage: error
            })
        })
    }
    render() {
        return ( <
            React.Fragment >
            <
            section className = "p-3" >
            <
            div className = "container mb-4" >
            <
            div className = "row" >
            <
            div className = "col" >
            <
            div className = "card rgba-green-light" >
            <
            div className = "card-body " >
            <
            p className = "h4" > UserList < /p> <
            p className = 'lead' > this is fetch the date from json palceholder fake api server < /p> <
            button onClick = { this.clickGetUser }
            className = 'btn btn-blue btn-sm' > Get Users < /button> < /
            div > < /
            div >
            <
            div className = 'row' >
            <
            div className = 'col' > {
                this.state.users.length > 0 ?
                <
                React.Fragment >
                <
                table className = 'table table-hover text-primary text-center table-striped' >
                <
                thead className = 'bg-dark text-primary' >
                <
                tr >
                <
                th > ID < /th> <
                th > NAME < /th> <
                th > USERNAME < /th> <
                th > EMAIL < /th> <
                th > < /th> <
                th > PHONE < /th>  <
                th > ADDRESS < /th>  < /
                tr > <
                /thead> <
                tbody >

                {
                    this.state.users.map((user) => {
                        return ( <
                            tr key = { user.id } >
                            <
                            td > { user.id } < /td> <
                            td > { user.name } < /td> <
                            td > { user.username } < /td> <
                            td > { user.email } < /td> <
                            td > { user.city } < /td> <
                            td > { user.phone } < /td> <
                            td > { user.website } < /td> < /
                            tr >
                        )
                    })
                } <
                /tbody> < /
                table >

                <
                /React.Fragment>:null
            }

            <
            /
            div > < /
            div >

            <
            /div> < /
            div > <
            /div> < /
            section >
            <
            /
            React.Fragment >

        );
    }
}

export default UserList;