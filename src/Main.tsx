import { fuego, useCollection } from "@nandorojo/swr-firestore"
import React, { useState } from "react"
import NonListenList from "./NonListenList"
import { Note } from "./types"

const Main = () => {
  const { data, add } = useCollection<Note>("notes", { listen: true })

  const [newNote, setNewNote] = useState("")
  const submitNewNote = () => {
    console.log("Adding", newNote)
    add({ content: newNote })
    setNewNote("")

    /**
     * Notes on the effect: since the NonListenList doesn't listen to the collection,
     * neither will update when we trigger this. Interestingly, if you make a change and
     * the code updates with live reloading, then the listener works again.
     */
  }

  return (
    <div>
      <div>swr-firestore listening bug demo</div>

      <hr />
      <p>Listening</p>
      <div>
        {data?.map((n, i) => (
          <div key={i}>{n.content}</div>
        ))}
      </div>
      <hr />
      <p>Non-listening</p>
      <NonListenList />
      <hr />

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            submitNewNote()
          }}
        >
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button type="submit">Add note</button>
        </form>
      </div>
    </div>
  )
}

export default Main
