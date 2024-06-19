import { ButtonHTMLAttributes, ReactNode, createContext } from "react";
import Portal from "./portal";
import {
  ModalAlert,
  ModalChecked,
  ModalConfirm,
  ModalInfo,
} from "../../assets/icons/icons";
import { Bar } from "../loader/loader";

// Modal Context API
type ModalContextType = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Modal
type ModalProp = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
};

// !TODO - tailwind filter 추가 :  drop-shadow(4px 4px 8px ${colors.shadowLight})
function Modal(props: ModalProp) {
  const { children, isOpen, setIsOpen } = props;

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen ?? (
        <Portal container={document.body}>
          <div className="bg-white flex flex-col justify-center items-center text-center border-none rounded-lg h-auto w-[calc(100%-98px)] pt-8 pb-3 px-7">
            {children}
          </div>
        </Portal>
      )}
    </ModalContext.Provider>
  );
}

// content
type ContentType = {
  title: string;
  desc: string;
};

// !TODO - tailwind 유동적 색상 변경 확인 필요
function Content(props: ContentType) {
  const { title, desc } = props;
  //color: ${(props) => convertTitleColorByModalIconType(props.$modalType)};
  return (
    <>
      <h2 className="font-bold18 p-0 m-0 mb-1">{title}</h2>
      <p className="font-medium12 text-black p-0 px-[10px] m-0">{desc}</p>
    </>
  );
}

// dimd background
// !TODO - keyframe animation 추가 - ${fadeIn} 0.2s;
function Dimd() {
  return (
    <div className="w-full h-[100vh] bg-shadowModal flex justify-center items-center absolute z-10" />
  );
}

// icon
function Icon(iconType: "alert" | "info" | "confirm" | "checked") {
  const iconList = {
    alert: <ModalAlert />,
    info: <ModalInfo />,
    confirm: <ModalConfirm />,
    checked: <ModalChecked />,
  };
  return <div className="w-12 h-12 m-0 mt-9 mb-7">{iconList[iconType]}</div>;
}

// modal button
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

function ConfirmButton(props: ButtonType) {
  const { text } = props;
  return (
    <button
      className="bg-primary flex justify-center items-center w-full h-11 border-none rounded border-box font-bold16 text-white cursor-pointer"
      {...props}
    >
      {text}
    </button>
  );
}

function SubButton(props: ButtonType) {
  const { text } = props;
  return <button {...props}>{text}</button>;
}

Modal.Content = Content;
Modal.Dimd = Dimd;
Modal.ConfirmButton = ConfirmButton;
Modal.SubButton = SubButton;
Modal.Icon = Icon;
Modal.Loader = Bar;

export default Modal;
