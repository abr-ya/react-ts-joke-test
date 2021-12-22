import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";
import axios, { AxiosResponse } from "axios";

interface IJoke {
  error: boolean;
  category: string;
  type: string;
  joke: string;
}

const App = () => {
  const [data, setData] = useState<IJoke | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMount = true;
    axios
      .get("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res: AxiosResponse<IJoke>) => {
        // console.log(res.data);
        if (isMount) setData(res.data);
      })
      .catch((err) => {
        if (isMount) console.log(err);
      })
      .finally(() => {
        if (isMount) setIsLoading(false);
      });

    return () => {
      isMount = false;
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="info">
          <div className="info__cat">
            {data?.category ? `category: ${data.category}` : "bad category"}
          </div>
          <div className="info__joke">
            {data?.joke ? `joke: ${data?.joke}` : "bad data"}
          </div>
        </div>
      )}
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
