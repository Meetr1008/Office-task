import React, { useEffect, useState } from "react";
import Quill from "quill";

const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14A5,5,0,1,0,4,9"
    />
  </svg>
);

const fontOptions = [
  { value: "", label: "Select Font" },
  { value: "cosmic-sans", label: "cosmic-sans" },
  { value: "georgia", label: "georgia" },
  { value: "Roboto", label: "Roboto" },
];

const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

const undoChange = (quill) => {
  quill.history.undo();
};

const redoChange = (quill) => {
  quill.history.redo();
};

const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
];
Quill.register(Font, true);

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: function () {
        undoChange(this.quill);
      },
      redo: function () {
        redoChange(this.quill);
      },
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

const EditorToolbar = ({ quillRef, setValue }) => {
  useEffect(() => {
    const fontSelect = document.querySelector(".ql-font");
    const handleChange = (e) => {
      const selectedFont = e.target.value;
      console.log("Font changed to: ", selectedFont);
      if (quillRef.current) {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        if (range) {
          quill.insertText(range.index, `You selected: ${selectedFont} `, {
            bold: true,
          });
          quill.setSelection(range.index + selectedFont.length + 13);
          setValue(`${selectedFont}`);
        }
      }
    };

    if (fontSelect) {
      fontSelect.addEventListener("change", handleChange);
    }
    
    return () => {
      if (fontSelect) {
        fontSelect.removeEventListener("change", handleChange);
      }
    };
  }, [quillRef]);

  return (
    <div id="toolbar">
      <span className="ql-formats">
        <select className="ql-header" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
      <span className="ql-formats">
        <button className="ql-script" value="super" />
        <button className="ql-script" value="sub" />
        <button className="ql-blockquote" />
        <button className="ql-direction" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
      <span className="ql-formats">
        <button className="ql-formula" />
        <button className="ql-code-block" />
        <button className="ql-clean" />
      </span>
      <span className="ql-formats">
        <button className="ql-undo">
          <CustomUndo />
        </button>
        <button className="ql-redo">
          <CustomRedo />
        </button>
      </span>
      <span className="ql-formats">
        <select className="ql-font" defaultValue="">
          {fontOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};
  
export default EditorToolbar;
