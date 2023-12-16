import React from 'react'

export default function List() {
    const college=[{id:1,student:"Sachin",age:19},
                   {id:2,student:"Surya",age:20},
                   {id:3,student:"Sam",age:21},]
    const result=college.map((col)=><li key={col.id}> {col.student} {col.age} </li>)
    // const animals=["dog","cat","lion","tiger"]
    // const result=animals.map((ani,index)=><li key={index}>{index} = {ani}</li>)
  return (
    <div style={{backgroundColor:"cadetblue"}}>
        {result}
    </div>
  )
}