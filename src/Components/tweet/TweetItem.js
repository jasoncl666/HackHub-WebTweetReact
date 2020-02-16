import React, { Component } from 'react';
import moment from 'moment';
import Axios from 'axios';
import { baseUrl } from '../../config';

class TweetItem extends Component {

    deleteTweet = () => {

        const token = this.props.token;
        let that = this

        console.log("delete Tweet");

        Axios.delete(baseUrl+"/tweet/"+this.props.value._id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            if (res.data.error){
                console.log(res.data.error)
            }else{
                that.props.handleTweetDelete()
            }
        })


        
    }

    render() {
        const {
            value,
            curUser
        } = this.props;
       
        const name = value.author.name;
        const username = value.author.username;
        const avatarUrl = value.author.avatarUrl || 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/';
        const id = value._id;

        // console.log("value: ")
        // console.log(value)
        
        


        return (
            <div className="tweet">
                <div className="row relative">
                    <img className="tweet-avatar" src={avatarUrl} alt="avatar" />
                    <h4><b>{name}</b></h4>
                    <h5>@{username}</h5>
                    <h5>{moment(value.createdAt).calendar()}</h5>
                </div>
                <p>{value.content}</p>
                {(curUser == username)? <button type="button" id="delete-btn" onClick={this.deleteTweet}>Delete</button> : ""}
            </div>
        );
    }
}

export default TweetItem;