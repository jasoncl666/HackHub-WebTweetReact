import React, { Component } from 'react';
import Axios from 'axios';
import TweetList from './TweetList';
import TweetItem from './TweetItem';
import ProfilePad from './ProfilePad';
import TweetPost from './TweetPost'

import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';

import userAvatar from '../img/spongebob.png';

class Page extends Component {

    state = {
        tweets: [],
        content: ''
    };

    componentWillMount = () => {

        const that = this;

        Axios.get('https://tweet-api.webdxd.com/tweet')
        .then((response) => {

            // console.log(response.data.tweets[0].author.avatarUrl);

            that.setState({
                tweets: response.data.tweets
            })
        })
    }
 

    handleTextChange = (e) => {

        this.setState({
            content: e.target.value
        });

    }

    render() {

        // console.log(this.state.tweets);

        return (
            <div className="container">
                <div className="col-3of10 bg-white">
                    <ProfilePad avatar={userAvatar}></ProfilePad>
                </div>
                <div className="col-3of5 bg-white">
                    
                    <TweetPost avatar={this.props.avatar}/>

                    {/* dont render TweetList rn as Mongo Server is down */}
                    <TweetList tweets={this.state.tweets}/>
                </div>
            </div>
        );
    }
}

export default Page;