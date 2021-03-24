import React from 'react'

export interface SvgIcon extends React.HTMLProps<SVGSVGElement> {
  name: string;
}

export const SvgIcon = React.forwardRef<SVGSVGElement, SvgIcon>((props, ref) => {
  const { name } = props

  return (
    <svg className={'svg-icon ' + props.className} ref={ref}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
})
