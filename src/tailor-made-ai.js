export default function TailorMadeAI() {
  return (
    <div className="flex bg-stone-900 m-[100px] mx-[120px] border border-black justify-between px-20 p-10 rounded-3xl hover:border-yellow-500">
      <div className="h-auto flex flex-col justify-center place-content-around">
        <div className="flex w-fit m-2 p-2 text-yellow-200">
          Tailor-Made AI Personalities
        </div>
        <div className="flex flex-col text-white py-4 m-2">
          <div className="text-5xl">
            Craft Unique AI Personalities with Kamoto.AI
          </div>
          <br /> Experience unmatched individuality with Kamoto.AI, as you
          design <br />
          and train personalized AI Characters & Personalities of your own or{" "}
          <br /> of someone else. <br />
          <br />
          <ul>
            <li>&#10003; Unprecedented Customization Abilities</li>
            <li>&#10003; Innovative Training Tools</li>
            <li>&#10003; Unique User Experiences</li>
          </ul>
        </div>
        <div className="flex m-2 my-6 px-4 py-2 text-lg w-fit text-yellow-200 hover:underline hover:underline-offset-2">
          Get Started Free &#8599;
        </div>
      </div>
      <div>
        <video
          width="740"
          className="rounded-2xl"
          height="500"
          src="https://www.kamoto.ai/assets/videos/kamoto-ai-Personalization-personality.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
