import Typing from "./typing";
import { useState } from "react";
export default function Elizabeth() {
  const [ind, setInd] = useState(0);
  return (
    <div className="flex bg-hero my-[100px] px-20 justify-between">
      <div className="h-auto">
        <div className="flex border-[0.1px] m-2 p-2 rounded-full border-stone-600 text-yellow-200">
          Create, Train, Share & Monetize AI Characters and Personality
        </div>
        <div className="flex text-white text-5xl py-4 m-2 leading-[50px]">
          Create & Monetize AI
          <br /> Character of <br />
          <Typing
            texts={[
              "Influencers",
              "Your Own Self",
              "Fictional Characters",
              "Celebrities",
            ]}
            delay={200}
            infinite
            ind={ind}
            setInd={setInd}
          />{" "}
          <br />
        </div>
        <div className="flex m-2 my-6 p-4 text-lg w-fit rounded-xl text-white bg-pink-500">
          Start Creating- It's Free
        </div>
        <div className="flex border m-2 my-6 p-4 text-lg w-fit rounded-full border-yellow-500 text-yellow-200">
          <img
            src="https://www.kamoto.ai/assets/images/svg/chat.svg"
            alt="chat icon"
          />
          Talk to Sunny Leone
        </div>
      </div>
      <div>
        <video
          width="740"
          className="rounded-2xl"
          height="500"
          src="https://www.kamoto.ai/assets/videos/kamoto-ai-create-train-monetize-ai-personality-replica-persona.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
