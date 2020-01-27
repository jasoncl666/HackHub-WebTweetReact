import React, {Component} from 'react';

import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';

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
                <input className="input-profile" type={this.props.type} placeholder={this.props.value} onChange={this.props.onChangeFunc}></input>
            </div>
        );
    }
}

export default FormElement;