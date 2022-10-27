import "./Contact.css"
import ContactChannel from "./Components"
import {Link} from 'react-router-dom'


const BackGround1 = () => {
    return (
        <div className="contact1">
            <h1 className="heading1">Liên hệ với chúng tôi</h1>
            <div className="contact-content">
                <div className="direct-contact">
                    <h2>Nhắn tin trực tiếp</h2>
                    <form id="contact" className="enter-feedback">
                        <label>Email của bạn:</label><br />
                        <input type="email" name="email" id="email" placeholder="SamSmith@gmail.com" /><br />
                        <label>Lời nhắn:</label><br />
                        <input type="text" name="feedBack" id="feedBack" placeholder="Nhập tin nhắn" /><br />
                        <input type="submit" value="Gửi" />
                    </form>
                </div>
                <div className="contact-info">
                    <ContactChannel name="Số điện thoại" content="(+84) 942 681 618"/>
                    <ContactChannel name="E-mail" target="_blank" content="nghiacao97@gmail.com"/>
                    <ContactChannel name="Địa chỉ" content="Số 132, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội"/>
                    <ContactChannel name="Giờ làm việc" content="Thứ 2 - Thứ 6: 8AM - 5PM"/>                    
                </div>
                <div className="lets-contact">
                    <h2 className="message">Hãy cùng trao đổi</h2>
                    <p>Chúng tôi mong chờ sự phản hồi, đóng góp ý kiến từ các học viên. <br />
                        Nhờ có vậy, chúng tôi có thể cải thiện không ngừng, đưa ra được những sản phẩm chất lượng nhất.</p>
                    <p className="margin-bottom">Cảm ơn các bạn đã quan tâm</p>
                    <div className="channel">
                        <Link to="https://www.facebook.com/thuydo.do.18" target="_blank"><i
                            className="fa-brands fa-facebook-square fa-2x"></i></Link>
                        <Link to="https://www.instagram.com/th.uyf/" target="_blank"><i
                            className="fa-brands fa-instagram fa-2x"></i></Link>
                        <Link to="mailto: dothuy20397@gmail.com" target="_blank"><i
                            className="fa-solid fa-envelope fa-2x"></i></Link>
                        <Link to="tel: 0942681628"><i className="fa-solid fa-phone fa-2x"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BackGround1;