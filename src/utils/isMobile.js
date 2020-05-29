const isMobile = {
  android: () => navigator.userAgent.match(/Android/i),
  blackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  opera: () => navigator.userAgent.match(/Opera Mini/i),
  windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () =>
    isMobile.android() ||
    isMobile.blackBerry() ||
    isMobile.iOS() ||
    isMobile.opera() ||
    isMobile.windows() ||
    window.innerWidth <= 600,
  smallWidth: () =>
    (isMobile.android() || isMobile.blackBerry() || isMobile.iOS() || isMobile.opera() || isMobile.windows()) &&
    window.innerWidth <= 345,
  smallPC: () => window.innerWidth < 1250,
}

export default isMobile
