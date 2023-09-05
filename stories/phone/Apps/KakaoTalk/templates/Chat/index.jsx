/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

import classes from "./index.module.css";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import ChatList from "components/DisplayBox/AppDisplays/components/UI/ChatList";

import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";
import MessageSendLine from "components/DisplayBox/AppDisplays/components/UI/MessageSendLine";
import Icon from "components/DisplayBox/AppDisplays/components/UI/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import Checkbox from "components/DisplayBox/AppDisplays/components/UI/Checkbox";

import Button from "components/DisplayBox/AppDisplays/components/UI/Button";
import Alert from "components/DisplayBox/AppDisplays/components/UI/Alert";
import GetDate from "components/DisplayBox/AppDisplays/components/GetDate";
import Phone from "stories/phone/molecules/Phone/index";
import Modal from "stories/phone/molecules/Modal/index";
import ModalContents from "stories/phone/organisms/ModalContents/index";
import CancelBtn from "stories/phone/atoms/CancelBtn/index";
import SubmitBtn from "stories/phone/atoms/SubmitBtn/index";

import Modal_downUp from "stories/phone/molecules/Modal_downUp/index";
import ChatOptionBox from "../../organisms/ChatOptionBox/index";
import ChatSideMenu from "../../organisms/ChatSideMenu/index";
import ChatContentOptionModal from "../../organisms/ChatContentOptionModal/index";

function Chat({
  inputLocked,
  chatType_group,

  target = {
    sendImg: false,
    sendPhoneNum: false,
    resend: false,
    optionBtn: false,
    menu: false,
    reserveMessage: false,
    leave_quietly: false,
    leave: false,
    setting: false,
  },
  open = {
    message: true,
    option: false,
    optionSetting: false,
    menu: false,
    alert: false,
    modal: false,
  },
  reopen = { optionSetting: false },
}) {
  //message
  const [messageContent, setMessageContent] = useState("");
  const [isOvered, setIsOvered] = useState(false);

  // modal
  const [isCheckbox, setIsCheckbox] = useState(false);

  // option setting
  const [optionInput, setOptionInput] = useState("");
  const [isOptionInputSubmit, setIsOptionInputSubmit] = useState(false);

  function mouseOverHandler() {
    setTimeout(() => {
      setIsOvered(true);
    }, 1000);
  }

  function backClickHandler() {
    setIsOvered(false);
    setOptionInput("");
  }

  return (
    <Phone>
      {/* Modal */}
      {open.modal && (
        <Modal modalStyle={{ top: "80px" }}>
          <ModalContents
            title={{ content: "채팅방 나가기" }}
            subTitle={{
              content: (
                <>
                  나가기를 하면 대화내용이 모두 삭제되고
                  <br />
                  채팅 목록에서도 삭제됩니다.
                </>
              ),
            }}
            buttons={{
              style: { justifyContent: "end" },
              content: [
                <CancelBtn
                  key="btn1"
                  condition={true}
                  style={{ color: "rgb(59 130 246)" }}>
                  취소
                </CancelBtn>,
                <SubmitBtn
                  key="btn2"
                  style={{ color: "rgb(59 130 246)" }}
                  condition={
                    isCheckbox && (target.leave_quietly || target.leave)
                  }>
                  나가기
                </SubmitBtn>,
              ],
            }}>
            {target.leave_quietly && (
              <TargetContent className="my-1" targetOption={!isCheckbox}>
                <Checkbox
                  label={{ content: "조용히 나가기" }}
                  onChangeHandler={() => {
                    isCheckbox ? setIsCheckbox(false) : setIsCheckbox(true);
                  }}
                  id="info_config"
                />
              </TargetContent>
            )}
          </ModalContents>
        </Modal>
      )}
      {/* setting option */}
      {(open.optionSetting || reopen.optionSetting) && (
        <Modal_downUp onClickBackDrop={backClickHandler}>
          <StackedListWrap
            className={``}
            listTitle={{
              content: (
                <TargetContent
                  targetOption={
                    open.optionSetting &&
                    target.reserveMessage &&
                    optionInput === "" &&
                    !isOptionInputSubmit
                  }>
                  <input
                    placeholder="메시지 입력"
                    className="w-full"
                    onChange={(e) => {
                      setOptionInput(e.target.value);
                    }}
                  />
                </TargetContent>
              ),
              className: "text-sm text-gray-300 font-bold cursor-pointer ",
            }}
          />
          <TargetContent
            targetOption={optionInput !== "" && !isOptionInputSubmit}>
            <FlexContent
              className={`my-0.5`}
              items={[
                <div className={`text-xs text-gray-400`}>일시</div>,
                <input
                  className={`text-2xs cursor-pointer`}
                  type="datetime-local"
                  defaultValue={GetDate().y_m_d_h_plus1_m}
                />,
              ]}
            />
            <FlexContent
              className={`my-0.5 py-0.5`}
              items={[
                <div className={`text-xs text-gray-400`}>발송 대상</div>,
                <div className={`text-xs cursor-pointer`}>영희</div>,
              ]}
            />
            <FlexContent
              className={`my-0.5 py-0.5`}
              items={[
                <div className={`text-xs text-gray-400`}>미리 알림</div>,
                <div className={`text-xs cursor-pointer`}>알림 받지 않음</div>,
              ]}
            />
          </TargetContent>

          <div className={`text-2xs text-gray-400 my-0.5 flex`}>
            <Icon
              name="info-circle"
              className={`text-2xs text-gray-400 mr-1`}
            />
            예약 메시지가 많을 경우, 약간의 시간 오차가 발생할 수 있습니다.
          </div>
          <FlexContent
            className={`mb-1 mt-4`}
            items={[
              <TargetContent targetOption={reopen.optionSetting}>
                <Button
                  btnColor={`#efefef`}
                  className={`text-2xs font-bold`}
                  width={`70px`}
                  content={"예약 목록 보기"}
                />
              </TargetContent>,
              <TargetContent
                targetOption={
                  target.reserveMessage &&
                  optionInput !== "" &&
                  !isOptionInputSubmit
                }
                isNextDescriptionLink={true}>
                <Button
                  btnColor={`${optionInput === "" ? "#fafafa" : "#fff200"}`}
                  className={`text-2xs font-bold`}
                  width={`70px`}
                  textColor={`${optionInput === "" ? "#b7b7b7" : ""}`}
                  content={"예약하기"}
                  onClick={() => {
                    setIsOptionInputSubmit(true);
                  }}
                />
              </TargetContent>,
            ]}
          />
        </Modal_downUp>
      )}
      {/* Side Menu */}
      {open.menu && (
        <ChatSideMenu onClickBackDrop={backClickHandler} target={target} />
      )}
      {/* chat content option */}
      {isOvered && (
        <ChatContentOptionModal
          onClickBackDrop={backClickHandler}
          target={target}
        />
      )}
      {/* messages */}
      <NoScrollBar
        height={`${!open.option || open.optionSetting ? "280px" : "150px"}`}
        className={`bg-[#b2c6d9] p-1`}
        onClick={backClickHandler}>
        <AppHeader
          onClick={backClickHandler}
          className={`bg-[#b2c6da] h-[35px]`}
          leftItem={[
            <BackBtn></BackBtn>,
            <div className="text-sm ml-1 font-bold align-middle">
              {chatType_group ? "그룹채팅" : "영희"}
            </div>,
            <div className="text-sm ml-1 align-middle">
              {chatType_group && "3"}
            </div>,
          ]}
          rightItem={[
            <Icon name="search" className={`text-sm m-1 align-middle`} />,
            <TargetContent targetOption={target.menu} isNextDescriptionLink>
              <Icon name="list" className={`text-sm mx-1 align-middle`} />
            </TargetContent>,
          ]}></AppHeader>
        {open.message && (
          <ChatList
            isGetList={true}
            onClick={mouseOverHandler}
            className=""
            profile={{
              className: "bg-kakaoSkyblue",
              content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
            }}
            name={{
              content: chatType_group ? "김대리" : "영희",
              className: "",
            }}
            message={{
              className: "bg-white",
              content: chatType_group ? "퇴사합니다." : "좋은 아침^^",
            }}
            timeStamp={{
              className: "",
              content: chatType_group ? "오전 9:00" : "오후 2:05",
            }}
          />
        )}
        {messageContent && (
          <ChatList
            isSendList={true}
            className="mt-2"
            message={{
              className: "bg-kakaoYellow",
              content: messageContent,
            }}
            timeStamp={{
              className: "",
              content: "오전 9:54",
            }}
          />
        )}
        {/* alert */}
        {open.alert && (
          <Alert
            style={{ top: "200px" }}
            content="메시지를 예약했습니다."
            icon={{
              name: "chat-fill",
              style: {
                backgroundColor: "var(--kakao-yellow",
                color: "#3e3404",
              },
            }}
          />
        )}
      </NoScrollBar>

      {/* input line */}
      {!inputLocked && (
        <MessageSendLine
          navOption_focused={{
            content: [
              !open.option ? (
                <TargetContent
                  targetOption={target.optionBtn}
                  isNextDescriptionLink={true}>
                  <Icon name="plus-lg" />
                </TargetContent>
              ) : (
                <Icon name="x-lg" />
              ),
            ],
          }}
          input={{}}
          onSendBtnClickHandler={null}
          setMessageContent={setMessageContent}
          sendBtn={{ className: "send-fill bg-[#f7e540]" }}
          sendBtn_default={{
            content: <Icon name="hash" />,
          }}></MessageSendLine>
      )}
      {inputLocked && (
        <FlexContent
          items={[
            <Icon name="plus-lg" />,
            <div className="text-2xs text-start text-gray-400 leading-4">
              대화에 주의가 필요한 방입니다.
            </div>,
            <TargetContent targetOption={inputLocked} isNextDescriptionLink>
              <div className={classes.sendIcon}>
                <Icon name="lock bg-[#f7e540]" />
              </div>
            </TargetContent>,
          ]}
        />
      )}
      {/* Option Box */}
      {open.option && <ChatOptionBox target={target} />}
    </Phone>
  );
}

export default Chat;
