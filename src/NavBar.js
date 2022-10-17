import { NavLink, Link } from 'react-router-dom';
import codicLogo from './Asset/Icon/codic.png';

const navBarClassName = (navBarStatus) => {
    return navBarStatus.isActive? "menu-item-active" : "menu-item-inactive";
}

const NavBar = () => {
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
                <MenuItem link="/log-in" linkName="Đăng nhập" />
                <MenuItem link="/sign-up" linkName="Đăng ký" />
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