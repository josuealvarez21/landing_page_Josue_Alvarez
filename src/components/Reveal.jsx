import { useInView } from '../hooks/useInView'

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[2px]'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
