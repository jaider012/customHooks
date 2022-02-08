import { useEffect, useState, useRef } from "react";

const useFatch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({
            loading: false,
            data: data,
            error: null,
          });
        }
      });
  }, [url]);

  return state;
};

export default useFatch;
