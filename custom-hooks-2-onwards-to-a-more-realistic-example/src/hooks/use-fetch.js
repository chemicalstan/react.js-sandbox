import { useState, useCallback } from "react";

const useHttp = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const httpRequest = useCallback(
    async (httpConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(httpConfig.url, {
          method: httpConfig.method || "GET",
          body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
          headers: httpConfig.headers || {},
        });

        if (!response.ok) throw new Error("Request failed!");

        const data = await response.json();

        callback(data, httpConfig.body);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }

      setIsLoading(false);
    },
    [callback]
  );

  return {
    isLoading,
    error,
    httpRequest,
  };
};

export default useHttp;

// const useFetch = async (action = "fetch", callback) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   setIsLoading(true);
//   setError(null);

//   if (action === "new") {
//     const data = await fetchHandler("POST", { text: taskText });

//     const generatedId = data.name; // firebase-specific => "name" contains generated id
//     const createdTask = { id: generatedId, text: taskText };
//     callback(createdTask);
//   } else if (action === "fetch") {
//     const data = await fetchHandler("GET");
//     callback(data);
//   }
//   setIsLoading(false);

//   return { isLoading, error };
// };

// const fetchHandler = async (method = "GET", body = {}) => {
//   const url =
//     "https://reactjs-sandbox-7ff49-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";
//   const fireBase = {
//     GET: (_) => {
//       return fetch(url);
//     },
//     POST: (body) => {
//       return fetch(url, {
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     },
//   };

//   const response = await fireBase[method](body);
//   if (!response.ok) throw new Error("Request failed!");
//   const result = await response.json();
//   return result;
// };

// export { fetchHandler };

// export default useFetch;
