import './BackGround.css';
import { Cards, Images, Numbers, Buttons } from './Components';
import user1 from "../../Asset/Background/user1.jpg";
import user2 from "../../Asset/Background/user2.jpg";
import user3 from "../../Asset/Background/user3.jpg";
import user4 from "../../Asset/Background/user4.jpg";

const BackGround5 = () => {
    return (
        <div className="user-feedback">
            <div data-aos="zoom-in" data-aos-duration="2000">
                <h1 className="heading1">Người dùng nói gì về Codic?</h1>
                <Cards className="user-number">
                    <Numbers h2="3000+" p="Người dùng" />
                    <Numbers h2="2000+" p="Lượt truy cập/ngày" />
                </Cards>
            </div>
            <div className="user-feedback-list">
                <div className="user-feedback-child above">
                    <Images className="user-infor" src={user1} alt="Ảnh người dùng">
                        <Numbers h2="Trần Thanh Tùng" p="Full-stack developer" />
                    </Images>
                    <div className="feedback-content">
                        <p>
                            <i className="fa-solid fa-quote-left"> </i>
                            Từ ngày biết đến Codic, Tiếng Anh của tôi đã cải thiện hơn nhiều. Đặc biệt, khả năng ghi nhớ thẻ
                            code tăng cao. Tôi có thể tự code mà không cần phụ thuộc quá nhiều vào google search. Cảm ơn
                            Codic.
                            <i className="fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </div>
                <div className="user-feedback-child under">
                    <Images className="user-infor" src={user2} alt="Ảnh người dùng">
                        <Numbers h2="Nguyễn Thị Ái Vy" p="Front-end developer" />
                    </Images>
                    <div className="feedback-content">
                        <p>
                            <i className="fa-solid fa-quote-left"> </i>
                            Là một người con gái chuyển ngành sang IT, tôi rất lo lắng về khả năng của mình. Tôi sợ rằng
                            mình sẽ thua kém các bạn IT "chuẩn". Rất may, Codic đã giúp tôi lấy lại sự tự tin. Bây giờ, tôi
                            có thể tự hào giới thiệu rằng, tôi là dân IT chính hiệu.
                            <i className="fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </div>
                <div className="user-feedback-child above">
                    <Images className="user-infor" src={user3} alt="Ảnh người dùng">
                        <Numbers h2="Đoàn Hương Giang" p="Back-end developer" />
                    </Images>
                    <div className="feedback-content">
                        <p>
                            <i className="fa-solid fa-quote-left"> </i>
                            Kho từ điển của Codic rất phong phú. Điểm đặc biệt là Codic đã đặt từ ngữ vào ngữ cảnh là môi
                            trường IT để dịch. Tôi tiết kiệm được thời gian tìm nghĩa của từ sao cho phù hợp với chuyên
                            ngành IT.
                            <i className="fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </div>
                <div className="user-feedback-child under">
                    <Images className="user-infor" src={user4} alt="Ảnh người dùng">
                        <Numbers h2="Nguyễn Hoàng Phương" p="Front-end developer" />
                    </Images>
    
                    <div className="feedback-content">
                        <p>
                            <i className="fa-solid fa-quote-left"> </i>
                            Lý do tôi chọn Codic là vì tôi vừa được chơi, lại vừa ghi nhớ được các thẻ. Những bài tập ngắn
                            gọn nhưng bổ ích và vui vẻ đã giúp tôi ghi nhớ thẻ lâu hơn. Làm bài tập nhưng cũng là thời gian
                            giải trí, chơi game. Thật là tuyệt vời.
                            <i className="fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </div>
            </div>
            <Buttons className="btn-white" dataAos="fade-up" dataAosDuration="2000" to="/introduction">
                Tìm hiểu ngay
                <i className="fa-solid fa-angles-right"></i>
            </Buttons>
        </div>
    );
};

export default BackGround5;