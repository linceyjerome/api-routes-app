import useSWR from 'swr'
import PageComponent from '../components/page'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data } = useSWR('/api/info', fetcher)

  return (
    <>
      <div className=' w-full h-full my-auto' >
        <PageComponent key={data.id} info={data} />
      </div>

    </>
  )
}
