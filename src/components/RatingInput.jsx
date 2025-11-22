import React, { useState } from 'react'

export default function RatingInput({ onSubmit }) {
  const [v, setV] = useState(5)

  return (
    <div className="flex items-center gap-2">
      <select value={v} onChange={e=>setV(Number(e.target.value))}
              className="p-2 border rounded">
        {[1,2,3,4,5].map(n=> <option key={n} value={n}>{n}</option>)}
      </select>

      <button className="px-3 py-1 bg-blue-600 text-white rounded"
              onClick={() => onSubmit(v)}>
        Rate
      </button>
    </div>
  )
}
