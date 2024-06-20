import Button from "../../../../components/button/button";

export default function SelectSection() {
  return (
    <section className="flex flex-col items-start h-full box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4">
        <h2 className="font-bold24 text-white">{`새로운 여행을\n준비하시는군요!\n\n이번엔 어디로 떠니시나요?`}</h2>
      </div>

      <div className="flex flex-col gap-3 w-full mt-auto mx-0 mb-6 box-border">
        <Button type="button" colorTheme="primaryReverse">
          해외 여행
        </Button>
        <Button type="button" colorTheme="secondaryReverse">
          국내 여행
        </Button>
        <Button type="button" colorTheme="invalid">
          돌아가기
        </Button>
      </div>
    </section>
  );
}
