import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="relative mr-0 lg:mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100 w-full lg:w-auto">
              <div className="mb-8 md:mb-10">
                <img
                  src="/images/Axel.png"
                  width={160}
                  height={55}
                  alt="Axel"
                />
              </div>

              <p className="body-1 mb-8 md:mb-10 max-w-md text-center lg:text-left">
                Experience Axel for free on your favorite platform—iOS, Android,
                PC, or Web. Download now and stay connected, wherever you are.
              </p>

              <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden w-full lg:w-auto flex justify-center">
              <div className="download_preview-before download_preview-after rounded-40 relative w-full max-w-[955px] border-2 border-s5 p-4 md:p-6">
                <div className="relative rounded-3xl bg-s1 px-2 md:px-6 pb-4 md:pb-6 pt-10 md:pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-16 md:mt-24 flex flex-wrap justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-6 md:mx-10 my-2">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
export default Download;
