import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
            {/* Left Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <div
                className="
                  caption small-2 uppercase dark:text-blue-700
                  drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]
                  animate-pulse-glow
                  tracking-wider
                  font-semibold
                  text-sm sm:text-base
                "
              >
                Your Personal AI Assistant
              </div>

              <h1
                className="
                  mt-2 mb-6 font-extrabold uppercase text-gray-900 dark:text-gray-100
                  text-3xl sm:text-4xl lg:text-5xl
                  max-lg:mb-5 max-md:mb-4 max-md:leading-10
                  leading-tight
                "
              >
                Effortlessly Powerful
              </h1>

              <p
                className="
                  max-w-xl mx-auto lg:mx-0
                  mb-16 max-md:mb-12
                  text-gray-700 dark:text-gray-300
                  text-base sm:text-lg
                  leading-relaxed
                "
              >
                We designed Axel AI to be easy to use, quick to learn, and
                surprisingly powerful and intelligent.
              </p>

              <LinkScroll to="features" offset={-100} spy={true} smooth={true}>
                <Button
                  className="text-base sm:text-lg py-3 px-8"
                  icon="/images/zap.svg"
                >
                  Try it now
                </Button>
              </LinkScroll>
            </div>

            {/* Image with Hover Glow Effect & Responsive Width */}
            <div
              className="
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                p-[3px] rounded-xl
                w-40 max-w-xs sm:w-60 lg:w-72 xl:w-80
                transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-pink-500/50
              "
            >
              <div className="bg-white dark:bg-[#0b0f29] rounded-lg w-full h-full">
                <img
                  src="/images/hero.png"
                  alt="Hero logo"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
