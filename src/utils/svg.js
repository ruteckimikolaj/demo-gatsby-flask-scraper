import React from "react"

import Icon from "../svg/newNBA.svg"

const NBASvg = ({
                    width = '100%',
                    height = '15%',
                    opacity = '0.5',
                    left,
                    top,
                    viewBox = '0 0 30 600',
                }) => {
    return (
        <Icon
            style={{
                opacity: opacity,
                position: `absolute`,
                width: width,
                left: left,
                top: top,
            }}
            width={width}
            height={height}
            left={left}
            top={top}
            viewBox={viewBox}
        />

    )
};

export default NBASvg