import React, { Component } from 'react';
import moment from 'moment';

class TweetItem extends Component {
    render() {
        const value = this.props.value;
        
        return (
            <div className="tweet">
                <div className="row relative">
                    <img className="tweet-avatar" src={value.author.avatarUrl} alt="avatar" />
                    <h4><b>{value.author.name}</b></h4>
                    <h5>@{value.author.username}</h5>
                    <h5>{moment(value.createdAt).calendar()}</h5>
                </div>
                <p>{value.content}</p>
            </div>
        );
    }
}

export default TweetItem;