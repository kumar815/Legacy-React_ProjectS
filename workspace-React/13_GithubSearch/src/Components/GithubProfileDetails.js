import React from 'react';

class GithubProfileDetails extends Component {
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
            div className = 'card-header' >
            <
            span className = 'badge badgee-success mx-2' > { GithubProfile.follower }
            Followers < /span> <
            span className = 'badge badgee-warning mx-2' > { GithubProfile.public_repo }
            Repos < /span> <
            span className = 'badge badgee-secondary mx-2' > { GithubProfile.public_gists }
            Gists < /span> <
            span className = 'badge badgee-danger mx-2' > { GithubProfile.following }
            Following < /span> <
            span className = 'badge badgee-info mx-2' > { GithubProfile }
            anand < /span> < /
            div >

            <
            div className = 'card-body' >
            <
            ul className = 'list-group' >
            <
            li className = 'list-group-item' >
            Name: < span className = 'font-weight-bold' > { GithubProfile.name } < /span> < /
            li > <
            li className = 'list-group-item' >
            Location: < span > { GithubProfile.location } < /span> < /
            li > <
            li className = 'list-group-item' >
            Email: < span > { GithubProfile.email } < /span> < /
            li > <
            li className = 'list-group-item' >
            Company: < span > { GithubProfile.company } < /span> < /
            li > <
            li className = 'list-group-item' >
            Blog: < span >
            <
            a href = { GithubProfile.blog }
            target = '_blank' > Blog < /a> < /
            span > <
            /li> <
            li className = 'list-group-item' >
            Member Since: < span > { GithubProfile.created_at } < /span> < /
            li > <
            li className = 'list-group-item' >
            Profile URL: < span >
            <
            a href = { GithubProfile.html_url }
            target = '_blank' > { GithubProfile.html_url } < /a></span >
            <
            /li> < /
            ul >
            <
            /div> < /
            div > <
            /React.Fragment>
        );
    }
}

export default GithubProfileDetails;