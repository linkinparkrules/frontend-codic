const GameArea = (props) => {
    return (
        <div id={props.id}>
            <div id={props.character}>
                {props.children}
            </div>
        </div>
    );
};

export default GameArea;