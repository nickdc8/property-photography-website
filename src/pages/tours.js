import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import Title from "../components/Title"
import icon from "../img/360icon.svg"
import EstateAgentTours from "../components/EstateAgentTours"
import BusinessTours from "../components/BusinessTours"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "../styles/react-tabs.css"
import Head from "../components/Head"
import { Helmet } from "react-helmet"

const Tours = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="360 degree photography and floorplans for Estate Agents."
        />
      </Helmet>
      <Wrapper>
        <Head title="360 Tours" />
        <Title src={icon} heading="360° Tours" />
        <Tabs>
          <TabList>
            <Tab>Estate Agent Tours</Tab>
            <Tab>Business Tours</Tab>
          </TabList>
          <TabPanel>
            <EstateAgentTours />
          </TabPanel>
          <TabPanel>
            <BusinessTours />
          </TabPanel>
        </Tabs>
      </Wrapper>
    </Layout>
  )
}

export default Tours
