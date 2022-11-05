export const Drag = (props) => {
    return (
        <p className="css" draggable={props.draggable} id={props.id} style={{ display: props.display }} onDragStart={props.dragStart} onDragEnd={props.dragEnd}>
            {props.name}
        </p>
    )
}

export const Drop = (props) => {
    
    return (
        <p className="meaning" style={{ display: props.display }}>
            <span className="blank" id={props.id} name={props.name} onDragOver={props.dragOver} onDrop={props.drop}>{props.children}</span>
            : {props.meaning}
        </p>
    )
}