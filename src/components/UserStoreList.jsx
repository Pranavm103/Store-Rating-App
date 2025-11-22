import React, { useState } from 'react'
import RatingInput from './RatingInput'
import { average } from './utils'

export default function UserStoreList({ stores, onSubmitRating, onModifyRating }) {
  const [q, setQ] = useState('')

  const filtered = stores.filter(s =>
    (s.name + s.address).toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div>
      <input className="w-full p-2 border mb-4"
             placeholder="Search Stores"
             value={q} onChange={e=>setQ(e.target.value)} />

      <div className="grid gap-4">
        {filtered.map(s => (
          <div key={s.id} className="bg-white p-4 rounded shadow flex justify-between items-center">

            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-600">{s.address}</div>
              <div className="mt-1 text-sm">Avg Rating: {average(s.ratings) ?? 'No ratings yet'}</div>
            </div>

            <div className="flex items-center gap-2">
              <RatingInput onSubmit={(r)=>onSubmitRating(s.id, 2, r)} />
              <button className="px-2 py-1 border rounded"
                      onClick={() => onModifyRating(s.id)}>
                Modify
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
