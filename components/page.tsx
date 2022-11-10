import { Info } from '../interfaces'
import List from './List'

import Home from './Home'
import React from "react";

type InfoProps = {
  info: Info[]
}

export default function pageComponent({ info }: InfoProps) {

  return (
    <>
      {/* <Home /> */}
      <List info={info} />
    </>
  )
}
