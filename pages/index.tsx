import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout/Layout'
import SuggestToday from '../Components/SuggestToday/SuggestToday'

const Home: NextPage = () => {
  return (
    <div >
      <Layout>
        <div className="main">
          <SuggestToday/>
        </div>
      </Layout>
    </div>
  )
}

export default Home


