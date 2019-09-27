const compose = (...funcs) => (component) => {
  return funcs.reduceRight((prevResult, wrapper) => wrapper(prevResult), component)
}

export default compose