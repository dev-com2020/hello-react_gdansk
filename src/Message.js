import React from "react";
import "./Message.css";

class Message extends React.Component {
    render() {
        let message;
        let today = new Date().getDay();
    if (today === 0) {
        message = <div className="sorry">W niedzielę mamy wolne...</div>;
    } else {
        message = <div className="happy">W czym możemy pomóc...</div>;
    }
        return message;
    }
}

export default Message;