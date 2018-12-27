import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
   baseLineHeight: 1.53,
   scaleRatio: 3.6,
   headerGray: 20,
   bodyGray: 20,
   googleFonts: [
      {
        name: 'Cabin',
        styles: [
          '700',
          '400',
        ],
      },
      {
        name: 'EB Garamond',
        styles: [
          '400',
          '400i',
          '700',
          '700i',
        ],
      },
      {
        name: 'Playfair Display',
        styles: [
          '400',
          '400i',
          '700',
          '700i',
          '900',
          '900i',
        ]
      },
    ],
   headerFontFamily: [
     "Cabin",
     "Helvetica Neue",
     "Segoe UI",
     "Helvetica",
     "Arial",
     "sans-serif",
   ],
   bodyFontFamily: ["EB Garamond", "Georgia", "serif"],
})

export default typography
