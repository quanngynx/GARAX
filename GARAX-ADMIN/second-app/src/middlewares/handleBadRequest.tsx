import { toast } from '../toast';
import type { AxiosError } from 'axios';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { ErrorResponse } from '../apis/common/responses/error.response';

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
        <UnorderedList>
          {Object.keys(response.data.errors).map((key: string) =>
            response.data.errors[key].map((err: string, index: number) => (
              <ListItem key={`Error_${key}_${index}`}>{err}</ListItem>
            )),
          )}
        </UnorderedList>
      ),
      status: 'warning',
      isClosable: true,
    });
}
