import React from "react"
import beKind from "../images/be-kind-to-your-mind.png";
import justGiving from "../images/just-giving.png";
import Layout from "../components/layout"
import Folder from "../components/folder"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <Folder iconLocation={beKind} altText={'Walrus Manchester Magazine'} text={'Be Kind To Your Mind'} externalLink={'https://drive.google.com/drive/folders/1U_Mi5oHln9N3twOy5i8IIfdwvZl_pC2o?usp=sharing'} />
      <div style={{paddingLeft:`182px`, paddingTop: `13px`}}>
        <Folder iconLocation={justGiving} altText={'Just Giving Page for Walrus Manchester'} text={'Just Giving Donation'} externalLink={'https://www.justgiving.com/fundraising/walrusmcr'} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
