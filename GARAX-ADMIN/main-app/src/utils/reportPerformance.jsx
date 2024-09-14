
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

const reportPerformance = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }
}

export default reportPerformance;