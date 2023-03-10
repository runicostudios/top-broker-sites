type LogoProps = {
  [key: string]: string
}

export function LogoFull(props: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="606.752"
      // height="91.292"
      viewBox="0 0 160.537 24.154"
      {...props}
    >
      <defs>
        <marker
          id="b"
          markerHeight="4.155"
          markerWidth="3.594"
          orient="auto-start-reverse"
          overflow="visible"
          preserveAspectRatio="xMidYMid"
          refX="0"
          refY="0"
          viewBox="0 0 5.324 6.155"
        >
          <path
            className="fill-primary-500 stroke-primary-500"
            // fill="#10b981"
            fillRule="evenodd"
            // stroke="#10b981"
            strokeWidth=".5pt"
            d="M2.885 0L-1.44 2.5v-5z"
          ></path>
        </marker>
        <marker
          id="a"
          markerHeight="4.001"
          markerWidth="3.461"
          orient="auto-start-reverse"
          overflow="visible"
          preserveAspectRatio="xMidYMid"
          refX="0"
          refY="0"
          viewBox="0 0 5.324 6.155"
        >
          <path
            fill="#262626"
            fillRule="evenodd"
            stroke="#262626"
            strokeWidth=".5pt"
            d="M2.885 0L-1.44 2.5v-5z"
          ></path>
        </marker>
      </defs>
      <text
        x="49.387"
        y="26.198"
        stroke="#000"
        strokeWidth="0.4"
        fontSize="19.27"
        transform="translate(-26.342 -6.333)"
      >
        <tspan
          x="49.387"
          y="26.198"
          fill="#175DFF"
          stroke="none"
          fontFamily="Inter"
          fontWeight="400"
        >
          <tspan fill="#262626">
            Top<tspan className={'fill-primary-600'}>Broker</tspan>Sites
          </tspan>
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#262626"
        strokeWidth="2.7"
        markerStart="url(#a)"
        d="M31.756 24.256l-.073-17.307"
        transform="translate(-26.342 -6.333)"
      ></path>
      <path
        fill="none"
        className="stroke-primary-500"
        // stroke="#10b981"
        strokeWidth="2.7"
        markerEnd="url(#b)"
        d="M42.726 29.868l.098-17.063"
        transform="translate(-26.342 -6.333)"
      ></path>
    </svg>
  )
}
