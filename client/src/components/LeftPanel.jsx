import Chat from "./Chat";

/* eslint-disable react/prop-types */
const LeftPanel = ({ username, guesses, actualWord,socket }) => {
  const calculateCommonLetters = (guess, actualWord) => {
    const actualLetters = actualWord.toUpperCase().split("");
    const guessLetters = guess.toUpperCase().split("");
    let common = 0;

    for (
      let i = 0;
      i < Math.min(actualLetters.length, guessLetters.length);
      i++
    ) {
      if (guessLetters[i] === actualLetters[i]) {
        common++;
      }
    }

    return common;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl text-lg w-full mb-4">
        <h2 className="font-bold text-xl mb-4">{username}</h2>
        <p className="mb-4">Guesses | # in Common</p>
        <div className="bg-gray-100 p-4 rounded overflow-auto" style={{ maxHeight: '300px' }}>
          {guesses.map((guess, index) => (
            <p key={index} className="mb-2">
              {guess} | {calculateCommonLetters(guess, actualWord)}
            </p>
          ))}
        </div>
      </div>
      <Chat socket={socket}/>
    </div>
  );
};

export default LeftPanel;
