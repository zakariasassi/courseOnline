import React from 'react'

function UsedButton(props) {

    const style = {
        backgroundColor: props.bg ,
        border:  props.border ,
        color: props.fontColor
    }


  return (
    <>
        <button style={style}>{props.content}</button>
    </>
  )
}

export default UsedButton
