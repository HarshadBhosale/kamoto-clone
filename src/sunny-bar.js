export default function SunnyBar() {
  return (
    <div className="flex bg bg-indigo-600 px-20 py-1">
      <div className="p-2">
        <img
          src="https://www.kamoto.ai/assets/images/screens/sunny-profile.png"
          alt="sunny-leone"
          className="h-12"
        />
      </div>
      <div className="flex flex-row justify-between content-center place-items-center w-full">
        <div>
          <div className="text-yellow-300 text-xl">
            <b>Sunny Leone</b>
          </div>
          <div className="flex ">
            Talk to her on phone & chance to meet Sunny in Mumbai! only on
            Kamoto.AI
          </div>
        </div>
        <div>
          <div
            className="flex border m-2 p-2 rounded-full border-white text-white"
            onClick={() => alert("Button clicked")}
          >
            {"Talk Now >"}
          </div>
        </div>
      </div>
    </div>
  );
}
