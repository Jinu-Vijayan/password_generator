import { useRef, useState } from 'react';
import './HomeScreen.css'
import { CgCopy } from "react-icons/cg";
import Options from '../components/Options';
import { generate } from '@wcj/generate-password';
import ShowPassword from '../components/ShowPassword';

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
    const [passwordOptions, setPasswordOptions] = useState(labels);

    const passwordLength = useRef();


    function passwordGeneratorHandler(e){
        e.preventDefault();
        if(passwordLength.current.value < 8 || passwordLength.current.value > 50){
            alert("Password length should be between 8 and 50")
        }
        else if (!passwordOptions[0].selected && !passwordOptions[1].selected && !passwordOptions[2].selected && ! passwordOptions[3].selected){

            alert("Please select atleast one option to generate password ");
        }
         else {
            const password = generate({
                length : passwordLength.current.value,
                upperCase : passwordOptions[0].selected,
                lowerCase : passwordOptions[1].selected,
                numeric : passwordOptions[2].selected,
                special : passwordOptions[3].selected
            })
    
            setPassword(password);
        }
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
                <ShowPassword password={password} textCopyHandler={textCopyHandler}/>
                <div id='password-length-selector'>
                    <label>Select Password length <span>(**8-50 characters**)</span></label>
                    <input type='number' min={8} max={50} defaultValue={8} ref={passwordLength}/>
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