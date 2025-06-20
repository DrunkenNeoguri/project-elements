'use client';
import ElementHeader from './_components/element-header';
import ElementsSection from './_components/elements-section';
import useElementMain from './_hooks/use-element-main';

export default function Element() {
  const { elements, setElements, travelInfo } = useElementMain();

  if (!elements || !travelInfo) {
    return;
  }

  return (
    <>
      <ElementHeader travelInfo={travelInfo} />
      <ElementsSection elements={elements} setElements={setElements} />
    </>
  );
}
