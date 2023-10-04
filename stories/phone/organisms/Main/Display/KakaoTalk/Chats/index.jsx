/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import UrlContext from "components/page_context/UrlContext";

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";

import Main from "stories/phone/Apps/KakaoTalk/templates/Main/index";
import Chat from "stories/phone/Apps/KakaoTalk/templates/Chat/index";
import ETCSetting from "stories/phone/Apps/KakaoTalk/templates/ETCSetting/index";
import ETCSetting_lab from "stories/phone/Apps/KakaoTalk/templates/ETCSetting_lab/index";
import ChatSetting from "stories/phone/Apps/KakaoTalk/templates/ChatSetting/index";
import Profile from "stories/phone/Apps/KakaoTalk/templates/Profile/index";
import SelectPerson from "stories/phone/Apps/KakaoTalk/templates/SelectPerson/index";
import SettingChatRoom_NameImg from "stories/phone/Apps/KakaoTalk/templates/SettingChatRoom_NameImg/index";
import SelectFile from "stories/phone/Apps/KakaoTalk/templates/SelectFile/index";
import Gallery from "stories/phone/Apps/Basic/Gallery/index";
import Setting_ProfileName from "stories/phone/Apps/KakaoTalk/templates/Setting_ProfileName/index";
import EditImg from "stories/phone/Apps/KakaoTalk/templates/EditImg/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import Icon from "stories/phone/atoms/Icon/index";
import CheckBox from "stories/phone/Apps/KakaoTalk/atoms/CheckBox/index";

function Chats({ functionName, methodId, descriptionId }) {
  //
  const {
    functionName_seeMessage,
    functionName_sendMessage,
    functionName_reserveMessage,
    functionName_resendMessage,
    functionName_sendImg,
    //
    functionName_kakaotalk_groubChatLeave_rejectInvitation,
    functionName_kakaotalk_groubChatLock,
    functionName_kakaotalk_groubChatLeave_quietly,
    //
    functionName_groupChat,
    functionName_leaveChat,
    functionName_chatRoomNameChange,
    functionName_chatRoomImgChange,
    functionName_changeProileImg,
    functionName_messageDelete,
    functionName_cancelMessage,
  } = useContext(UrlContext);

  let choicedComponent = <Default />;
  const [groupName, setGroupName] = useState("그룹채팅");

  switch (functionName.replaceAll("-", " ")) {
    case functionName_seeMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
          <Chat key="chat" />,
        ][descriptionId];
      }
      break;
    case functionName_sendMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main"
            tab={{ friend: true }}
            target_friend={{ person1: true }}
          />,
          <Profile key="Profile" target={{ chat: true }} />,
          <Chat key="chat" />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
          <Chat key="chat" />,
        ][descriptionId];
      }

      break;
    case functionName_reserveMessage:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
        <Chat key="Chat1" target={{ optionBtn: true }} />,
        <Chat
          key="Chat2"
          open={{ option: true }}
          target={{ reserveMessage: true }}
        />,
        <Chat
          key="Chat3"
          open={{ optionSetting: true }}
          target={{ reserveMessage: true }}
        />,
        //
        <Chat
          key="Chat4"
          open={{ alert: true }}
          target={{ optionBtn: true }}
        />,
        <Chat
          key="Chat5"
          open={{ option: true }}
          target={{ reserveMessage: true }}
        />,
        <Chat
          key="Chat6"
          reopen={{ optionSetting: true }}
          target={{ reserveMessage: true }}
        />,
      ][descriptionId];

      break;
    case functionName_resendMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
          <Chat
            key="chat1"
            target={{ chatOption: true }}
            open={{ chat: true }}
          />,
          <Chat
            key="chat2"
            target={{ resend: true }}
            open={{ chat: true, contentOption: true }}
          />,
          <Chat
            key="chat3"
            open={{ shareModal: true, chat: true }}
            share={{ friend2: true }}
          />,
          <Chat key="chat4" open={{ topAlert: true, chat: true }} />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
          <Chat
            key="chat1"
            target={{ chatOption: true, resend: true }}
            open={{ chat: true }}
          />,
          <Chat
            key="chat2"
            target={{ resend: true }}
            open={{ chat: true, contentOption: true }}
          />,
          <Chat
            key="chat2"
            open={{ shareModal: true, chat: true }}
            share={{ shareOut: true }}
          />,
          <Chat key="chat3" open={{ shareModal_default: true, chat: true }} />,
          <SelectPerson
            key="selectPerson"
            header={"공유 대상 선택"}
            target={{ person2: true }}
          />,
          <Chat
            key="chat4"
            content={{ chatName: "철수", sendChatContent: "좋은 아침^^" }}
            open={{ chat: false, sendedChat: true }}
          />,
        ][descriptionId];
      }
      break;
    //
    case functionName_sendImg:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main"
            tab={{ friend: true }}
            target_friend={{ person1: true }}
          />,
          <Profile key="profile" target={{ chat: true }} />,
          <Chat key="chat1" target={{ optionBtn: true }} />,
          <Chat
            key="chat2"
            target_option={{ gallery: true }}
            open={{ option: true }}
          />,
          <Chat key="chat3" open={{ imgOption: true }} />,
          <Chat
            key="chat4"
            open={{ chat: true, sendedChat: true }}
            content={{
              name: "영희",
              chat: "좋은 아침 ^^",
              chatName: "영희",
              sendChatContent: (
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "rgb(250,235,215)",
                  }}></div>
              ),
            }}
          />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main"
            tab={{ friend: true }}
            target_friend={{ person1: true }}
          />,
          <Profile key="profile" target={{ chat: true }} />,
          <Chat key="chat1" target={{ optionBtn: true }} />,
          <Chat
            key="chat2"
            target_option={{ gallery: true }}
            open={{ option: true }}
          />,
          <Chat
            key="chat3"
            open={{ imgOption: true }}
            target_option={{ img_totalBtn: true }}
          />,
          <SelectFile key="selectFile" target={{ send: true }} />,
          <Chat
            key="chat4"
            open={{ chat: true, sendedChat: true }}
            content={{
              name: "영희",
              chat: "좋은 아침 ^^",
              chatName: "영희",
              sendChatContent: (
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "rgb(250,235,215)",
                  }}></div>
              ),
            }}
          />,
        ][descriptionId];
      }
      if (methodId === "3") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
          <Chat
            key="chat1"
            target={{ chatOption: true }}
            open={{ chat: true }}
            content={{
              name: "영희",
              chatName: "영희",
              chat: (
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "rgb(250,235,215)",
                  }}></div>
              ),
            }}
          />,
          <Chat
            key="chat2"
            target={{ resend: true }}
            open={{ chat: true, contentOption: true }}
          />,
          <Chat
            key="chat3"
            open={{ shareModal: true, chat: true }}
            share={{ friend2: true }}
          />,
          <Chat
            key="chat4"
            open={{ topAlert: true, chat: true }}
            content={{
              name: "영희",
              chatName: "영희",
              chat: (
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "rgb(250,235,215)",
                  }}></div>
              ),
            }}
          />,
        ][descriptionId];
      }
      if (methodId === "4") {
        choicedComponent = [
          <Home key="mainApps" app={{ gallery: true }} />,
          <Gallery key="gallery1" target_imgTab={{ shareBtn: true }} />,
          <Gallery
            key="gallery2"
            open={{ shareOption: true }}
            target_share={{ kakaotalk: true }}
          />,
          <SelectPerson
            key="selectPerson"
            header={"공유 대상 선택"}
            target={{ person2: true }}
          />,
          <Chat
            key="chat4"
            content={{
              chatName: "철수",
              sendChatContent: (
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "rgb(250,235,215)",
                  }}></div>
              ),
            }}
            open={{ chat: false, sendedChat: true }}
          />,
        ][descriptionId];
      }
      break;
    //
    case functionName_kakaotalk_groubChatLeave_rejectInvitation:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main
          key="Main"
          tab={{ chat: true }}
          target_chat={{ groupChat: true }}
        />,
        <Chat
          key="Chat1"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          target={{ menu: true }}
        />,
        <Chat
          key="Chat2"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ menu: true }}
          target={{ setting: true }}
        />,
        <ChatSetting
          key="ChatSetting1"
          target={{ groubChatLeave_rejectInvitation: true }}
        />,
        <ChatSetting
          key="ChatSetting2"
          target={{ groubChatLeave_rejectInvitation: true }}
          open={{ modal: true }}
        />,
        //
        <Main key="Main" tab={{ chat: true }} />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLock:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main
          key="Main"
          tab={{ chat: true }}
          target_chat={{ groupChat: true }}
        />,
        <Chat
          key="Chat1"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          target={{ menu: true }}
        />,
        <Chat
          key="Chat2"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ menu: true }}
          target={{ setting: true }}
        />,
        <ChatSetting
          key="ChatSetting"
          target={{ groubChatLock: true, backBtn: true }}
        />,
        <Chat
          key="Chat4"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          inputLocked={true}
        />,
        <Chat
          key="Chat5"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
        />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLeave_quietly:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="Main" tab={{ ETC: true }} target_ETC={{ setting: true }} />,
        <ETCSetting key="ETCSetting1" target_lab />,
        <ETCSetting_lab key="ETCSetting_lab" target_groubChatLeave_quietly />,
        <ETCSetting key="ETCSetting2" target_backBtn />,
        //
        <Main
          key="Main1"
          tab={{ chat: true }}
          target_chat={{ groupChat: true }}
        />,
        <Chat
          key="Chat1"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          target={{ menu: true }}
        />,
        <Chat
          key="Chat2"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ menu: true }}
          target={{ leave_quietly: true }}
        />,
        <Chat
          key="Chat3"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ modal: true }}
          target={{ leave_quietly: true }}
        />,
        <Main key="Main2" tab={{ chat: true }} />,
      ][descriptionId];
      break;
    case functionName_groupChat:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ chat: true }}
            target_chat={{ groupChat: true }}
          />,
          <Chat
            key="Chat"
            content={{
              chatName: "그룹채팅",
              num: "3",
              name: "김대리",
              chat: "퇴사합니다.",
            }}
          />,
        ][descriptionId];
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ chat: true }}
            target_chat={{ newChat: true }}
          />,
          <Main
            key="KakaoAppMain"
            tab={{ chat: true }}
            target_chat={{ newChat: true }}
            open_chat={{ topModal: true }}
          />,
          <SelectPerson key="4" target={{ twoPerson: true }} />,
          <SettingChatRoom_NameImg
            key="5"
            content={{ name: groupName, setName: setGroupName }}
          />,
          <Chat
            key="Chat"
            content={{
              chatName: groupName,
              num: "3",
            }}
            open={{ chat: false }}
          />,
        ][descriptionId];
      }

      break;
    case functionName_leaveChat:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main1"
            tab={{ chat: true }}
            target_chat={{ groupChat: true, onMouseDown: true }}
          />,
          <Main
            key="Main2"
            tab={{ chat: true }}
            target_chat={{ groupChat: true, leaveChat: true }}
            open_chat={{ optionModal: true }}
          />,
          <Main
            key="Main3"
            tab={{ chat: true }}
            target_chat={{ groupChat: true, leaveChat: true }}
            open_chat={{ modal: true }}
          />,
          <Main key="Main4" tab={{ chat: true }} />,
        ][descriptionId];

      break;
    case functionName_chatRoomNameChange:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main1"
            tab={{ chat: true }}
            target_chat={{ groupChat: true, onMouseDown: true }}
          />,
          <Main
            key="Main2"
            tab={{ chat: true }}
            target_chat={{ groupChat: true, changeName: true }}
            open_chat={{ optionModal: true }}
          />,
          <Setting_ProfileName
            key="changeName"
            content={{
              title: "채팅방 이름",
              name: groupName,
              setName: setGroupName,
            }}
          />,
          <Main
            key="Main4"
            tab={{ chat: true }}
            open_chat={{ groupChat: true }}
            content_chat={{ groupName: groupName }}
          />,
        ][descriptionId];
      if (methodId === "2")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main1"
            tab={{ chat: true }}
            target_chat={{ groupChat: true }}
          />,
          <Chat
            key="chat1"
            content={{
              name: "김대리",
              chatName: "그룹채팅방1",
              chat: "퇴사합니다.",
            }}
            target={{ menu: true }}
          />,
          <Chat
            key="chat2"
            content={{
              name: "김대리",
              chatName: "그룹채팅방1",
              chat: "퇴사합니다.",
            }}
            target={{ setting: true }}
            open={{ menu: true }}
          />,
          <ChatSetting key="chatSetting" target={{ changeName: true }} />,
          <Setting_ProfileName
            key="changeName"
            content={{
              title: "채팅방 이름",
              name: groupName,
              setName: setGroupName,
            }}
          />,
          <Main
            key="Main4"
            tab={{ chat: true }}
            open_chat={{ groupChat: true }}
            content_chat={{ groupName: groupName }}
          />,
        ][descriptionId];

      break;
    case functionName_chatRoomImgChange:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main1"
            tab={{ chat: true }}
            target_chat={{ groupChat: true }}
          />,
          <Chat
            key="chat1"
            content={{
              name: "김대리",
              chatName: "그룹채팅방1",
              chat: "퇴사합니다.",
            }}
            target={{ menu: true }}
          />,
          <Chat
            key="chat2"
            content={{
              name: "김대리",
              chatName: "그룹채팅방1",
              chat: "퇴사합니다.",
            }}
            target={{ setting: true }}
            open={{ menu: true }}
          />,
          <ChatSetting key="chatSetting" target={{ changeImg: true }} />,
          <ChatSetting key="chatSetting" target={{ changeImg: true }} />,
          <SelectFile key="selectFile" />,
          <ChatSetting key="chatSetting" target={{ changeImg: true }} />,
          <ChatSetting key="chatSetting" target={{ changeImg: true }} />,
        ][descriptionId];

      break;
    case functionName_messageDelete:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
          <Chat
            key="chat1"
            target={{ chatOption: true }}
            open={{ chat: true }}
          />,
          <Chat
            key="chat2"
            target_chat={{ delete: true }}
            open={{ chat: true, contentOption: true }}
          />,
          <Chat key="chat3" open={{ chat: true, deleteMode: true }} />,
          <Chat
            key="chat4"
            open={{ chat: true, modal: true }}
            target={{ modalBtn: true }}
            content={{
              chat: "좋은 아침^^",
              name: "영희",
              chatName: "영희",
              modalTitle: "이 기기에서 삭제",
              modalContent: (
                <>
                  현재 사용 중인 기기에서만 <br />
                  삭제되며 <br />
                  상대방의 채팅방에서는 삭제되지 않습니다.
                </>
              ),
              modalBtn: "삭제",
            }}
          />,
          <Chat key="chat5" open={{ chat: false }} />,
        ][descriptionId];
      }
      break;
    case functionName_cancelMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target_chat={{ chat: true }} />,
          <Chat
            key="chat1"
            // target={{ chatOption: true, sendChatContent: true }}
            open={{ chat: true, sendedChat: true }}
            content={{
              name: "영희",
              chat: "좋은 아침 ^^",
              chatName: "영희",
              sendChatContent: (
                <TargetBox condition={true} onMouseDown={() => {}}>
                  그래^^ 좋은 아침
                </TargetBox>
              ),
            }}
          />,
          <Chat
            key="chat2"
            target_chat={{ delete: true }}
            open={{ chat: true, contentOption: true }}
          />,
          <Chat
            key="chat3"
            open={{ chat: true, modal: true }}
            content={{
              chat: "좋은 아침^^",
              name: "영희",
              chatName: "영희",
              modalTitle: "삭제",
              modalContent: (
                <>
                  <label
                    htmlFor="radio1"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "4px 0",
                    }}>
                    <div>모든 대화 상대에게서 삭제</div>
                    <input type="radio" id="radio1" name="delete" />
                  </label>
                  <label
                    htmlFor="radio2"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "4px 0",
                    }}>
                    <div>이 기기에서 삭제</div>
                    <input type="radio" id="radio2" name="delete" />
                  </label>
                </>
              ),
              modalBtn: (
                <TargetBox
                  condition={true}
                  style={{ color: "rgb(59, 130, 246)" }}>
                  확인
                </TargetBox>
              ),
            }}
          />,
          <Chat
            key="chat4"
            open={{ chat: true, modal: true }}
            target={{ modalBtn: true }}
            content={{
              chat: "좋은 아침^^",
              name: "영희",
              chatName: "영희",
              modalTitle: "모든 대화 상대에게서 삭제",
              modalContent: (
                <>
                  선택한 메시지를 모든 대화 상대의 채팅방 화면에서 삭제합니다.
                  다만, 채팅방 내 사용자의 카카오톡 버전에 따라 메시지가
                  삭제되지 않을 수 있습니다. 메시지를 삭제하겠습니까?
                </>
              ),
              modalBtn: "삭제",
            }}
          />,
          <Chat
            key="chat5"
            open={{ chat: true, sendedChat: true }}
            content={{
              chat: "좋은 아침^^",
              name: "영희",
              chatName: "영희",
              modalTitle: "모든 대화 상대에게서 삭제",
              sendChatContent: (
                <div style={{ display: "flex" }}>
                  <Icon
                    name="info-circle-fill"
                    style={{ fontSize: "10px", color: "grey" }}
                  />
                  <div style={{ fontSize: "10px", color: "grey" }}>
                    삭제된 메시지입니다.
                  </div>
                </div>
              ),
            }}
          />,
        ][descriptionId];
      }
      break;
    case functionName_changeProileImg:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main"
            tab={{ friend: true }}
            target_friend={{ profile: true }}
          />,
          <Profile
            key="3"
            open={{ myProfile: true }}
            target={{ edit: true }}
            content={{
              name: "진수",
              profileStyle: {
                color: "rgb(226, 243, 255)",
                backgroundColor: "rgb(193, 229, 255)",
              },
            }}
          />,
          <Profile
            key="4"
            open={{ edit: true }}
            target_edit={{ img: true }}
            content={{
              name: "진수",
              profileStyle: {
                color: "rgb(226, 243, 255)",
                backgroundColor: "rgb(193, 229, 255)",
              },
            }}
          />,
          <Profile
            key="4"
            open={{ edit: true, modal: true }}
            target_edit={{ img: true }}
            content={{
              name: "진수",
              profileStyle: {
                color: "rgb(226, 243, 255)",
                backgroundColor: "rgb(193, 229, 255)",
              },
            }}
            target_modal={{ gallery: true }}
          />,
          <SelectFile key="5" open={{ one: true }} />,
          <EditImg key="6" target={{ submit: true }} />,
          <Profile
            key="7"
            open={{ edit: true }}
            target_edit={{ submit: true }}
            content={{
              name: "진수",
              profileStyle: {
                color: "antiquewhite",
                backgroundColor: "antiquewhite",
              },
            }}
          />,
          <Profile
            key="8"
            open={{ myProfile: true }}
            content={{
              name: "진수",
              profileStyle: {
                color: "antiquewhite",
                backgroundColor: "antiquewhite",
              },
            }}
          />,
        ][descriptionId];
      }
      break;
    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Chats;
