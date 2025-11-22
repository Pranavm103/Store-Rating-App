import React, { useState } from 'react'

export default function SignupView({ onSignup, onSwitch, message }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [pw, setPw] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-6 rounded shadow">

        <h2 className="text-xl mb-4">Signup</h2>

        <input className="w-full p-2 border mb-2" placeholder="Full name"
               value={name} onChange={e=>setName(e.target.value)} />

        <input className="w-full p-2 border mb-2" placeholder="email"
               value={email} onChange={e=>setEmail(e.target.value)} />

        <textarea className="w-full p-2 border mb-2" placeholder="address"
                  value={address} onChange={e=>setAddress(e.target.value)} />

        <input className="w-full p-2 border mb-2" placeholder="password"
               type="password" value={pw} onChange={e=>setPw(e.target.value)} />

        <button className="w-full p-2 bg-green-600 text-white rounded"
                onClick={() => onSignup({ name, email, address, password: pw })}>
          Signup
        </button>

        <div className="mt-3 text-sm">
          Already have account? <button className="text-blue-600" onClick={onSwitch}>Login</button>
        </div>

        {message && <div className="mt-3 text-red-600">{message}</div>}
      </div>
    </div>
  )
}
