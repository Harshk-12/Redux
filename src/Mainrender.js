import React from 'react'
import App from './Store/Store/App'
// import Counter from './Reduxfiles/Counter'
// import Todo from './Reduxfiles/Todo'
import Thunk from './Reduxfiles/Thunk'
import { Provider } from 'react-redux'

function Mainrender() {
  return (
   <>
   <Provider store={App}>
      {/* <Counter/> */}
    {/* <Todo/> */}
    <Thunk/>
   </Provider>
   
   
   
   </>
  )
}

export default Mainrender