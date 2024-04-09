import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import bg from "../assets/glow-bg.svg";
import { TiTick } from "react-icons/ti";
import person from "../assets/persson.png";

const data = [
  "Accept payment in 200 markets and 130 currencies ",
  "Make payouts in 200 markets",
  "Acquiring in 47 markets",
  "Wide range of payment methods",
  "Recurrring billing capabilities",
  "Network tokenization",
  "Batch and real time account updater",
  "Advanced predictive risk solutions",
  "PCI-compliant vault",
  "Chargeback Protection",
  "Dispute Automation",
  "IC++ pricing available",
  "White glove onboarding & support",
  "Flexible, scalable integration",
  "24/7 monitoring & optimization",
  "Global support center",
];

function Modular() {
  return (
    <div className="w-screen">
      <div className="relative flex bg-[#002e87] h-[80vh]  justify-center items-center">
        <img
          src={bg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />

        <div className="absolute px-12 md:px-16 xl:px-32 inset-0 md:flex text-white">
          <div className="md:w-2/5 flex flex-col justify-center items-center mt-12 ">
            <div className="text-4xl font-bold">
              Our modular solutions can grow with you
            </div>
            <div className="py-4">
              Turn on the features you want, connect with the partners in your
              payments ecosystem, and keep the rest in your back pocket for
              whatever comes next.
            </div>
            <div className="pt-4 text-blue-300  font-bold cursor-pointer flex items-center">
              Connect with a payments expert <FaArrowRight className="ml-4" />
            </div>
          </div>
          <div className="md:w-3/5 flex flex-col md:pl-20">
            <div className="w-full mt-20 bg-white rounded-2xl px-4 md:px-12 py-8 shadow-xl h-max text-black items-center overflow-y-visible ">
              {data.map((text) => (
                <Card text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-[500px] md:mt-[850px] mt-[1000px] md:flex xl:px-32 lg:px-20 px-12">
        <div className="md:w-4/6 flex justify-center ">
          <iframe
            src="https://www.youtube.com/embed/lCIxvZAc-tE?si=2YuqekzV8Jp5svgV&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl xl:w-[730px] lg:w-[600px] w-[500px] h-[350px]  xl:h-[500px] lg:h-[400px]"
          ></iframe>
        </div>
        <div className="md:w-2/6 flex flex-col justify-center xl:mx-8 md:mx-4 pt-4">
          <div className="text-4xl font-normal">
            Your partner for innovation
          </div>
          <div className="py-4">
            See how pressed partnered with PayPal to help their development team
            build innovative solution with limited resources-all powered by
            Braintree technology.
          </div>
          <div className="text-xl font-bold text-blue-500 flex items-center cursor-pointer pt-4">
            Play the video <FaArrowRight className="ml-4" />
          </div>
        </div>
      </div>

      <div className="bg-[#002e87] mt-40 xl:px-32 lg:px-20 px-12 md:flex">
        <div className="md:w-1/2 flex flex-col justify-center text-white">
          <FaQuoteLeft className="text-4xl mt-8" />
          <div className="py-6 text-xl">
            The user experience in terms of usability, trust, and flexibility is
            everything, especially for the digitally native consumers. The
            experience PayPal helps us provide is beating all consumer
            expectations.
          </div>
          <div>David Oksman</div>
          <div>Chief Markeing Officer</div>
          <div className="pt-4 font-bold mb-12">Samsonite</div>
        </div>
        <div className="md:w-1/2 md:-mt-20 pb-20">
          <img src={person} className="rounded-2xl"></img>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}

function Card({ text }: any) {
  return (
    <div className="border-t border-gray-500/30 py-3 flex text- justify-between items-center px-4">
      {text}{" "}
      <TiTick className="text-green-500 text-2xl bg-green-100 rounded-full" />
    </div>
  );
}

export default Modular;
