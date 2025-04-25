import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import RouteNavbar from "./RouteNavbar";
import Footer from "./Footer";

export const TextParallaxContentExample = () => {
  return (
    <>
      <RouteNavbar />
      <div className="bg-white font-sans">
        <TextParallaxContent
          imgUrl="/Image/img5.jpg"
          subheading="About Us"
          heading="Why Zaminwala.com?"
        >
          <ExampleContent />
        </TextParallaxContent>

        <ExampleContent1 />

        <div className="">
          <img src="/Image/about.jpg" alt="" />
        </div>
        {/* Accordian  */}
        <div className="accordion">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-20">
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-semibold font-montserrat">
                How do I create an account?
              </div>
              <div className="collapse-content text-lg text-neutral-600 font-montserrat">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-semibold font-montserrat">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-lg text-neutral-600 font-montserrat">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-semibold font-montserrat">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-lg text-neutral-600 font-montserrat">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="font-sans"
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white font-sans"
    >
      <p className="mb-2 text-center text-base md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4  pt-12 md:grid-cols-12 font-sans">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">About Us</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-base text-neutral-600 md:text-lg">
        Launched in 2005, Zaminwala.com, India’s No. 1 property portal, deals
        with every aspect of the consumers’ needs in the real estate industry.
      </p>
      <p className="mb-8 text-base text-neutral-600 md:text-lg">
        At Zaminwala.com, you can advertise a property, search for a property,
        browse through properties, build your own property microsite, and keep
        yourself updated with the latest news.
      </p>
    </div>
  </div>
);

const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-15 pt-12 md:grid-cols-12 font-sans">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Why Zaminwala.com?
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-base text-neutral-600 md:text-lg">
        At Zaminwala.com, you can advertise a property, search for a property,
        browse through properties, build your own property microsite, and keep
        yourself updated.
      </p>
      <p className="mb-8 text-base text-neutral-600 md:text-lg">
        Stay updated with the latest news and trends making headlines in the
        realty sector.
      </p>
      <button className="w-full rounded bg-red-900 px-9 py-4 text-base text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

export default TextParallaxContentExample;
