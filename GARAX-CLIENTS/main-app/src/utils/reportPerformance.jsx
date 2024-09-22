
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

const reportPerformance = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    }
}

export default reportPerformance;