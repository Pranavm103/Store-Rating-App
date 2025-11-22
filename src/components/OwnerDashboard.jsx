import React from 'react'
import { average } from './utils'

export default function OwnerDashboard({ ownerId, stores }) {
  const myStores = stores.filter(s => s.ownerId === ownerId)

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Your Stores</h2>
      {myStores.map(s => (
        <div key={s.id} className="bg-white p-4 rounded shadow mb-3">

          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-600">{s.address}</div>
            </div>
            <div>Avg Rating: {average(s.ratings) ?? '—'}</div>
          </div>

          <div className="mt-2">
            <h4 className="font-medium">Ratings:</h4>
            <ul className="list-disc pl-5">
              {s.ratings.length === 0
                ? <li>No ratings yet</li>
                : s.ratings.map((r,i)=> <li key={i}>Rating: {r}</li>)}
            </ul>
          </div>

        </div>
      ))}
    </div>
  )
}
