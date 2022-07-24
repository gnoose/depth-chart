export const defaultDayOptions = {
  // basic configuration
  width: 780, // depth map visible width
  height: 540, // depth map visible height
  initOffset: 0.5, // initial offset to solve blurred lines
  bgColor: "rgba(255,255,255,0.1)", // overall background color

  // watermark configuration
  watermaskType: "image", // watermark configuration type "text" (text) "image" (picture)
  watermaskContent: "vue-depth-chart", // text watermark directly assign text image watermark import object

  // line configuration
  gridLineColor: "#ddd", // grid line color
  rulerLineColor: "#999", // ruler line color color

  // axis configuration
  xAxisGridSpace: 90, // x-axis background grid spacing
  yAxisGridSpace: 30, // y-axis background grid spacing
  xAxisFontColor: "#666", // x-axis ruler scale font color
  yAxisFontColor: "#666", // y-axis ruler scale font color
  xAxisFontSize: "12px", // x-axis ruler scale font size
  xAxisFontFamily: "Aria", // x-axis ruler scale font family
  yAxisFontSize: "12px", // y-axis ruler scale font size
  yAxisFontFamily: "Aria", // y-axis ruler scale font family
  yAxisShadowColor: "#fff", // y-axis ruler tick shadow color

  // spacing configuration
  bottomSpace: 8, // the distance between the depth map and the y-axis
  buySellSpace: 10, // Space between buy and sell ends

  // prompt box
  tipWidth: 120,
  tipHeight: 60,
  tipLocationLineColor: "#999", // Tip box positioning line color
  tipLocationDotRadius: 5, // Tip box dot radius
  tipType: "mouse", // Mouse movement prompt information position axis (on the xy axis) mouse (displayed with absolute positioning following the mouse position)

  // buy prompt box
  tipBuyLocationDotBgColor: "#fff", // background color of tip box dots
  tipBuyBorderColor: "#67c23a", // The border color of the tip box
  tipBuyBgColor: "#f0f9eb", // background color of tip box
  tipBuyTextColor: "#67c23a", // The color of the tip text in the tip box

  // sell prompt
  tipSellLocationDotBgColor: "#fff", // background color of tip box dots
  tipSellBorderColor: "#f56c6c", // The border color of the prompt box
  tipSellBgColor: "#fef0f0", // background color of the prompt box
  tipSellTextColor: "#f56c6c", // The prompt text color of the prompt box

  // custom depth style configuration
  buyStrokeColor: "rgb(111,168,0)", // buy stroke color rgb(111,168,0)
  sellStrokeColor: "rgb(234,0,112)", // Sell stroke color rgb(234,0,112)
  buyLinearGradientArray: [
    "rgb(141,186,51)",
    "rgb(160,197,87)",
    "rgb(189,215,138)",
    "rgb(228,238,206)",
    "rgb(250,250,241)",
  ],
  sellLinearGradientArray: [
    "rgb(255,148,152)",
    "rgb(255,164,172)",
    "rgb(255,192,197)",
    "rgb(255,228,230)",
    "rgb(255,249,249)",
  ],
};

export const defaultNightOptions = {
  // basic configuration
  width: 780, // depth map visible width
  height: 540, // depth map visible height
  initOffset: 0.5, // initial offset to solve blurred lines
  bgColor: "rgba(0,0,0,0.9)", // overall background color

  // watermark configuration
  watermaskType: "image", // watermark configuration type "text" (text) "image" (picture)
  watermaskContent: "vue-depth-chart", // text watermark directly assign text image watermark import object

  // line configuration
  gridLineColor: "#333", // grid line color
  rulerLineColor: "rgb(47,47,47)", // ruler line color color

  // axis configuration 0
  xAxisGridSpace: 90, // x-axis background grid spacing
  yAxisGridSpace: 30, // y-axis background grid spacing
  xAxisFontColor: "#999", // x-axis ruler scale font color
  yAxisFontColor: "#999", // y-axis ruler scale font color
  xAxisFontSize: "12px Aria", // x-axis ruler scale font size
  yAxisFontSize: "12px Aria", // y-axis ruler scale font size
  yAxisShadowColor: "#333", // y-axis ruler tick shadow color

  // spacing configuration
  bottomSpace: 8, // the distance between the depth map and the y-axis
  buySellSpace: 10, // Space between buy and sell ends

  // prompt box
  tipWidth: 120,
  tipHeight: 60,
  tipLocationLineColor: "#999", // Tip box positioning line color
  tipLocationDotRadius: 5, // Tip box dot radius
  tipType: "mouse", // Mouse movement prompt information position axis (on the xy axis) mouse (displayed with absolute positioning following the mouse position)

  // buy prompt box
  tipBuyLocationDotBgColor: "#fff", // background color of tip box dots
  tipBuyBorderColor: "#67c23a", // The border color of the tip box
  tipBuyBgColor: "#f0f9eb", // background color of tip box
  tipBuyTextColor: "#67c23a", // The color of the tip text in the tip box

  // sell prompt
  tipSellLocationDotBgColor: "#fff", // background color of tip box dots
  tipSellBorderColor: "#f56c6c", // The border color of the prompt box
  tipSellBgColor: "#fef0f0", // background color of the prompt box
  tipSellTextColor: "#f56c6c", // The prompt text color of the prompt box

  // custom depth style configuration
  buyStrokeColor: "rgb(111,168,0)", // buy stroke color rgb(111,168,0)
  sellStrokeColor: "rgb(234,0,112)", // Sell stroke color rgb(234,0,112)
  buyLinearGradientArray: [
    "rgb(80,120,3)",
    "rgb(72,106,4)",
    "rgb(51,74,5)",
    "rgb(35,49,7)",
    "rgb(20,25,8)",
  ],
  sellLinearGradientArray: [
    "rgb(217,45,127)",
    "rgb(172,37,101)",
    "rgb(115,27,68)",
    "rgb(64,19,39)",
    "rgb(26,13,18)",
  ],
};