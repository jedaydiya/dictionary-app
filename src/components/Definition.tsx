import { SpeakerSimpleHigh } from "@phosphor-icons/react";

const Definition = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-serif font-bold px-2 py-2">Sample</h1>

          <SpeakerSimpleHigh size={40} color="#A3B18A" weight="fill" />
        </div>

        <p className="tex-2xl font-serif mt-1 text-gray-500 px-2 py-2">
          pos /sample /
        </p>
        <p className="mt-5 px-2 py-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          magnam cupiditate tempore rem unde sint nulla veritatis provident,
          aliquam perferendis.
        </p>

        <p className="mt-8 italic border-l-8 px-2 py-2 border-[#A3B18A]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quidem architecto beatae hic tenetur perferendis?
        </p>
      </div>
    </>
  );
};

export default Definition;
