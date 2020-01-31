import React, {Component} from 'react';

class UserAvatar extends Component {

    render() {

        const {
            avatar
        } = this.props;

        return(
            <div className="img-container">
                <img className="user-avatar" src={avatar} alt="webdxd"/>
            </div>
        );
    }
}

export default UserAvatar;