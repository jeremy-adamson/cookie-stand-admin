
export default function tbody(storeList){
    return(
        <>
            {storeList.map((item) => {
                return (
                    <tr key={item.id} className="even:bg-green-50">
                        <td className="pl-2 border border-green-700">
                            {item.id}
                        </td>
                        <td className="pl-2 border border-green-700">
                            {item.time}
                        </td>
                    </tr>
                )
            })}
        </>
    )
}