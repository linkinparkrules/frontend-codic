import { NavLink, Link } from 'react-router-dom';
import codicLogo from './Asset/Icon/codic.png';
import { useContext, useEffect, useState } from 'react';
import UserContext from './Context';
import "./App.css"

const navBarClassName = (navBarStatus) => {
    return navBarStatus.isActive ? "menu-item-active" : "menu-item-inactive";
};

const NavBar = () => {
    const [admin, setAdmin] = useState("none")
    const loginCtx = useContext(UserContext);
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

    const handleLogout = () => {
        loginCtx.setUser(null);
        localStorage.removeItem('jwt');
        sessionStorage.removeItem('jwt');
    }

    useEffect(() => {
        console.log(loginCtx);
        // nếu có data thì mới chạy đk isAdmin kia để tránh lỗi
        if (loginCtx.user) {
            if (loginCtx.user.isAdmin) {
                console.log("block");
                setAdmin("block");
            }
        } else {
            console.log("none");
            setAdmin("none");
        }
    }, [loginCtx])



    return (
        <div className="navi-bar">
            <div className="logo">
                <Link to="/home">
                    <img className="logo-image" src={codicLogo} alt="Từ điển lập trình" />
                    Codic
                </Link>
            </div>
            {/* Navbar for desktop and pad */}
            <div className="menu">
                <div className="menu-item" style={{ display: admin }}>
                    <NavLink className={navBarClassName} to="/admin">
                        Admin
                    </NavLink>
                </div>
                <MenuItem link="/home" linkName="Trang chủ" />
                <MenuItem link="/introduction" linkName="Giới thiệu" />
                <MenuItem link="/exercise" linkName="Học tập" />
                <MenuItem link="/contact" linkName="Liên hệ" />
                {loginCtx.user ?
                    <div className='menu-item'>
                        <Link to="/" onClick={handleLogout}>
                            Đăng xuất
                        </Link>
                    </div>
                    : <MenuItem link="/signup" linkName="Đăng ký" />
                }
                {loginCtx.user ?
                    <div style={{ color: `#${randomColor2}`, textAlign: "center" }}>Welcome, <br />
                        <div style={{ textTransform: "uppercase", color: `#${randomColor}` }}>{loginCtx.user.username}</div>
                    </div>
                    : <MenuItem link="/login" linkName="Đăng nhập" />
                }
            </div>

            {/* Navbar for mobile */}
            {loginCtx.user ?
                <div className='text14' style={{ color: `#${randomColor2}`, textAlign: "center" }}>Welcome, <br />
                    <div style={{ textTransform: "uppercase", color: `#${randomColor}` }}>{loginCtx.user.username}</div>
                </div>
                : <div className="menu-item text14"><NavLink className={navBarClassName} to="/login">Đăng nhập</NavLink></div>
            }

            {loginCtx.user ?
                <div className='menu-item text14'>
                    <Link to="/" onClick={handleLogout}>
                        Đăng xuất
                    </Link>
                </div>
                : <div className="menu-item text14"><NavLink className={navBarClassName} to="/signup">Đăng ký</NavLink></div>
            }

            <label htmlFor="nav-mobile-checkbox" className='nav-bar-btn'>
                <i className="fa-solid fa-bars"></i>
            </label>

            <input type="checkbox" className='nav-mobile-checkbox' id='nav-mobile-checkbox' />

            <label htmlFor="nav-mobile-checkbox" className='overlay-mobile'></label>

            <div className="menu-mobile">
                <label htmlFor="nav-mobile-checkbox" className='nav-bar-close'>
                    <i className="fa-solid fa-xmark" />
                </label>
                <div className="menu-item" style={{ display: admin }}>
                    <NavLink className={navBarClassName} to="/admin">
                        Admin
                    </NavLink>
                </div>
                <MenuItem link="/home" linkName="Trang chủ" />
                <MenuItem link="/introduction" linkName="Giới thiệu" />
                <MenuItem link="/exercise" linkName="Học tập" />
                <MenuItem link="/contact" linkName="Liên hệ" />
            </div>
        </div>
    );
};

const MenuItem = (props) => {
    return (
        <div className="menu-item"><NavLink className={navBarClassName} to={props.link}>{props.linkName}</NavLink></div>
    );
}

export default NavBar;