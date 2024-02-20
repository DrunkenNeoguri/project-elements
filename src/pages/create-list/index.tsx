import SelectTravelSection from "./components/select-travel-section";
import { StCreateListPage } from "./styles/create-list-page";

// 여기는 jotai를 이용하자.
export default function CreateListPage() {
  return (
    <StCreateListPage.Wrapper>
      <SelectTravelSection />
    </StCreateListPage.Wrapper>
  );
}
