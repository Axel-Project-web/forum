//react
import { ChangeEvent, useState } from 'react';

//hooks
import { useChatSocket } from "./hooks/useChatSocket";

//styles
import styles from './global-styles.module.css';

//componets
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { Header } from './components/Header/Header';
import { BoardMessage } from './components/BoardMessage/BoardMessage';

//constant
import { EMPTY_FIELD, DEFAULT_USERNAME } from './constants/default';

export default function App() {

  const [message, setMessage] = useState<string>(EMPTY_FIELD);

  const {
    messages,
    sendMessage
  } = useChatSocket();
  
  function handleChange(e:ChangeEvent<HTMLInputElement>) { setMessage(e.target.value) }

  function handleClick() {
    if(message === EMPTY_FIELD) return alert("El campo no puede estar vacío.");

    const username:string | null = localStorage.getItem('username');

    if(!username) localStorage.setItem('username', DEFAULT_USERNAME);

    const messageToSend = {
      message,
      username: localStorage.getItem('username'),
    };

    setMessage(EMPTY_FIELD);
    sendMessage(messageToSend);
  }

  return(
    <div className = {styles.wrapper}>
      <Header/>
      <BoardMessage messages = {messages}/>
      <div className = {styles.entry}>
        <Input
          width ='100%'
          height = '40px' 
          value = {message}
          handleChange = {handleChange}
          placeholder = 'Write something...'
        />
        <Button
          height={40}
          label='send'
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}