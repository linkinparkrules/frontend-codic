import { useState, useEffect } from "react";
import element from "./elementTool.module.css";
import http from "../../Utils/Axios";

const ElementTool = () => {
  const [tagSelect, setTagSelect] = useState("Select Tag Type:");

  function handleSelect(event) {
    setTagSelect(event.target.value);
  }
  // console.log(tagSelect);

  return (
    <div className={element.elementTools}>
      <h2>THÊM THẺ MỚI VÀO DANH SÁCH ELEMENT:</h2>
      <select
        value={tagSelect}
        className={element.tagTypeSelect}
        onChange={handleSelect}
      >
        <option hidden>Select Tag Type:</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JS</option>
      </select>
      {tagSelect === "html" && (
        <SubmitElement
          tagType="html"
          definition={false}
          placeholderName="vd: <a>"
          placeholderMeaning="vd: Anchor - Mỏ neo - Dẫn đường link"
          placeholderExample="vd: <a href='/index.html'> Visit Our Site</a>"
        />)}
      {tagSelect === "css" && (
        <SubmitElement
          tagType="css"
          definition={true}
          placeholderName="vd: color"
          placeholderMeaning="vd: màu chữ"
          placeholderDefinition="vd: Định dạng màu của chữ"
          placeholderExample="vd: body {color: red;}"
        />)}
      {tagSelect === "js" && (
        <SubmitElement
          tagType="js"
          definition={true}
          placeholderName="vd: undefined"
          placeholderMeaning="vd: không xác định"
          placeholderDefinition="vd: Biến chưa được gán giá trị sẽ thuộc loại 'không xác định'"
          placeholderExample="vd: let foo; /nconsole.log('is undefined?', foo === undefined);"
        />)}
    </div>
  );
};

export default ElementTool;


const SubmitElement = (props) => {
  const [errMess, setErrMess] = useState("")
  const [text, setText] = useState({
    name: "",
    meaning: "",
    definition: "",
    example: "",
    tagType: props.tagType
  })
  // console.log(text);

  function handleChange(e) {
    setText((prev) => {
      return ({ ...prev, [e.target.name]: e.target.value })
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (text.name.replace(/\s+/g, '') === "" ||
      text.meaning.replace(/\s+/g, '') === "" ||
      text.example.replace(/\s+/g, '') === "") {
        setErrMess("Hãy điền hết các ô trống!");
        return;
    }
    await http.post("/exercise/element", text)
      .then((res) => {
        alert("Bạn đã thêm được thẻ mới!");
        setErrMess("");
      })
      .catch((err) => {
        setErrMess(err.response.data);
        console.log(err.message);
      })
  }

  return (
    <>
      <div className={element.errorMessage}>{errMess}</div>
      <form className={element.form} onSubmit={handleSubmit}>
        <label className={element.labelForm}>Name:</label>
        <input
          className={element.inputForm}
          name="name"
          onChange={handleChange}
          value={text.name}
          placeholder={props.placeholderName}
        />

        <label className={element.labelForm}>Meaning:</label>
        <textarea
          className={element.inputForm}
          name="meaning"
          onChange={handleChange}
          value={text.meaning}
          placeholder={props.placeholderMeaning}
        />

        {props.definition && (<>
          <label className={element.labelForm}>Definition:</label>
          <textarea
            className={element.inputForm}
            name="definition"
            onChange={handleChange}
            value={text.definition}
            placeholder={props.placeholderDefinition}
          />
        </>)}

        <label className={element.labelForm}>Example:</label>
        <textarea
          className={element.inputForm}
          name="example"
          onChange={handleChange}
          value={text.example}
          placeholder={props.placeholderExample}
        />

        <button className={element.submitButton} type="submit">Submit</button>
      </form>
    </>
  );
};