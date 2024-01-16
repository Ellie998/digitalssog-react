'use client';
import PhoneBackground from '@/components/my-ui/phone-background';
import PhoneDisplay from '@/components/my-ui/phone-display';
import PhoneHeader from '@/components/my-ui/phone-header';
import PhoneNav from '@/components/my-ui/phone-nav';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { bgColorState } from './atoms';
import {
  canvasCategoryState,
  elementDatasState,
  elementType,
  selectedElementState,
} from './(canvas)/canvas-atom';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const [elementDatas, setElementDatas] = useRecoilState(elementDatasState);
  const setCanvasCategory = useSetRecoilState(canvasCategoryState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  // type : icon,

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCanvasCategory('요소');
    setSelectedElement(e.currentTarget.id.replace('_container', '') || '');
  };

  useEffect(() => {}, [elementDatas, selectedElement]);

  const editElement = (editElement: elementType) => {
    return setElementDatas((prevElements): elementType[] => {
      const tempElements = prevElements.filter((element) => element.id !== editElement.id);
      return [...tempElements, editElement];
    });
  };

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        <div className="absolute ">
          {elementDatas.map((data, i) => (
            <div
              key={data.type + i}
              style={{
                top: data.style.top,
                left: data.style.left,
                zIndex: data.style.zIndex,
              }}
              className={cn(
                'cursor-pointer w-fit h-fit absolute',
                selectedElement === `${data.id}` && 'border-2 border-blue-400 ',
              )}
              draggable
              onDragEnd={(e) => {
                editElement({
                  type: data.type,
                  style: {
                    ...data.style,
                    top: `${Number(data.style.top.replace('px', '')) + e.nativeEvent.offsetY}px`,
                    left: `${Number(data.style.left.replace('px', '')) + e.nativeEvent.offsetX}px`,
                  },
                  id: e.currentTarget.id.replace('_container', ''),
                });
              }}
              onDragStart={(e) => {
                setCanvasCategory('요소');
                setSelectedElement(e.currentTarget.id.replace('_container', '') || '');
              }}
              onClick={handleClick}
              id={data.id + '_container'}
            >
              <div
                className=""
                // @ts-expect-error: textAlign 할당 타입 문제
                style={{ ...data.style }}
                id={data.id}
              >
                {data.type}
              </div>
            </div>
          ))}
        </div>
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default CanvasPreview;
