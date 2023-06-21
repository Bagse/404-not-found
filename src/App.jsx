function App() {
  return (
    <div className="px-5 md:px-20 py-5">
      <h1 className="font-black text-3xl">404 NOT FOUND</h1>
      <div className="flex flex-wrap md:flex-nowrap place-content-center place-items-center font-mono justify-evenly gap-10 py-9 md:py-24">
        <img
          className="w-[500px] h-[280px] md:h-[400px]"
          src="./scarecrow.png"
          alt="image of scarecrow"
        />
        <div className="flex flex-col gap-8 md:px-36">
          <h2 className="text-5xl md:text-6xl font-bold">
            I have bad news for you
          </h2>
          <ul className="list-none text-[#4F4F4F] text-xl leading-9">
            <li>The page you are looking</li>
            <li>for might be removed or is</li>
            <li>temporarily unavailable</li>
          </ul>
          <button className="bg-[#333333] text-white uppercase py-4 px-2 w-56 hover:bg-gray-600 transition">
            Back to Homepage
          </button>
        </div>
      </div>
      <footer className="text-[#BDBDBD] text-center hover:text-[#333333] transition">
        Created by Bagse - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
