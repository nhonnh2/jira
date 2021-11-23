import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

export default function EditorTinymce(props) {
  const editorRef = useRef(null);
  return (
    <Editor
      
      onInit={(evt, editor) => (editorRef.current = editor)}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      {...props}
    />
  );
}
