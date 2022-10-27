import { NavLink, Link } from 'react-router-dom';
import codicLogo from './Asset/Icon/codic.png';
import { useContext } from 'react';
import UserContext from './Context';

const navBarClassName = (navBarStatus) => {
    return navBarStatus.isActive? "menu-item-active" : "menu-item-inactive";
};

const NavBar = () => {
    const loginCtx = useContext(UserContext);

    const handleLogout = () => {
        loginCtx.setUser(null);
        localStorage.removeItem('jwt');
        sessionStorage.removeItem('jwt');
    }

    return (
        <div className="navi-bar">
            <div className="logo">
                <Link to="/home">
                    <img className="logo-image" src={codicLogo} alt="Từ điển lập trình" />
                        Codic
                </Link>
            </div>
            <div className="menu">
                <MenuItem link="/home" linkName="Trang chủ" />
                <MenuItem link="/introduction" linkName="Giới thiệu" />
                <MenuItem link="/exercise" linkName="Học tập" />
                <MenuItem link="/contact" linkName="Liên hệ" />
                {loginCtx.user ? 
                    <div style={{color: "orange"}}>{"Welcome, " + loginCtx.user.username}</div> 
                    : <MenuItem link="/login" linkName="Đăng nhập" />
                }
                {loginCtx.user ? 
                    <Link to="/" onClick={handleLogout}>Đăng xuất</Link> 
                    : <MenuItem link="/signup" linkName="Đăng ký" />
                }
                
            </div>
            <hr />
        </div>
    );
};

const MenuItem = (props) => {
    return (
        <div className="menu-item"><NavLink className={navBarClassName} to={props.link}>{props.linkName}</NavLink></div>
    );
}

export default NavBar;