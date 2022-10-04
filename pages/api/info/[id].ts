import { NextApiRequest, NextApiResponse } from 'next';
import { info } from '../../../data';
import { Info } from '../../../interfaces';

type ResponseError = {
  message: string;
};

export default function InfoHandler(
  req: NextApiRequest,
  res: NextApiResponse<Info | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const filtered = info.filter((i) => i.id === id);

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res
        .status(404)
        .json({ message: `User with id: ${id} not found. Check data` });
}
