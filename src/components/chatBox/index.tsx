import { CloudUploadOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import View from "../base/view";

const { Search } = Input;

const componentData = {
  type: "chat",
  componentdata: {
    contact: [
      {
        order: 13,
        id: 345,
        name: "salam",
        job: "saeed",
        Img: "1.jpg",
        searcht: "salam saeed 1",
        chatid: 7858,
        type: true,
        status: true,
        shmessage: "message",
        isshown: true,
        bagecolor: "red",
        bagetext: "8",
      },
      {
        id: 34534,
        name: "salam",
        job: "saeed",
        Img: "1.jpg",
        searcht: "salam saeed 1",
        chatid: 7858,
      },
      {
        id: 12345331,
        name: "salam",
        job: "saeed",
        Img: "1.jpg",
        searcht: "salam saeed 1",
        chatid: 7858,
      },
    ],
    chat: [
      {
        order: 13,
        side: true,
        date: "شنبه 5 آبان 4:20  چهار  ",
        headertext: "sd",
        headericon: "sd",
        headerid: 48,
        contactid: "salam saeed 1",
        chatid: 7858,
        messageid: 7858,
        status: true,
        shmessage: "message",
        isshown: true,
        messagetext: "asda",
        messageType: "text",
        img: "sadodin.ir/312/2.jpg",
        atch: "sadodin.ir/321/3.rar",
      },
      {
        order: 13,
        side: true,
        date: "شنبه 5 آبان 4:20  چهار  ",
        headertext: "sd",
        headericon: "sd",
        headerid: 48,
        contactid: "salam saeed 1",
        chatid: 7858,
        messageid: 7858,
        status: true,
        shmessage: "message",
        isshown: true,
        messagetext: "asda",
        messageType: "text",
        img: "sadodin.ir/312/2.jpg",
        atch: "sadodin.ir/321/3.rar",
      },
    ],
  },
};

function ChatBox() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <View
      style={{
        width: "80%",
        height: 400,
        border: "1px solid #d9d9d9",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <View style={{ width: 300, flexDirection: "column" }}>
        <View style={{ padding: 8, borderBottom: "1px solid #d9d9d9" }}>
          <Search
            placeholder="جستجو"
            onSearch={onSearch}
            style={{ direction: "rtl" }}
          />
        </View>
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
        >
          {componentData.componentdata.contact.map(
            ({ bagetext, Img, name, job }, index) => (
              <>
                <View
                  style={{
                    padding: 10,
                    justifyContent: "flex-start",
                    width: "100%",
                    cursor: "pointer",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Badge count={bagetext} size="small">
                    {false ? (
                      // Img ?
                      Img
                    ) : (
                      <Avatar size="large" icon={<UserOutlined />} />
                    )}
                  </Badge>
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ fontSize: 16 }}>{name}</View>
                    <View style={{ fontSize: 16 }}>{job}</View>
                  </View>
                </View>
                {++index !== componentData.componentdata.contact.length && (
                  <View
                    style={{
                      width: "60%",
                      height: 1,
                      backgroundColor: "#d9d9d9",
                    }}
                  />
                )}
              </>
            )
          )}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderLeft: "1px solid #d9d9d9",
          flexDirection: "column",
        }}
      >
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            height: 50,
            width: "100%",
            alignItems: "center",
            paddingInline: 10,
          }}
        >
          <Input
            addonBefore={<CloudUploadOutlined />}
            addonAfter={<SendOutlined />}
          />
        </View>
      </View>
    </View>
  );
}

export default ChatBox;
