import React from 'react';
import axios, { Axios } from 'axios';
import { CLIENT_ID } from './credentail/github.credentaiol';
import { CLIENT_SECRET } from './credentail/github.credentaiol';
class GithubProfileSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUsername: '',
            githubProfile: {},
            githubRepos: [],
            errorMessage: ''
        };
    }

    clickSearch = (e) => {
        e.preventDefault(); //to avoiod page refresh
        this.searchProfileInfo(this.state.githubUsername);
        this.searchReposInfo(this.state.githubUsername);
    }
    searchProfileInfo = (githubUsername) => {
        let dataURL = 'https://api.github.com/users/${githubUsername}?client_id=${CLIENT_ID}&client_secret=&{CLIENT_SECRET}';
        Axios.get(dataURL).then((response: AxiosResponse)): => {
            this.setState({
                ...this.state,
                githubProfile: response.data
            })
        } catch (error) => {
            this.setState({
                ...this.state,
                errorMessage: error
            })
        }
    }
}
searchReposInfo = (githubUsername) => {
    let dataURL = 'https://api.github.com/users/${githubUsername}/repos?client_id=${CLIENT_ID}&client_secret=&{CLIENT_SECRET}';
    Axios.get(dataURL).then((response: AxiosResponse < any > )) => {
        this.setState({
            ...this.state,
            githubRepos: response.data
        })
    }.catch(error) => {
        this.setState({
            ...this.state,
            errorMessage: error
        })
    }
}

}
render() {
    return ( <
        React.Fragment >
        <
        section className = 'p-3' >
        <
        div className = 'container' >
        <
        div className = 'row' >
        <
        div className = 'col' >
        <
        p className = 'h3 text-primary' > GithubProfile Search App < /p> <
        p className = 'lead' > this is searching the github profile inside the history search < /p> <
        form className = 'form-inline'
        onSubmit = { this.clickSearch } >
        <
        div className = 'form-group' >
        <
        input name = "githubUsername"
        value = { this.state.githubUsername }
        onChange = { e => this.setState({ githubUsername: e.target.value }) }
        type = 'text'
        className = 'form-control'
        placeholder = 'search app' / >
        <
        /div> <
        input type = 'submit'
        className = 'btn btn-primary btn-ms'
        value = "search" / >
        <
        /form>
        //this.state.githubUsername
        <
        /div> < /
        div > <
        /div> < /
        section >
        <
        section className = 'container' >
        <
        div className = 'row' >
        <
        div className = 'col' >

        {
            Object.keys(this.state.githubProfile).length > 0 ?
            <
            React.Fragment >
            <
            githubProfile githubProfile = { this.state.githubProfile }
            />

            <
            /React.Fragment>:null
        }

        <
        pre > { JSON.stringify(this.state.githubProfile) } < /pre> <
        pre > { JSON.stringify(this.state.githubRepos) } < /pre> < /
        div > <
        /div> < /
        section >

        <
        section className = 'container' >
        <
        div className = 'row' >
        <
        div className = 'col' >

        {
            this.state.githubRepos.length > 0 ?
            <
            React.Fragment >
            <
            githubRepos githubRepos = { this.state.githubRepos }
            />

            <
            /React.Fragment>:null
        }

        <
        pre > { JSON.stringify(this.state.githubProfile) } < /pre> <
        pre > { JSON.stringify(this.state.githubRepos) } < /pre> < /
        div > <
        /div> < /
        section >


        <
        /React.Fragment>
    );
}
}


export default GithubProfileSearch;