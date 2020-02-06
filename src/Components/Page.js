import React, { Component } from 'react';
import Axios from 'axios';
import { baseUrl } from '../config';
// import moment from 'moment';

import Nav from './Nav'
import TweetList from './tweet/TweetList';
import ProfilePad from './ProfilePad';
import TweetPost from './tweet/TweetPost';



import '../css/columns.css';
import '../css/main.css';
import '../css/normalize.css';
// import '../css/fontawesome-all.css';

// import userAvatar from '../img/spongebob.png';

class Page extends Component {

    constructor(props) {

        super(props)

        this.state = {
            tweets: [],
            profile: {}
        }

        this.handleNewPost = this.handleNewPost.bind(this);
    }

    // raw testing function for sending a new post
    // fow now authentication is not required
    handleNewPost = (newPost) => {

        let tweets = this.state.tweets;

        tweets.unshift({
            // createdAt: moment().defaultFormat(),
            createAt: '2018-06-10T15:37:29.033Z',
            author: {
                avatarUrl: 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/',
                username: 'un-auth-User-1',
                name: 'unauth-U-1',
            },
            content: newPost,
            _id: Math.random().toString(36).substr(2, 9)
        })

        console.log(newPost)

        this.setState({
            tweets: tweets
        })
    }

    /**
     * Loading tweets and profile when mounting this page
     */
    componentWillMount = () => {

        const that = this;

        Axios.get(baseUrl+'/tweet')
        .then(res => {
            that.setState({
                tweets: res.data.tweets
            })
        })

        // Expect every time reload Page, profile is retrieved from server
        // Not sure if this mount function will be called each refresh
        Axios.get(baseUrl+'/profile', {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        })
        .then(res => {

            console.log("retriving profile !!")
            that.setState({
                profile: res.data.profile
            })
        })
    }

    /**
     * test for token update and profile update
     */
    testUpdate = () => {
        console.log("Page Token: " + this.props.token);
        console.log("Page Profile: ")
        console.log(this.state.profile)
        // return <Redirect to="/signup"/>
      }

    
    render() {

        const {
            avatar,
            handleLogout,
            token
        } = this.props

        return (
            <div>
                <Nav logo={avatar} handleLogout={handleLogout} token={token}/>
                <div className="container">
                    <div className="col-3of10 bg-white">
                        <ProfilePad profile={this.state.profile} />
                    </div>
                    <div className="col-3of5 bg-white">
                        {this.props.token && <TweetPost avatar={avatar} handleNewPost={this.handleNewPost} />}
                        <TweetList tweets={this.state.tweets}/>
                    </div>
                    <button onClick={this.testUpdate}> Test Update</button>
                </div>
            </div>
        )
    }
}

export default Page;