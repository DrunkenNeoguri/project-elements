"use client";
import { useSearchParams } from "next/navigation";
import SearchResultSection from "./_components/search-result-section";
import SearchDefaultSection from "./_components/search-default-section";

export default function MainSearch() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  if (keyword) {
    return <SearchResultSection />;
  } else {
    return <SearchDefaultSection />;
  }
}
