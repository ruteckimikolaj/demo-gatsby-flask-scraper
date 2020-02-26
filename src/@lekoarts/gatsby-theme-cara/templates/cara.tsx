import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "../../../components/projects"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

const Cara = () => (
  <Layout>
    <Parallax pages={6}>
      <Hero offset={0} />
      <Projects offset={2} />
      <Contact offset={5} />
    </Parallax>
  </Layout>
);

export default Cara
