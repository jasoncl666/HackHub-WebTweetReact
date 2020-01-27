import React, {Component} from 'react';

class UserAvatar extends Component {

    render() {

        return(
            <div className="row img-container">
                <img className="logo" src={this.props.avatar} alt="webdxd"/>
            </div>
        );
    }
}

export default UserAvatar;