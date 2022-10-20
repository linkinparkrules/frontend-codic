import {Link} from 'react-router-dom';

const BackToTop = () => {
    return (
        <Link className="top-btn" onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}>
            <i className="fa-solid fa-angles-up fa-2x"></i>
        </Link>
    );
};

export default BackToTop;