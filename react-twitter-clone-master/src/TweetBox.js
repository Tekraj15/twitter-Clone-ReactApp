import React, { useState } from 'react'
import "./TweetBox.css";
import {Avatar,Button} from "@material-ui/core";
import db from "./firebase";

function TweetBox() {

    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: 'Tek Raj Awasthi',
            username: 'dotpyarmy',
            verfied: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://lh3.googleusercontent.com/ogw/ADGmqu8gmilvGnLOdckMbWSY5S5LsKgdzoUsnlxk__oSqA=s192-c-mo"
        });

        setTweetMessage("");
        setTweetImage("");
    }
    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8gmilvGnLOdckMbWSY5S5LsKgdzoUsnlxk__oSqA=s192-c-mo" />
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's up ?" 
                type="text" ></input>
                </div>
                <input 
                value={tweetImage}
                onChange={e => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URL">
                </input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
