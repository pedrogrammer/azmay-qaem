import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import "./App.css";
import ChatBox from "./components/chatBox";
import FileUpload from "./components/fileUpload";
import QueryBuilderForm from "./components/queryBuilderForm";

function App() {
  const [componentType, setComponentType] = useState<
    "fileUpload" | "queryBuilderForm" | "chatBox"
  >();

  const onChange = (e: RadioChangeEvent) => {
    setComponentType(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 30 }}>
          <div style={{ fontSize: 16, marginBottom: 14 }}>نوع کامپوننت</div>
          <Radio.Group onChange={onChange} defaultValue="a" buttonStyle="solid">
            <Radio.Button value="fileUpload">File Upload</Radio.Button>
            <Radio.Button value="queryBuilderForm">
              Query Builder Form
            </Radio.Button>
            <Radio.Button value="chatBox">Chat Box</Radio.Button>
          </Radio.Group>
        </div>
        {componentType === "fileUpload" && <FileUpload />}
        {componentType === "queryBuilderForm" && <QueryBuilderForm />}
        {componentType === "chatBox" && <ChatBox />}
      </header>
    </div>
  );
}

export default App;
