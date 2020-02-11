import React, {Component} from 'react';
import {changeText, getMessages, postMessage} from "../../store/actions";
import {connect} from "react-redux";
import MessageBlock from "../../components/MessageBlock/MessageBlock";

import './Messages.css';

class Messages extends Component {
  componentDidMount() {
    this.props.getMessages();

    setInterval(() => {
      this.props.getMessages();
    }, 3000)
  }

  postMessageHandler = async event => {
    event.preventDefault();

    const data = {
      author: this.props.author,
      message: this.props.messageText,
    };

    this.props.postMessage(data);
  };

  render() {
    const messages = this.props.messages.map(message => (
      <MessageBlock
        author={message.author}
        message={message.message}
        key={message.id}
      />
    ));

    return (
      <div>
        {messages}
        <form className='messageInput' onSubmit={(event) => {this.postMessageHandler(event)}}>
          <input type="text" onChange={(event) => this.props.changeText(event.target.value)}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  author: state.author,
  messageText: state.messageText,
});

const mapDispatchToProps = dispatch => ({
  changeText: textData => dispatch(changeText(textData)),
  postMessage: messageData => dispatch(postMessage(messageData)),
  getMessages: () => dispatch(getMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);