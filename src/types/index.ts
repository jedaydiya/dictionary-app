export type wordType = {
  word: string;
  phonetic: string;
  phonetics: [
    {
      audio: string;
    }
  ];
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          example: string;
        }
      ];
    }
  ];
};
