import React from 'react';

class GithubProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( <
            React.Fragment >
            <
            div className = 'row' >
            <
            div className = 'col-md-3' >
            <
            GithubProfileCard GithubProfile = { this.props.GithubProfile }
            /> < /
            div > <
            div className = 'col-md-9' >
            <
            GithubProfileDetails GithubProfile = { this.props.GithubProfile }
            /> < /
            div > < /
            div > <
            /React.Fragment>

        );
    }
}

export default GithubProfile;