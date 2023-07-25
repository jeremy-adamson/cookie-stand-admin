
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

        <header className = "flex bg-green-500 p-3 text-xl font-bold">
          <h1>Cookie Stand Admin</h1>
        </header>

      <br></br>
      <main className="flex flex-col items-center">
        <form className="flex-col text-center items-center w-3/4 p-2 bg-green-200 rounded-lg">
          <label className="text-lg font-bold">Create Cookie Stand</label>
          <div className="flex items-">
            <label>Location:</label>
            <input className="flex w-2/3 pl-1 "></input>
          </div>
          <div className="flex text-center p-3 items-center items-justify">
            <div className="p-3">
              <label>Minimum Customers <br></br> per Hour</label>
              <input className="flex-col pl-1"></input>
            </div>
            <div className="p-3">
              <label>Maximum Customers <br></br> per Hour</label>
              <input className="flex-col pl-1"></input>
            </div>
            <div className="p-3">
              <label>Average Cookie per <br></br> Sale</label>
              <input className="flex-col pl-1"></input>
            </div>
            <button className="flex font-bold text-lg bg-green-500 p-5">Create</button>
          </div>          
        </form>

        <br></br>
        <p className="flex flex-col items-center">Report Table Coming Soon...</p>
        <br></br>
      </main>
      <footer className="font-bold bg-green-500 p-2">
        <p>&copy;2023</p>
      </footer>
    </>
  )
}
