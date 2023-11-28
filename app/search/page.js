"use client";
import HeaderOption from "../Components/HeaderOptions";
import SearchHeader from "../Components/SearchHeader";
import { CONTEXT_KEY } from "../../keys";
function Search() {
  return (
    <div>
      <SearchHeader />
      <HeaderOption />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;

  const data = await fetch(`https://cse.google.com/cse.js?cx=${CONTEXT_KEY}`);
}
