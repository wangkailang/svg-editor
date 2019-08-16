const init = `
<svg width="600" height="400">
</svg>
`
const moon = `
<svg width="600" height="400">
  <defs>
    <circle id="whitemoon" cx="420" cy="160" r="60" fill="black" />
    <filter id="blur-moon">
       <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
    </filter>
  </defs>
  <use xlink:href="#whitemoon" />
  <use xlink:href="#whitemoon" filter="url(#blur-moon)" />
</svg>
`

export default {
  init,
  moon,
}