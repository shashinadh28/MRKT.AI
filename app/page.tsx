"use client";
import Image from "next/image";
import { Lexend } from "next/font/google";
import { FaCheck } from "react-icons/fa";
import { TfiControlPlay } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Work_Sans } from "next/font/google"; // Make sure to import or define WorkSans if needed
import { Rubik } from "next/font/google"; // Make sure to import or define WorkSans if needed
import Navbar1 from "./components/navbar";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Specify weights
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const WorkSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // +++++++++++++++ the main div for all elements ++++++++++++++++
    <div className="scroll-smooth">
      {/* NAVBAR */}

      {/* desktop navbar */}
      <Navbar1 />
      {/* desktop navbar */}

      <div className="flex flex-row md:hidden items-center justify-between p-4 md:p-8 bg-white shadow-md">
        <div className="text-black font-bold text-2xl">MRKT.AI</div>

        {/* Full navbar for larger screens */}

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-8 h-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (visible when the hamburger menu is clicked) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-2 p-4 bg-white shadow-md">
          <button>Home</button>
          <button>Feature</button>
          <button>Testimonials</button>
          <button>Pricing</button>
          <button>Download</button>
          <button className="relative px-[2px] py-[2px] rounded-full bg-transparent text-black font-semibold">
  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E944D3] to-[#6BBAEB] p-[2px]"></span>
  <span className="relative block bg-white rounded-full px-5 py-3">
    Start Free Trial
  </span>
</button>

        </div>
      )}
      {/* NAVBAR END */}
      {/* First page */}
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex flex-col mt-14 px-4 md:px-16">
          <div className="flex flex-col items-center md:items-start">
            <div>
              <div
                className={`${WorkSans.className} bg-gradient-to-r from-pink-300 via-purple-500 to-purple-700 text-6xl md:text-7xl lg:text-9xl inline-block text-transparent bg-clip-text font-black`}
              >
                AI-Driven
              </div>
              <div className="text-6xl md:text-7xl lg:text-9xl font-extrabold">
                Marketing
              </div>
            </div>
          </div>

          <div className="mt-4 text-base md:text-lg ">
            Elevate your brand to new heights with our cutting-edge marketing
            strategies. We specialize in delivering tailored solutions that
            captivate your audience and amplify your online presence.
          </div>

          {/* Buttons */}
          <div className="pt-6 md:pt-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 md:px-7  py-2.5 text-center me-2 mb-2 md:py-5"
            >
              Get Started
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Alternative
            </button>
          </div>

          {/* Rating Section */}
          <div className="pt-8 flex flex-col">
            <span>Tested Software Reviewers</span>
            <div className="flex items-center">
              {/* Star icons */}
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              {/* Gray star */}
              <svg
                className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95 out of 5
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-1 md:mt-0 md:ml-10 flex justify-center">
          <Image
            src={"/w3.png"}
            alt={"Toon"}
            height={100}
            width={4000}
            className="md:h-[550px] md:w-[1200px] md:mr-44 md:mt-20"
          />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="flex flex-row justify-center md:mt-20 mt-12 ">
        <Image
          src={"/apps.png"}
          alt={""}
          height={1000}
          width={1000}
          className="md:w-[1500px]"
        />
      </div>

      {/* <div> ---------------------------------------------- </div> */}
      {/* Discover Our Comprehensive Suite of Features START */}
      <div className="p-6 sm:p-10 lg:p-14 text-center m-6 sm:m-10 lg:m-16 mx-4 sm:mx-10 lg:mx-28">
        <div className="font-extrabold text-[36px] sm:text-[48px] lg:text-[60px] mx-2 sm:mx-10 lg:mx-36">
          Discover Our Comprehensive Suite of Features
        </div>
        <div className="text-base sm:text-lg mx-4 sm:mx-12 lg:mx-32">
          Our platform is designed to empower your business with a comprehensive
          suite of features that streamline your marketing efforts and
          supercharge your growth.
        </div>
      </div>
      {/* Discover Our Comprehensive Suite of Features END */}

      {/*  harness insights  for  success START */}
      <div className="newcolor h-auto sm:h-[480px] w-11/12 sm:w-10/12 mx-4 sm:mx-10 lg:mx-28 box">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2">
            <div
              className={`${WorkSans.className} font-bold text-[32px] sm:text-[40px] lg:text-[49px] pt-10 sm:pt-24 mx-4 sm:mx-10 lg:mx-20`}
            >
              Harness Insights for Success
            </div>
            <div className="mx-4 sm:mx-8 lg:mx-16 text-base sm:text-lg">
              Uncover valuable insights from your data with our advanced
              analytics tools. Make informed decisions, refine your strategies,
              and stay ahead of the competition by leveraging the wealth of
              information at your fingertips.
            </div>
          </div>
          <div className="flex justify-center w-full sm:w-1/2 mt-10 sm:mt-24">
            <Image
              src={"/report-toon.png"}
              alt={""}
              height={200}
              width={350}
              className="mx-auto sm:mx-16 lg:mx-28"
            />
          </div>
        </div>
      </div>
      {/*  harness insights  for  success   END */}

      {/* SOCIAL LEAD GENERATION & TARGETED CAMPAIGN EXCELLENCE START */}
      <div className="flex flex-col sm:flex-row w-full px-4 sm:px-10 lg:px-20">
        {/* MAIN 1 - Lead Generation */}
        <div className="newcolor2 h-auto sm:h-[550px] w-full sm:w-[500px] mx-auto sm:mx-10 lg:mx-20 mt-10 sm:mt-24 box">
          <div>
            {/* Title */}
            <div
              className={`${WorkSans.className} font-bold text-[28px] sm:text-[35px] lg:text-[40px] pt-8 px-6 sm:px-8`}
            >
              Seamless Lead Generation
            </div>
            {/* Text */}
            <div className="text-[14px] sm:text-[15px] lg:text-[16px] px-6 sm:px-9 pt-4">
              Effortlessly gather and manage leads with our lead collection
              tools. From capturing potential customers' information to
              nurturing relationships, our platform simplifies the lead
              generation process for maximized conversions.
            </div>
            {/* Image container */}
            <div className="bgcolour1 h-48 sm:h-56 w-5/6 mx-auto mt-6 sm:mt-8 box">
              <div className="mx-auto flex justify-center pt-4">
                <Image
                  src={"/gudumba2.png"}
                  alt={""}
                  height={250}
                  width={200}
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN 2 - Campaign Excellence */}
        <div className="newcolor3 h-auto sm:h-[550px] w-full sm:w-[500px] mx-auto sm:mx-10 lg:mx-20 mt-10 sm:mt-24 box">
          <div>
            {/* Title */}
            <div
              className={`${WorkSans.className} font-bold text-[28px] sm:text-[35px] lg:text-[40px] pt-8 px-6 sm:px-8`}
            >
              Targeted Campaign Excellence
            </div>
            {/* Text */}
            <div className="text-[14px] sm:text-[15px] lg:text-[16px] px-6 sm:px-9 pt-4">
              Create and execute highly targeted campaigns with precision. Our
              platform helps you reach the right audience, optimize your
              messaging, and achieve superior results for your marketing
              efforts.
            </div>
            {/* Image container */}
            <div className="bgcolour1 h-48 sm:h-56 w-5/6 mx-auto mt-6 sm:mt-8 box">
              <div className="mx-auto flex justify-center pt-4">
                <Image src={"/gudumba.png"} alt={""} height={250} width={350} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SOCIAL LEAD GENERATION & TARGETED CAMPAIGN EXCELLENCE END */}

      {/* Navigating success through precision Ad Tracking    start */}
      <div className=" mt-20 ">
        {/* MAIN 1 */}
        <div className="newcolor4 md:h-[93rem] w-full mt-10 md: sm:mt-20 rounded-3xl">
          {/* Ad Tracking Section */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-32 p-4 sm:p-10 lg:p-20 mx-4 sm:mx-10 lg:mx-28">
            {/* Image Section */}
            <div className="w-full sm:w-1/2 mt-6 sm:mt-14">
              <Image
                src="/ping1.png"
                alt="gadidha"
                height={400}
                width={800}
                className="w-[350px] ml-16   md:w-[1200px] "
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col w-full sm:w-1/2">
              <div
                className={`${WorkSans.className} font-bold text-[24px] sm:text-[32px] lg:text-[56px]`}
              >
                Navigating Success through Precision Ad Tracking
              </div>
              <div className="mt-4 sm:mt-6 lg:mt-8 text-[14px] sm:text-[16px] lg:text-[20px]">
                We are partners in optimizing advertising campaigns. Our
                meticulous ad tracking solutions provide real-time insights into
                ad performance, enabling you to make data-driven decisions and
                maximize ROI, elevating your brand's impact.
              </div>

              {/* Button */}
              <div className="mt-6 sm:mt-8 lg:mt-12">
                <div className="border-2 border-purple-500 rounded-full w-fit">
                  <div className="text-black font-semibold p-3 sm:p-4 lg:p-5 mx-4">
                    Watch a demo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16  lg:gap-32 p-4 sm:p-10 lg:p-20 mx-4 sm:mx-10 lg:mx-28">
            {/* Text Section */}
            <div className="flex flex-col w-full sm:w-1/2">
              <div
                className={`${WorkSans.className} font-bold text-[24px] sm:text-[32px] lg:text-[56px] `}
              >
                Unleashing Digital Potential with Strategic SEO
              </div>
              <div className="mt-4 sm:mt-6 lg:mt-8 text-[14px] sm:text-[16px] lg:text-[20px]">
                SEO is more than just keywords. Our dedicated team crafts
                holistic SEO strategies, propelling your website to the top
                ranks. From on-page perfection to off-site authority building,
                we focus on organic growth that amplifies your online visibility
                and drives sustainable business growth.
              </div>

              {/* Button */}
              <div className="mt-6 sm:mt-8 lg:mt-12">
                <div className="border-2 border-purple-500 rounded-full w-fit">
                  <div className="text-black font-semibold p-3 sm:p-4 lg:p-5 mx-4">
                    Watch a demo
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-1/2 mt-6 sm:mt-14 md:mt-0">
              <Image
                src="/ping2.png"
                alt="gadidha2"
                height={400}
                width={800}
                className="w-[320px] md:w-[500px] ml-11 "
              />
            </div>
          </div>
        </div>

        {/* bg color1 */}
        {/* subscriptions start */}
        <div className="bg-black w-full rounded-3xl p-4 lg:p-8">
          <div className="flex flex-col pb-20">
            {/* 1 */}
            <div className="w-full lg:w-8/12 mx-auto px-4">
              <div
                className={`${WorkSans.className} font-semibold text-white text-3xl lg:text-4xl xl:text-5xl pt-16 text-center`}
              >
                You don't have to bother bringing in customers
              </div>
              <div className="text-white font-extralight text-base lg:text-lg xl:text-xl mt-5 text-center lg:text-left tracking-wider">
                From multiple payment options to state-of-the-art, trust us to
                handle your payments with the utmost care and efficiency.
              </div>
            </div>
            {/* PRICE PLANS START */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center mt-12 lg:mt-24">
              {/* Plan 1 */}
              <div className="bg-white w-full lg:w-80 rounded-3xl mx-4 lg:mx-0 mb-8 lg:mb-0">
                <div className="flex flex-col p-4 lg:p-6">
                  <div className="mt-5 text-lg lg:text-xl">Basic Plan</div>
                  <div className="flex items-baseline mt-2">
                    <div className="font-bold text-4xl lg:text-5xl">$12</div>
                    <div className="ml-2 text-base lg:text-lg"> per month</div>
                  </div>
                  <div className="text-sm lg:text-base mt-2">
                    Unlimited swipes and interactions
                  </div>
                  <button className="mt-6 border-2 border-black rounded-full py-2 px-4">
                    <div className="font-bold text-sm lg:text-base">
                      Get started
                    </div>
                  </button>
                  <div className="bg-gray-300 h-[1px] mt-6" />
                  <div className="font-extrabold mt-6 text-lg lg:text-xl">
                    Features
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      "Unlimited swipes and interactions",
                      "Ad-free experience",
                      "Enhanced visibility in search results",
                      "Ad-free browsing experience",
                      "Advanced matching algorithm",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-purple-200 rounded-full p-1">
                          <div className="text-purple-800 text-xs">
                            <FaCheck />
                          </div>
                        </div>
                        <div className="ml-3 text-sm lg:text-base">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Plan 2 */}
              <div className="bg-white w-full lg:w-80 rounded-3xl mx-4 lg:mx-0 mb-8 lg:mb-0">
                <div className="bg-purple-400 rounded-t-3xl w-full h-14">
                  <div className="text-center pt-4 text-white font-medium text-lg lg:text-xl tracking-wider">
                    Most popular
                  </div>
                </div>
                <div className="flex flex-col p-4 lg:p-6">
                  <div className="mt-5 text-lg lg:text-xl">Premium Plan</div>
                  <div className="flex items-baseline mt-2">
                    <div className="font-bold text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-violet-500">
                      $40
                    </div>
                    <div className="ml-2 text-base lg:text-lg"> per month</div>
                  </div>
                  <div className="text-sm lg:text-base mt-2">
                    Unlimited swipes and interactions
                  </div>
                  <button className="mt-6 border-2 border-black rounded-full py-2 px-4">
                    <div className="font-bold text-sm lg:text-base">
                      Get started
                    </div>
                  </button>
                  <div className="bg-gray-300 h-[1px] mt-6" />
                  <div className="font-extrabold mt-6 text-lg lg:text-xl">
                    Features
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      "Unlimited swipes and interactions",
                      "Ad-free experience",
                      "Enhanced visibility in search results",
                      "Ad-free browsing experience",
                      "Advanced matching algorithm",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-purple-200 rounded-full p-1">
                          <div className="text-purple-800 text-xs">
                            <FaCheck />
                          </div>
                        </div>
                        <div className="ml-3 text-sm lg:text-base">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Plan 3 */}
              <div className="bg-white w-full lg:w-80 rounded-3xl mx-4 lg:mx-0">
                <div className="flex flex-col p-4 lg:p-6">
                  <div className="mt-5 text-lg lg:text-xl">Elite Plan</div>
                  <div className="flex items-baseline mt-2">
                    <div className="font-bold text-4xl lg:text-5xl">$60</div>
                    <div className="ml-2 text-base lg:text-lg"> per month</div>
                  </div>
                  <div className="text-sm lg:text-base mt-2">
                    Unlimited swipes and interactions
                  </div>
                  <button className="mt-6 border-2 border-black rounded-full py-2 px-4">
                    <div className="font-bold text-sm lg:text-base">
                      Get started
                    </div>
                  </button>
                  <div className="bg-gray-300 h-[1px] mt-6" />
                  <div className="font-extrabold mt-6 text-lg lg:text-xl">
                    Features
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      "Unlimited swipes and interactions",
                      "Ad-free experience",
                      "Enhanced visibility in search results",
                      "Ad-free browsing experience",
                      "Advanced matching algorithm",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-purple-200 rounded-full p-1">
                          <div className="text-purple-800 text-xs">
                            <FaCheck />
                          </div>
                        </div>
                        <div className="ml-3 text-sm lg:text-base">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* PRICE PLANS END */}
          </div>
        </div>
        {/* subscriptions END */}

        {/* +++++++++++++++++++++++++Ready to boost your marketing & sales? START ++++++++++++++++++++++++*/}
        <div className="bg-white w-full">
          {" "}
          {/* bg-1 */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            {" "}
            {/* bg-1 */}
            <div className="md:ml-32 mt-24">
              {" "}
              {/* Image1 */}
              <Image
                src={"/ping3.png"}
                alt={"picture"}
                className="w-64 md:w-80 md:ml-0 lg:w-[500px] ml-[8rem] xl:w-[600px]"
                height={100}
                width={600}
              />
            </div>{" "}
            {/* Image1 */}
            <div className=" flex flex-col md:ml-32 mt-20 text-center md:text-left">
              {" "}
              {/* col-1 */}
              <div
                className={`${WorkSans.className} font-bold w-10/12 md:w-7/12  text-[40px] md:text-[50px] lg:text-[60px] xl:text-[66px]`}
              >
                Ready to boost your marketing & sales?
              </div>
              <div className="tracking-wider w-full md:w-10/12 mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                Dashboard platform that was created with AI to make it easier
                for business people to manage sales data, sales statistics, and
                sales reports.
              </div>
              <div className="flex flex-col md:flex-row md:justify-start md:items-center mt-6 md:mt-10">
                <button className="text-white bg-gradient-to-r from-pink-300 via-purple-500 to-purple-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-[16px] md:text-[20px] px-4 md:px-5 py-3 md:py-5 text-center me-2 mb-2">
                  Get Started
                </button>
                <div className="border-2 border-black font-medium rounded-full text-[16px] md:text-[20px] px-3 md:px-5 py-2 md:py-3 text-center mb-2 mt-4 md:mt-0">
                  <button className="flex flex-row items-center justify-center">
                    <div className="mx-2 text-[16px] md:text-[20px]">
                      <TfiControlPlay />
                    </div>
                    <div className="text-[14px] md:text-[18px] ">
                      Watch a demo
                    </div>
                  </button>
                </div>
              </div>
            </div>{" "}
            {/* col-1 */}
          </div>
          {/* bg-1 */}
          {/* +++++++++++++++++++++++++Ready to boost your marketing & sales? END ++++++++++++++++++++++++*/}
        </div>

        <footer className="bg-gray-900 w-full rounded-t-3xl mt-20 py-8">
          {/* Footer start */}
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:justify-between">
              {/* Column 1 */}
              <div className="flex flex-col mb-8 md:mb-0">
                <div className="font-semibold text-white text-[20px] mb-4">
                  MRKT.AI
                </div>
                <div className="flex flex-wrap space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-purple-200 p-2 rounded-full">
                    <RiInstagramFill className="text-white text-[20px]" />
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-purple-200 p-2 rounded-full">
                    <FaFacebook className="text-white text-[20px]" />
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-purple-200 p-2 rounded-full">
                    <FaYoutube className="text-white text-[20px]" />
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-purple-200 p-2 rounded-full">
                    <FaTwitter className="text-white text-[20px]" />
                  </div>
                </div>
              </div>

              {/* Column 2, 3, 4, 5 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-28 mb-8 md:mb-0">
                <div className="flex flex-col space-y-3">
                  <div className="text-white tracking-wide font-semibold">
                    Solution
                  </div>
                  <div className="text-white">Digital Marketing</div>
                  <div className="text-white">Social Media</div>
                  <div className="text-white">Ads</div>
                  <div className="text-white">SEO</div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="text-white tracking-wide font-semibold">
                    Resource
                  </div>
                  <div className="text-white">News & Media</div>
                  <div className="text-white">Culture</div>
                  <div className="text-white">Blog</div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="text-white tracking-wide font-semibold">
                    Tools
                  </div>
                  <div className="text-white">Pricing</div>
                  <div className="text-white">Comparing Us</div>
                  <div className="text-white">Support</div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="text-white tracking-wide font-semibold">
                    Company
                  </div>
                  <div className="text-white">About Us</div>
                  <div className="text-white">Career</div>
                  <div className="text-white">Contact</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 my-8"></div>

            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="text-white text-sm font-serif mb-4 md:mb-0">
                @2000-2001.MRKT Rights Reserved
              </div>
              <div className="text-white flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Disclosure</div>
              </div>
            </div>
          </div>
          {/* Footer END */}
        </footer>
      </div>
    </div>
  );
}
