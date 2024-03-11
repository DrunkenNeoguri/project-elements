import { useSearchParams } from "react-router-dom";
import Header from "../../common/components/header";
import MainHeader from "./components/main-header";
import MainListSection from "./components/main-list-section";

export default function Main() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  return (
    <>
      <Header />
      {!searchValue && <MainHeader />}
      <MainListSection />
    </>
  );
}
