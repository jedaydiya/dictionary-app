import { SpeakerSimpleHigh, SpeakerSimpleX } from "@phosphor-icons/react";
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
      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-serif font-bold px-2 py-2">
            {data.word}
          </h1>

          {sound ? (
            <>
              <button
                onClick={() => {
                  handleSound.play();
                }}
              >
                <SpeakerSimpleHigh size={40} color="#A3B18A" weight="fill" />
              </button>
            </>
          ) : (
            <SpeakerSimpleX size={40} color="#A3B18A" weight="fill" />
          )}
        </div>
        <p className="text-xl font-serif text-gray-500 px-2 py-2">
          {data.phonetic}
        </p>
        {data.meanings.map((item, i) => (
          <div key={i}>
            <p className="text-xl font-serif text-gray-500 px-2 py-2">
              {item.partOfSpeech}
            </p>
            {item.definitions.map((item, i) => (
              <div className="border-l-8 border-[#A3B18A]" key={i}>
                <p className="text-lg px-2 py-2">{item.definition}</p>

                <p className="px-2 py-2 italic">{item.example || "None"}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Definition;
