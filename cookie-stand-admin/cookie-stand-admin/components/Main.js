
import InputForm from "@/components/InputForm"
import ReportTable from "./ReportTable"

export default function Main({hours, storeList}){
    return(
        <main className="flex flex-col items-center">
        <InputForm />
        <br></br>
        <ReportTable hours = {hours} storeList = {storeList}/>
        <br></br>
        </main>
    )
}