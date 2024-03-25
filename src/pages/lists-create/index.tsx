import { StListsCreatePage } from "./styles/index.style.tsx";
import useListsCreate from "./hooks/index.hook.ts";
import SelectTravelSection from "./components/select-travel-section.tsx";
import TravelInfoForm from "./components/travel-info-form.tsx";
import ConfirmTravelInfoSection from "./components/confirm-travel-info-section.tsx";
import SelectUseTemplateSection from "./components/select-use-template-section.tsx";
import CreateStepper from "./components/create-stepper.tsx";

export default function ListsCreate() {
  const { moveState, currentStep } = useListsCreate();
  const componentLists = [
    <SelectTravelSection />,
    <TravelInfoForm />,
    <ConfirmTravelInfoSection />,
    <SelectUseTemplateSection />,
  ];

  return (
    <StListsCreatePage.Section>
      <CreateStepper />
      <StListsCreatePage.FadeContainer $isStepMove={moveState}>
        {componentLists[currentStep]}
      </StListsCreatePage.FadeContainer>
    </StListsCreatePage.Section>
  );
}
