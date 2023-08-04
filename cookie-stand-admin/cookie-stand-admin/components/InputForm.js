
export default function InputForm(){
    return(
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
    )
}