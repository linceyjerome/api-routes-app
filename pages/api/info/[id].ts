import { NextApiRequest, NextApiResponse } from 'next';

import { Info } from '../../../interfaces';

type ResponseError = {
  message: string;
};

export default async function InfoHandler(
  req: NextApiRequest,
  res: NextApiResponse<Info | ResponseError>
) {
  const { query } = req;
  const { id } = query;

  try {
    // Fetch data from external Express.js API
    const response = await fetch(`http://localhost:5000/api/info/${id}`);
    const data = await response.json();

    if (response.status === 200) {
      // If data is retrieved successfully
      return res.status(200).json(data);
    } else {
      // If data is not found
      return res
        .status(404)
        .json({ message: `Item with id: ${id} not found. Check data` });
    }
  } catch (error) {
    // If an error occurs during fetching
    return res
      .status(500)
      .json({ message: 'Failed to fetch data from external API' });
  }
}
