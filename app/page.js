export default function Home() {
  return (
    <div>
      <header className="p-5 flex justify-between text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Image</p>
        </div>
      </header>
    </div>
  );
}
