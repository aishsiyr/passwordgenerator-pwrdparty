import React, { useState } from "react";
import "./body.css";
import { FaCopy, FaMagic } from "react-icons/fa"; // Import the icons

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [includeCapital, setIncludeCapital] = useState(true);
  const [includeSmall, setIncludeSmall] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [copiedMessageVisible, setCopiedMessageVisible] = useState(false);

  const showCopiedMessage = () => {
    setCopiedMessageVisible(true);

    // Automatically hide the message after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setCopiedMessageVisible(false);
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  const copyToClipboard = () => {
    if (!password) {
      // If no password is generated, show an alert or handle it as needed
      alert("Generate a password first");
      return;
    }

    navigator.clipboard
      .writeText(password)
      .then(() => {
        showCopiedMessage(); // Show the copied message
      })
      .catch((error) => {
        console.error("Unable to copy password: ", error);
      });
  };

  const generatePassword = () => {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const copyToClipboard = () => {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert("Password copied!");
        })
        .catch((error) => {
          console.error("Unable to copy password: ", error);
        });
    };
    let characters = "";
    if (includeCapital) characters += capitalLetters;
    if (includeSmall) characters += smallLetters;
    if (includeNumber) characters += numbers;
    if (includeSymbol) characters += symbols;

    if (characters === "") {
      setPassword("Select at least one character type");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  const handleLengthChange = (event) => {
    const value = Math.min(Math.max(parseInt(event.target.value, 10), 5), 20); // Adjusted max length to 20
    setLength(value);
  };

  return (
    <div className="container mx-auto p-10 items-center max-w-xl">
      {" "}
      {/* Adjust max-w-xl */}
      <div className="glass-container rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-lilita  mb-6 text-pink-500">
          "Pass" the Good Times! 🎉
        </h1>
        <form>
          <div className="mb-4 relative">
            {" "}
            {/* Added relative for positioning */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Generated Password"
              value={password}
              readOnly
            />
            <FaCopy
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-purple-500 cursor-pointer"
              onClick={copyToClipboard}
            />
          </div>
          <div>
            {copiedMessageVisible && (
              <div className="text-black mb-3 ">Password copied!</div>
            )}
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-300 text-lg font-bold mb-2 font-manrope "
                htmlFor="length"
              >
                Password Length (5-20 characters):
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="length"
                type="number"
                min={5}
                max={20} // Adjusted max length to 20
                value={length}
                onChange={handleLengthChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-lg font-bold mb-2 font-manrope">
                Include Characters:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500">
                    <input
                      type="checkbox"
                      id="capital"
                      checked={includeCapital}
                      onChange={() => setIncludeCapital(!includeCapital)}
                      className="opacity-0 absolute w-6 h-6 cursor-pointer"
                    />
                    {/* You can add a checkmark icon inside the circle when the checkbox is checked */}
                    {includeCapital && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.293 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z"
                        />
                      </svg>
                    )}
                  </div>
                  <label className="ml-2" htmlFor="capital">
                    Capital Letters
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500">
                    <input
                      type="checkbox"
                      id="small"
                      checked={includeSmall}
                      onChange={() => setIncludeSmall(!includeSmall)}
                      className="opacity-0 absolute w-6 h-6 cursor-pointer"
                    />
                    {/* You can add a checkmark icon inside the circle when the checkbox is checked */}
                    {includeSmall && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.293 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z"
                        />
                      </svg>
                    )}
                  </div>
                  <label className="ml-2" htmlFor="small">
                    Small Letters
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500">
                    <input
                      type="checkbox"
                      id="number"
                      checked={includeNumber}
                      onChange={() => setIncludeNumber(!includeNumber)}
                      className="opacity-0 absolute w-6 h-6 cursor-pointer"
                    />
                    {/* You can add a checkmark icon inside the circle when the checkbox is checked */}
                    {includeNumber && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.293 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z"
                        />
                      </svg>
                    )}
                  </div>
                  <label className="ml-2" htmlFor="number">
                    Numbers
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500">
                    <input
                      type="checkbox"
                      id="symbol"
                      checked={includeSymbol}
                      onChange={() => setIncludeSymbol(!includeSymbol)}
                      className="opacity-0 absolute w-6 h-6 cursor-pointer"
                    />
                    {/* You can add a checkmark icon inside the circle when the checkbox is checked */}
                    {includeSymbol && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.293 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 11.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z"
                        />
                      </svg>
                    )}
                  </div>
                  <label className="ml-2" htmlFor="symbol">
                    Symbols
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="text-white font-lilita py-2 px-6 rounded focus:outline-none focus:shadow-outline flex items-center transition-transform transform hover:scale-105"
              type="button"
              onClick={generatePassword}
              style={{
                background: "linear-gradient(45deg, #6a3088, #a033ff)",
              }}
            >
              Generate <FaMagic className="ml-2" /> {/* Added FaMagic icon */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordGenerator;
