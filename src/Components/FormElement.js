import React, {Component} from 'react';

/**
 * From Element consists of:
 *      1. Label
 *      2. input box with props 
 */

class FormElement extends Component {

    render() {
        return(
            <div>
                <label>{this.props.label}</label>
                <input className="input-profile" type={this.props.type} placeholder={this.props.value}></input>
            </div>
        )
    }
}

export default FormElement;