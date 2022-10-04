import { NextApiResponse, NextApiRequest } from 'next';
import { info } from '../../../data';
import { Info } from '../../../interfaces';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Info[]>
) {
  return res.status(200).json(info);
}
