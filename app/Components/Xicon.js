function Xicon({ searchInputRef }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 sm:mr-3 h-7 text-gray-500 cursor-pointer 
          transition duration-100 transform hover:scale-125  "
        onClick={() => {
          searchInputRef.current.value = "";
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default Xicon;
