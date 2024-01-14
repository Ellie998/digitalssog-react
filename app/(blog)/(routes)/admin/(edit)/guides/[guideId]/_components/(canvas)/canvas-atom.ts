import { atom } from 'recoil';

export type elementType = {
  type: string;
  style: elementStyleType;
  id: string;
};

export type elementStyleType = {
  fontSize: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
  opacity: string;
  border: string;
  borderRadius: string;
  shadow: string;
  width: string;
  height: string;
  zIndex: string;
};

export const canvasCategoryState = atom({
  key: 'canvasCategory',
  default: '템플릿',
});
export const elementsState = atom<Array<elementType>>({
  key: 'elements',
  default: [],
});
export const selectedElementState = atom({
  key: 'selectedElement',
  default: '',
});

//
