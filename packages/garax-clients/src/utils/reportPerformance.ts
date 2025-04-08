
import { onCLS, onINP, onLCP, onFCP, onTTFB, CLSMetric, FCPMetric, INPMetric, LCPMetric, TTFBMetric } from 'web-vitals';

const reportPerformance = (onPerfEntry: { (...data: unknown[]): void; (message?: unknown, ...optionalParams: unknown[]): void; (metric: CLSMetric): void; (metric: INPMetric): void; (metric: FCPMetric): void; (metric: LCPMetric): void; (metric: TTFBMetric): void; }) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    }
}

export default reportPerformance;