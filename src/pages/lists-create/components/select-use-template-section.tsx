import Button from "../../../common/components/button";
import Description from "../../../common/components/description";
import { colors } from "../../../utils/util-color";
import useSelectUseTemplateSection from "../hooks/use-select-use-template-section";
import { StSelectUseTemplateSection } from "../styles/select-use-template-form";

export default function SelectUseTemplateSection() {
  const { backToPreviousStep, postListCreateProcess } =
    useSelectUseTemplateSection();
  return (
    <StSelectUseTemplateSection.Section>
      <Description
        title={`저희 쪽에서 제공하는\n준비물 템플릿을\n이용하시겠어요?`}
        color={colors.white}
      />
      <StSelectUseTemplateSection.ImageBox>
        <StSelectUseTemplateSection.Image
          src="/images/img-use-select-use-template-section.webp"
          alt=""
        />
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
    </StSelectUseTemplateSection.Section>
  );
}
