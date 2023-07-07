import UrlContext from "./UrlContext";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const appName_basic = "기본";
const appName_call = "전화";
const appName_message = "메시지";
const appName_kakaotalk = "카카오톡";
//
const functionName_makeCall = "전화걸기(발신)";
const functionName_getCall = "전화받기(수신)";
const functionName_makeVideoCall = "영상통화 발신";
const functionName_sendMessage = "문자 발신";
const functionName_seeMessage = "문자 수신";
const functionName_resendMessage = "문자 전달";
const functionName_reserveMessage = "예약 문자 발송";
const functionName_sendImg = "이미지, 동영상 전송";
const functionName_sendAudio = "오디오 전송";
const functionName_sendPhoneNum = "연락처 공유";
const functionName_kakaotalk_groubChatLeave_RejectInvitation =
  "그룹채팅방 초대거부 및 나가기";
const functionName_kakaotalk_groubChatLock = "그룹채팅방 채팅 입력창 잠금하기";

function urlChangeDetecter() {
  const searchParams = useSearchParams();
  const appName = searchParams.get("appName");
  const methodId = searchParams.get("methodId");
  const descriptionId = searchParams.get("descriptionId");
  return { appName: appName, methodId: methodId, descriptionId: descriptionId };
}

export default function UrlContextProvider({ children }) {
  const router = useRouter();
  const params = useParams();
  const functionNameTemp = decodeURI(params.functionName.replace("%2C", ","));
  function functionNameFilter() {
    if (functionNameTemp.split("/").length !== 1) {
      return functionNameTemp.split("/")[0];
    }
    if (functionNameTemp.includes("%2F")) {
      const temp = functionNameTemp.split("%2F");
      return temp[0];
    }
    return functionNameTemp;
  }
  const functionName = functionNameFilter();

  const [myAppName, setMyAppName] = useState("");
  const [myMethodId, setMyMethodId] = useState("");
  const [myDescriptionId, setMyDescriptionId] = useState("");

  (myDescriptionId !== "") &
    useEffect(() => {
      window.history.replaceState(
        "",
        "",
        `${
          myDescriptionId !== ""
            ? `/description/${functionName}/${myAppName}/${myMethodId}/${myDescriptionId}`
            : // ? `/description/${functionName}/?appName=${myAppName}&methodId=${myMethodId}&descriptionId=${myDescriptionId}`
              `/description/${functionName}`
        }`
      );
    }, [myDescriptionId]);
  // when back or forehead btn clicked, function trigered in root page
  useEffect(() => {
    window.onpopstate = function (e) {
      // http://localhost:3000/?tab=새로운 기능
      const url = decodeURI(window.location);

      router.push(url, { scroll: false });
    };
  }, []);
  return (
    <UrlContext.Provider
      value={{
        functionName: functionName,
        myAppName: myAppName,
        myMethodId: myMethodId,
        myDescriptionId: myDescriptionId,
        setMyAppName: setMyAppName,
        setMyMethodId: setMyMethodId,
        setMyDescriptionId: setMyDescriptionId,
        urlChangeDetecter: urlChangeDetecter,
        //
        functionName_makeCall,
        functionName_getCall,
        functionName_makeVideoCall,
        functionName_sendMessage,
        functionName_seeMessage,
        functionName_resendMessage,
        functionName_reserveMessage,
        functionName_sendImg,
        functionName_sendAudio,
        functionName_sendPhoneNum,
        //
        functionName_kakaotalk_groubChatLeave_RejectInvitation,
        functionName_kakaotalk_groubChatLock,
        //
        appName_basic,
        appName_kakaotalk,
        appName_message,
        appName_call,
      }}>
      {children}
    </UrlContext.Provider>
  );
}
