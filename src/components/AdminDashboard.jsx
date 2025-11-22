import React, { useState } from 'react'
import StatCard from './StatCard'
import { average } from './utils'

export default function AdminDashboard({ users, stores }) {
  const [filter, setFilter] = useState('')

  const filteredUsers = users.filter(u =>
    (u.name + u.email + u.address + u.role).toLowerCase().includes(filter.toLowerCase())
  )

  const filteredStores = stores.filter(s =>
    (s.name + s.address).toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <section className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Users" value={users.length} />
        <StatCard title="Total Stores" value={stores.length} />
        <StatCard title="Total Ratings" value={stores.reduce((acc,s)=>acc+s.ratings.length,0)} />
      </section>

      <input className="w-full p-2 border mb-4"
             placeholder="Search Name / Email / Role"
             value={filter} onChange={e=>setFilter(e.target.value)} />

      <div className="grid grid-cols-2 gap-6">
        {/* Users */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Users</h3>
          <table className="w-full text-sm">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Address</th><th>Role</th></tr>
            </thead>
            <tbody>
              {filteredUsers.map(u=> (
                <tr key={u.id}>
                  <td>{u.name}</td><td>{u.email}</td><td>{u.address}</td><td>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stores */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Stores</h3>
          <table className="w-full text-sm">
            <thead>
              <tr><th>Name</th><th>Address</th><th>Average</th></tr>
            </thead>
            <tbody>
              {filteredStores.map(s=> (
                <tr key={s.id}>
                  <td>{s.name}</td><td>{s.address}</td><td>{average(s.ratings) ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
