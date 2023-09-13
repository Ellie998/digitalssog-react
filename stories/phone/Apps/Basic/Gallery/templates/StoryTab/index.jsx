/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Flex from "stories/phone/atoms/Flex/index";
import Icon from "stories/phone/atoms/Icon/index";

import TargetBox from "stories/phone/atoms/TargetBox/index";
import IconBottom from "stories/phone/molecules/IconBottom/index";

import NoScrollbar from "stories/phone/atoms/NoScrollbar/index";
import { useState } from "react";

import Top from "stories/phone/atoms/Top/index";

const StoryTab = ({ num = 13, target, setIsTabOpen }) => {
  const [choicedImgs, setChoicedImgs] = useState([]);

  const imgNum = [];
  for (let i = 0; i < num; i++) {
    imgNum.push(i);
  }
  // function onChangeHandler(event) {
  //   let updatedValue = event.target.id;

  //   event.target.checked === true &&
  //     setChoicedImgs((prevObject) => [...prevObject, updatedValue]);

  //   choicedImgs.length !== 1 &&
  //     event.target.checked === false &&
  //     setChoicedImgs((prevObject) => {
  //       prevObject = prevObject.filter((item) => item !== updatedValue);
  //       return [...prevObject];
  //     });
  // }

  // const onMouseDownHandler = (event) => {
  //   let updatedValue;
  //   if (event.target.nodeName === "LABEL") {
  //     updatedValue = event.target.htmlFor;
  //     setChoicedImgs((prevObject) => [...prevObject, updatedValue]);
  //   }
  //   if (event.target.nodeName === "INPUT") {
  //     updatedValue = event.target.id;
  //     setChoicedImgs((prevObject) => [...prevObject, updatedValue]);
  //   }
  // };

  if (choicedImgs.length >= 1) setIsTabOpen(false);
  if (choicedImgs.length === 0) setIsTabOpen(true);

  return (
    <>
      <Top
        title={{
          content:
            choicedImgs.length >= 1
              ? `${choicedImgs.length}개 선택됨`
              : "스토리",
        }}
        style={{ margin: "20px" }}
      />
      {choicedImgs.length === 0 && (
        <Flex
          style={{ justifyContent: "end" }}
          items={[
            <Icon key="1" name="heart" />,
            <Icon key="2" name="search" />,
            <Icon key="3" name="three-dots-vertical" />,
          ]}
        />
      )}

      <NoScrollbar
        height={"185px"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,auto)",
          rowGap: "4px",
        }}></NoScrollbar>

      {choicedImgs.length >= 1 && (
        <Flex
          items={[
            <TargetBox key="0">
              <IconBottom
                icon={{ name: "folder-plus" }}
                description={{
                  content: "그룹생성",
                  style: { fontSize: "0.8rem" },
                }}
              />
            </TargetBox>,
            <TargetBox key="1">
              <IconBottom
                icon={{ name: "folder-symlink" }}
                description={{
                  content: "이동",
                  style: { fontSize: "0.8rem" },
                }}
              />
            </TargetBox>,
            <TargetBox key="2" condition={target.shareBtn}>
              <IconBottom
                icon={{ name: "share-fill" }}
                description={{
                  content: "공유",
                  style: { fontSize: "0.8rem" },
                }}
              />
            </TargetBox>,
            <TargetBox key="3">
              <IconBottom
                icon={{ name: "trash3" }}
                description={{
                  content: "삭제",
                  style: { fontSize: "0.8rem" },
                }}
              />
            </TargetBox>,
            <TargetBox key="4">
              <IconBottom
                icon={{ name: "three-dots-vertical" }}
                description={{
                  content: "더보기",
                  style: { fontSize: "0.8rem" },
                }}
              />
            </TargetBox>,
          ]}
        />
      )}
    </>
  );
};

export default StoryTab;
