import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Info() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/info/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}
