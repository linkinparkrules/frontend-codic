import { useContext } from "react";
import UserContext from ".";
import { Navigate, useNavigate } from "react-router-dom";
import './AuthContext.css'

const AuthAccess = (props) => {
  const login = useContext(UserContext);
  const mode = props.mode;
  const navigateLogin = useNavigate();

  if (!login.user) {
    switch (mode) {
      case "hide":
        return null;
      case "navigate":
        return <Navigate to='/login' replace />
      case "message":
        return (
          <div
            className="authMessage"
            style={{
              backgroundImage:
                `linear-gradient(to bottom right, 
              #${Math.floor(Math.random() * 16777215).toString(16)}, 
              #${Math.floor(Math.random() * 16777215).toString(16)})`
            }}>
            <div>
              {"Bạn cần đăng nhập để sử dụng chức năng này"}
            </div>
            <button
              className="goToLoginBtn"
              onClick={() => { navigateLogin("/login") }}
            >
              Đăng nhập <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        );
      default:
        return null;
    };
  }
  return props.children;
};

export default AuthAccess;