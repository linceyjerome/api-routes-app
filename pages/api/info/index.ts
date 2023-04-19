import { NextApiResponse, NextApiRequest } from 'next';
import axios from 'axios';
import { Info } from '../../../interfaces';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Info[]>
) {
  try {
    const response = await axios.get('http://localhost:5000/api/info');
    const data = response.data;
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json([]);
  }
}
