import { useState } from "react";
import moon from "./assets/sun-line.svg";
import dak from "./assets/moon.svg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-neutral-100 min-h-screen dark:bg-neutral-900">
        <nav className=" border-gray-200">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <button>
              <span className="self-center text-2xl  whitespace-nowrap font-bold dark:text-white">
                SAMPLE
              </span>
            </button>

            <button
              onClick={toggleDarkMode}
              className=" w-10 h-10  rounded-full "
            >
              <img
                src={darkMode ? moon : dak}
                alt={darkMode ? "Dark Mode" : "Light Mode"}
                className="w-full h-full"
              />
            </button>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a
                href="#"
                className="bg-blue-500 dark:bg-white hover:bg-blue-700 text-white dark:text-blue-600 font-bold py-2 px-4 rounded"
              >
                Some link
              </a>
            </div>
          </div>
        </nav>
        <div className="relative mx-auto w-5/6 pt-10 ">
          <h1 className="sm:pt-24 lg:pt-32 text-2xl font-extrabold sm:text-2xl lg:text-6xl  text-blue-600">
            {" "}
            The Ursine Enigma{" "}
          </h1>
          <p className="text-slate-900 mt-5 font-extralight dark:text-white text-1xl sm:text-1xl lg:text-2xl text-left">
            Bears, the majestic rulers of the wilderness, have long captivated
            the human imagination with their immense power and enigmatic nature.
            Yet, beyond their furry facade lies a complex world fraught with
            danger, where encounters with these formidable beasts can swiftly
            turn deadly. From the towering grizzlies of North America to the
            elusive polar bears of the Arctic, each species possesses its own
            arsenal of lethal capabilities honed through centuries of evolution.
            With razor-sharp claws capable of rending flesh and jaws that can
            crush bone with ease, bears command respect and instill fear in
            those who dare to tread into their domain. However, it is not just
            their physical prowess that makes them deadly; their intelligence
            and adaptability further amplify the risks they pose to unsuspecting
            intruders. Whether defending their territory, foraging for food, or
            protecting their young, bears exhibit a ferocity that demands
            caution and vigilance from all who venture into the wild.
            Understanding the intricacies of bear behavior, habitat, and
            interactions with humans is paramount in mitigating the potentially
            deadly consequences of these awe-inspiring creatures presence.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
