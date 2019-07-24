import React, { Component } from 'react'

import Alert from 'react-bootstrap/Alert'

/**
 * Alert
 * used to display msg
 */
class PetAlert extends Component{
    state = {
        visible: true,
    }

    toggle = () => {
        this.setState(previousState => ( {visible: !previousState.visible }))
    }

    render(){
        if(!this.state.visible){
            return null;
        }
        return(
            <Alert className='text-center' variant={this.props.bg} onClose={() => this.toggle()} dismissible>
                <Alert.Heading>{this.props.header}</Alert.Heading>
                <p>{this.props.children}</p>
            </Alert>
        )
    }
}

export default PetAlert
