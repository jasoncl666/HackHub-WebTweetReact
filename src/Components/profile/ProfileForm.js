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
            name: "",
            location: "",
            bio: "",
            avatarUrl: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
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

    handleCountryChange = (e) => {
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
            },
        }).then(res => {
            if (res.data.error) {
                console.log(res.data.error)
            } else {
                console.log(res);
                that.props.handleProfileUpdate(res.data.profile)
            }
        })
    }

    componentWillMount = () =>{ 

        const {profile} = this.props

        this.setState({
            name: profile.name,
            location: profile.location,
            bio: profile.bio,
            avatarUrl: profile.avatarUrl
        })
    }

    render() {

        const{
            avatar,
            token
            // profile
        } = this.props

        // const name = profile.name;
        // const country = profile.country;
        // const bio = profile.country;
        // const avatarUrl = profile.avatarUrl;


        return (

            <div className="container">   

                <div className="col-2of5 bg-white">

                    <UserAvatar avatar={avatar}></UserAvatar>

                    <div className="row profile-update">
                        <form id="profile-form">

                            <FormElement type={"text"} label={"Name"} value={this.state.name} onChangeFunc={this.handleNameChange}></FormElement>
                            <FormElement type={"text"} label={"Country"} value={"enter your country"} onChangeFunc={this.handleCountryChange}></FormElement>

                            <div>
                                <label>Bio</label>
                                <textarea rows="4" placeholder="Tell us about yourself" onChange={this.handleBioChange}></textarea>
                            </div> 
                            <Link to="/" className="btn-primary" onClick={this.handleProfileUpdate}>Update</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default ProfileForm;