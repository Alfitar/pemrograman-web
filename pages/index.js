import Head from 'next/head'
import Image from 'next/image'
import Jumbotron from '../Component/Jumbotron'
import Navbar from '../Component/Navbar'
export default function Home() {
  return (
    <div className="bg">
      <Navbar/>
      <Jumbotron/>
    </div>
  )
}
