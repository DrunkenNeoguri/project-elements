import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import Modal from "../../../common/components/modal";
import Portal from "../../../common/components/portal";
import { colors } from "../../../utils/util-color";
import useSelectUseTemplateSection from "../hooks/use-select-use-template-section";
import { StSelectUseTemplateSection } from "../styles/select-use-template-form";
import images from "../../../../public/images/img-use-select-use-template-section.webp";

export default function SelectUseTemplateSection() {
  const { backToPreviousStep, postListCreateProcess, openState, setOpenState } =
    useSelectUseTemplateSection();
  return (
    <StSelectUseTemplateSection.Section>
      <Description
        title={`저희 쪽에서 제공하는\n준비물 템플릿을\n이용하시겠어요?`}
        color={colors.white}
      />
      <StSelectUseTemplateSection.ImageBox>
        <StSelectUseTemplateSection.Image src={images} alt="" />
      </StSelectUseTemplateSection.ImageBox>
      <StSelectUseTemplateSection.ButtonBox>
        <Button
          type="submit"
          text="이용할게요!"
          colorType="primary-reverse"
          onClick={() => postListCreateProcess(true)}
        />
        <Button
          type="submit"
          text="직접 만들게요!"
          colorType="secondary-reverse"
          onClick={() => postListCreateProcess(false)}
        />
        <Button
          type="button"
          text="돌아가기"
          colorType="invalid"
          onClick={() => backToPreviousStep()}
        />
      </StSelectUseTemplateSection.ButtonBox>
      {openState.state && (
        <Portal
          children={
            <Modal
              title="여행 정보 등록 불가"
              context={openState.message}
              modalType="alert"
              primary={{
                text: "알겠습니다.",
                func: () => setOpenState({ state: false, message: "" }),
              }}
            />
          }
          container={document.body}
        />
      )}
    </StSelectUseTemplateSection.Section>
  );
}
