import React, { useState } from "react";

const App = () => {

    const [play, setplay] = useState(false);

    const handlePlayPause = () => {
        setplay(!play);
    };

    return (
        <div className='h-screen relative w-full bg-cover bg-center text-white font-[dmsans] bg-[url("/images/bg.png")]'>
          <div className={`background fixed h-full w-full top-0 left-0 ${play ? "" : "opacity-0"}`}>
            <video src="/vidbg.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
          </div>
          <div className="absolute z-40 w-full h-full bg-[url('/images/covervint.png')] bg-[length:160%] bg-[position:40%_50%]"></div>
            <div className="relative z-50 top-0 left-0 w-full h-full">
              <div className="nav py-12 px-20 flex justify-between">
                <h1 className="font-[eight] text-2xl tracking-wider">
                    Peace Studio
                </h1>
                <ul className="flex gap-12 ">
                    {["Thought", "Process", "Work", "About"].map(
                        (item, index) => (
                            <li key={index} className="text-lg">
                                {item}
                            </li>
                        )
                    )}
                </ul>
                <button className="bg-white text-lg rounded-[14px] px-4.5 py-2.5 text-black cursor-pointer" onClick={handlePlayPause}>
                    Experience This
                </button>
            </div>
            {/* Middle Section - Services */}
<div className="absolute top-1/3 left-0 w-full -translate-y-1/2 px-20 flex justify-between items-center">
  {[
    { id: "Ⅰ", text: "Story · Driven Websites" },
    { id: "Ⅱ", text: "Motion & Scroll Design" },
    { id: "Ⅲ", text: "Brand Identity Systems" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-3 cursor-default opacity-0 animate-blur-sync"
    >
      <span className="font-bold text-[17px]">{item.id}</span>
      <span className="text-[17px] uppercase tracking-wide">{item.text}</span>
    </div>
  ))}
</div>



            {/* Bottom Section */}
            <div className="absolute bottom-12 w-full px-20 flex justify-between items-end">
                <div className="text-lg text-white/70">scroll down</div>
                <div className="max-w-4xl text-right">
                    <h1 className="font-[eight] text-7xl leading-[1.1] mb-4 ">
                        Where thoughts gather before becoming ideas.
                    </h1>
                    <p className="text-white/60 text-xl leading-tight ml-auto max-w-lg font-regular">
                        In The Quiet Space Between{" "}
                        <span className="text-white font-medium">Emotion</span>{" "}
                        And Logic, <br />
                        We Shape Experiences That Stay With You.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default App;
