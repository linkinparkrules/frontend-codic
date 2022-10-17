import './BackGround.css';
import { Images} from './Components';
import { Link } from 'react-router-dom';
import footerimg1 from "../../Asset/Background/footerimg1.jpg"
import footerimg2 from "../../Asset/Background/footerimg2.jpg"
import footerimg3 from "../../Asset/Background/footerimg3.jpg"
import footerimg4 from "../../Asset/Background/footerimg5.jpg"

const BackGround8 = () => {
    return (
        <div className="footer">
            <div className="collect-feedback">
                <p>Đóng góp ý kiến</p>
                <form id="contact" className="enter-feedback">
                    <label for="email">Email của bạn:</label><br />
                    <input type="email" id="email" name="email" placeholder="SamSmith@gmail.com" /><br />
                    <label for="feedback">Góp ý:</label><br />
                    <input type="text" id="feedBack" name="feedBack" placeholder="Nhập ý kiến của bạn" /><br />
                    <input type="submit" value="Gửi" />
                </form>
            </div>
            <div className="footer-infor">
                <Link to="/home">Trang chủ</Link>
                <Link to="/introduction">Giới thiệu</Link>
                <Link to="/exercise">Học tập</Link>
                <Link to="/contact">Liên hệ</Link>
                <Link to="/log in">Đăng nhập</Link>
                <Link to="/sign up">Đăng ký</Link>
            </div>
            <div className="footer-img">
                <img src={footerimg1} alt="Người thành công" />
                <img src={footerimg2} alt="Người thành công" />
                <img src={footerimg3} alt="Người thành công" />
                <img src={footerimg4} alt="Người thành công" />
            </div>
            <div className="contact">
                <p>Contact us</p>
                <div className="channel">
                    <Link to="https://www.facebook.com/Linkinllica/" target="_blank"><i
                        className="fa-brands fa-facebook-square fa-2x"></i></Link>
                    <Link to="https://www.instagram.com/_ncao97/" target="_blank"><i
                        className="fa-brands fa-instagram fa-2x"></i></Link>
                    <Link to="mailto: hungandthaifriend@gmail.com" target="_blank"><i className="fa-solid fa-envelope fa-2x"></i></Link>
                    <Link to="tel: 1900561252"><i className="fa-solid fa-phone fa-2x"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default BackGround8;