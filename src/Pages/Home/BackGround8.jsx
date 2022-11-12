import './BackGround.css';
import { Link } from 'react-router-dom';
import footerimg1 from "../../Asset/Background/footerimg1.jpg"
import footerimg2 from "../../Asset/Background/footerimg2.jpg"
import footerimg3 from "../../Asset/Background/footerimg3.jpg"
import footerimg4 from "../../Asset/Background/footerimg5.jpg"
import BackGround1 from '../Contact/BackGround1';
import { useContext } from 'react';
import UserContext from '../../Context';

const BackGround8 = () => {
    const loginCtx = useContext(UserContext);
    return (
        <div className="footer">
            <BackGround1 className="collect-feedback" placeholderMessage="Nhập ý kiến của bạn" >
                <p>Đóng góp ý kiến</p>
            </BackGround1>
            <div className="footer-infor">
                <Link to="/home">Trang chủ</Link>
                <Link to="/introduction">Giới thiệu</Link>
                <Link to="/exercise">Học tập</Link>
                <Link to="/contact">Liên hệ</Link>
                {!loginCtx.user && (
                    <>
                        <Link to="/login">Đăng nhập</Link>
                        <Link to="/signup">Đăng ký</Link>
                    </>
                )}

            </div>
            <div className="footer-img">
                <img src={footerimg1} alt="Người thành công" />
                <img src={footerimg2} alt="Người thành công" />
                <img src={footerimg3} alt="Người thành công" />
                <img src={footerimg4} alt="Người thành công" />
            </div>
            <div className="contact-footer">
                <p>Contact us</p>
                <div className="channel">
                    <a href="https://www.facebook.com/Linkinllica/"><i className="fa-brands fa-facebook-square fa-2x"></i></a>
                    <a href="https://www.instagram.com/_ncao97/"><i className="fa-brands fa-instagram fa-2x"></i></a>
                    <a href="mailto: hungandthaifriend@gmail.com"><i className="fa-solid fa-envelope fa-2x"></i></a>
                    <a href="tel: 1900561252"><i className="fa-solid fa-phone fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
};

export default BackGround8;