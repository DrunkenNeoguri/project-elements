"use client";

import { ModalAlert, ModalInfo } from "../../../../../assets/icons/icons";

export default function SignOut() {
  return (
    <form className="flex flex-col box-border px-4">
      <div className="flex flex-col w-full break-keep">
        <h2 className="font-bold24 text-black">체크인백을 탈퇴하시겠어요?</h2>
        <div className="flex flex-col py-3">
          <div className="flex gap-1">
            <ModalInfo width={16} height={16} />
            <span className="text-black font-medium12">
              체크인백을 탈퇴하시면, 다음과 같은 정보가 삭제돼요.
            </span>
          </div>
          <ol className="my-4">
            <li className="text-black font-medium12">개인 정보 및 이용 내역</li>
            <li className="text-black font-medium12">
              등록한 여행 데이터 (여행 정보, 여행 준비물 리스트)
            </li>
          </ol>
        </div>

        <div className="flex flex-col py-3">
          <div className="flex gap-1">
            <ModalAlert width={16} height={16} />
            <span className="text-black font-medium12">
              아래의 데이터는 탈퇴를 하셔도 다른 유저를 위해 보존돼요.
            </span>
          </div>
          <ol className="my-4">
            <li className="text-black font-medium12">
              템플릿으로 등록한 여행 준비물 리스트
            </li>
          </ol>
        </div>

        <div className="flex gap-1">
          <input />
          <span className="font-bold12 text-black">
            위 내용을 숙지하고, 체크인백을 탈퇴하겠습니다.
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full break-keep">
        <span className="text-black font-medium12">
          탈퇴하시는 이유 혹은 개선됐으면 하는 점을 알려주시겠어요? 주신 의견은
          더 좋은 체크인백을 만들기 위해 참고하겠습니다.
        </span>
        <textarea className="bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 border-black" />
      </div>
    </form>
  );
}
