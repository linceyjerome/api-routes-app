import useSWR from 'swr'
import PageContent from '../components/page'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data } = useSWR('/api/info', fetcher)

  return (
    <>
      <div className=' w-full h-full mb-auto' >
        <PageContent key={data.id} info={data} />
      </div>
    </>
  )
}
