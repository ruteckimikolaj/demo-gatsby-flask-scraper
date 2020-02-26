/** @jsx jsx */
import {jsx} from "theme-ui"

import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import {UpDown, UpDownWide} from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import NBASvg from "../utils/svg"
import React, {useEffect, useState} from "react";
import ProjectCard from "../@lekoarts/gatsby-theme-cara/components/project-card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const url = process.env.GATSBY_API_URL;

const Projects = ({offset}) => {
  const [dataFromApi, setDataFromApi] = useState(0);
  useEffect(() => {
    fetch(url)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setDataFromApi(resultData.data.slice(0,6));
      });
  }, []);
  return (
    <div>
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        sx={{clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`}}
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={offset + 0.2} factor={2}>
        <Inner>
          <div
            sx={{
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              h2: {gridColumn: `-1/1`, color: `white !important`},
            }}
          >
            {dataFromApi ? dataFromApi.map((item, index) =>
              <ProjectCard title={`${item.away.team} vs ${item.home.team}`} link="https://www.nba.com"
                           bg="linear-gradient(to right, #17408B 0%, #FFFFFF 100%)" key={index}>
                <Row>
                  <p>{item.away.team}</p>
                  <Col xs md={4}>
                    <Image href="#" src={item.away.image} thumbnail/>
                  </Col>
                  <Col xs md={4}>
                    away record : {item.away.away_record ? item.away.away_record : 123}<br/>
                    overall : {item.away.record_overall ? item.away.record_overall : 1233}
                  </Col>
                </Row>
                <Row>
                  <p>{item.home.team}</p>
                  <Col xs md={4}>
                    <Image href="#" src={item.home.image} thumbnail/>
                  </Col>
                  <Col xs md={4}>
                    home record : {item.home.away_record ? item.home.away_record : 123}<br/>
                    overall : {item.home.record_overall ? item.home.record_overall : 1233}
                  </Col>
                </Row>
              </ProjectCard>
            ): <ProjectCard title={"Hornets vs Kniks"} link="https://www.nba.com"
                           bg="linear-gradient(to right, #17408B 0%, #FFFFFF 100%)">
                <Row>
                  <p>Hornets</p>
                  <Col xs md={4}>
                    <Image href="#" src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cha.png&h=70&w=70" thumbnail/>
                  </Col>
                  <Col>
                    away record : 8-18<br/>
                    overall : 19-38
                  </Col>
                </Row>
                <Row>
                  <p>Knicks</p>
                  <Col>
                    <Image href="#" src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/ny.png&h=70&w=70" thumbnail/>
                  </Col>
                  <Col>
                    home record : 9-20<br/>
                    overall : 17-40
                  </Col>
                </Row>
              </ProjectCard>
            }
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={2}>
        <UpDown>
          <NBASvg opacity="0.6" left="-40%" top="5%"/>
          <NBASvg opacity="0.5" left="-48%" top="75%"/>
          <NBASvg opacity="0.4" left="-35%" top="20%"/>
          <NBASvg opacity="0.3" left="-45%" top="55%"/>
          <NBASvg opacity="0.2" left="-35%" top="60%"/>
        </UpDown>
        <UpDownWide>
          <NBASvg opacity="0.6" height="8%" left="-40%" top="90%"/>
          <NBASvg opacity="0.5" height="8%" left="90%" top="30%"/>
          <NBASvg opacity="0.3" left="18%" top="75%"/>
          <NBASvg opacity="0.2" left="75%" top="10%"/>
          <NBASvg opacity="0.7" left="45%" top="10%"/>
        </UpDownWide>
        <NBASvg height="14%" left="-10%" top="20%"/>
        <NBASvg height="19%" left="-10%" top="80%"/>
        <NBASvg height="13%" left="80%" top="60%"/>
        <NBASvg height="12%" left="10%" top="10%"/>
        <NBASvg height="11%" left="29%" top="26%"/>
        <NBASvg height="10%" left="75%" top="30%"/>
        <NBASvg height="9%" left="80%" top="70%"/>
      </Divider>
    </div>
  )
}

export default Projects
