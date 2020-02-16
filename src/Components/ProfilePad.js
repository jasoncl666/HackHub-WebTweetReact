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

        let {
            profile: {
                name,
                country,
                bio,
                avatarUrl
            }
        } = this.props

        // const name = profile.name;
        // const country = profile.location;
        // const bio = profile.bio;
        avatarUrl = avatarUrl || 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/';

        return (

            <div className='profile-content'>

                <UserAvatar avatar={avatarUrl}></UserAvatar>

                <div className='info'>
                    <h3><b>{name? "Hello, " + name : "Welcome to Twitter"}</b></h3>
                    <h4>{country}</h4>
                    <h4>{bio}</h4>
                </div>
            </div>
        );
    }
}

export default ProfilePad;