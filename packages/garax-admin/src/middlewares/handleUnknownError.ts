import { toast } from '@/components/toasts';

export function handleUnknownError(): void {
  toast({
    title: 'Lỗi không xác định',
    description: 'Đã có lỗi không xác định xảy ra. Vui lòng thử lại',
    status: 'error',
    isClosable: true,
  });
}
