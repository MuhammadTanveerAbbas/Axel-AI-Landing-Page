import { Element } from "react-scroll";

import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div
            className="
              relative flex md:flex-wrap flex-nowrap
              border-2 border-s3 rounded-7xl
              md:overflow-hidden
              max-md:flex-col max-md:gap-3 max-md:border-none max-md:rounded-none
              feature-after
              md:g7
            "
          >
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="
                  relative z-2
                  md:px-10 px-5
                  md:pb-10 pb-5
                  flex-50
                  max-md:flex-320 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl
                "
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
                    <div className="w-[0.5px] h-16 bg-s3" />

                    <img
                      src={icon}
                      alt={title}
                      className="size-28 object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>

                {/* Ensure Button has consistent hover and accessible props */}
                <Button
                  icon={button.icon}
                  aria-label={button.title}
                  className="transition-colors duration-500 text-p4 hover:text-p1"
                >
                  {button.title}
                </Button>
              </div>
            ))}

            {/* Detail list - desktop only */}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  {/* Vertical line between items */}
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div
                    className="
                      flex items-center justify-center
                      mx-auto mb-3
                      border-2 border-s2 rounded-full
                      size-20
                      transition-all duration-500
                      shadow-500
                      hover:border-s4
                      cursor-pointer
                    "
                    role="button"
                    tabIndex={0}
                    aria-label={title}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        e.preventDefault();
                    }}
                  >
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
