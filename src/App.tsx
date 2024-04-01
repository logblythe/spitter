import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

const updateArray = (
  inputArray: number[],
  setInputArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const lastItem = inputArray[inputArray.length - 1];
  const newItem = lastItem + 1;
  setInputArray([...inputArray, newItem]);
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [durationInMilliseconds, setDurationInMilliseconds] = useState(1000);

  const [firstArray, setFirstArray] = useState<number[]>([1]);
  const [secondArray, setSecondArray] = useState<number[]>([101]);
  const [thirdArray, setThirdArray] = useState<number[]>([201]);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      if (firstArray[firstArray.length - 1] < 100) {
        updateArray(firstArray, setFirstArray);
      }
      if (secondArray[secondArray.length - 1] < 200) {
        updateArray(secondArray, setSecondArray);
      }
      if (thirdArray[thirdArray.length - 1] < 300) {
        updateArray(thirdArray, setThirdArray);
      }
    }, durationInMilliseconds);
    return () => {
      clearInterval(timeoutId);
    };
  }, [durationInMilliseconds, firstArray, secondArray, thirdArray]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(input);
  };

  const handleSave = () => {
    setDurationInMilliseconds(Number(inputValue));
    setFirstArray([1]);
    setSecondArray([101]);
    setThirdArray([201]);
  };

  return (
    <div>
      {/**Input and Button Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "sticky",
          top: 4,
        }}
      >
        <input
          onChange={handleInputChange}
          value={inputValue}
          placeholder="milliseconds"
          type="number"
        />
        <button onClick={handleSave}>Save</button>
      </div>
      {/**Input and Button Section */}

      {/**List Section */}
      <div>
        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            VERTICAL LIST
          </p>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            {firstArray.map((item) => {
              return (
                <li
                  key={item}
                  style={{
                    padding: 8,
                    margin: 8,
                    background: "gray",
                    borderRadius: 16,
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            HORIZONTAL LIST
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              listStyleType: "none",
              width: 800,
              overflow: "auto",
              paddingBottom: "12px",
            }}
          >
            {secondArray.map((item) => {
              return (
                <li
                  style={{
                    padding: "24px",
                    background: "gray",
                    margin: 2,
                    borderRadius: 16,
                    width: "80px",
                    flexShrink: 0,
                  }}
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </div>
        </div>

        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            VERTICAL LIST
          </p>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            {thirdArray.map((item) => {
              return (
                <li
                  key={item}
                  style={{
                    padding: 8,
                    margin: 8,
                    background: "gray",
                    borderRadius: 16,
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/**List Section */}
    </div>
  );
}

export default App;
