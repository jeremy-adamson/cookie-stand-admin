
import THead from "./THead.js"
import TBody from "./TBody.js"
import TFoot from "./TFoot.js"

export default function ReportTable({hours, storeList }) {
    return (
        <>
            {storeList.length > 0 && (
                <table className="w-1/2 mx-auto my-4 border border-gray-500">
                    <THead hours = {hours}/>

                    <TBody storeList = {storeList}/>

                    <TFoot/>

                </table>
            )}
            {storeList.length == 0 && (
                <h2>No Cookie Stands Available</h2>
            )}
        </>
    )
}