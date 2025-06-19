import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.ceil(faq.length / 2);

  return (
    <section>
      {/* Replace <Element> with a div with id for anchor linking */}
      <div id="faq" className="relative">
        {/* Header Section */}
        <div className="container relative z-10 py-28 text-center max-lg:py-20 max-md:py-16">
          <h3 className="h3 max-md:h5 max-w-2xl mx-auto mb-6 text-p4">
            Curiosity didn&apos;t kill the cat, it gave it answers.
          </h3>
          <p className="body-1 max-w-lg mx-auto">
            You&apos;ve got questions, we&apos;ve got answers.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="faq-glow_before relative z-10 border-2 border-s2 bg-s1 rounded-xl shadow-lg">
          <div className="container relative flex flex-col lg:flex-row gap-10">
            {/* Center Icon */}
            <div className="rounded-full absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex size-20 items-center justify-center border-2 border-s2 bg-s1 shadow-md">
              <img
                src="/images/faq-logo.svg"
                alt="FAQ Logo"
                className="w-1/2 h-1/2 object-contain"
                loading="lazy"
              />
            </div>

            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-6 pt-24 lg:pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <div
                  key={item.id}
                  className={`${index % 2 === 1 ? "lg:mt-16" : ""}`}
                >
                  <FaqItem item={item} />
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-6 pt-0 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <div
                  key={item.id}
                  className={`${index % 2 === 0 ? "lg:mt-16" : ""}`}
                >
                  <FaqItem item={item} />
                </div>
              ))}
            </div>

            {/* Vertical Divider for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 -z-10 h-full w-px bg-s2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
