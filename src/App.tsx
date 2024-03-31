import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstArray, setFirstArray] = useState<number[]>([0]);
  const [secondArray, setSecondArray] = useState<number[]>([101]);
  const [thirdArray, setThirdArray] = useState<number[]>([201]);

  const updateFirstArray = useCallback(() => {
    const lastItem = firstArray[firstArray.length - 1];
    const newItem = lastItem + 1;
    setFirstArray((firstArray) => [...firstArray, newItem]);
  }, [firstArray]);

  const updateSecondArray = useCallback(() => {
    const lastItem = secondArray[secondArray.length - 1];
    const newItem = lastItem + 1;
    setSecondArray((secondArray) => [...secondArray, newItem]);
  }, [secondArray]);

  const updateThirdArray = useCallback(() => {
    const lastItem = thirdArray[thirdArray.length - 1];
    const newItem = lastItem + 1;
    setThirdArray((thirdArray) => [...thirdArray, newItem]);
  }, [thirdArray]);

  useEffect(() => {
    setTimeout(() => {
      if (firstArray[firstArray.length - 1] < 100) {
        updateFirstArray();
      }
    }, 100);
  }, [firstArray, updateFirstArray]);

  useEffect(() => {
    setTimeout(() => {
      if (secondArray[secondArray.length - 1] < 200) {
        updateSecondArray();
      }
    }, 100);
  }, [secondArray, updateSecondArray]);

  useEffect(() => {
    setTimeout(() => {
      if (thirdArray[thirdArray.length - 1] < 300) {
        updateThirdArray();
      }
    }, 100);
  }, [thirdArray, updateThirdArray]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red",
        }}
      >
        first vertical
        <ul>
          {firstArray.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "blue",
        }}
      >
        {secondArray.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        second vertical
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "green",
        }}
      >
        {thirdArray.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
