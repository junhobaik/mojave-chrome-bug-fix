if (navigator.appVersion.indexOf("Mac") !== -1) {
  const zoomLevel = 1.0000001;
  const style = {
    zoom: zoomLevel
  };

  const changeElementsStyle = () => {
    const elements = [
      ...document.querySelectorAll("input[type='checkbox']"),
      ...document.querySelectorAll("input[type='radio']")
    ];
    if (elements.length) {
      for (let el of elements) {
        Object.assign(el.style, style);
      }
    }
  };

  changeElementsStyle();

  window.onload = () => {
    changeElementsStyle();
  };
}
