import styled from "@emotion/styled";
import { useState } from "react";

import Phone from "stories/phone/molecules/Phone";
import FlexInFlex from "stories/phone/atoms/FlexInFlex";
import Top from "stories/phone/atoms/Top";
import Icon from "stories/phone/atoms/Icon";
import Flex from "stories/phone/atoms/Flex";
import IconBottom from "stories/phone/molecules/IconBottom";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 42px);
  text-align: center;
`;

const IconContainer = styled.div`
  background-color: rgba(196, 196, 196, 0.428);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 90%;
  ${(props) => (props.style ? props.style : null)}
`;

const OptionContainer = styled.div`
  grid-row: 7/8;
  display: grid;
  grid-template-columns: repeat(5, 30px);
  column-gap: 2px;
  background-color: rgba(196, 196, 196, 0.428);
  border-radius: 10px;
  margin: 0 5px 0 5px;
  font-size: 0.5rem;
`;

const VideoCallConnected = () => {
  const [time, setTime] = useState(0);

  setTimeout(() => {
    setTime(time + 1);
  }, 1000);
  return (
    <Phone>
      <Container>
        <FlexInFlex
          centerItem={[
            <div style={{ fontSize: "0.75rem" }} key="center">
              <Icon name="camera-video-fill" style={{ marginRight: "4px" }} />
              {time > 9 ? `00:${time}` : `00:0${time}`}
            </div>,
          ]}
          rightItem={[
            <Icon key="call" name="telephone-fill" />,
            <Icon key="dots" name="three-dots-vertical" />,
          ]}
        />
        <Top
          style={{ marginTop: "10px" }}
          title={{ content: "010-0000-0000" }}
        />

        <Flex
          style={{
            width: "170px",
            gridRow: "6/7",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.7rem",
            alignItems: "center",
          }}
          items={[
            <IconContainer key="unlock">
              <Icon name="unlock" />
            </IconContainer>,
            <IconContainer
              key="chevron-up"
              style={{ borderRadius: "8px", padding: "3px 6px" }}>
              AR 효과
              <Icon name="chevron-up" />
            </IconContainer>,
            <IconContainer key="arrows-angle-contract">
              <Icon name="arrows-angle-contract" />
            </IconContainer>,
          ]}
        />

        <OptionContainer>
          <IconBottom
            icon={{
              name: "camera-video-fill",
              style: { color: "rgb(0, 190, 114)", fontWeight: "900" },
            }}
            description={{ content: "카메라" }}
          />

          <IconBottom
            icon={{ name: "arrow-repeat" }}
            description={{ content: "전환" }}
          />

          <Icon
            style={{
              backgroundColor: "red",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              margin: "0 auto",
              color: "white",
            }}
            name={"telephone-x-fill"}
          />

          <IconBottom
            icon={{ name: "mic-mute" }}
            description={{ content: "내 소리 차단" }}
          />

          <IconBottom
            icon={{
              name: "volume-up-fill",
              style: { color: "rgb(0, 190, 114)", fontWeight: "900" },
            }}
            description={{ content: "스피커" }}
          />
        </OptionContainer>
      </Container>
    </Phone>
  );
};

export default VideoCallConnected;
