import { NextApiRequest, NextApiResponse } from "next";
import { Band } from "@lyric-app/types/band";
import bands from "@lyric-app/data/mock_data/bands.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Band[]>
): void {
  const { bandName, genre } = req.query;

  let result = bands;

  // Filter by genre if it's specified and not "All"
  if (genre && genre !== "All" && typeof genre === "string") {
    result = result.filter((band) => band.genre === genre.toLowerCase());
  }

  // Filter by band name if it's specified and a string
  if (bandName && typeof bandName === "string") {
    const nameLower = bandName.toLowerCase();
    result = result.filter((band) =>
      band.band_name.toLowerCase().includes(nameLower)
    );
  }

  res.status(200).json(result);
}
