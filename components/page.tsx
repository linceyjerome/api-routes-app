import { Info } from '../interfaces'
import KinderGardenList from './KindergardenList'
import React from "react";

type InfoProps = {
  info: Info[]
}

export default function pageComponent({ info }: InfoProps) {

  return (
    <>
      <KinderGardenList info={info} />
    </>
  )
}
