import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setLoading(false);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
