function Demo()
{
    return(
        <div>
            <h1>hi India</h1>
        </div>
    )
}
export default function OneExport()
{
    return(
        <div>
            <Demo/>
            <h1> I will export only one component</h1>
            <label>Username:</label>
            <input type="text"></input><br/><br/>
            <label>Password:</label>
            <input type="password"></input><br/><br/>
            <label>Date of Birth:</label>
            <input type="date"></input>
        </div>
    )
}