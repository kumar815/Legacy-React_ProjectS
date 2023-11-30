import React from 'react';

class ContactCard extends React.Component {
    render() {
        const { selectedUser } = this.props;
        return ( <
            div className = 'card sticky-top' >
            <
            div className = 'card-header bg-primary' >
            <
            div className = 'p-3' / >
            <
            /div> <
            div className = 'card-body bg-warning' > {
                Object.keys(selectedUser).length > 0 ? ( <
                    React.Fragment >
                    <
                    ul className = 'list-group' >
                    <
                    li className = 'list-group-item list-group-item-primary' > { selectedUser.name } < /li> <
                    li className = 'list-group-item list-group-item-primary' > { selectedUser.email } < /li> <
                    li className = 'list-group-item list-group-item-primary' > { selectedUser.phone } < /li> <
                    li className = 'list-group-item list-group-item-primary' > { selectedUser.city } < /li> < /
                    ul > <
                    /React.Fragment>
                ) : null
            } <
            /div> < /
            div >
        );
    }
}

export default ContactCard;