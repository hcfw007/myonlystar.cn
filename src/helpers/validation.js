const validate = (object, pattern) => {
  let pass = true
  let errorMessage = ''

  for (const key of pattern) {
    if (pattern[key].required) {
      if (!object[key]) {
        pass = false
        errorMessage += `${ key } is required;`
      }
    }

    if (pattern[key].type) {
      if (typeof(object[key]) !== pattern[key].type) {
        pass = false
        errorMessage += `${ key } should be ${ object[key] } type;`
      }
    }

    if (pattern[key].reg) {
      if (typeof(object[key]) !== 'string' || !(object[key].test(pattern[key].reg))) {
        pass = false
        errorMessage += `${ key } should match reg ${ pattern[key].reg };`
      }
    }
  }

  return {
    pass,
    errorMessage,
  }
}

module.exports = validate
