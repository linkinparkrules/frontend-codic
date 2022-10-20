import './Login.css'
import logInImg from "../../Asset/Background/log in img.jpg";
import logInImg2 from "../../Asset/Background/log in img2.jpg";
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import http from '../../Utils/Axios.js';

const Login = () => {
    AOS.init();
    const [values, setValues] = useState({
        username: "",
        password: "",
        rememberMe: false
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await http.post('login', values);
        console.log(response)
    };

    const handleValueChange = (event) => {
        setValues((previous) => {
            // console.log(previous);
            if (event.target.name === "rememberMe") {
                return {
                    ...previous,
                    [event.target.name]: !previous.rememberMe
                }
            } else {
                return {
                    ...previous,
                    [event.target.name]: event.target.value
                }
            }
        });
    };

    return (
        <section>
            <img className="login-img-bottom" data-aos="fade-up-right" data-aos-duration="2000"
                src={logInImg} alt="Ảnh đăng nhập" />
            <img className="login-img-top" data-aos="fade-down-left" data-aos-duration="2000"
                src={logInImg2} alt="Ảnh đăng nhập" />
            {/* <!--Bắt Đầu Phần Nội Dung--> */}
            <div className="content">
                <div className="form" id="login">
                    <h2>Đăng Nhập</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <LoginForm className="input-form" messenge="Tên Người Dùng" type="text"
                            name="username" value={values.username} event={handleValueChange} />
                        <LoginForm className="input-form" messenge="Mật Khẩu" type="password"
                            name="password" value={values.password} event={handleValueChange} />
                        <LoginForm className="remember-info" messenge="Nhớ Đăng Nhập" type="checkbox"
                            name="rememberMe" value={values.rememberMe} event={handleValueChange} />
                        <LoginForm className="input-form" type="submit" value="Đăng Nhập" />
                        <div className="input-form">
                            <p>Bạn Chưa Có Tài Khoản? <Link to="/signup">Đăng Ký</Link></p>
                        </div>
                        {/* <div id="password-messenger"></div> */}
                    </form>
                    <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                    <ul className="channel-icon">
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-google"></i></li>
                    </ul>
                </div>
            </div>
            {/* <!--Kết Thúc Phần Nội Dung--> */}
        </section>
    );
};

const LoginForm = (props) => {
    return (
        <div className={props.className}>
            <label>{props.messenge}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.event} />
        </div>
    );
};

export default Login;