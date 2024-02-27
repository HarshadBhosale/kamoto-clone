export default function Navbar() {
  return (
    <div className="flex w-full h-10 justify-between place-items-center my-5 px-20">
      <div className="flex">
        <img src="https://www.kamoto.ai/assets/images/logo.svg" alt="logo" />
      </div>
      <div className="flex m-2 h-full place-items-center">
        {[
          "Home",
          "Use Cases ",
          "Pricing",
          "AI Marketplace",
          "Blog",
          "Refer & Earn",
          "More",
        ].map((field) => (
          <a
            key={field}
            href="/#"
            className="flex m-2 px-4 hover:text-yellow-200"
          >
            {field}
          </a>
        ))}
        <div
          className="flex m-2 px-5 py-2 h-full border rounded-lg border-yellow-500 text-yellow-200 hover:text-black hover:bg-yellow-500"
          onClick={() => alert("Button clicked")}
        >
          Sign up
        </div>
      </div>
    </div>
  );
}
