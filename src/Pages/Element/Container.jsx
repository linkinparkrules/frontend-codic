export const Container = (props) => {
    return (
        <div>
            <h1 className="heading1">
                {props.heading}
            </h1>
            <div className="all-element">
                {props.children}
            </div>
        </div>
    );
};

export const HtmlTag = (props) => {
    function browserContent() {
        if (props.browserContent === "hidden") {
            return "Nothing will be shown"
        } else {
            return props.browser
        }
    }
    return (
        <div className="element-item-container">
            <button className="element-item" onClick={props.onClick} value={props.id}>
                {props.name}
            </button>
            <div className="element-item-content" id={props.id}>
                <h4>Ý nghĩa</h4>
                <p>{props.meaning}</p>
                <h4>Ví dụ</h4>
                <p>{props.example}</p>
                <h4>Trình duyệt</h4>
                <p>{browserContent()}</p>
            </div>
        </div>
    )
}

export const CssTag = (props) => {
    return (
        <div className="element-item-container">
            <button className="element-item" onClick={props.onClick} value={props.id}>
                {props.name}
            </button>
            <div className="element-item-content" id={props.id}>
                <h4>Ý nghĩa</h4>
                <p>{props.meaning}</p>
                <h4>Định nghĩa</h4>
                <p>{props.definition}</p>
                <h4>Ví dụ</h4>
                <p>{props.example}</p>
            </div>
        </div>
    );
};

export const JsTag = (props) => {
    return (
        <div className="element-item-container">
            <button className="element-item" onClick={props.onClick} value={props.id}>
                {props.name}
            </button>
            <div className="element-item-content" id={props.id}>
                <h4>Ý nghĩa</h4>
                <p>{props.meaning}</p>
                <h4>Định nghĩa</h4>
                <p>{props.definition}</p>
                <h4>Ví dụ</h4>
                <p>{props.example}</p>
            </div>
        </div>
    );
};

