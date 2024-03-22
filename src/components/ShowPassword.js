import React from "react";
import { CgCopy } from "react-icons/cg";

function ShowPassword({password,textCopyHandler}){
    console.log('show password re-rendered')
    return(
        <div id='generated-password-container'>
            <input readOnly value = {password} placeholder='Password' />
            <button onClick={textCopyHandler} className='btn'>
                <CgCopy />
            </button>
        </div>
    )
}

export default ShowPassword;