"use client"

import { Check } from "lucide-react"
import "../assets/form.css"

function SuccessScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030214] bg-grid-pattern bg-[url('../../assets/bg.png')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 rounded-2xl border gradient-border backdrop-blur-sm shadow-xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-3xl font-bold text-white">Cre8Fi</h1>

          <div className="relative">
            <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-[#00ff1e]">
              <Check className="w-12 h-12 text-[#00ff1e] stroke-[3]" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">Completed</h2>
            <p className="text-white/80">You've successfully updated your password</p>
          </div>

          <button
            
            className="w-full py-3 px-4 bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] hover:bg-[#8930e0] text-white font-medium rounded-lg transition duration-200"
            onClick={() => alert("Button clicked!")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  )
}
export default  SuccessScreen
