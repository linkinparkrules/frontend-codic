import './BackGround.css';
import {Cards, Images, Numbers, Buttons} from './Components';
import benefit1 from "../../Asset/Icon/benefit1.png";
import benefit2 from "../../Asset/Icon/benefit2.png";
import benefit3 from "../../Asset/Icon/benefit3.png";
import benefit5 from "../../Asset/Icon/benefit5.png";
import benefit6 from "../../Asset/Icon/benefit6.png";


const BackGround2 = () => {
    return (
        <>
            <div className="new-word">
                <h1 className="heading1" data-aos="zoom-in" data-aos-duration="2000">
                    Đọc tài liệu Tiếng Anh dễ dàng hơn</h1>
                <Cards className="new-word-number" dataAos="zoom-in" dataAosDuration="2000">
                    <Numbers h2="1000+" p="Từ mới"/>
                    <Numbers h2="1000+" p="Ví dụ"/>
                </Cards>
                <div className="new-word-benefit">
                    <Images className="top" src={benefit1} alt="Nhiều từ">
                        <Numbers h2="Từ mới HTML, CSS, JS" p="Từ mới đa dạng, phong phú. Đáp ứng đủ nhu cầu cho lập trình viên." />
                    </Images>
                    <Images className="bottom" src={benefit2} alt="Chọn lọc">
                        <Numbers h2="Chọn lọc nghĩa" p="Nghĩa của từ được chọn lọc tương ứng với từ ngữ chuyên ngành IT." />
                    </Images>
                    <Images className="top" src={benefit3} alt="Ví dụ">
                        <Numbers h2="Ví dụ minh họa" p="Ví dụ minh họa giúp lập trình viên hiểu rõ hơn về cách dùng của từ." />
                    </Images>
                    <Images className="bottom" src={benefit5} alt="Phát âm">
                        <Numbers h2="Cải thiện phát âm" p="Phiên âm và cách đọc giúp lập trình viên có cái nhìn thực tế về cách phát âm của từ." />
                    </Images>
                    <Images className="top" src={benefit6} alt="Dễ hiểu">
                        <Numbers h2="Xúc tích, dễ hiểu" p="Cách giải thích ngắn gọn giúp lập trình viên rút ngắn thời gian tìm hiểu từ." />
                    </Images>
                </div>
                <Buttons className="btn-white" dataAos="fade-up" dataAosDuration="1500" to="/dictionary">
                    Học ngay
                    <i className="fa-solid fa-angles-right"></i>
                </Buttons>
            </div>
        </>
    );
};

export default BackGround2;