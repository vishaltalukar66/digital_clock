import { SearchBar } from "./components/SearchBar";
import { Time } from "./components/Time";

export default function App() {

  return (
    <>

      <div className="min-h-screen max-w-screen grid items-center justify-center bg-slate-700">
        <div className="xl:text-8xl text-5xl font-mono text-gray-800 bg-gray-100 p-4 rounded-xl">
          <Time />
          <SearchBar />

        </div>


      </div>
    </>
  )
}