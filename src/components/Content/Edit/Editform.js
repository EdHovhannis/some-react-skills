import React, { useState } from 'react'
import style from './Editform.module.css'

const Editform = ({ check, cardio, setCheck, getUpCardio }) => {
    const ind = check.id

    const onsubmitHandler = (event) => {
        event.preventDefault()
    }

    const [items, setItems] = useState(cardio[ind])
    const onchangeHandler = (event) => {
        setItems({
            ...items, [event.target.name]:event.target.value
        })
    }

    const cancelHandler = () => {
        setCheck({
            test: true,
            id:''
        })
    }

    const updateHandler = () => {
        getUpCardio(items, ind)
        setCheck({
            test: true,
            id:''
        })
    }

    return (
        <div>
            <form onSubmit={onsubmitHandler} >
                
                <div className={style.Editform}>
                <h1 style={{fontFamily:"Courier, Monaco, monospace"}}> Edit </h1>
                    <div className={style.textInput}>
                        <input type="text" name="title" placeholder="title" value={items.title} onChange={onchangeHandler} />
                    </div>

                    <div className={style.textInput}>
                        <input type="text" name="time"  placeholder="time" value={items.time} onChange={onchangeHandler} />
                    </div>

                    <div className={style.btns}>

                        <button
                            className={style.btn + ' ' + style.save}
                            onClick={updateHandler}
                        > Edit </button>
                        <button 
                            className={style.btn + ' ' + style.cancel}
                            onClick={cancelHandler}
                        > Cancel </button>

                    </div>

                </div>

            </form>
        </div>
    );
}

export default Editform
