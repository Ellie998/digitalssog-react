import classes from "./SelectPerson.module.css";
import { NavLink } from "react-router-dom";

function SelectPerson({ functionName, appName, descriptionId }) {
  const realFunctionName = functionName.slice(2);
  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>대화 멤버 선택</div>
      <div className={classes.searchBox}>
        <p>받는 사람</p>
        <input type="text" placeholder="이름 또는 번호 입력"></input>
      </div>
      <ul className={classes.numLists}>
        <NavLink
          data-tooltip={
            appName === "기본" &&
            (realFunctionName === "문자 발신" ||
              realFunctionName === "이미지, 동영상 전송" ||
              realFunctionName === "예약 문자 발송" ||
              realFunctionName === "오디오 전송" ||
              (realFunctionName === "연락처 공유" && descriptionId === "2"))
              ? `클릭!`
              : null
          }
          to={
            realFunctionName === "문자 발신" ||
            realFunctionName === "이미지, 동영상 전송" ||
            realFunctionName === "예약 문자 발송" ||
            realFunctionName === "오디오 전송" ||
            (realFunctionName === "연락처 공유" && descriptionId === "2")
              ? `/description/${functionName}/${appName}/3`
              : realFunctionName === "문자 전달"
              ? `/description/${functionName}/${appName}/4`
              : null
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길동</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </NavLink>
        <NavLink
          data-tooltip={
            appName === "기본" &&
            realFunctionName === "연락처 공유" &&
            descriptionId === "4"
              ? `클릭!`
              : null
          }
          to={
            appName === "기본" &&
            realFunctionName === "연락처 공유" &&
            descriptionId === "4" &&
            `/description/${functionName}/${appName}/5`
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길순</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </NavLink>
      </ul>
    </section>
  );
}

export default SelectPerson;
