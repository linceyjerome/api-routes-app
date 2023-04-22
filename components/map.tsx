import Image from 'next/image';

const Map = ({ address }) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  const size = '300x300';
  const zoom = 12;
  const markerColor = 'red';
  const encodedAddress = encodeURIComponent(address);

  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=${zoom}&size=${size}&markers=color:${markerColor}%7C${encodedAddress}&key=${apiKey}`;

  return (
    <div>
      <Image src={imageUrl} alt="Map Image" width={500} height={500} />
    </div>
  );
};

export default Map;
