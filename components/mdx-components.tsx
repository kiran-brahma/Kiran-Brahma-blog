import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from 'next/link'
import Blog from '@/components/blog'

const components = {
  Image,
  Link,
  Blog
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
