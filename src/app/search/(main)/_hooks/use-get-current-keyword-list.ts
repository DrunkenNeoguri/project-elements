import { useEffect, useState } from "react";

export function useGetCurrentKeywordList() {
  const [searchKeywordList, setSearchKeywordList] = useState<Array<string>>([]);

  const addSearchKeyword = (keyword: string) => {
    const renewalSearchKeywordList: Array<string> = [
      ...searchKeywordList,
      keyword,
    ];

    if (renewalSearchKeywordList.length > 5) {
      renewalSearchKeywordList?.shift();
    }

    localStorage.setItem(
      "currentKeywordList",
      JSON.stringify(renewalSearchKeywordList)
    );

    setSearchKeywordList(renewalSearchKeywordList);
  };

  const removeSearchKeyword = (removeKeyword: string) => {
    const renewalSearchKeywordList: Array<string> = [
      ...searchKeywordList,
    ].filter((listKeyword) => listKeyword !== removeKeyword);

    localStorage.setItem(
      "currentKeywordList",
      JSON.stringify(renewalSearchKeywordList)
    );

    setSearchKeywordList(renewalSearchKeywordList);
  };

  const removeAllSearchKeyword = () => {
    localStorage.removeItem("currentKeywordList");
    setSearchKeywordList([]);
  };

  useEffect(() => {
    const storageKeywordList = localStorage.getItem("currentKeywordList");

    if (storageKeywordList != null) {
      setSearchKeywordList(JSON.parse(storageKeywordList));
    }
  }, []);

  return {
    searchKeywordList,
    addSearchKeyword,
    removeSearchKeyword,
    removeAllSearchKeyword,
  };
}
