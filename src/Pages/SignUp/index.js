import './SignUp.css';
import signUpImg from "../../Asset/Background/sign up img.jpg";
import signUpImg2 from "../../Asset/Background/sign up img2.jpg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import http from '../../Utils/Axios'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [errPW, setErrPW] = useState("");
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleValueChange(event) {
        setUser((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    };

    async function handleSubmit(event) {
        event.preventDefault();
        if (user.confirmPassword !== user.password) {
            setErrPW("Both passwords must be the same!");
            return;
        }
        await http.post('signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
        navigate('/login');
    };


    return (
        <div className="signup-content">
            <img className="signup-top-img" data-aos="fade-down-right" data-aos-duration="2000"
                src={signUpImg} alt="Ảnh đăng ký" />
            <div className="signup-form-container">
                <div className="signup-form">
                    <h2>Đăng Ký</h2>
                    <form action="/log in.html" id="signup" onSubmit={handleSubmit}>
                        <div id="username" className="signup-input-form">
                            <p>Tên Người Dùng</p>
                            <input type="text" name="username" value={user.username}
                             onChange={handleValueChange}/>
                        </div>
                        <div id="mail" className="signup-input-form">
                            <p>E-mail</p>
                            <input type="text" name="email" value={user.email}
                             onChange={handleValueChange}/>
                        </div>
                        <div id="password" className="signup-input-form">
                            <p>Mật Khẩu</p>
                            <input type="password" name="password" value={user.password}
                             onChange={handleValueChange}/>
                            <span id="password-messenger">{errPW}</span>
                        </div>
                        <div id="confirmPassword" className="signup-input-form">
                            <p>Nhập Lại Mật Khẩu</p>
                            <input type="password" name="confirmPassword" value={user.confirmPassword}
                             onChange={handleValueChange}/>
                        </div>
                        <div className="signup-input-form">
                            <input type="submit" value="Đăng Ký"/>
                        </div>
                        <div className="signup-input-form">
                            <p>Bạn Đã Có Tài Khoản? <Link to="/login">Đăng Nhập</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <img className="signup-bottom-img" data-aos="fade-up-left" data-aos-duration="2000"
                src={signUpImg2} alt="Ảnh đăng ký" />
        </div>
    );
};

export default SignUp;