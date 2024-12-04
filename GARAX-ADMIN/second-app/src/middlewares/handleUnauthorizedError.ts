import type { AxiosError } from 'axios';

import { toast } from '../toast';

/**
 * Handle bad unauthorized error
 * @param {AxiosError} _error Axios errors
 */
export function handleUnauthorizedError(_error: AxiosError): void {
  toast({
    title: 'Lỗi',
    description: 'Phiên làm việc đã hết hạn, xin vui lòng đăng nhập lại.',
    status: 'error',
    isClosable: true,
  });
}
