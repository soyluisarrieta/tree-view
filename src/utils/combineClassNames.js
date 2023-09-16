export default function combineClassNames (...classNames) {
  const validClassNames = classNames.filter(className => className && className.trim() !== '')
  const combinedClassList = validClassNames.join(' ')
  return combinedClassList
}
