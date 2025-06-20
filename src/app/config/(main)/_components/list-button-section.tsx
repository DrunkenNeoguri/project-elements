import Link from 'next/link';

export default function ListButtonSection() {
  return (
    <section className="w-full flex flex-col px-4 py-6 gap-4">
      <div>
        <ul>
          <h6 className="text-[#909090] font-medium12 mb-2">내 체크인백</h6>
          <li className="py-2">
            <Link
              className="font-medium16 text-black w-full"
              href="/config/user/verification?access=edit"
            >
              내 정보 수정
            </Link>
          </li>
          <li className="py-2">
            <Link
              className="font-medium16 text-black w-full"
              href="/config/user/verification?access=change"
            >
              비밀번호 변경
            </Link>
          </li>
          <li className="py-2">
            <Link
              className="font-medium16 text-black w-full"
              href="/config/user/verification?access=signout"
            >
              회원 탈퇴
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
