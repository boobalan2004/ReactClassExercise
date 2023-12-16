import React from 'react'
function DisplayName(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}



export default function List()
{
    const studentName=["Panvith","Somanth","Ashwin","Ajay"]
    const stName=studentName.map((stu)=><DisplayName name={stu}></DisplayName>)
    return(
        <div style={{backgroundColor:"goldenrod"}}>
                {stName}
        </div>
    )
}