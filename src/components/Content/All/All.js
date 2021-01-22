import React, { useState } from 'react';
import style from './All.module.css';
import Tbody from './Tbody'
import Select from "./Select";

const All = ({ cardio }) => {

    
    const [value, setValue] = useState('')
    // const [status, setStatus] = useState('all')
    // const [filteredItems, setFilter] = useState([])

    const searchHandler = (event) => {
        setValue(event.target.value)
    }

    // const statusHandler = (event) => { 
    //     setStatus(event.target.value)
    //     switch(status) {
    //         case "easy": 
    //             return setFilter(cardio.filter((item)=>{
    //                 return item.time.includes(status)
    //             }))
    //         case "medium": 
    //             return setFilter(cardio.filter((item)=>{
    //                 return item.time.includes(status)
    //             }))
    //         case "hard": 
    //             return setFilter(cardio.filter((item)=>{
    //                 return item.time.includes(status)
    //             }))
    //         case "heavy": 
    //             return setFilter(cardio.filter((item)=>{
    //                 return item.time.includes(status)
    //             }))
    //         default: 
    //             return setFilter(cardio)
    //     }

    // }

    return (
        <React.Fragment>
            <div className={style.All}>

                {cardio.length > 0 ?
                <div>
                    <input className={style.search} type="text" placeholder="Search" name="search" value={value} onChange={searchHandler} /> 
                    <Select /* statusHandler={statusHandler}*/  />
                </div> 
                :
                null}

                {cardio.length > 0 ?
                    <table>
                        <caption> My trainings: {cardio.length} </caption>
                        <thead>
                            <tr>
                                <th> Title of training </th>
                                <th> Duration of trainings </th>
                            </tr>
                        </thead>

                         <Tbody cardio={cardio} value = {value}/>

                    </table> :
                    <table>
                        <caption >My trainings: {cardio.length}</caption>
                    </table>
                }
            </div>
        </React.Fragment>
    );
}


export default All;
