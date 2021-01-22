import React, {useState} from 'react';
import style from './Form.module.css';
import duration from './duration.json'
import muscules from './muscles.json'


const Form = ({getAddCardio}) => {
    
    // const [int, setInt] = useState(0)

    const onsubmitHandler = (event) => {
        event.preventDefault()
    }

    const [data, setData] = useState({
        title: "",
        time: "",
    })
    
    const addOnclickHandler = () => {
        if(data.title === '') {
            alert("Title must to be required !!!")
            return false
        }
        if(data.time === '') {
            alert("Time must to be required !!!")
            return false
        }
        getAddCardio(data)
        setData({
                title: "",
                time: "",
        })
    }
    
    const onchangeHandler = (event) => {
        setData({
           ...data, [event.target.name]: event.target.value
        });
    }

    
    // const cancelHandler = () => {
    
        
    // }

    return (
        <>
            <form onSubmit={onsubmitHandler} >

                <div className={style.FormItems}>

                    <div className={style.textInput}>

                        <select name="title" onChange={onchangeHandler} defaultValue={muscules[0].name}>
                            {muscules.map((item, index)=>{
                                return ( <option  key={index} disabled={item.disabled} value={item.name} > {item.name} </option>)
                            })}
                        </select>

                    </div>

                    <div className={style.textInput}>

                        <select name="time" onChange={onchangeHandler} defaultValue={duration[0].name}>
                            {duration.map((item, index)=>{
                                return (<option key={index} disabled={item.disabled} value={item.name} >{item.name}</option>)
                            })}
                        </select>

                    </div>

                    <div className={style.btns}>
                        <button
                            className={style.btn + ' ' + style.save}
                            onClick={addOnclickHandler}
                        > Add </button>
                        <button /*onClick={cancelHandler}*/ className={style.btn + ' ' + style.cancel}> Cancel </button>
                    </div>

                </div>

            </form>
        </>
    );
}

export default Form;
