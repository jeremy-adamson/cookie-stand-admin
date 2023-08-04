
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
export default function CookieStandAdmin({hours, storeList}){
    return(
        <>
        <Head />

      <Header />

      <br></br>
      <Main hours = {hours} storeList = {storeList}/>
      <Footer />
      </>
    )
}