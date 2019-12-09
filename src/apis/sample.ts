import { AbortController } from 'abort-controller';
import { RequestInitCustom } from '../types';

export const ROOT_URL = 'http://localhost:3000/api';

export const sample = async (
  body: object | null,
  signal?: AbortController['signal'] | null,
): Promise<Response> => {
  if (!body) {
    throw new Error('No request object');
  }

  const fetchOption: RequestInitCustom = {
    signal,
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(body),
  };

  try {
    const res: Response = await fetch(`${ROOT_URL}`, fetchOption);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
