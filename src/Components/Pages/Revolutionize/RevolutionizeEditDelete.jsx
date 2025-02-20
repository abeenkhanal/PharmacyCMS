import React from 'react'
import { IoPencil, IoTrash } from "react-icons/io5";

const RevolutionizeEditDelete = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <button
        onClick={() => document.getElementById("editModal").style.display = "flex"}
        className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition">
        <IoPencil />
        Edit
      </button>
      <button
        onClick={() => document.getElementById("deleteModal").style.display = "flex"}
        className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition">
        <IoTrash />
        Delete
      </button>
    </div>
  )
}

export default RevolutionizeEditDelete
