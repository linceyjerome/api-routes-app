import Link from 'next/link'
import { Info } from '../interfaces'

type InfoProps = {
  info: Info
}

export default function InfoComponent({ info }: InfoProps) {
  return (
    <li>
      <Link href="/info/[id]" as={`/info/${info.id}`}>
        <a>{info.name} {info.compagnie_name}</a>
      </Link>
    </li>
  )
}