import Image from "next/image";
import { Rubik } from "next/font/google"; // Make sure to import or define WorkSans if needed
import { Poppins } from "next/font/google"; // Make sure to import or define WorkSans if needed

const pop = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Specify weights
  subsets: ["latin"], // Specify subsets
  display: "swap",
});
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Specify weights
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

export default function Navbar1() {
  return (
    <div>
      {/* desktop navbar */}
      <div className=" hidden md:block bg-white m-10">
        <div className=" flex flex-row justify-between items-center `">
          <div className=" flex flex-row items-center gap-3">
            <Image
              src={"/wlogo.png"}
              alt={"logo"}
              width={4000}
              height={100}
              className=" h-[40px] w-[40px]"
            />
            <div
              className={`${rubik.className} text-black font-medium text-[4vh]`}
            >
              MRKT.AI
            </div>
          </div>
          <div className=" flex flex-row space-x-10">
            <div
              className={`${pop.className} text-[20px] font-medium underline underline-offset-4`}
            >
              Home
            </div>
            <div className={`${pop.className} text-[20px] font-light`}>Feature</div>
            <div className={`${pop.className} text-[20px] font-light`}>
              Testimonals
            </div>
            <div className={`${pop.className} text-[20px] font-light`}>Pricing</div>
            <div className={`${pop.className} text-[20px] font-light`}>
              Download
            </div>
          </div>
          <button className="relative  px-[1.8px] py-[1.8px] rounded-full bg-transparent text-black font-semibold">
  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E944D3] to-[#44adee] p-[1px]"></span>
  <span className="relative block bg-white rounded-full px-5 py-3">
    Start Free Trial
  </span>
</button>

        </div>
      </div>
      {/* desktop navbar */}
    </div>
  );
}
