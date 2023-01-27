import React from 'react';

import { BsFillChatDotsFill } from 'react-icons/bs'



const ShowChat = ({handleChat}) => {

  return (
    <>
        <button onClick={handleChat}
         style={styles.button}>
            <BsFillChatDotsFill />
        </button>
    </>
  )
}
const styles ={
  button: {
    borderRadius: '50%',
    fontSize: '22px',
    border: 'none',
    cursor: 'pointer',
    color:'blue',
    marginLeft:'10px'
  }
}
 export default ShowChat