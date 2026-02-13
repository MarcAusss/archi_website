import localFont from "next/font/local";

// MAIN FONT
export const playfair = localFont({
  src: [
    {
      path: "./fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
});

// SECONDARY FONT
export const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
});
