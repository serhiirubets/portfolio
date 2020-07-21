function getCircleStyles(amount) {
  const dasharray = 2 * amount * Math.PI;
  const dashOffset = dasharray / 2;
  return `stroke-dasharray: ${dashOffset}, ${dasharray}`
}

function addStyles(skills) {
  skills.forEach(skill => {
    skill.items.forEach((item => {
      item.css = getCircleStyles(item.amount);
    }))
  })
}

module.exports.getCircleStyles = getCircleStyles;
module.exports.addStyles = addStyles;
