import { useState } from "react";

const TextArea = () => {
    const [text, setText] = useState();
    const [btnDisplay, setBtnDisplay] = useState("none")
    function textChange(event) {
        setText(event.target.value);
    }
    console.log(text);

    return (
        <>
            <textarea id="userCode" rows="5" cols="60" value={text} onChange={textChange}></textarea>
            <br />
            <button type="button" id="nextStage" style={{display: btnDisplay}}>Continue</button>
        </>

    );
};

export default TextArea;