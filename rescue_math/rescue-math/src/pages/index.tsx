import Head from 'next/head'
import type { NextPage } from 'next'
import NumberAdder from '../components/proof'
import Homepage from '../pages/Homepage'


const Home: NextPage = () => {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        {/* Page Title */}
        <title>Rescue Math</title>
        <script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
        </script>
        
        {/* Favicon Controller */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      
    </div>
  )
}

export default Home
