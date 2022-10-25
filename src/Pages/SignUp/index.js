import './SignUp.css';
import signUpImg from "../../Asset/Background/sign up img.jpg";
import signUpImg2 from "../../Asset/Background/sign up img2.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="content">
            <img className="top-img" data-aos="fade-down-right" data-aos-duration="2000"
                src={signUpImg} alt="Ảnh đăng ký" />
            <div className="form-container">
                <div className="form">
                    <h2>Đăng Ký</h2>
                    <form action="/log in.html" id="signup">
                        <div id="username" className="input-form">
                            <p>Tên Người Dùng</p>
                            <input type="text" name="username" />
                        </div>
                        <div id="mail" className="input-form">
                            <p>E-mail</p>
                            <input type="text" name="mail" />
                        </div>
                        <div id="password" className="input-form">
                            <p>Mật Khẩu</p>
                            <input type="password" name="password" />
                            <span id="password-messenger"></span>
                        </div>
                        <div id="confirmPassword" className="input-form">
                            <p>Nhập Lại Mật Khẩu</p>
                            <input type="password" name="confirmPassword" />
                        </div>
                        <div className="input-form">
                            <input type="submit" value="Đăng Ký" />
                        </div>
                        <div className="input-form">
                            <p>Bạn Đã Có Tài Khoản? <Link to="/login">Đăng Nhập</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <img className="bottom-img" data-aos="fade-up-left" data-aos-duration="2000"
                src={signUpImg2} alt="Ảnh đăng ký" />
        </div>
    );
};

export default SignUp;