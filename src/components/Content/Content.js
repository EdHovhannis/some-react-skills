import React from 'react';
import {Route} from 'react-router-dom';
import style from './Content.module.css';

import All from './All/All';
import Cardio from './Cardio/Cardio';
import Strength from './Strength/Strength';

const Content = ({getAddCardio, cardio, getDelCardio, check, setCheck}) => {
    return (
        <div className={style.Content}>

            <Route exact path="/">
                <All cardio={cardio}/>
            </Route>

            <Route path="/cardio">
                <Cardio 
                getAddCardio={getAddCardio} 
                cardio={cardio}
                getDelCardio={getDelCardio}

                check = {check}
                setCheck = {setCheck}
                />
            </Route>
            
            <Route path="/strength">
                <Strength />
            </Route>

        </div>
    );
}

export default Content;
