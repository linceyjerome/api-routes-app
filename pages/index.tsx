import useSWR from 'swr'
import InfoComponent from '../components/Info'
import React, { useState } from "react";
import { Info } from '../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/info', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  function getCompagnieName() {
    return data.map((i: Info) => <option key={i.id} value={i.name}>{i.name}</option>)
  }

  return (
    <>
      <h1 className="text-3xl ">
        Hello world!
      </h1>

      <div >
        <label htmlFor="price" className="">liste</label>
        <div className="">
          <div className="">
            <select id={data.id} className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              <option value="choose" disabled >-- select une ville --</option>
              {getCompagnieName()}
            </select>
          </div>
        </div>
      </div>

      <ul>
        {data.map((i: Info) => (
          <InfoComponent key={i.id} info={i} />
        ))}
      </ul>
    </>
  )
}
