import React from 'react';

class GithubProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { GithubProfile } = this.props;
        return ( <
            React.Fragment >
            <
            div className = 'card' >
            <
            img src = {
                this.props.GithubProfile.avatar_url alt = ""
                className = 'img-fluid'
            }
            /> <
            div className = 'card-body' >
            <
            p className = 'h4' > { GithubProfile.name } < /p> <
            small > { GithubProfile.bio } < /small><br/ >
            <
            a href = { GithubProfile.html_url }
            target = '_blank'
            className = 'btn btn-success  btn-sm' > Profile < /a> < /
            div > <
            /div> < /
            React.Fragment >
        );
    }
}

export default GithubProfileCard;