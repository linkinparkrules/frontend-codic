import ContactChannel from "./Components"

const BackGround2 = () => {
  return (
    <div className="contact-info">
      <ContactChannel name="Số điện thoại" content="(+84) 942 681 618" />
      <ContactChannel name="E-mail" target="_blank" content="nghiacao97@gmail.com" />
      <ContactChannel name="Địa chỉ" content="Số 132, đường Cầu Giấy, phường Quan Hoa, quận Cầu Giấy, Hà Nội" />
      <ContactChannel name="Giờ làm việc" content="Thứ 2 - Thứ 6: 8AM - 5PM" />
    </div>
  );
};

export default BackGround2;