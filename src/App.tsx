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
    }, 500);
  }, [firstArray, updateFirstArray]);

  useEffect(() => {
    setTimeout(() => {
      if (secondArray[secondArray.length - 1] < 200) {
        updateSecondArray();
      }
    }, 500);
  }, [secondArray, updateSecondArray]);

  useEffect(() => {
    setTimeout(() => {
      if (thirdArray[thirdArray.length - 1] < 300) {
        updateThirdArray();
      }
    }, 500);
  }, [thirdArray, updateThirdArray]);

  return (
    <>
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
                background: "gray",
                margin: 2,
                borderRadius: 16,
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
