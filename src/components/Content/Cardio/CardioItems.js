import React, {useEffect, useState} from 'react';
import style from './Cardio.module.css';

const CardioItems = ({ cardio, getDelCardio, setCheck, check}) => {

    const [dateNow, setDatenow] = useState('')
    
    useEffect(() => {
        const date = new Date()
        const n = new Intl.DateTimeFormat().format(date)
       setDatenow(n)
    }, [cardio.length]);

    const removeItem = (event) => {
        const id = event.target.id
        getDelCardio(parseInt(id))  
    }

    
    
    const updateItem = (event) => {
       const id =  event.target.id
        setCheck({
            test: !check.test,
            id: parseInt(id-10)
        })
    }
    return (
        <div >
            {cardio.length?<h1 style = {{textAlign: "center", color: "#70a7da", fontFamily: "Courier" }}>My cardio trainings</h1>:null}
            {
                cardio.length > 0 && 
                <React.Fragment> 
                    {cardio.map((item, index) => {
                        return (
                            <div key={index} className={style.CardioItems}> 
                                <div>
                                    <i onClick={removeItem} id={index} className={"fa fa-trash"}></i>
                                    <i onClick={updateItem} id={index+10} className={"fa fa-edit" } ></i>
                                </div>
                               <div className={style.titletext} style={{borderBottom: "1px solid #000"}}> <b>Name of Cardio training: {item.title} </b> </div> 
                               <div className={style.titletext}> <span > Duration: {item.time} </span> </div>  
                               <div className={style.titletext}> <em>{dateNow}</em></div>  
                            </div>
                        )
                    })} 
                </React.Fragment>
            }
        </div>
    );
}

export default CardioItems;
