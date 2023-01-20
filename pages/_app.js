import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-200 ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>

  )


}
