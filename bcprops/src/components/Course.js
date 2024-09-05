import Future from "./Future";
import {useState} from "react"

function Course(data){

    const [oldData,setData] = useState(data.popCourse[0]);
    const[colorData,setColorData] = useState("red");

    function handleColorChange(event){
        setColorData(event.target.value);
    };

    return(
        <div>
            <h1 style={{"color": colorData}}>Course: {oldData} : {data.popCourse[1]}</h1>
            <button onClick={()=>{setData( prevData => {return prevData + "C++"})}}>Click</button>
            <Future propFuture={data.popCourse}/>
            <input type="color" onChange={handleColorChange}></input>
        </div>
    );
}

export default Course;