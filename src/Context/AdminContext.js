import { useContext } from "react";
import UserContext from ".";
import { useNavigate, Navigate } from "react-router-dom";

const AdminAccess = (props) => {
  const admin = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(admin);

  // trang web chưa load xong thì ko hiển thị gì
  if (!admin.user) {
    return ;
  }
  // nếu là admin thì hiển thị nội dung, ko thì điều hướng về trang web trước
  if (admin.user.isAdmin) {
    return props.children;
  } else return <>{navigate(-1)}</>
}

export default AdminAccess;