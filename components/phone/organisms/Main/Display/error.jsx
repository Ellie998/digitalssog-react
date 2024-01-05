import Button from "components/DisplayBox/AppDisplays/components/UI/Button";
import Spinner from "components/DisplayBox/AppDisplays/components/UI/Spinner";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";

import PhoneBackground from "stories/phone/atoms/PhoneBackground/index";

const Error = () => {
  return (
    <PhoneBackground>
      <NoScrollBar height="305px">
        <Spinner className={"mx-auto mt-20 mb-10"}></Spinner>
        <div className="mt-20 mb-5 text-center">
          <p>화면 제작중 🙋‍♀️</p>
          <p>최대한 빨리 완성할게요</p>
        </div>
        <Button
          className="hover:animate-pulse font-bold mx-auto"
          btnColor="rgb(90, 162, 255)"
          textColor="white"
          content="다른 기능 보러가기"
          onClick={() => {
            history.back();
          }}></Button>
      </NoScrollBar>
    </PhoneBackground>
  );
};

export default Error;
