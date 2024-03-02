import { StCreateListPage } from "./styles/index.style.tsx";
import SelectTravelSection from "./components/select-travel-section.tsx";
import TravelInfoForm from "./components/travel-info-form.tsx";
import ConfirmTravelInfoSection from "./components/confirm-travel-info-section.tsx";
import SelectUseTemplateSection from "./components/select-use-template-section.tsx";
import { useSearchParams } from "react-router-dom";
import Stepper from "./components/create-stepper.tsx";

export default function ListsCreate() {
  const [searchParams] = useSearchParams();
  const currentStep = Number(searchParams.get("step")) - 1;
  const componentLists = [
    <SelectTravelSection />,
    <TravelInfoForm />,
    <ConfirmTravelInfoSection />,
    <SelectUseTemplateSection />,
  ];

  return (
    <StCreateListPage.Section>
      <Stepper />
      {componentLists[currentStep]}
    </StCreateListPage.Section>
  );
}
