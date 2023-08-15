import { forwardRef, memo, Ref, SVGProps } from 'react'

import { SvgIdsType } from './'

import icons from '@/app/assets/icons/sprite.svg'

const SvgComponent = (
  { id, ...rest }: SVGProps<SVGSVGElement> & { id: SvgIdsType },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...rest}
  >
    <use xlinkHref={icons + `#${id}`}></use>
  </svg>
)

export const Icon = memo(forwardRef(SvgComponent))
