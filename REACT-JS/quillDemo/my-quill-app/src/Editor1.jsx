import React, { useRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./styles.module.css";

export const Editor1 = () => {
  const quillRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.on("text-change", () => {
        setValue(quill.root.innerHTML);
      });
      const toolbar = quill.getModule("toolbar");
      toolbar.addHandler("font", (value) => {
        quill.format("font", value);
        const range = quill.getSelection();
        quill.insertText(range.index, value);
      });
    }
  }, []);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className="text-editor">
      <EditorToolbar quillRef={quillRef} setValue={setValue} />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={handleChange}  placeholder={"Write something awesome..."} modules={modules} formats={formats}/>
    </div>
  );
};

export default Editor1;
