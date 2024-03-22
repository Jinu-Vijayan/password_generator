import { useRef } from 'react';
import './Options.css'

function Options({label , id , isSelected , setPasswordOptions}){

    const isChecked = useRef();

    function checkHandler(e){
        
        setPasswordOptions((prevState) => {
            const data = [...prevState];
            data[id].selected = isChecked.current.checked;

            return data;
        })
    }

    return(
        <div>
            <input type='checkBox' defaultChecked = {true} onChange={checkHandler} ref={isChecked} />
            <label>{label}</label>
        </div>
    )
}

export default Options;