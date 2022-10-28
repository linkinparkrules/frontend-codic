import { Container, HtmlTag, CssTag, JsTag } from "./Container";
import './Element.css';
import { useEffect, useState } from 'react';
import http from '../../Utils/Axios';

const Element = () => {
    const [tag, setTag] = useState();
    useEffect(() => {
        http.get('/exercise/element')
            .then((res) => {
                setTag(res.data);
            });
    }, [])

    if (!tag) {
        return <h1 style={{ margin: "auto", height: "100%" }}>
            Loading... {"(Chờ tý đi, kiến thức không vội vã được đâu!)"}
        </h1>
    }

    function handleClick(event) {
        const js = document.getElementById(event.target.value);
        js.classList.toggle("show");
    }

    
    return (
        <>
            <Container heading="Thẻ HTML">
                {tag.htmlTag.map((tag) => {
                    return <HtmlTag onClick={handleClick} id={tag._id} key={tag._id} name={tag.name} meaning={tag.meaning} example={tag.example} browser={tag.browser} browserContent={tag.browserContent} />
                })}
            </Container>
            <Container heading="Thẻ CSS">
                {tag.cssTag.map((tag) => {
                    return <CssTag onClick={handleClick} id={tag._id} key={tag._id} name={tag.name} meaning={tag.meaning} definition={tag.definition} example={tag.example} />
                })}
            </Container>
            <Container heading="Thẻ JS">
                {tag.jsTag.map((tag) => {
                    return <JsTag onClick={handleClick} id={tag._id} key={tag._id} name={tag.name} meaning={tag.meaning} definition={tag.definition} example={tag.example} />
                })}
            </Container>
        </>
    );
}

export default Element;