import { Link } from "react-router-dom";

const ContactChannel = (props) => {
    return (
        <>
            <h2> {props.name} </h2>
            <Link to={props.linkTo} > {props.content} </Link>
        </>
    )
}

export default ContactChannel