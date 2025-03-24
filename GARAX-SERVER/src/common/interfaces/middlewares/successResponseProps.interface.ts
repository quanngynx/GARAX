import { ErrorResponseProps } from "./errorResponseProps.interface";

export interface SuccessResponseProps
extends ErrorResponseProps {
	reasonStatusCode?: string;
	metadata: any;
}
