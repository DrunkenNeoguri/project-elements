export default function MainHeader() {
  return (
    <header className="bg-primaryDeep flex flex-col rounded-b-xl w-full px-4 py-6 box-border drop-shadow-[0_4px_4px_#00000064]">
      <div className="flex flex-col box-border mt-[60px] w-full break-keep">
        <p className="font-bold24 text-white">{`안녕하세요,\n준비물챙겼습니까!\n\n어떤 여행을 준비중이신가요?`}</p>
      </div>
    </header>
  );
}
