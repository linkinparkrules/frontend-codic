import './BackGround.css';
import { Cards, Images, Numbers, Buttons } from './Components';
import element from '../../Asset/Background/element.jpg';
import elementExplaination from "../../Asset/Background/element explanation.jpg";
import elementExample from '../../Asset/Background/element example.jpg';
import element1 from '../../Asset/Background/element1.jpg';


const BackGround3 = () => {
    return (
        <div className="remember-element">
            <div data-aos="zoom-in" data-aos-duration="2000">
                <h1 className="heading1">
                    Tiết kiệm thời gian ghi nhớ thẻ</h1>
                <Cards className="element-number">
                    <Numbers h2="300+" p="Thẻ HTML, CSS, JS" />
                    <Numbers h2="400+" p="Chú thích" />
                    <Numbers h2="300+" p="Ví dụ" />
                </Cards>
            </div>
            <div className="element-content">
                <div className="element-content-img">
                    <Images className="row2-4" src={element} alt="Ảnh giải thích thẻ" />
                    <Images className="row1-3" src={elementExplaination} alt="Ảnh giải thích thẻ" />
                    <Images className="row3-5" src={elementExample} alt="Ảnh giải thích thẻ" />
                    <Images className="row2-4" src={element1} alt="Ảnh giải thích thẻ" />
                </div>
                <div className="element-content-list">
                    <Cards className="list1-4" dataAos="fade-left" dataAosDuration="1000">
                        <Numbers h2="Tên thẻ" p="Tên thẻ, cách viết tắt thẻ trong từng ngôn ngữ" />
                    </Cards>
                    <Cards className="list2-4" dataAos="fade-left" dataAosDuration="1500">
                        <Numbers h2="Cách dùng thẻ" p="Giải thích ý nghĩa, cú pháp, cách dùng của từng thẻ" />
                    </Cards>
                    <Cards className="list3-4" dataAos="fade-left" dataAosDuration="2000">
                        <Numbers h2="Ví dụ thực tiễn" p="Cụ thể hóa cách dùng thẻ trong các ví dụ minh họa" />                    
                    </Cards>
                </div>
            </div>
            <Buttons className="btn-white" dataAos="fade-up" dataAosDuration="1000">
                    Học ngay
                    <i className="fa-solid fa-angles-right"></i>
            </Buttons>
        </div>
    );
};

export default BackGround3;