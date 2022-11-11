import './Login.css'
import logInImg from "../../Asset/Background/log in img.jpg";
import logInImg2 from "../../Asset/Background/log in img2.jpg";
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useState } from 'react';
import http from '../../Utils/Axios.js';
import { useContext } from 'react';
import UserContext from '../../Context';

const Login = () => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const [values, setValues] = useState({
        username: "",
        password: "",
        rememberMe: false
    });
    const [loginErr, setLoginErr] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await http.post('login', values);
            // console.log(response);
            if (values.rememberMe === true) {
                localStorage.setItem("jwt", response.data.token);
            } else {
                sessionStorage.setItem("jwt", response.data.token);
            }
            // console.log(response.data)
            http.get('/profile/me')
                .then((response) => {
                    if (response.data) {
                        userCtx.setUser(response.data);
                    }
                }).catch((err) => {
                    console.log(err.message);
                })
            navigate('/home');
        } catch (err) {
            setLoginErr(err.response.data);
        }
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

    // if user tries to access login, they will be redirected to home instead
    if (userCtx.user) {
        return <Navigate to="/" replace />
    }

    return (
        <div className='log-in'>
            <img className="login-img-bottom" data-aos="fade-up-right" data-aos-duration="2000"
                src={logInImg} alt="Ảnh đăng nhập" />
            <img className="login-img-top" data-aos="fade-down-left" data-aos-duration="2000"
                src={logInImg2} alt="Ảnh đăng nhập" />
            {/* <!--Bắt Đầu Phần Nội Dung--> */}
            <div className="login-content">
                <div className="login-form" id="login">
                    <h2>Đăng Nhập</h2>
                    <div className="login-password-messenger" >{loginErr}</div>
                    <form action="" onSubmit={handleSubmit}>
                        <LoginForm className="login-input-form" messenge="Tên Người Dùng" type="text"
                            name="username" value={values.username} event={handleValueChange} />
                        <LoginForm className="login-input-form" messenge="Mật Khẩu" type="password"
                            name="password" value={values.password} event={handleValueChange} />
                        <LoginForm className="login-remember-info" messenge="Nhớ Đăng Nhập" type="checkbox"
                            name="rememberMe" value={values.rememberMe} event={handleValueChange} />
                        <LoginForm className="login-input-form" type="submit" value="Đăng Nhập" />
                        <div className="login-input-form">
                            <p>Bạn Chưa Có Tài Khoản? <Link to="/signup">Đăng Ký</Link></p>
                        </div>
                    </form>
                    <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                    <ul className="login-channel-icon">
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-google"></i></li>
                    </ul>
                </div>
            </div>
            {/* <!--Kết Thúc Phần Nội Dung--> */}
        </div>
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