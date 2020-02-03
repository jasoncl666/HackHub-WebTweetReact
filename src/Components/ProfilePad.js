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

    state = {
        avatar:  '',
        username: '',
        brithday: ''
    }

    render() {

        return (

            <div className='profile-content'>

                <UserAvatar avatar={this.props.avatar}></UserAvatar>
                
                <div className='info'>
                    <h2> New User</h2>
                </div>
            </div>
        );
    }
}

export default ProfilePad;