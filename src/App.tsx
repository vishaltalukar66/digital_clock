import { useEffect, useState } from "react"

export default function App() {

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <>

      <div className="min-h-screen grid items-center justify-center bg-slate-700">
        <div className="xl:text-8xl text-5xl font-bold font-mono text-gray-800 bg-gray-100 p-4 rounded-xl">
          <h1>
            {time.getHours().toString().padStart(2, '0')} : {time.getMinutes().toString().padStart(2, '0')} : {time.getSeconds().toString().padStart(2, '0')}
          </h1>
        </div>

      </div>
    </>
  )
}