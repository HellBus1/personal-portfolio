import { ReactElement } from 'react'
import { FaJava, FaNode, FaDatabase, FaMobile } from 'react-icons/fa'
import {
  SiAndroidstudio,
  SiBootstrap,
  SiDart,
  SiFlutter,
  SiKotlin,
  SiLaravel,
  SiPhp,
  SiSpring,
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiDaisyui,
  SiReact,
  SiGit,
  SiDocker,
  SiFigma
} from 'react-icons/si'

export const stackIcons: Record<string, (size?: number) => ReactElement> = {
  flutter: (size = 18) => <SiFlutter size={size} />,
  dart: (size = 18) => <SiDart size={size} />,
  kotlin: (size = 18) => <SiKotlin size={size} />,
  'android studio': (size = 18) => <SiAndroidstudio size={size} />,
  react: (size = 18) => <SiReact size={size} />,
  typescript: (size = 18) => <SiTypescript size={size} />,
  tailwindcss: (size = 18) => <SiTailwindcss size={size} />,
  daisyui: (size = 18) => <SiDaisyui size={size} />,
  spring: (size = 18) => <SiSpring size={size} />,
  springboot: (size = 18) => <SiSpringboot size={size} />,
  java: (size = 18) => <FaJava size={size} />,
  nodejs: (size = 18) => <FaNode size={size} />,
  'node.js': (size = 18) => <FaNode size={size} />,
  sql: (size = 18) => <FaDatabase size={size} />,
  database: (size = 18) => <FaDatabase size={size} />,
  laravel: (size = 18) => <SiLaravel size={size} />,
  php: (size = 18) => <SiPhp size={size} />,
  bootstrap: (size = 18) => <SiBootstrap size={size} />,
  git: (size = 18) => <SiGit size={size} />,
  docker: (size = 18) => <SiDocker size={size} />,
  figma: (size = 18) => <SiFigma size={size} />,
  mobile: (size = 18) => <FaMobile size={size} />
}

export const getStackIcon = (stackName: string, size = 18): ReactElement | null => {
  const normalized = stackName.toLowerCase().trim()
  const iconRenderer = stackIcons[normalized]
  return iconRenderer ? iconRenderer(size) : null
}
