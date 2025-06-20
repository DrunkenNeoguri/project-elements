import Link from 'next/link';

export default function FirstCreateInfoSection() {
  return (
    <section className="flex flex-col w-full pt-8 pb-6 px-4 box-border gap-6">
      <img src="/images/img-welcome-start.webp" alt="" />
      <p className="font-medium1 text-black text-center whitespace-pre-wrap">{`아직 여행을 등록한 적이 없으시네요!\n\n아래 버튼을 눌러\n여행 일정을 등록해볼까요?`}</p>
      <Link
        className="flex justify-center items-center w-full h-11 rounded border-box font-bold16 cursor-pointer bg-primary text-white"
        href="/travel/create"
      >
        첫 여행 등록하기
      </Link>
    </section>
  );
}
