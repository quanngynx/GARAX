import { useEffect, useState, Suspense } from "react";

function DelayedSuspense({ delay, fallback, children }) {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChildren(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Suspense fallback={fallback}>
      {showChildren ? children : fallback}
    </Suspense>
  );
}

export default DelayedSuspense;
