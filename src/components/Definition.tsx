import { Play } from "@phosphor-icons/react";
import { wordType } from "../types";
import { useState } from "react";
type Props = {
  data: wordType;
  audio: HTMLAudioElement | null;
};
const Definition = ({ data, audio }: Props) => {
  const sound = data.phonetics[0].audio;
  const handleSound = new Audio(sound);

  return (
    <>
      <div className="py-8 px-10 border-white">
        <div className="w-full flex justify-between">
          <h1 className="text-white lg:text-8xl">{data.word}</h1>
          <div className="px-2 py-10">
            <button
              onClick={() => {
                handleSound.play();
              }}
              className="border-white border-2 rounded-3xl flex gap-2 items-center px-4 py-2"
            >
              <Play size={24} color="#c7cebb" weight="duotone" />
              <p className="text-white text-center">{data.phonetic}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-10xl mt-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <li className=" col-start-1 row-start-1 row-span-5 border-white border-2 border-t-2  border-l-0 shadow-xl">
            <div className="h-24">
              {data.meanings.map((item, i) => (
                <div key={i} className="py-8 px-10 border-b-2">
                  <p className="py-8 px-10 text-white text-center">
                    {item.partOfSpeech}
                  </p>
                </div>
              ))}
            </div>
          </li>
          <li className="col-span-2 border-white border-2 border-t-2 border-l-0 shadow-xl">
            <div className="h-fit">
              {data.meanings.map((item, i) => (
                <div key={i}>
                  {item.definitions.map((item, i) => (
                    // <li className="col-span-2 border-white border-2 border-t-0  shadow-xl">
                    <>
                      <div className="border-b-2 py-8 px-10">
                        <p className="text-4xl px-2 py-2 text-white">
                          {item.definition}
                        </p>
                        <p className="px-2 py-2 italic text-white">
                          {item.example || "None"}
                        </p>
                        {/* // </li> */}
                      </div>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Definition;
