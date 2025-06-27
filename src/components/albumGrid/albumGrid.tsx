import { Band } from "@lyric-app/types/band";
import Card from "@lyric-app/components/card/card";

const AlbumGrid = ({ bandsList }: { bandsList: Band[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {bandsList.map((band) => (
        <Card
          key={band.id}
          title={band.band_name}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve"
          album={band.album}
          imageUrl={`/sources/im${band.id}.png`}
          fallbackUrl="/sources/default.png"
        />
      ))}
    </div>
  );
};

export default AlbumGrid;
