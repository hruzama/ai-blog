// app/components/NewsletterForm.tsx
'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      // TODO: odešli na /api/newsletter (Route Handler) nebo externí službu
      await new Promise((r) => setTimeout(r, 600))
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        type="email"
        required
        placeholder="tvuj@email.cz"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ flex: 1, padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button type="submit" style={{ padding: '10px 16px', background: '#111827', color: '#fff', borderRadius: 6 }}>
        Přihlásit
      </button>
      {status === 'ok' && <span style={{ color: 'green' }}>Díky, zkontroluj e‑mail.</span>}
      {status === 'error' && <span style={{ color: 'crimson' }}>Zkus to znovu.</span>}
    </form>
  )
}
