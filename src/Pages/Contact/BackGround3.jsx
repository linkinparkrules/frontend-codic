import { Link } from 'react-router-dom'

const BackGround3 = () => {
  return (
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
  );
};

export default BackGround3;