import useSWR from 'swr'
import InfoComponent from '../components/Info'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/info', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div className='flex w-full h-full my-auto' >
        <InfoComponent key={data.id} info={data} />
      </div>

    </>
  )
}
