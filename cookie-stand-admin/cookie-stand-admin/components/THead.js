
export default function thead(hours){
    return(
        <>
            <tr className="bg-green-800 font-bold">
                <th className="border border-green-500">Location</th>
                {hours.map((item) => {
                    return(<th className="border border-green-500">{item}</th>)
                })}
                <th className="border border-green-500">Totals</th>
            </tr>
        </>
    )
}