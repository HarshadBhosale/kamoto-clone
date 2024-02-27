export default function MarketPlace() {
  return (
    <div className="flex flex-col w-full justify-between place-items-center my-[100px] px-20">
      <div className="text-4xl text-center w-full p-10">
        World's First <span className="text-yellow-500">AI Character</span>{" "}
        Marketplace
      </div>
      <div className="flex flex-row m-5 p-5 text-center">
        <div className="flex flex-col border-[0.1px] justify-between place-items-center p-4 m-4 rounded-xl">
          <div className="flex flex-row justify-between place-items-center">
            <img
              className="h-[120px] z-1 relative left-[20px]"
              src="https://www.kamoto.ai/assets/images/personality/sports/kamoto-ai-personality-neeraj-chopra.avif"
              alt="test"
            />
            <img
              className="h-40 z-100 relative"
              src="https://www.kamoto.ai/assets/images/personality/sports/kamoto-ai-sachin-temdulkar.avif"
              alt="test"
            />
            <img
              className="h-[120px] z-[-10] relative left-[-20px]"
              src="https://www.kamoto.ai/assets/images/personality/sports/kamoto-ai-virat-kohli.avif"
              alt="test"
            />
          </div>
          <div className="p-2 text-3xl">Sports Persons</div>
          <div className="text-left p-2">
            Featuring over <span className="text-yellow-500">200</span> Sports
            Persons.
          </div>
          <div className="flex m-2 p-4 px-6 text-lg w-fit rounded-xl text-white bg-pink-500">
            Explore More
          </div>
        </div>
        <div className="flex flex-col border-[0.1px] justify-between place-items-center p-4 m-4 rounded-xl">
          <div className="flex flex-row justify-between place-items-center">
            <img
              className="h-[120px] z-1 relative left-[20px]"
              src="https://www.kamoto.ai/assets/images/personality/fictional/darth-vader-Kamoto-AI-Demo-AI-Character-personality-Licensed-AI-Persona-Replica-Clone-Create-Monetize-AI-Personality.avif"
              alt="test"
            />
            <img
              className="h-40 z-100 relative"
              src="https://www.kamoto.ai/assets/images/personality/fictional/harry-potter-Kamoto-AI-Demo-AI-Character-personality-Licensed-AI-Persona-Replica-Clone-Create-Monetize-AI-Personality.avif"
              alt="test"
            />
            <img
              className="h-[120px] z-[-10] relative left-[-20px]"
              src="https://www.kamoto.ai/assets/images/personality/fictional/kamoto-ai-personality-bahubali.avif"
              alt="test"
            />
          </div>
          <div className="p-2 text-3xl">Fictional Characters</div>
          <div className="text-left p-2">
            Featuring over <span className="text-yellow-500">1000 </span>{" "}
            Fictional Characters
          </div>
          <div className="flex m-2 p-4 px-6 text-lg w-fit rounded-xl text-white bg-pink-500">
            Explore More
          </div>
        </div>
        <div className="flex flex-col border-[0.1px] justify-between place-items-center p-4 m-4 rounded-xl">
          <div className="flex flex-row justify-between place-items-center">
            <img
              className="h-[120px] z-1 relative left-[20px]"
              src="https://www.kamoto.ai/assets/images/personality/entrepreneur/kamoto-ai-gautam-adani.avif"
              alt="test"
            />
            <img
              className="h-40 z-100 relative"
              src="https://www.kamoto.ai/assets/images/personality/entrepreneur/kamoto-ai-mukesh-ambani.avif"
              alt="test"
            />
            <img
              className="h-[120px] z-[-10] relative left-[-20px]"
              src="https://www.kamoto.ai/assets/images/personality/entrepreneur/kamoto-ai-personality-anupam.avif"
              alt="test"
            />
          </div>
          <div className="p-2 text-3xl">Entrepreneurs</div>
          <div className="text-left p-2">
            Featuring over <span className="text-yellow-500">50 </span>{" "}
            Entrepreneurs
          </div>
          <div className="flex m-2 p-4 px-6 text-lg w-fit rounded-xl text-white bg-pink-500">
            Explore More
          </div>
        </div>
      </div>
      <div className="bg bg-yellow-300 text-black hover:bg-yellow-200 p-2 px-4 rounded-xl">
        {" "}
        Explore All Personalities
      </div>
    </div>
  );
}
