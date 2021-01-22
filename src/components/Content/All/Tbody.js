import React from 'react'
import style from './All.module.css';

const Tbody = ({ cardio, value }) => {
    
  
    return (
        <tbody className={style.Tbody}>
            
                {cardio.filter((item)=>{
                    if(value === '') {
                        return item
                    }
                    else if( item.title.toLowerCase().includes(value.toLowerCase()) ) {
                        return item
                    }
                }).map((item, index) => {
                    return (
                            <tr key={index} id={index}>
                                <td>{item.title}</td>
                                <td>{item.time}</td>
                            </tr>
                    )
                }) }
        </tbody>
    )
}

export default Tbody
