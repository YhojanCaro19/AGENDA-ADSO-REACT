import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (email === "admin@sena.com" && password === "1234") {
      login()
      navigate("/")
    } else {
      setError("Correo o contraseña incorrectos. Intenta nuevamente.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Logo / encabezado */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-14 w-14 rounded-3xl bg-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4">
            A
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Proyecto ABP</p>
          <h1 className="text-xl font-bold text-slate-50 mt-1">Agenda ADSO – ReactJS</h1>
          <p className="text-xs text-slate-400 mt-1">SENA CTMA</p>
        </div>

        {/* Tarjeta */}
        <div className="bg-white/95 rounded-3xl shadow-2xl border border-slate-100 px-7 py-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">Iniciar sesión</h2>
          <p className="text-sm text-gray-500 mb-6">Ingresa tus credenciales para continuar</p>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors duration-200 mt-2"
            >
              Iniciar sesión
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-6">
          SENA CTMA · ADSO · Desarrollo Web ReactJS
        </p>

      </div>
    </div>
  )
}