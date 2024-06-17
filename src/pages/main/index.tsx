import { useSearchParams } from "react-router-dom";
import Header from "../../common/components/header";
import { Suspense, lazy } from "react";
import { DimdLoader } from "../../common/components/loader";

const MainListSection = lazy(() => import("./components/main-list-section"));
const MainHeader = lazy(() => import("./components/main-header"));

export default function Main() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  return (
    <>
      <Suspense fallback={<DimdLoader />}>
        <Header headerType="basic" />
        {!searchValue && <MainHeader />}
        <MainListSection />
      </Suspense>
    </>
  );
}
