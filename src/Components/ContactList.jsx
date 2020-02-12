import React from 'react'

class ContactList extends React.Component {
    render() {
        return (
            <div>
                {this.props.records.map((record, index) => (
                    <div key={index}>
                        <h4>{record.name}</h4>
                        <address>
                            {record.address}<br />
                            {record.city}, {record.state} {record.zip}
                        </address>
                        <div>
                            <a href={`tel:${record.phone}`}>{record.phone}</a>
                        </div>
                        <div>
                            <a href={`mailto:${record.email}`}>{record.email}</a>
                        </div>

                    </div>

                ))}
            </div>
        )
    }
}

export default ContactList