import dictionaryAPI from "../../Utils/Dictionary";
import "./Dictionary.css";
import { useState } from "react";
import { useRef } from "react";

const Dictionary = () => {
    const infoTextOrigin = useRef("Nhập từ và ấn enter xem nghĩa, ví dụ, từ đồng nghĩa,...")
    const [infoText, setInfoText] = useState(infoTextOrigin.current);
    const [infoTextColor, setInfoTextColor] = useState("#9A9A9A");
    const [volumeColor, setVolumeColor] = useState("#999")
    const [word, setWord] = useState("");
    const [wordInput, setWordInput] = useState("");
    const [phonetic, setPhonetic] = useState("");
    const [meaning, setMeaning] = useState("");
    const [example, setExample] = useState("");
    const [synonym, setSynonym] = useState();
    const [exampleDisplay, setExampleDisplay] = useState("none");
    const [synomymDisplay, setSynonymDisplay] = useState("none");
    const [sound, setSound] = useState();
    const searchInput = useRef()

    const wrapper = document.querySelector(".wrapper");

    // Nút loa
    function handleVolume() {
        // Click loa đổi màu và chạy file audio
        setVolumeColor("#4D59FB");
        sound.play();
        // Sau 800ms thì về màu cũ
        setTimeout(() => {
            setVolumeColor("#999");
        }, 800);
    }

    // Reset lại như ban đầu
    function removeWord() {
        setWordInput("");
        searchInput.current.focus();
        wrapper.classList.remove("active");
        setInfoTextColor("#9A9A9A");
        setInfoText(infoTextOrigin.current)
    }

    //Gọi giá trị từ API
    function data(result, word) {
        if (result.title) {
            // console.log(result);
            setInfoText(`Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`);
        } else {
            wrapper.classList.add("active");
            let definitions = result[0].meanings[0].definitions[0];
            let phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
            setWord(result[0].word);
            setPhonetic(phontetics);
            setMeaning(definitions.definition);

            //set example 
            let examples = result[0].meanings[0].definitions[0].example;
            if (examples) {
                setExampleDisplay("block");
                setExample(examples);
            } else {
                setExampleDisplay("none");
                setExample("");
            }

            //Nếu audio = "" => lấy audio tiếp theo
            let phonetics = result[0].phonetics;
            phonetics.filter((a) => {
                if (a.audio !== "") {
                    setSound(new Audio(a.audio));
                    return "";
                } else {
                    return "";
                }
            })

            //Nếu synonyms = undefined => display = none
            let synonyms = result[0].meanings[0];
            if (synonyms.synonyms[0] === undefined) {
                setSynonymDisplay("none");
                setSynonym("");
            } else {
                setSynonymDisplay("block");
                //
                setSynonym(synonyms.synonyms.map((sym, index) => {
                    if (index >= 3) {
                        return <span key={index}></span>;
                    } else {
                        return <span onClick={() => { setWordInput(sym) }} key={index}>{sym}</span>;
                    }
                }))
            }
        }
    }

    // xử lý việc tìm từ
    function handleSubmitWord(event) {
        event.preventDefault();
        // nếu ko có gì ngoài space thì nút vô hiệu lực
        if (wordInput.replace(/\s+/g, '') === "") {
            return;
        }
        // Xóa class active của wrapper (bỏ ẩn đi)
        wrapper.classList.remove("active");
        setInfoTextColor("#000");
        setInfoText(`Searching the meaning of "${wordInput}"`);
        dictionaryAPI.get(`/${wordInput}`)
            .then((result) => {
                data(result.data, word)
            })
            .catch(() => {
                setInfoText(`Can't find the meaning of "${wordInput}". Please, try to search for another word.`);
            });
    };

    return (
        <div className="dictionary">
            <div className="wrapper">
                <header className="heading1">Từ điển Tiếng Anh</header>
                <form className="search" onSubmit={handleSubmitWord}>
                    <input autoFocus ref={searchInput} type="text" placeholder="Tìm kiếm từ" name="word" value={wordInput} onChange={(e) => { setWordInput(e.target.value) }} />
                    <span onClick={removeWord}><i className="fa-solid fa-xmark"></i></span>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
                <p className="info-text" style={{ color: infoTextColor }}>{infoText}</p>
                <ul>
                    <Explaination className="word" title={word} onClick={handleVolume} color={volumeColor}>
                        <span>{phonetic}</span>
                    </Explaination>
                    <div className="content">
                        <Explaination className="meaning" title="Ý nghĩa">
                            <span>{meaning}</span>
                        </Explaination>
                        <Explaination className="example" display={exampleDisplay} title="Ví dụ">
                            <span>{example}</span>
                        </Explaination>
                        <Explaination className="synonyms" display={synomymDisplay} title="Đồng nghĩa">
                            <div className="listSynonyms">
                                {synonym}
                            </div>
                        </Explaination>
                    </div>
                </ul>
            </div>
        </div>
    );
};

const Explaination = (props) => {
    return (
        <li className={props.className} style={{ display: props.display }}>
            <div className="details">
                <p>{props.title}</p>
                {props.children}
            </div>
            {props.className === "word" ? <i className="fas fa-volume-up" onClick={props.onClick} style={{ color: props.color }}></i> : <></>}
        </li>
    );
};

export default Dictionary;