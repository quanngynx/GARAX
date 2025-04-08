import type { AxiosError } from 'axios';

import { toast } from '@/components/toasts';

/**
 * Handle bad unauthorized error
 * @param {AxiosError} error Axios errors
 */
export function handleUnauthorizedError(error: AxiosError): void {
  toast({
    title: 'Lỗi',
    description: 'Phiên làm việc đã hết hạn, xin vui lòng đăng nhập lại.::' + error.message,
    status: 'error',
    isClosable: true,
  });
}
