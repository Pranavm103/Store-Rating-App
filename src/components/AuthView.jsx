import React, { useState } from 'react'

export default function AuthView({ onLogin, onSwitch, message }) {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl mb-4">Login</h2>

        <input className="w-full p-2 border mb-2" placeholder="email"
               value={email} onChange={e=>setEmail(e.target.value)} />

        <input className="w-full p-2 border mb-2" placeholder="password"
               type="password" value={pw} onChange={e=>setPw(e.target.value)} />

        <button className="w-full p-2 bg-blue-600 text-white rounded"
                onClick={() => onLogin({ email, password: pw })}>
          Login
        </button>

        <div className="mt-3 text-sm">
          Don't have account? <button className="text-blue-600" onClick={onSwitch}>Signup</button>
        </div>

        {message && <div className="mt-3 text-red-600">{message}</div>}
      </div>
    </div>
  )
}
