import { useState, useEffect } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) : 
[T, (newValue: T | ((prevValue: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  // Sync state with localStorage changes
  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        const newValue = e.newValue ? JSON.parse(e.newValue) : defaultValue;
        setValue(newValue);
      }
    };

    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  // Update localStorage and state
  const setValueInLocalStorage = (newValue: T | ((prevValue: T) => T)) => {
    setValue((currentValue: T) => {
      const result = typeof newValue === 'function' ? (newValue as (prevValue: T) => T)(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
