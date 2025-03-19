import { toast } from '@/components/toasts';
import type { AxiosError } from 'axios';
import { List } from 'antd';
import { ErrorResponse } from '@/apis/responses';

/**
 * Handle bad requests error
 * @param {AxiosError} error Axios error
 */
export function handleBadRequestError({
  response,
}: AxiosError<ErrorResponse>): void {
  if (response !== undefined)
    toast({
      title: response?.data.title,
      description: (
        <List>
          {Object.keys(response.data.errors).map((key: string) =>
            response.data.errors[key].map((err: string, index: number) => (
              <List.Item key={`Error_${key}_${index}`}>{err}</List.Item>
            )),
          )}
        </List>
      ),
      status: 'warning',
      isClosable: true,
    });
}
