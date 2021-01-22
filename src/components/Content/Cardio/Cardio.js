import React from 'react';
import style from './Cardio.module.css';
import CardioItems from './CardioItems';
import Form from '../Form/Form'



const Cardio = ({getAddCardio, cardio, getDelCardio, check, setCheck}) => {

   
    return (
        <div className={style.Cardio}>

            <Form 
            getAddCardio={getAddCardio}
            
            />

            <CardioItems 
            cardio={cardio}
            getDelCardio={getDelCardio}
            setCheck={setCheck}
            check={check}
            />
        </div>
    );
}

export default Cardio;
