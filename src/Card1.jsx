import React from "react";
import { TiTick } from "react-icons/ti";

const Card1 = () => {
  return (
    <>
      <div className="h-screen  px-10 flex flex-col">
        <p className="font-semibold text-black text-5xl  py-">
          How to use ?
        </p>
        <div className="bg-gray-100 border h-full flex flex-row gap-10 p-8 rounded-lg border-solid border-2 border-gray-200 my-5">
          <div className=" w-1/2">
            <div className="h-auto  px-3">
              <div className=" h-auto w-auto">
                <button className=" border-s-amber-950 border-1 font-normal text-amber-950 rounded-lg bg-yellow-200 py-1 px-3">
                  Step 1
                </button>
              </div>
            </div>

            <div className="h-auto  flex flex-col">
              <div className="w-full h-auto  text-black font-semibold text-4xl text-left p-2 px-4 tracking-wide leading-relaxed">
                Template straight from our website
              </div>

              <div className="w-full h-auto  text-black font-medium text-1xl text-left p-2 px-4 tracking-wide">
                Copy and paste template Code from our website into your Code
                editor . Customise the template according to your
                requirements.🔗
              </div>
            </div>

            <div className="h-2/4 ">
              <div class="grid grid-rows-3 grid-flow-col gap-4 p-3">
                <div className="  flex flex-row text- p-2 gap-2">
                  <TiTick className="text-2xl" />
                  <p className="  hover:underline decoration-1 underline-offset-4 decoration-sky-500">
                    No Plagraism
                  </p>
                </div>
                <div className="  flex flex-row text- p-2 gap-2">
                  <TiTick className="text-2xl" />
                  <p className="  hover:underline decoration-1 underline-offset-4 decoration-sky-500">
                    OOPS supported
                  </p>
                </div>
                <div className="  flex flex-row text- p-2 gap-2">
                  <TiTick className="text-2xl" />
                  <p className="  hover:underline decoration-1 underline-offset-4 decoration-sky-500">
                    Customized easily
                  </p>
                </div>
                <div className="  flex flex-row text- p-2 gap-2">
                  <TiTick className="text-2xl" />
                  <p className="  hover:underline decoration-1 underline-offset-4 decoration-sky-500">
                    Offline Support
                  </p>
                </div>
                <div className="  flex flex-row text- p-2 gap-2">
                  <TiTick className="text-2xl" />
                  <p className="  hover:underline decoration-1 underline-offset-4 decoration-sky-500">
                    Time saving
                  </p>
                </div>
                <div className="  flex flex-row text- p-2 gap-2">
                  <TiTick className="text-2xl" />
                  <p className="  hover:underline decoration-1 underline-offset-4 decoration-sky-500">
                    Chat Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Card1;
