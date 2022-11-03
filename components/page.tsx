

import { Info } from '../interfaces'
import KinderGardenList from './kindergardenList'
import React, { useState } from "react";
const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json())
type InfoProps = {
  info: Info[]
}

export default function pageComponent({ info }: InfoProps) {

  return (
    <>
      <KinderGardenList info={info} />
    </>)
}
