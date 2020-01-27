import React, {Component} from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import UserAvatar from './UserAvatar'
import FormElement from './FormElement'

import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';


/**
 * 
 * Profile Page 
 */

 class Profile extends Component {

    state = {
        content: "",
        FromEle1Label: "Gender",
        FromEle2Label: "Country",
        FromEle1Value: "Mr or Mrs",
        FromEle2Value: "your Location"
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleTextChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return (

            <div className="container">   

                <div className="col-2of5 bg-white">

                    <UserAvatar avatar={this.props.avatar}></UserAvatar>

                    <div className="row profile-update">
                        <form id="profile-form" onSubmit={this.handleSubmit}>

                            <FormElement type={"text"} label={this.state.FromEle1Label} value={this.state.FromEle1Value} onChangeFunc={this.handleTextChange}></FormElement>
                            <FormElement type={"text"} label={this.state.FromEle2Label} value={this.state.FromEle2Value} onChangeFunc={this.handleTextChange}></FormElement>

                            <div>
                                <label>Descriptioon</label>
                                <textarea rows="4" placeholder="Tell us about yourself" onChange={this.handleTextChange}></textarea>
                            </div> 
                            <button className="btn-primary" type="submit" id="update-btn" disabled={this.state.content? '' : 'disabled'}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Profile;