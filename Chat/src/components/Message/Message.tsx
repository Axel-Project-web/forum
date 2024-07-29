//styles
import styles from './Message.module.css'

//assets
import userIcon from '../../assets/icons/user-icon.svg';

//interface 
interface PropsType {
    message?: string;
    username?: string;
}

export default function Message({
    message,
    username
}: PropsType) {
    console.log(typeof message)
    return (
        <div className = {styles.grid}>
            <img className = {styles.icon} src = {userIcon}/>
            <b className = {styles.username}>{username || 'Anon'}</b>
            <p className = {styles.message}>{message || "Empty message..."}</p>
        </div>
    )
}