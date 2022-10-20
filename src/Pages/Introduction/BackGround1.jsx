import "./Introduction.css"
import company from '../../Asset/Background/company.jpg'
import meeting from '../../Asset/Background/meeting.jpg'
import workspace from '../../Asset/Background/workspace.jpg'


const BackGround1 = () => {
    return (
        <div className="company-info">
            <h1 className="heading1">Thông tin về công ty</h1>
            <div className="company-info-content">
                <div className="company-intro" dataAos="fade-left" dataAosDuration="2000">
                    <p className="text18">Codic là công ty khởi nghiệp được thành lập vào năm 2018 bởi Giáo sư ngành ngôn
                        ngữ học - Bà Nguyễn Thị Thuỳ Linh.</p>
                    <p className="text18">Với mục tiêu lấy chất lượng làm yếu tố hàng đầu, Codic muốn mang đến môi trường
                        học Tiếng Anh hiệu quả và bổ ích đến với tất cả mọi người, mọi lứa tuổi.
                        Với khẩu hiệu "Làm có tâm, ắt có tầm", Codic muốn nâng tầm giấc mơ Việt ra toàn thế giới.
                        Năm 2019, Codic lọt TOP 30 công ty hàng đầu về giải pháp học Tiếng Anh online.
                        Năm 2022, Codic có trên 3000 người dùng trực tuyến, 1000 học viên.
                    </p>
                    <p className="text18">
                        Trên đà phát triển, Codic hứa hẹn là một công ty uy tín để các học viên gửi gắm niềm tin.
                    </p>
                </div>
                <div className="company-img">
                    <div className="cpn-img-top" dataAos="fade-down" dataAosDuration="1000">
                        <img src={company} alt="Ảnh công ty" />
                    </div>
                    <div className="cpn-img-bottom-left" dataAos="fade-up-left" dataAosDuration="1500">
                        <img src={meeting} alt="Ảnh công ty" />
                    </div>
                    <div className="cpn-img-bottom-right" dataAos="fade-up-right" dataAosDuration="2000">
                        <img src={workspace} alt="Ảnh công ty" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackGround1;