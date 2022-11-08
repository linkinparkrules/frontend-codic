
const DevProcess = (props) => {
    return (
        <div className={props.className} data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
            <img src={props.src} alt={props.alt}/>
            <h2 className={props.h2}>{props.year}</h2>
            <h3 className={props.h3}>{props.period}</h3>
            <p className={props.p}>{props.content}</p>
        </div>
    )
}

export default DevProcess