import { BASE } from "./bases";
import { ver_API, ROUTES_ACCESS } from "./constants";

export const BASE_HANDLE_REFRESH_TOKEN = () => `${BASE(ver_API, ROUTES_ACCESS)}/hanlde-refreshToken`;

export class AccessAPI {

}