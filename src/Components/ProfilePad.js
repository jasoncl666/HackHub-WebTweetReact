import React, {Component} from 'react';

import UserAvatar from './UserAvatar';
/**
 * Profile Pad Component within a Page
 * 
 * Displaying current User's basic information including:
 *      1. avatar img
 *      2. username
 *      3. description
 * 
 * Authentication required to show info above, otherwise:
 *      show some words
 */

class ProfilePad extends Component {

    render() {

        const{
            profile
        } = this.props

        const name = profile.name;
        const country = profile.location;
        const bio = profile.bio;
        const avatarUrl = profile.avatarUrl;

        return (

            <div className='profile-content'>

                <UserAvatar avatar={"../"+avatarUrl}></UserAvatar>
                
                <div className='info'>
                    <h2> {"Hello, " + name}</h2>
                    <h4>{country}</h4>
                    <h4>{bio}</h4>
                </div>
            </div>
        );
    }
}

export default ProfilePad;