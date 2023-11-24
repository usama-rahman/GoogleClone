"use client";
import HeaderOption from "../Components/HeaderOptions";
import SearchHeader from "../Components/SearchHeader";

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
}
