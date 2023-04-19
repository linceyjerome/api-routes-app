import { Info } from '../interfaces'
import Home from './Home'
import React from "react";

type InfoProps = {
  info: Info[]
}

export default function pageComponent({ info }: InfoProps) {

  return (
    <>
      <Home info={info} />
    </>
  )
}
