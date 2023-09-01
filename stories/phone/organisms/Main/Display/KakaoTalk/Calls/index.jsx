/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home";
import Error from "stories/phone/organisms/Main/Error";
import Default from "stories/phone/organisms/Main/Default";
// call

import AnswerCall from "stories/phone/Apps/Basic/Call/templates/AnswerCall";
import CallConnected from "stories/phone/Apps/KakaoTalk/templates/CallConnected";

import Main from "stories/phone/Apps/KakaoTalk/templates/Main";
import Profile from "stories/phone/Apps/KakaoTalk/templates/Profile";

function Calls({ functionName, methodId, descriptionId }) {
  //
  const functionName_makeCall = "전화걸기(발신)";
  const functionName_getCall = "전화받기(수신)";

  let choicedComponent = <Default />;

  switch (functionName.replaceAll("-", " ")) {
    case functionName_makeCall:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="KakaoAppMain" defaultTab_friend target_profile />,
        <Profile key="Profile" />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_getCall:
      choicedComponent = [
        <AnswerCall key="answerCall" appName_kakaotalk />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
