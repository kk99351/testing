import React from 'react'
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";
import Sales from "../pages/Sales";

const Home = () => {
  return (
    <React.Fragment>
     
      <Container fluid>{/* Render Breadcrumbs */}</Container>

       {/* <div style={{display:'flex',justifyContent:'center'}} className='pt-5 pb-5 text-white bg-primary'>HOME-PAGE</div> */}
<Sales />
      </React.Fragment>
  )
}

export default Home