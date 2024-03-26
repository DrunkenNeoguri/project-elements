import { StModal } from "../styles/modal";
import AlertIcon from "../../assets/icons/svg-modal-alert-icon.svg?react";
import InfoIcon from "../../assets/icons/svg-modal-info-icon.svg?react";
import CheckedIcon from "../../assets/icons/svg-modal-checked-icon.svg?react";
import ConfirmIcon from "../../assets/icons/svg-modal-confirm-icon.svg?react";
import { ModalPropType } from "../types/modal";
import { convertSVGIconByIconType } from "../utils/modal";
import { hasSecondaryObjectInModal } from "../policies/modal";

export default function Modal(props: ModalPropType) {
  const { title, context, modalType, primary, secondary } = props;
  const iconList = [
    <InfoIcon />,
    <ConfirmIcon />,
    <CheckedIcon />,
    <AlertIcon />,
  ];
  return (
    <StModal.Wrapper>
      <StModal.Container>
        <StModal.Title $modalType={modalType}>{title}</StModal.Title>
        <StModal.Context>{context}</StModal.Context>
        <StModal.IconBox>
          {iconList[convertSVGIconByIconType(modalType)]}
        </StModal.IconBox>
        <StModal.PrimaryButton
          type="button"
          onClick={primary.func}
          $isOneButton={hasSecondaryObjectInModal(secondary)}
        >
          {primary.text}
        </StModal.PrimaryButton>
        {hasSecondaryObjectInModal(secondary) && (
          <StModal.SecondaryButton type="button" onClick={secondary?.func}>
            {secondary?.text}
          </StModal.SecondaryButton>
        )}
      </StModal.Container>
    </StModal.Wrapper>
  );
}
