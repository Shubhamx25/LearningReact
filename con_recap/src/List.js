import React from 'react'

const List = (props) => {
    console.log("Props in list",props.data)
  return (
    props.data.map((item) => {
        return(
            <p>{item}</p>
        )
    })
  )
}

export default List;