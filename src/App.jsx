import React, { useState, useEffect } from 'react'
import AuthView from './components/AuthView'
import SignupView from './components/SignupView'
import AdminDashboard from './components/AdminDashboard'
import UserStoreList from './components/UserStoreList'
import OwnerDashboard from './components/OwnerDashboard'
import { initialStores, initialUsers } from './components/utils'

export default function App() {
  const [stores, setStores] = useState(initialStores)
  const [users, setUsers] = useState(initialUsers)
  const [authUser, setAuthUser] = useState(null)
  const [view, setView] = useState('login')
  const [message, setMessage] = useState('')

  const handleLogin = ({ email, password }) => {
    const u = users.find(x => x.email === email && x.password === password)
    if (!u) { setMessage('Invalid credentials'); return }
    setAuthUser({ id: u.id, role: u.role, name: u.name })
    setView('dashboard')
  }

  const handleSignup = ({ name, email, address, password }) => {
    const newUser = { id: Date.now(), name, email, address, role: 'user', password }
    setUsers(prev => [...prev, newUser])
    setMessage('Signup successful')
    setView('login')
  }

  const submitRating = (storeId, userId, rating) => {
    setStores(prev => prev.map(s => s.id === storeId ? { ...s, ratings: [...s.ratings, rating] } : s))
    setMessage('Rating submitted')
  }

  const modifyRating = (storeId) => {
    setStores(prev => prev.map(s => s.id === storeId ? { ...s, ratings: [...s.ratings.slice(0,-1), 5] } : s))
    setMessage('Rating modified')
  }

  if (!authUser && view === 'login')
    return <AuthView onLogin={handleLogin} onSwitch={() => setView('signup')} message={message} />

  if (!authUser && view === 'signup')
    return <SignupView onSignup={handleSignup} onSwitch={() => setView('login')} message={message} />

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">StoreRatings App</h1>
        <div className="flex items-center gap-4">
          <div>Signed in as <strong>{authUser.name}</strong> ({authUser.role})</div>
          <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => setAuthUser(null)}>
            Logout
          </button>
        </div>
      </header>

      <main>
        {authUser.role === 'admin' && (
          <AdminDashboard users={users} stores={stores} />
        )}

        {authUser.role === 'user' && (
          <UserStoreList stores={stores} onSubmitRating={submitRating} onModifyRating={modifyRating} />
        )}

        {authUser.role === 'owner' && (
          <OwnerDashboard ownerId={authUser.id} stores={stores} />
        )}

        {message && <div className="mt-4 text-green-700">{message}</div>}
      </main>
    </div>
  )
}
