import { useEffect, useState } from 'react';
import { localStorageHandlers } from '../../../../utils/util-local-storage';

export function useGetCurrentKeywordList() {
  const [searchKeywordList, setSearchKeywordList] = useState<Array<string>>([]);

  const addSearchKeyword = (keyword: string) => {
    const trimmedKeyword = keyword.trim();
    if (searchKeywordList.includes(trimmedKeyword)) {
      const filteredList = searchKeywordList.filter(keyword => keyword !== trimmedKeyword);
      const renewalSearchKeywordList = [trimmedKeyword, ...filteredList];
      localStorage.setItem('currentKeywordList', JSON.stringify(renewalSearchKeywordList));
      setSearchKeywordList(renewalSearchKeywordList);
      return;
    }

    const renewalSearchKeywordList: Array<string> = [...searchKeywordList, trimmedKeyword];

    if (renewalSearchKeywordList.length > 5) {
      renewalSearchKeywordList?.shift();
    }

    localStorage.setItem('currentKeywordList', JSON.stringify(renewalSearchKeywordList));

    setSearchKeywordList(renewalSearchKeywordList);
  };

  const removeSearchKeyword = (removeKeyword: string) => {
    const renewalSearchKeywordList: Array<string> = [...searchKeywordList].filter(
      listKeyword => listKeyword !== removeKeyword,
    );

    localStorage.setItem('currentKeywordList', JSON.stringify(renewalSearchKeywordList));

    setSearchKeywordList(renewalSearchKeywordList);
  };

  const removeAllSearchKeyword = () => {
    localStorage.removeItem('currentKeywordList');
    setSearchKeywordList([]);
  };

  useEffect(() => {
    const keywordList = localStorageHandlers.getCurrentKeywordList();
    setSearchKeywordList(keywordList ?? []);
  }, []);

  return {
    searchKeywordList,
    addSearchKeyword,
    removeSearchKeyword,
    removeAllSearchKeyword,
  };
}
