const GameArea = (props) => {
    return (
        <div id={props.id}>
            <div id={props.character} style={props.style}>
                {props.children}
            </div>
        </div>
    );
};

export default GameArea;