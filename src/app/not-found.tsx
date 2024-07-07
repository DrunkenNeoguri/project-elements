"use client";
import { useRouter } from "next/navigation";
import Button from "../components/button/button";
import Header from "../components/header/header";

export default function NotFound() {
  const router = useRouter();

  const handleMoveToPrevPath = () => {
    return router.back();
  };

  return (
    <>
      <Header activePrev={true} />
      <section className="flex flex-col items-center gap-6 pt-0 pb-6 px-4 mt-36 w-full box-border">
        <img
          src="/images/img-not-found.webp"
          className="bg-transparent w-[calc(100%-60px)] h-auto"
          loading="lazy"
          alt=""
        />
        <h3 className="font-bold24 text-black p-0 m-0">
          이런! 문제가 발생했어요.
        </h3>
        <p className="font-medium16 text-black text-center">
          {`페이지가 존재하지 않거나,\n잘못된 접근으로 이 페이지에 들어오셨네요.\n\n입력하신 주소가 정확한지\n다시 한 번 확인해주세요.`}
        </p>
        <Button
          type="button"
          colorTheme="primary"
          onClick={handleMoveToPrevPath}
        >
          이전 페이지로 돌아가기
        </Button>
      </section>
    </>
  );
}
