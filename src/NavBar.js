import { NavLink, Link } from 'react-router-dom';
import codicLogo from './Asset/Icon/codic.png';
import { useContext } from 'react';
import UserContext from './Context';

const navBarClassName = (navBarStatus) => {
    return navBarStatus.isActive? "menu-item-active" : "menu-item-inactive";
};

const NavBar = () => {
    const loginCtx = useContext(UserContext);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let randomColor2 = Math.floor(Math.random()*16777215).toString(16);

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
                <MenuItem link="/signup" linkName="Đăng ký" />
                {loginCtx.user ? 
                    <div style={{color: `#${randomColor2}`, textAlign: "center"}}>Welcome, <br />
                        <div style={{textTransform: "uppercase", color: `#${randomColor}`}}>{loginCtx.user.username}</div>
                    </div> 
                    : <MenuItem link="/login" linkName="Đăng nhập" />
                }
<<<<<<< HEAD
=======
                {loginCtx.user ? 
                    <Link to="/" onClick={handleLogout}>Đăng xuất</Link> 
                    : <MenuItem link="/signup" linkName="Đăng ký" />
                }
                
>>>>>>> 4307afda33b8bc120c1c5de0214dc8520cf78340
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