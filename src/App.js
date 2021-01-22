import React, { useReducer, useState } from "react";
import './App.css';
import Navbar from './components/Header/Navbar'
import Content from './components/Content/Content';
import Editform from './components/Content/Edit/Editform';


const initialstate = {
  cardio: [],
  strength: []
}



const App = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_CARDIO":
        return {
          ...state, cardio: [...state.cardio, action.data]
        }
      case "DEL_CARDIO":
        return {
          ...state, cardio: state.cardio.filter((item, i) => {
            return i !== action.id
          })
        }
      case "UP_CARDIO":
        return {
          ...state, cardio: state.cardio.map((item, i) => {
            return (action.id === i ? action.data : item)
          })
        }

      default:
        return {
          ...state, cardio: []
        }
    }
  }
  const [data, dispatch] = useReducer(reducer, initialstate)
  
  // CARDIO
  // 1) Adding
  const setAddCardio = (data) => {
    return {
      type: "ADD_CARDIO",
      data
    }
  }
  const getAddCardio = (data) => {
    dispatch(setAddCardio(data))
  }
  // 1) Removing
  const setDelCardio = (id) => {
    return {
      type: "DEL_CARDIO",
      id
    }
  }
  const getDelCardio = (id) => {
    dispatch(setDelCardio(id))
  }
  // 1) updating
  const setUpCardio = (data, id) => {
    return {
      type: "UP_CARDIO",
      data,
      id
    }
  }
  
  const getUpCardio = (data, id) => {
    dispatch(setUpCardio(data, id))
  }


  // check for update
  const [check, setCheck] = useState({
    test: true,
    id: ''
  })



  return (
    <div className="App">
      {check.test ?
        <React.Fragment>
          <Navbar />
          <Content
            getAddCardio={getAddCardio}
            getDelCardio={getDelCardio}
            cardio={data.cardio}
            check={check}
            setCheck={setCheck}
          />
        </React.Fragment> :
        <React.Fragment>
          <Editform
            check={check}
            setCheck={setCheck}
            cardio={data.cardio}
            getUpCardio={getUpCardio}
          />
        </React.Fragment>}
    </div>
  );

}

export default App;
