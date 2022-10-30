import { Container, HtmlTag, CssTag, JsTag } from "./Container";
import './Element.css';
import { useEffect, useState, useRef } from 'react';
import http from '../../Utils/Axios';

const Element = () => {
    const [tag, setTag] = useState();
    const previousIdTarget = useRef();
    useEffect(() => {
        http.get('/exercise/element')
            .then((res) => {
                setTag(res.data);
            });
    }, [])
    
    // sử dụng useEffect + addEventListener để chạy event "nếu bấm ngoài nút button"
    useEffect(() => {
        function clickOutsideButton(event) {
            if (!event.target.matches(".element-item")) {
                const prevId = document.getElementById(previousIdTarget.current);
                if (prevId) {
                    prevId.classList.remove("show");
                }
            }
        }
        document.addEventListener("click", clickOutsideButton);
        return () => {
            document.removeEventListener("click", clickOutsideButton)
        }
    })

    if (!tag) {
        return <div className="elementLoading">
            <div>
            Loading... {"(Chờ tý đi, kiến thức không vội vã được đâu!)"}
            </div>
        </div>
    }

    function handleClick(event) {
        const prevId = document.getElementById(previousIdTarget.current);
        // nếu prevId trả kết quả null thì ko chạy remove show (lần bấm nút đầu tiên)
        if (prevId) {
            prevId.classList.remove("show");
        }
        const idTarget = document.getElementById(event.target.value);
        idTarget.classList.toggle("show");
        previousIdTarget.current = event.target.value;
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