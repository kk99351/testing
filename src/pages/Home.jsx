import React from 'react'
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";


const Home = () => {
  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title>New Page | Dashonic - React Admin & Dashboard Template</title>
      </MetaTags>
      <Container fluid>{/* Render Breadcrumbs */}</Container>

       <div style={{display:'flex',justifyContent:'center'}} className='pt-5 pb-5 text-white bg-primary'>HOME-PAGE</div>

      </div>
      </React.Fragment>
  )
}

export default Home