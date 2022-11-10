import "./Contact.css"
import BackGround1 from "./BackGround1";
import BackGround2 from "./BackGround2";
import BackGround3 from "./BackGround3";

const Contact = () => {
    return (
        <div className="contact1">
            <h1 className="heading1">Liên hệ với chúng tôi</h1>
            <div className="contact-content">
                <BackGround1
                    className="direct-contact"
                    placeholderMessage="Nhập tin nhắn"
                >
                    <h2>Nhắn tin trực tiếp</h2>
                </BackGround1>
                <BackGround2 />
                <BackGround3 />
            </div>
        </div>
    );
};

export default Contact;