/** @jsx jsx */
import {jsx} from "theme-ui"

import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import {UpDown, UpDownWide} from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import ProjectsMDX from "../@lekoarts/gatsby-theme-cara/sections/projects"
import NBASvg from "../utils/svg"


const Projects = ({offset}) => (
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
                    <ProjectsMDX/>
                </div>
            </Inner>
        </Content>
        <Divider speed={0.1} offset={offset} factor={2}>
            <UpDown>
                <NBASvg opacity="0.6" left="25%" top="5%"/>
                <NBASvg opacity="0.5" left="85%" top="75%"/>
                <NBASvg opacity="0.4" left="-70%" top="20%"/>
                <NBASvg opacity="0.3" left="10%" top="55%"/>
                <NBASvg opacity="0.2" left="-17%" top="60%"/>
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

export default Projects
