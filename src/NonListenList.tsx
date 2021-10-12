import { useCollection } from "@nandorojo/swr-firestore"
import React from "react"
import { Note } from "./types"

const NonListenList = () => {
  const { data } = useCollection<Note>("notes")
  // Adding a listener here makes the other listener work too
  // const { data } = useCollection<Note>("notes", { listen: true })

  return (
    <div>
      {data?.map((n, i) => (
        <div key={i}>{n.content}</div>
      ))}
    </div>
  )
}

export default NonListenList
