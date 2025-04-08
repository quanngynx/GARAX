import { v7 as uuidv7 } from 'uuid';

let seq = 0;
const MAX_SEQ = 16383; // 2^14 - 1

/**
 *
 * @returns unique id version 7 - better version 4
 */
export const getUniqueId = (): string => uuidv7(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

/**
 *
 * @returns unique id version 7 - better version 4 -
 */
export const getUniqueIdOptions = (length: number): string => {
  seq = (seq + 1) & MAX_SEQ;
  return uuidv7({
    seq: seq
  })
    .replace(/-/g, '')
    .substring(0, length);
};
