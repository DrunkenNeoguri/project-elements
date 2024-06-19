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
      {isOpen && (
        <Portal container={document.body}>
          <div className="w-full h-[100vh] bg-shadowModal flex justify-center items-center absolute z-10 top-0 font-gmarketSans">
            <div className="bg-white flex flex-col justify-center items-center text-center border-none rounded-lg h-auto w-[calc(100%-98px)] max-w-[262px] pt-8 pb-3 px-7 absolute z-20 font-gmarketSans">
              {children}
            </div>
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

// !TODO - keyframe animation 추가 - ${fadeIn} 0.2s;
// icon
function Icon({
  iconType,
}: {
  iconType: "alert" | "info" | "confirm" | "checked";
}) {
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
  children: ReactNode;
  colorTheme: "confirm" | "cancel";
};

function Button(props: ButtonType) {
  const { children, colorTheme, ...rest } = props;

  const buttonTheme = {
    confirm: "bg-primary text-white",
    cancel: "bg-white text-primary",
  };

  const buttonStyle =
    "flex justify-center items-center w-full h-9 border-none rounded border-box font-bold12 cursor-pointer mb-3 " +
    buttonTheme[colorTheme];

  return (
    <button className={buttonStyle} type="button" {...rest}>
      {children}
    </button>
  );
}

Modal.Content = Content;
Modal.Button = Button;
Modal.Icon = Icon;
Modal.Loader = Bar;

export default Modal;
