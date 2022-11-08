import "./Introduction.css"
import DevProcess from "./Components"
import establish from "../../Asset/Icon/cpn establish.png"
import top from "../../Asset/Icon/cpn top30.png"
import development from "../../Asset/Icon/cpn developement.png"
import stable from "../../Asset/Icon/cpn stable.png"
import global from "../../Asset/Icon/cpn global.png"



const BackGround2 = () => {
    return (
        <div className="company-history">
            <h1 className="heading1">Lịch sử hình thành</h1>
            <div className="company-history-content">
                <DevProcess className="history-list row56" dataAos="fade-down" dataAosDuration="1000" h2="year" year="2018" src={establish} alt="Development Process" h3="period-name" period="Thành lập" content="Năm 2018, công ty được thành lập tại Hà Nội" />
                <DevProcess className="history-list row46" dataAos="fade-down" dataAosDuration="1300" h2="year" year="2019" src={top} alt="Development Process" h3="period-name" period="TOP 30" content="Công ty lọt top 30 công ty cung cấp giải pháp học Tiếng Anh" />
                <DevProcess className="history-list row36" dataAos="fade-down" dataAosDuration="1600" h2="year" year="2020" src={development} alt="Development Process" h3="period-name" period="Phát triển" content="Công ty đạt nhiều giải thưởng, số lượng học viên tăng lên không ngừng" />
                <DevProcess className="history-list row26" dataAos="fade-down" dataAosDuration="1900" h2="year" year="2021" src={stable} alt="Development Process" h3="period-name" period="Bền vững" content="Công ty tiếp tục nhận được nhiều danh hiệu, doanh thu tăng lên không ngừng" />
                <DevProcess className="history-list row16" dataAos="fade-down" dataAosDuration="2100" h2="year" year="2022" src={global} alt="Development Process" h3="period-name" period="Vươn xa" content="Đặt chất lượng lên hàng đầu để tiến xa hơn" />
            </div>
        </div>
    )
}

export default BackGround2
