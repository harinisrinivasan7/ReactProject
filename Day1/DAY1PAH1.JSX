import React from "react";
function display()
{
    let age=18;
    let name="kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age,name,setStatus,userDefault,responseValue);
    let oldage=age;
    age=25;
    setStatus=true;
    console.log(age,setStatus);
    alert("Check the console output");
}
function App3()
{
    return(
        <div className="App">
            
            <button onClick={display}>PAH1</button>
            

        </div>
    )
}
export default App3;