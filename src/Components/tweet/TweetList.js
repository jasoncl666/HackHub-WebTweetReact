import React, { Component } from 'react';

import TweetItem from './TweetItem'

class TweetList extends Component {

    render() {

        const {
            tweets,
            curUser,
            token,
            handleTweetDelete
        } = this.props;

        return (
            <div>
                {tweets.map(tweet => <TweetItem value={tweet} key={tweet._id} curUser={curUser} handleTweetDelete={handleTweetDelete}/>)}
            </div>
        );
    }
}

export default TweetList;