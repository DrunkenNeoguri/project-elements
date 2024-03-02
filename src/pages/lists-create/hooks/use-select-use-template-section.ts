import { useSearchParams } from "react-router-dom";

export default function useSelectUseTemplateSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const backToPreviousStep = () => {
    searchParams.set("step", "2");
    return setSearchParams(searchParams);
  };

  const postListCreateProcess = () => {
    // setStep(3);
  };
  return { backToPreviousStep, postListCreateProcess };
}
