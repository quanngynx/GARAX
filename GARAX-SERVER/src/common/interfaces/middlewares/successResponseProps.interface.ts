/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorResponseProps } from './errorResponseProps.interface';

export interface SuccessResponseProps extends ErrorResponseProps {
  reasonStatusCode?: string;
  metadata: any;
}
