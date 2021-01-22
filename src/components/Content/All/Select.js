import React from 'react';



const Select = () => {

    const status = [
        {name: "all", disabled: true},
        {name: "easy", disabled: false},
        {name: "medium", disabled: false},
        {name: "hard", disabled: false},
        {name: "heavy", disabled: false}
    ]
    return (
        <select defaultValue={status[0].name} /*onChange = {(event)=>{statusHandler(event)}}*/ >
            {status.map((item, index)=>{
                return <option key={index} disabled={item.disabled}> {item.name} </option>
            })}
        </select>
    );
}

export default Select;
