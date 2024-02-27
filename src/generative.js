export default function Generative() {
  return (
    <div className="flex flex-col my-[100px] px-20 w-full justify-between place-items-center">
      <div className="text-4xl text-center p-10">
        Generative AI for Conversation to
        <br /> Monetize Your Community & Reach
      </div>
      <div className="flex flex-row m-5 p-5">
        <div className="flex flex-row">
          <div className="border border-lg h-fit text-yellow-200 text-3xl m-2 p-2 bg bg-gray-900">
            01
          </div>
          <div className="flex flex-col">
            <div className="p-2 text-3xl">Create</div>
            <div className="text-left p-2">
              Immerse in our intuitive platform to craft your unique virtual AI
              Characters or Personalities. You don't need any technical
              expertise, just your imagination.
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="border border-lg h-fit text-yellow-200 text-3xl m-2 p-2 bg bg-gray-900">
            02
          </div>
          <div className="flex flex-col">
            <div className="p-2 text-3xl">Train</div>
            <div className="text-left p-2">
              You can teach your AI Characters or Personalities to mirror your
              mannerisms, transforming them into a reliable digital replica that
              works as you want.
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="border border-lg h-fit text-yellow-200 text-3xl m-2 p-2 bg bg-gray-900">
            03
          </div>
          <div className="flex flex-col">
            <div className="p-2 text-3xl">Monetize</div>
            <div className="text-left p-2">
              Leverage our AI Characters or Personalities Marketplace to
              monetize your AI personality, profiting from each interaction and
              creating a new stream of passive income.
            </div>
          </div>
        </div>
      </div>
      <div className="bg bg-yellow-300 text-black hover:bg-yellow-200 p-2 px-4 rounded-xl">
        {" "}
        Try it for Free
      </div>
    </div>
  );
}
