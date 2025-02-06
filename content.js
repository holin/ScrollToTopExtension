let lastKeyPressTime = 0;
const doublePressThreshold = 300; // 双击时间间隔阈值（单位：毫秒）

document.addEventListener("keydown", (event) => {
  if (event.key === "b") {
    const currentTime = new Date().getTime();
    if (currentTime - lastKeyPressTime < doublePressThreshold) {
      // 双击 b 键
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    lastKeyPressTime = currentTime;
  } else if (event.key === "d") {
    const currentTime = new Date().getTime();
    if (currentTime - lastKeyPressTime < doublePressThreshold) {
      // 双击 d 键
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    lastKeyPressTime = currentTime;
  }
});