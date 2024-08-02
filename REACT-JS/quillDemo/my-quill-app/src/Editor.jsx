import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import Quill from "quill";

import QuillEditor from "react-quill";
import UndoIcon from "./Icon/undo.png";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.css";
import ReactQuill from "react-quill";
var icons = ReactQuill.Quill.import("ui/icons");

icons["undo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  </svg>`;
icons["redo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  </svg>`;
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);
 

const Editor = () => {
  const [value, setValue] = useState("");

  const toolbarOption = [["bold","italic"],["link","image"] ] 
  const quill = useRef();const quillRef = useRef(null);const handleFocus = () => {if (quillRef.current) { quillRef.current.focus();}};
  const undoText = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.undo();
    }
  };


 const redoText = () =>{
    if(quillRef.current){
        quillRef.current.getEditor().history.redo()
    }
 } 

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current.getEditor();

        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          
          [{ color: [] }],
          ["undo","redo"],
        
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
          undo: undoText,
          redo:redoText
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",

    "italic",
    "underline",
    "undo",
    "size",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  //   useEffect(() => {
    //     const el = document.getElementsByClassName("ql-undo")[0];
  //     el.innerHTML = `<svg viewbox="0 0 18 18">
  //     <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
  //     <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  //   </svg>`;
  //     console.log(el);
  //   }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <label className={styles.label}>Editor Content</label>
        <QuillToolbar   />
        <QuillEditor
          ref={quillRef}
          className={styles.editor}
          theme="snow"
          value={value}
          formats={formats}
          modules={modules}
          onChange={(value) => setValue(value)}
        />
      </div>
      <button  className={styles.btn}>
        Submit
      </button>
      <button onClick={handleFocus} className="btn">
        Focus
      </button>
      {/* <button onClick={undoText}>
        <img src={UndoIcon} alt="Undo" />
      </button> */}
    </>
  );
};

export default Editor;

 const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
     
      <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select>
     
   
  
    </span>
  
   
  </div>
);


