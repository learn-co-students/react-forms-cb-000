import React from 'react';

class DisplayData extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.formData.firstName}</h1>
                <h2>{this.props.formData.lastName}</h2>
            </div>
        )
    }
}

export default DisplayData