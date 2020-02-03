import React, {Component} from 'react';

/**
 * From Element consists of:
 *      1. Label (optional)
 *      2. input box with props 
 */

class FormElement extends Component {

    render() {

        const {
            label,
            type,
            value,
            onChangeFunc
        } = this.props

        if(label){
            return(
                <div>
                    <label>{label}</label>
                    <input className="input-profile" type={type} placeholder={value} onChange={onChangeFunc}></input>
                </div>
            )
        }

        else{
            return(
                <div>
                    <input className="input-profile" type={type} placeholder={value} onChange={onChangeFunc}></input>
                </div>
            ) 
        }
        
    }
}

export default FormElement;