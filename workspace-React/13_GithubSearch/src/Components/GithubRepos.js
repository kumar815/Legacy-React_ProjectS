import React from 'react';

class GithubRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { GithubRepos } = this.props;
        return ( <
                React.Fragment >
                <
                div className = 'card' >
                <
                div className = 'card-header' >
                <
                p className = 'h4' > Yours Repositories < /p> < /
                div > <
                div className = 'card-body' >
                <
                ul className = 'list-group' > {
                    GithubRepos.map((repo) => {
                            return ( <
                                React.Fragment >
                                <
                                li className = 'list-group-item' >
                                <
                                div className = 'd-flex justify-content-between' >
                                <
                                span className = 'h5' >
                                <
                                a href = { repo.html_url }
                                target = '_blank' > { repo.html_url }
                            } < /a> < /
                            span > <
                                span className = 'badge badge-info mx-5' > { repo.stargazers_count }
                            Stars < /span> <
                            span className = 'badge badge-warning mx-5' > { repo.watchers_count }
                            Watches < /span> < /
                            div > <
                                /li> < /
                            React.Fragment >
                        )
                    })
            } <
            /ul> <
        pre > < /
        div > <
            /div> < /
        React.Fragment >
    );
}
}

export default GithubRepos;