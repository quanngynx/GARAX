'use strict';
import { Response } from 'express';
import { SuccessResponseProps } from "@/common/interfaces";
import { ReasonPhrases, StatusCodes } from "@/common/utils";

export interface OKProps {
	message?: string;
	status?: number;
	reasonStatusCode?: string;
	metadata?: object;
}

export interface CreatedProps {
	message?: string;
	status?: number;
	reasonStatusCode?: string;
	metadata?: object;
	option?: object;
}

export class SuccessResponse {
	message: string;
	status: number;
	metadata: object;

	constructor({
		message,
		status = StatusCodes.default.OK,
		reasonStatusCode = ReasonPhrases.default.OK,
		metadata = {},
	}: SuccessResponseProps) {
		(this.message = message ?? reasonStatusCode), (this.status = status);
		this.metadata = metadata;
	}
	send(res: Response, _headers: object = {}) {
		return res.status(this.status).json(this);
	}
}

export class OK extends SuccessResponse {
	constructor({ message, metadata }: OKProps) {
		super({ message, metadata });
	}
}

export class CREATED extends SuccessResponse {
	option?: object;

	constructor({
		message,
		status = StatusCodes.default.CREATED,
		reasonStatusCode = ReasonPhrases.default.CREATED,
		metadata,
		option = {},
	}: CreatedProps) {
		super({ message, status, reasonStatusCode, metadata });
		this.option = option;
	}
}
