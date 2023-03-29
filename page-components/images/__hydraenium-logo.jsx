import * as React from "react"

const HydraeniumLogo = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 703.48 178.39"
    {...props}
  >
    <defs>
      <radialGradient id="lgrad" cx="50%" cy="50%" r="50%" >
          <stop offset="0%" style={{stopColor:'rgb(233,233,233)', stopOpacity:"1.00"}} />
          <stop offset="100%" style={{stopColor:'rgb(137,137,137)', stopOpacity:"1.00"}} />
      </radialGradient>
    </defs>
    <rect
      x={3.5}
      y={3.5}
      width={171.39}
      height={171.39}
      rx={20.33}
      ry={20.33}
      style={{
        fill: "none",
        strokeMiterlimit: 10,
        strokeWidth: 7,
        stroke: "url(#lgrad)"
      }}
    />
    <text
      transform="translate(194.49 144)"
      style={{
        fontFamily: "BookmanOldStyle,'Bookman Old Style'",
        fontSize: "101.48px",
        stroke: 'none',
        fill: "url(#lgrad)"
      }}
    >
      <tspan x={0} y={0}>
        {"Hydraenium"}
      </tspan>
    </text>
    <text
      transform="translate(37.37 119.82)"
      style={{
        fontSize: "83.85px",
        fontFamily: "BookmanOldStyle,'Bookman Old Style'",
        stroke: 'none',
        fill: "url(#lgrad)"
      }}
    >
      <tspan x={0} y={0}>
        {"Hd"}
      </tspan>
    </text>
    <text
      transform="translate(20.21 44.99)"
      style={{
        fontSize: "41.65px",
        fontFamily: "BookmanOldStyle,'Bookman Old Style'",
        stroke: 'none',
        fill: "url(#lgrad)"
      }}
    >
      <tspan x={0} y={0}>
        {"\u221E"}
      </tspan>
    </text>
  </svg>
)

export default HydraeniumLogo
