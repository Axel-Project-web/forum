//react
import { MouseEventHandler } from "react";

//styles
import styles from './Button.module.css';

//types
interface PropsType {
    label?: string;
    width?: number;
    height?: number;
    handleClick?: MouseEventHandler
}

export default function Button({
    width = 80, 
    height = 30, 
    label, 
    handleClick
}: PropsType) {
    const style = {width, height};

    return (
        <button className = {styles.button} style = {style} onClick = {handleClick}>
            {label || 'Button'}
        </button>
    )
}