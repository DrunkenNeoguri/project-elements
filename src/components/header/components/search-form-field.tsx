import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ActiveSearchIcon } from '../../../assets/icons/icons';
import { useGetCurrentKeywordList } from '../../../app/search/(main)/_hooks/use-get-current-keyword-list';

export function SearchFormField() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentKeyword = searchParams?.get('keyword');

  const [keyword, setKeyword] = useState<string>(currentKeyword ?? '');
  const { addSearchKeyword } = useGetCurrentKeywordList();

  const isNotBlinkKeyword = keyword && keyword.trim() !== '';

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    return setKeyword(e.currentTarget.value);
  };

  const addKeywordInListAndMoveToPage = () => {
    addSearchKeyword(keyword);
    return router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
  };

  const handleSearchKeyword = (e: FormEvent) => {
    e.preventDefault();
    if (isNotBlinkKeyword) {
      document.body.style.overflow = 'auto';
      addKeywordInListAndMoveToPage();
    }
  };

  const handleSearchButton = () => {
    if (isNotBlinkKeyword) {
      addKeywordInListAndMoveToPage();
    }
  };

  return (
    <form className="w-full ml-4" onSubmit={handleSearchKeyword} role="search">
      <input
        className="bg-invalidLight w-full h-10 font-medium16 text-black border border-invalid rounded m-0 outline-none box-border py-[10px] pl-3 pr-9 relative"
        value={keyword}
        onChange={handleChangeKeyword}
        placeholder="검색어를 입력해주세요."
        aria-label="검색어 입력"
      />
      <button
        type="button"
        title="관련 내용 검색"
        onClick={handleSearchButton}
        className="w-8 h-8 bg-transparent mr-0 ml-auto cursor-pointer absolute top-5 right-5"
        aria-label="관련 내용 검색"
      >
        <ActiveSearchIcon />
      </button>
    </form>
  );
}
