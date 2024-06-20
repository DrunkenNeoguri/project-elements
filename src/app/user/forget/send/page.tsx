import Button from "../../../../components/button/button";

export default function ForgetSend() {
  return (
    <section className="flex flex-col gap-6 px-4 py-0 box-border">
      <div className="flex flex-col gap-[10px] box-border mt-6 mb-4 w-full px-4">
        <h2 className="font-bold24 text-black">{`입력하신 주소로\n이메일을 보내드렸어요!`}</h2>
        <span className="font-medium12 text-black">
          {`입력하신 이메일 주소의 받은메일함에서\n비밀번호 변경 관련 이메일이 도착했는지 확인하시고,\n내용 안의 링크를 열어 새로운 비밀번호 변경 작업을\n진행해주시기 바랍니다.\n\n만약 이메일이 도착하지 않았을 경우,\n다시 한 번 비밀번호 찾기 페이지로 돌아가 절차를 진행해주세요.\n\n해당 창은 닫으셔도 됩니다.`}
        </span>
      </div>
      <div className="flex flex-col gap-3 w-full mt-auto mb-6 mx-0 box-border">
        <Button type="button" colorTheme="primary">
          로그인 페이지로 돌아가기
        </Button>
        <Button type="button" colorTheme="invalid">
          창 닫기
        </Button>
      </div>
    </section>
  );
}
