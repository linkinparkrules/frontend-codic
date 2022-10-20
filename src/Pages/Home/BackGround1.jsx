import './BackGround.css';
import {Images, Buttons} from './Components';
import intro1 from '../../Asset/Background/intro1.jpg'
import intro2 from '../../Asset/Background/intro2.jpg'
import intro3 from '../../Asset/Background/intro3.jpg'
import intro4 from '../../Asset/Background/intro4.jpg'

const BackGround1 = () => {
    return (
        <>
            <div className="intro">
                <div className="slogan">
                    <div data-aos="fade-down" data-aos-duration="2000">
                        <h1>Thành thạo Tiếng Anh</h1>
                        <h1>Trở thành lập trình viên đẳng cấp</h1>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="2000">
                        Rèn luyện Tiếng Anh chuyên ngành IT hàng ngày với Codic <br /> Nâng cao khả năng lập trình</p>
                    <Buttons className="btn-white" dataAos="fade-up" dataAosDuration="2000" to="/exercise">
                        Học ngay<i className="fa-solid fa-angles-right"></i>
                    </Buttons>
                </div>
                <div className="slogan-image">
                    <Images className="slg-img1" data-aos="fade-down-right" data-aos-duration="1000" src={intro1} alt="Ảnh học code"/>
                    <Images className="slg-img2" data-aos="fade-down-down" data-aos-duration="1000" src={intro2} alt="Ảnh học code"/>
                    <Images className="slg-img3" data-aos="fade-down-up" data-aos-duration="1000" src={intro3} alt="Ảnh học code"/>
                    <Images className="slg-img4" data-aos="fade-down-left" data-aos-duration="1000" src={intro4} alt="Ảnh học code"/>
                </div>
            </div>
        </>
    );
};

export default BackGround1;