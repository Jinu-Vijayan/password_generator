import './Options.css'

function Options({label , id , isSelected , setPasswordOptions}){

    function checkHandler(e){
        
        setPasswordOptions((prevState) => {
            const data = [...prevState];
            data[id].selected = e.target.checked

            return data;
        })
    }

    return(
        <div>
            <input type='checkBox' defaultChecked = {true} onChange={checkHandler} />
            <label>{label}</label>
        </div>
    )
}

export default Options;