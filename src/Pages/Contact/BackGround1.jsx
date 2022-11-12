import { useState } from "react";
import http from "../../Utils/Axios";
import { useNavigate } from 'react-router-dom';

const BackGround1 = (props) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [value, setValue] = useState({
        email: "",
        feedback: ""
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (value.email.replace(/\s+/g, '') === "") {
            setErrorMessage("Please type your email!");
            return;
        } else if (value.feedback.replace(/\s+/g, '') === "") {
            setErrorMessage("Please type your feedback!");
            return;
        }
        await http.put('/contact', value)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message));
        alert("Cảm ơn bạn vì lời góp ý, chúng tôi sẽ dành hết sức để trải nghiệm của bạn được tốt hơn nữa!")
        navigate("/");
    }

    const handleChange = (event) => {
        setValue((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    // console.log(value.email, value.feedback); 

    return (
        <div className={props.className}>
            {props.children}
            <form id="contact" className="enter-feedback" onSubmit={handleSubmit}>
                <label>Email của bạn:</label><br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={value.email}
                    placeholder="SamSmith@gmail.com"
                    onChange={handleChange}
                />
                <br />
                <label>Lời nhắn:</label><br />
                <input
                    type="text"
                    name="feedback"
                    id="feedback"
                    value={value.feedback}
                    placeholder={props.placeholderMessage}
                    onChange={handleChange}
                />
                <br />
                <div className="errorFeedback">{errorMessage}</div>
                <input type="submit" value="Gửi" />
            </form>
        </div>
    )
};

export default BackGround1;