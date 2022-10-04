import useSWR from 'swr'
import InfoComponent from '../components/Info'
import { Info } from '../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/info', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <h1>
        les noms
      </h1>

      <ul>
        {data.map((i: Info) => (
          <InfoComponent key={i.id} info={i} />
        ))}
      </ul>
    </>
  )
}