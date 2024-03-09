import { useState } from 'react';
import './HomeScreen.css'
import { CgCopy } from "react-icons/cg";
import Options from '../components/Options';
import { generate, generateMultiple, validate } from '@wcj/generate-password';

function HomeScreen(){

    const labels = [{
        option:"Include upper case",
        selected : true
    },{
        option :  "Include lower case",
        selected : true
    } , {
        option : "Include numbers",
        selected : true
    }, {
        option : "Include symbols",
        selected : true
    }];

    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [passwordOptions, setPasswordOptions] = useState(labels);


    function passwordGeneratorHandler(e){
        e.preventDefault();
        if(passwordLength < 8 || passwordLength > 50){
            alert("Password length should be between 8 and 50")
        } else {
            const password = generate({
                length : passwordLength,
                upperCase : passwordOptions[0].selected,
                lowerCase : passwordOptions[1].selected,
                numeric : passwordOptions[2].selected,
                special : passwordOptions[3].selected
            })
    
            setPassword(password);
        }
    }

    function passwordLengthInputHandler(e){
        setPasswordLength(e.target.value);
    }

    function textCopyHandler(e){

        e.preventDefault();

        navigator.clipboard.writeText(password);
    }


    return(
        <div id='container'>
            <header>
                <h1>Password Generator</h1>
            </header>
            <form id='password-form'>
                <div id='generated-password-container'>
                    <input readOnly value = {password} placeholder='Password' />
                    <button onClick={textCopyHandler} className='btn'>
                        <CgCopy />
                    </button>
                </div>
                <div id='password-length-selector'>
                    <label>Select Password length <span>(**8-50 characters**)</span></label>
                    <input type='number' min={8} max={50} value={passwordLength} onChange={passwordLengthInputHandler}/>
                </div>
                <div id='password-options-selectors'>
                    {
                        labels.map((elem, index) => {
                            return <Options label = {elem.option} key = {index} id = {index} isSelected = {elem.selected} setPasswordOptions = {setPasswordOptions} />
                        })
                    }
                </div>
                <button onClick={passwordGeneratorHandler} id='password-generate-btn' className='btn'>Generate Password</button>
            </form>
        </div>
    )
}

export default HomeScreen;