import {Link} from 'react-router-dom';

const BackToTop = () => {
    return (
        <Link className="top-btn" to="#top">
            TOP
            {/* <i class="fa-solid fa-angles-up fa-2x"></i> */}
        </Link>
    );
};

export default BackToTop;