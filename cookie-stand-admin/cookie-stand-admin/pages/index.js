

import CookieStandAdmin from "@/components/CookieStandAdmin";
import {useState} from "react";
import {hourly_sales} from "@/Data/data.js";
import {hours} from "@/Data/data.js";



export default function Home() {
  const[hours, hourly_sales] = useState([]);
  return (
    <>
      <CookieStandAdmin hours = {hours} storeList = {hourly_sales}/>
    </>
  )
}
