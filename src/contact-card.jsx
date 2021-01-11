import React from 'react'

class ContactCard extends React.Component {
    render() {
        return( <div class="contact-card">
                <h1>Name {this.props.name}</h1>
                <h1>Phone {this.props.phone}</h1>
                <h1>Email {this.props.email}</h1>
                </div>
        ) 
    }
}

export default ContactCard