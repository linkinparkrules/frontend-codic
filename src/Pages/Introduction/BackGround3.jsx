import "./Introduction.css"
import DevProcess from "./Components"

import quality from "../../Asset/Icon/goal quality.png"
import success from "../../Asset/Icon/goal success.png"
import cooperation from "../../Asset/Background/cooperation.jpg"
import trust from "../../Asset/Icon/goal trust.png"
import global from "../../Asset/Icon/goal global.png"

const BackGround3 = () => {
    return (
        <div className="goal">
        <h2 className="heading1">Mục tiêu của Codic</h2>
        <div className="goal-content">
            <DevProcess className="goal-list col13 row1 z-index" dataAos="fade-down-right" dataAosDuration="2000" src={quality} alt="Chất lượng" p="text22" content="Chất lượng hàng đầu" />
            <DevProcess className="goal-list col46 row1 z-index" dataAos="fade-down-right" dataAosDuration="2000" src={success} alt="Ước mơ" p="text22" content="Nâng tầm ước mơ" />
            <div className="goal-img col25 row2" data-aos="zoom-in" data-aos-duration="1000">
                <img className="widthbig" src={cooperation} alt="Thành công bền vững"/>
            </div>
            <DevProcess className="goal-list col13 row3 z-index" dataAos="fade-down-right" dataAosDuration="2000" src={trust} alt="Niềm tin" p="text22" content="Giá trị niềm tin" />
            <DevProcess className="goal-list col46 row3 z-index" dataAos="fade-down-right" dataAosDuration="2000" src={global} alt="Quốc tế" p="text22" content="Vươn xa quốc tế" />
        </div>
    </div>
    )
}

export default BackGround3