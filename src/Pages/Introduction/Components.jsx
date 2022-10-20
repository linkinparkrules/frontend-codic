
const DevProcess = (props) => {
    return (
        <div className={props.className} dataAos={props.dataAos} dataAosDuration={props.dataAosDuration}>
            <h2 className={props.h2}>{props.year}</h2>
            <h3 className={props.h3}>{props.period}</h3>
            <img src={props.src} alt={props.alt}/>
            <p className={props.p}>{props.content}</p>
        </div>
    )
}

export default DevProcess