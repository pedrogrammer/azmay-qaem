import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import React from "react";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "Files",
  multiple: true,
  action: "https://api.sadodin.ir/uploadfile",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIiwiY3R5IjoiSldUIn0.HKQzvM0rbSkJhOklts4Hhyu1Ral7kMYTiUCFaMrWNXT3UqeSyhdCNw.VnvjzmCNtSNylVr4cfXT-A.AKOxX3AChcMFbiUjLziTdSFxGRkH23f_nfWNOCiebwAnSNOMf8yjc10X8m85nm9eZSFEL8IXWbUA3Hkp9QhUnfp-Cw6nfaQMhs7mrbIo9wRux6io1UrUXpOrTikk6l_I3SL0fy4PfRRGGVeVgIVpLdcRMjUGHOxyYzjodJNVM1rFSPSwurMybmg0xGadZptbr9UrXjGoYD-4IBwPw153nHOUtu7jnRa1GFpvcZTfbTY5aW_aI_GLzLRnH1-pme7kL-vgB3AtjZ4Q6fNd88Tv84sNxwP4HsEe2eVpY8gA_HK2BYtaGvoKyuBiX3wKLXyEotSkHfKl1SnAOB0OxLoDyZ9yRFuZL38Y2tT9ZssrjyF4KzJMZpIFSJc_Sca0Oat7KUeehDgXApSy64tt9ekSRzlxWH9JUg3YwzYQfZAEOJkEzHQYyzMXt74tYntwGbk_.NU7mceJUTv_cRo4eQLWCEg",
  },
  onChange(info) {
    const { status } = info.file;
    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  // onDrop(e) {
  //   console.log('Dropped files', e.dataTransfer.files);
  // },
};

const FileUpload: React.FC = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading
      company data or other banned files.
    </p>
  </Dragger>
);

export default FileUpload;
