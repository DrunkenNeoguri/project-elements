import { PropsWithChildren, createContext } from "react";
import {
  ModalAlert,
  ModalChecked,
  ModalConfirm,
  ModalInfo,
} from "../../assets/icons/icons";
import { Bar } from "../loader/loader";
import Portal from "../portal/portal";
import Button from "../button/button";

// Modal Context API
type ModalContextType = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Modal
type ModalPropType = PropsWithChildren & {
  isOpen: boolean;
  setIsOpen: () => void;
};

function Modal(props: ModalPropType) {
  const { children, isOpen, setIsOpen } = props;

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen && (
        <Portal container={document.body}>
          <div className="w-full h-[100vh] bg-shadowModal flex justify-center items-center absolute z-50 top-0 font-gmarketSans animate-[fadeIn_0.5s]">
            <div className="bg-white flex flex-col justify-center items-center text-center border-none rounded-lg h-auto w-[calc(100%-72px)] max-w-[288px] pt-8 pb-3 px-7 absolute z-20 font-gmarketSans drop-shadow-[4px_4px_8px_#0000004D]">
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
  colorTheme: "alert" | "info" | "confirm" | "checked";
  title: string;
  desc: string;
};

function Content(props: ContentType) {
  const { title, desc, colorTheme } = props;

  const titleTheme = {
    alert: "text-error",
    info: "text-primary",
    confirm: "text-primary",
    checked: "text-secondary",
  };

  const titleStyle = "font-bold18 p-0 m-0 mb-1 " + titleTheme[colorTheme];

  return (
    <>
      <h2 className={titleStyle}>{title}</h2>
      <p className="font-medium12 text-black p-0 px-[10px] m-0 break-keep whitespace-pre-wrap">
        {desc}
      </p>
    </>
  );
}

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
  return <div className="w-12 h-12 mx-0 my-8">{iconList[iconType]}</div>;
}

Modal.Content = Content;
Modal.Button = Button;
Modal.Icon = Icon;
Modal.Loader = Bar;

export default Modal;
