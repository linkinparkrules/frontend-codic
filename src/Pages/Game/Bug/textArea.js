import { useState } from "react";

const TextArea = (props) => {
    let fire = document.getElementById("fire");
    let bug = document.getElementById("bug");
    const [text, setText] = useState();
    const [btnDisplay, setBtnDisplay] = useState("none")
    function textChange(event) {
        setText(event.target.value);
        // props.fireSetup({fire: event.target.value});  
        fire.style = event.target.value;
        // console.log(bug.getAttribute("style"));
        if(fire.getAttribute("style") === bug.getAttribute("style")) {
            setBtnDisplay("block")
        } else setBtnDisplay("none");
    }
    
    // console.log(text);

    return (
        <>
            <textarea id="userCode" rows="5" cols="60" value={text} onChange={textChange}></textarea>
            <br />
            <button type="button" id="nextStage" style={{display: btnDisplay}} onClick={props.bugSetup}>Continue</button>
        </>

    );
};

export default TextArea;