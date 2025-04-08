import { useEffect, useState, Suspense } from "react";
import { delaySuspenseInterface } from '@/interfaces/delaySuspense'
function DelayedSuspense({ delay, fallback, children } : delaySuspenseInterface) {
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
