import { Dispatch, SetStateAction, useEffect, useState } from "react";

import useEventListener from "./useEventListener";

type SetValue<T> = Dispatch<SetStateAction<T>>;

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const readStorage = (): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const setStorage: SetValue<T> = (value) => {
    try {
      const newValue = value instanceof Function ? value(state) : value;

      window.localStorage.setItem(key, JSON.stringify(newValue));

      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      return error;
    }
  };

  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    setState(readStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStorage(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const handleStorageChange = () => {
    setState(readStorage());
  };

  useEventListener("storage", handleStorageChange);

  useEventListener("local-storage", handleStorageChange);

  return [state, setState];
}

export default useLocalStorage;

function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch (error) {
    return undefined;
  }
}
