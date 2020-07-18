import React, { useState, forwardRef, useImperativeHandle} from "react";
import './Message.css';

const Message = forwardRef((props, ref) => {
    const [messages, setMessages] = useState([]);
    const clear = () => {
        setMessages([]);
    };
    const add = (message)  => {
        const copyMessages = messages
        copyMessages.push(message)
        setMessages([...copyMessages])
    };
    useImperativeHandle(ref, () => {
        return {
         add: add,
        }
    });
    if (messages.length) {
        return (
            <div>
                <h2 className="messages">Messages</h2>
                <button className="clear" onClick = {() => {clear()}}>clear</button>
                {messages.map((message, index) =>  (
                        <div key = {index} > {message} </div>
                ))}
            </div>
        );
    } else {
        return(<div></div>);
    }
})

export default Message;
