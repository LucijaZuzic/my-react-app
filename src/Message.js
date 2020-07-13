import React, { useState } from "react";
import './Message.css';

const messages = [];

const Message = (props) => {
    const [msg, setMessages] = useState([...messages]);
    if (msg.length > 0) {
        return (
            <div>
                <h2 className="messages">Messages</h2>
                <button className="clear"
                                onClick = {() => {messages.splice(0);setMessages([...messages])}}>clear</button>
                                
                <button className="clear"
                                onClick = {() => {setMessages([...messages])}}>update</button>
                {msg.map((item, index) =>  (
                        <div key = {index} > {msg[index]} </div>
                    
                ))}
            </div>
        );
    } else {
        return(<button className="clear" onClick = {() => {setMessages([...messages])}}>update</button>)
    }
}


export default Message;
export { messages };
