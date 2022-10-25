import { Link } from 'react-router-dom';

const StudyStep = (props) => {
    return (
        <div className = {props.className}>
            <Link to={props.linkTo} onClick={props.onClick}>
                <img src={props.src} alt={props.alt} />
                <h2>{props.content}</h2>
            </Link>
        </div>
    ); 
};
    
export default StudyStep;