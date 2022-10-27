import { Link } from 'react-router-dom';

export const Numbers = (props) => {
    return (
        <div>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
    );
};

export const Cards = (props) => {
    return (
        <div className={props.className} data-aos={props.dataAos} data-aos-duration={props.dataAos}>
            {props.children}
        </div>
    );
};

export const Images = (props) => {
    return (
        <div className={props.className} data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
            <img src={props.src} alt={props.alt} />
            {props.children}
        </div>
    );
};

export const Buttons = (props) => {
    return (
        <button className={props.className} data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
            <Link to={props.to}>
                {props.children}
            </Link>
        </button>
    );
};

export const Sections = (props) => {
    return (
        <>
            <div className={props.className}>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <div className={props.classNameLink}><Link to={props.to}>{props.content}</Link></div>
        </>
    );
};


