//components
import Message from "../Message/Message";

//types
import { MessageType } from "../../types/types.generic";

//styles
import styles from './BoardMessage.module.css';

//interface
interface PropsType {
  messages: Array<MessageType>
}   

function BoardMessage({messages}: PropsType) {
    return (
    <div className = {styles.board}>
        {
          messages ? (messages.map(({message, username, id}: MessageType) => (
            <Message 
              key = {id} 
              message = {message}
              username ={username}  
            />
          ))) : (
            <p>Not messages yet.</p>
          )
        }
      </div>
    )
}

export {BoardMessage};