import React from 'react'
import Link from 'next/link'

export const Position = props => <Link><a href='/basics/position'>{ props.children || 'position' }</a></Link>
export const NormalFlow = props => <Link><a href='/basics/normal-flow'>{ props.children || 'normal flow' }</a></Link>
