import React, { useState, useEffect} from 'react';
import '../App.css';
import {  FormControl, InputLabel, Input } from '@material-ui/core';

import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function Main() {
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        db.collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
        })

    },[])
    
    useEffect(() => {
        setUsername(prompt('Please Enter your name'))
    },[] )

   const sendMessage = (e) => {
        e.preventDefault();

        db.collection('messages').add({
            message:input,
            username:username,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessages([...messages, {username:username,message:input}]);
        console.log(messages);
        setInput('');
    }
   
    return (
        <div>
            <img src="https://lh3.googleusercontent.com/proxy/j28z3a4gERxjBYgbSuMi-wny_lXr3sl49xmuLjD5M0802fozBs3gGaNfKI3whRCOAxH8Dg1SCrJi3Yf3ahNjz5YWxscfn0dI9IH7xC72OKx5CxeqA2A" alt='Facebook logo' width='100' height='100' />
            <h3>Welcome {username} </h3>
            
            <form className="app__form" >
            <FormControl className='app__formControl'>
                <InputLabel>Enter message ...</InputLabel>
                <Input className='app__input' onChange = {(e) => setInput(e.target.value) } value={input} />
                
                <IconButton className='app__iconButton' type='form' onClick = {sendMessage} color='primary'
                            variant='contained' disabled={!input} >
                    <SendIcon />
                </IconButton>
            </FormControl>
            </form>

            <FlipMove>
            {
                messages.map(({id,message}) => 
                        <Message key={id} username={username} message={message}  />
                    
                )
            }
            </FlipMove>
        </div>
    )
}

export default Main
