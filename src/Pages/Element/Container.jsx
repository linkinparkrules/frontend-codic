export const Container = (props) => {
    return (
        <div className="element-container">
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
//   //Thêm hoặc bớt class="show"
//   function myFunction(id) {
//     document.getElementById(id).classList.toggle("show");
//   }
//   //Lấy tất cả các button menu và các thẻ dropdown
//   var buttons = document.getElementsByClassName("element-item");
//   var contents = document.getElementsByClassName("element-item-content");

//   //Lặp qua tất cả các button menu và gán sự kiện
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//       //lấy value của buttons
//       var id = this.value;
//       //ẩn tất cả các menu con đang được hiển thị
//       for (var i = 0; i < contents.length; i++) {
//         contents[i].classList.remove("show");
//       }
//       //hiển thị menu vừa được click
//       myFunction(id);
//     });
//   }

//   //nếu click ra ngoài các button thì ẩn tất cả các menu con
//   window.addEventListener("click", function (event) {
//     if (!event.target.matches(".element-item")) {
//       for (var i = 0; i < contents.length; i++) {
//         contents[i].classList.remove("show");
//       }
//     }
//   });

