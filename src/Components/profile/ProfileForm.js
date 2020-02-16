import React, {Component} from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import UserAvatar from '../UserAvatar'
import FormElement from '../FormElement'
import Axios from 'axios';

import { baseUrl } from '../../config';


/**
 * 
 * Profile Edit Page 
 * 
 * Only 
 */

 class ProfileForm extends Component {

    constructor(props){

        super(props);

        this.state = {
            name: props.profile.name,
            location: props.profile.location || '',
            bio: props.profile.bio || '',
            avatarUrl: props.profile.avatarUrl
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    }

    fromUpdate = (updateValue) => {

        let prevState = this.profile;
        let formContent = {
            ...prevState,
            ...updateValue
        }

        this.setState(formContent);
    }

    handleNameChange = (e) => {
        this.fromUpdate({name: e.target.value})
    }

    handleLocationChange = (e) => {
        this.fromUpdate({location: e.target.value})
    }

    handleBioChange = (e) => {
        this.fromUpdate({bio: e.target.value})
    }

    handleAvatarChange = (e) => {
        this.fromUpdate({avatarUrl: e.target.value})
    }


    handleProfileUpdate = (event) => {

        let that = this;

        console.log("update profile: ")
        console.log(this.state)

        Axios.put(baseUrl+"/profile/", this.state, {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        }).then(res => {
            if (res.data.error) {
                console.log(res.data.error)
            } else {
                console.log(res);
                that.props.handleProfileUpdate(res.data.profile)
            }
        })
    }

    render() {

        const{
            avatar
        } = this.props


        return (

            <div className="container">   

                <div className="col-2of5 bg-white">

                    <UserAvatar avatar={avatar}></UserAvatar>

                    <div className="row profile-update">
                        <form id="profile-form">

                            <FormElement type={"text"} label={"Name"} value={this.state.name} onChangeFunc={this.handleNameChange}></FormElement>
                            <FormElement type={"text"} label={"Country"} value={this.state.location? this.state.location : "enter your location"} onChangeFunc={this.handleLocationChange}></FormElement>

                            <div>
                                <label>Bio</label>
                                <textarea rows="4" placeholder={this.state.bio? this.state.bio : "Tell us about yourself"} onChange={this.handleBioChange}></textarea>
                            </div> 
                            <button className="btn-primary" type="button" onClick={this.handleProfileUpdate}>Update</button>
                            <Link to="/">Main Page</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default ProfileForm;