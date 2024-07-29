//react
import { ChangeEvent, useState } from 'react';

//styles
import style from './header.module.css';

//assets/icons
import user_icon from '../../assets/icons/user-icon.svg';
import edit_icon from '../../assets/icons/edit-icon.svg';
import done_icon from '../../assets/icons/done-icon.svg';

//constant
import { DEFAULT_USERNAME } from '../../constants/default';

//init state
const INIT_STATE: string = localStorage.getItem('username') || DEFAULT_USERNAME;
localStorage.setItem('username', "Anon");

function Header() {
    const [mode, setMode] = useState<boolean>(true);
    const [text, setText] = useState<string>(INIT_STATE);

    function toggleMode() {
        setMode(prevMode => !prevMode);
        const username = text !== '' ? text : DEFAULT_USERNAME;
        setText(username);
        localStorage.setItem('username', username);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
        const username = e.target.value;
        setText(username);
    } 

    return (
        <header className = {style.header}>
            <img className = {style.userIcon} src = {user_icon} alt = 'user icon'/>
            <div className = {style.wrapper}>
                {
                    mode ? (
                        <span>{ text }</span>
                    ) : (
                        <input 
                            type = "text" 
                            value = {text}
                            onChange={handleChange}
                            className = {style.input} 
                        />
                    )
                }
                <p className = {style.status}>connect</p>
            </div>
            <button className = {style.buttonEdit} onClick = {toggleMode}>
                <img 
                    className = {style.editIcon} 
                    src = {mode ? edit_icon : done_icon} alt = 'edit icon'
                />
            </button>
        </header>
    )
}

export { Header };