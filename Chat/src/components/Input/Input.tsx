//react
import { ChangeEventHandler } from 'react';

//styles
import style from './Input.module.css';

//types
interface PropsType {
    value?: string;
    width?: string;
    height?: string;
    placeholder?: string;
    handleChange?: ChangeEventHandler;
}

//constans
import { EMPTY_FIELD } from '../../constants/default';

export default function Input({
    value,
    placeholder,
    handleChange,
    width = "auto",
    height = "30px",
}: PropsType) {
    const styles = {width, height};

    return (
        <input 
            type = 'text' 
            style={styles}
            value = {value}
            onChange = {handleChange}
            className = {style.input}
            placeholder = {placeholder || EMPTY_FIELD}
        />
    )
}