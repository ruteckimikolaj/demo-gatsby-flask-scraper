import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "../../../components/projects"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={3} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
);

export default Cara
