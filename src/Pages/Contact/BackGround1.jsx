import { useState } from "react";
import http from "../../Utils/Axios";

const BackGround1 = (props) => {
    const [value, setValue] = useState({
        email: "",
        feedback: ""
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        await http.put('/contact', value)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message));
    }

    const handleChange = (event) => {
        setValue((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    // console.log(value); 

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
                <input type="submit" value="Gửi" />
            </form>
        </div>
    )
};

export default BackGround1;