export default function Container({ as: Component = 'div', className = '', children }) {
  return (
    <Component className={`mx-auto w-full max-w-[1440px] px-4 md:px-10 ${className}`}>
      {children}
    </Component>
  )
}
