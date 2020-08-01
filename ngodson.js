//COLOR
function colorProperty() {
  //COLORSCHEME
  let colorScheme = [
    { property: "color-ready", value: "#eed101" },
    { property: "color-bloody", value: "#eb1d3c" },
    { property: "color-party", value: "#a819bb" },
    { property: "color-mellow", value: "#043d55" },
    { property: "color-sky", value: "#0aabaf" },
    { property: "color-chill", value: "#9dc822" },
  ];
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1, index) => {
        colorScheme.map((i) =>
          i.property === item1 ? (item.style.color = i.value) : null
        );
      });
    }
  });
}
colorProperty();

//BACKGROUND
function backgroundProperty() {
  //COLORSCHEME
  let colorScheme = [
    { property: "bg-ready", value: "#eed101" },
    { property: "bg-bloody", value: "#eb1d3c" },
    { property: "bg-party", value: "#a819bb" },
    { property: "bg-mellow", value: "#043d55" },
    { property: "bg-sky", value: "#0aabaf" },
    { property: "bg-chill", value: "#9dc822" },
  ];
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1, index) => {
        colorScheme.map((i) =>
          i.property === item1.toLocaleLowerCase()
            ? (item.style.background = i.value)
            : null
        );
      });
    }
  });
}
backgroundProperty();

//FONT SIZE
function fontSize() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1, index) => {
        item1.split("-")[0].toLocaleLowerCase() === "font"
          ? (item.style.fontSize = `${item1.split("-")[1]}px`)
          : null;
      });
    }
  });
}
fontSize();

//FONT WEIGHT
function fontWeight() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1) => {
        item1.split("-")[0] === "fontWeight"
          ? (item.style.fontWeight = `${item1.split("-")[1]}`)
          : null;
      });
    }
  });
}
fontWeight();

//MARGIN
function Margin() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1) => {
        item1.split("-")[0] === "m"
          ? (item.style.margin = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "ml"
          ? (item.style.marginLeft = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "mr"
          ? (item.style.marginRight = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "mt"
          ? (item.style.marginTop = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "mb"
          ? (item.style.marginBottom = `${item1.split("-")[1]}px`)
          : null;
      });
    }
  });
}
Margin();

//PADDING
function Padding() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1) => {
        item1.split("-")[0] === "p"
          ? (item.style.padding = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "pl"
          ? (item.style.paddingLeft = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "pr"
          ? (item.style.paddingRight = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "pt"
          ? (item.style.paddingTop = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "pb"
          ? (item.style.paddingBottom = `${item1.split("-")[1]}px`)
          : null;
      });
    }
  });
}
Padding();

//WIDTH_HEIGHT
function WidthHeight() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1) => {
        item1.split("-")[0] === "w"
          ? (item.style.width = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "minw"
          ? (item.style.minWidth = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "maxw"
          ? (item.style.maxWidth = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "h"
          ? (item.style.height = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "minh"
          ? (item.style.minHeight = `${item1.split("-")[1]}px`)
          : null;
        item1.split("-")[0] === "maxh"
          ? (item.style.maxHeight = `${item1.split("-")[1]}px`)
          : null;
      });
    }
  });
}
WidthHeight();

//FLEX
function Flex() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1) => {
        item1.split("-")[0] === "d"
          ? (item.style.display = item1.split("-")[1])
          : null;
        item1 === "justifyCenter"
          ? (item.style.justifyContent = "center")
          : null;
        item1 === "justifyBetween"
          ? (item.style.justifyContent = "space-between")
          : null;
        item1 === "justifyAround"
          ? (item.style.justifyContent = "space-around")
          : null;
        item1 === "justifyEvenly"
          ? (item.style.justifyContent = "space-evenly")
          : null;
        item1 === "justifyEnd"
          ? (item.style.justifyContent = "flex-end")
          : null;
        item1 === "justifyStart"
          ? (item.style.justifyContent = "flex-start")
          : null;
        item1.split("-")[0] === "alignItems"
          ? (item.style.alignItems = item1.split("-")[1])
          : null;
        item1.split("-")[0] === "flexDirection"
          ? (item.style.flexDirection = item1.split("-")[1])
          : null;
      });
    }
  });
}
Flex();

//POSITION
function Position() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1) => {
        item1.split("-")[0] === "position"
          ? (item.style.position = item1.split("-")[1])
          : null;
        item1.split("-")[0] === "top"
          ? (item.style.top = `${item1.split("-")[1]}%`)
          : null;
        item1.split("-")[0] === "bottom"
          ? (item.style.bottom = `${item1.split("-")[1]}%`)
          : null;
        item1.split("-")[0] === "left"
          ? (item.style.left = `${item1.split("-")[1]}%`)
          : null;
        item1.split("-")[0] === "right"
          ? (item.style.right = `${item1.split("-")[1]}%`)
          : null;
      });
    }
  });
}
Position();

//MODAL
function Modal() {
  //GETTING ALL ELEMENT
  let span = document.querySelectorAll("span");
  let p = document.querySelectorAll("p");
  let label = document.querySelectorAll("label");
  let div = document.querySelectorAll("div");

  //COMBINING TO ARRAY
  let element = [...new Set([...span, ...p, ...label, ...div])];

  //ACTUAL ALOGRITHM
  element.forEach((item) => {
    //TAKING ATTRIBUTE
    let attribute = item.getAttribute("ngs");
    if (attribute) {
      let attributeSplit = attribute.split(" ");

      //MAKING LOOP
      attributeSplit.forEach((item1) => {
        if (item1 === "modal") {
          let verifying = item.children[0].getAttribute("ngs");
          if (verifying) {
            let attributeSplit = verifying.split(" ");
            //MAKING LOOP
            attributeSplit.forEach((item2) => {
              if (item2.split("-")[0] === "child") {
                item.style.display = "none";
                let Wrapper = document.createElement("div");
                let overlay = document.createElement("div");
                let body = document.createElement("div");
                Wrapper.style.position = "absolute";
                Wrapper.style.top = "0";
                Wrapper.style.left = "0";
                Wrapper.style.bottom = "0";
                Wrapper.style.right = "0";
                Wrapper.style.zIndex = "1000";
                Wrapper.style.width = "100vw";
                Wrapper.style.height = "100vh";

                overlay.style.position = "absolute";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.bottom = "0";
                overlay.style.right = "0";
                overlay.style.background = "rgba(0,0,0,0.9)";
                overlay.style.zIndex = "998";

                body.style.position = "absolute";
                body.style.top = "8vh";
                body.style.left = "50%";
                body.style.transform = "translateX(-50%)";
                body.style.width = "40vw";
                body.style.overflow = "hidden";
                body.style.borderRadius = "10px";
                body.style.background = "#fff";
                body.innerHTML = item.children[0].innerHTML;
                body.style.zIndex = "999";
                Wrapper.append(overlay, body);
                document.querySelector("body").append(Wrapper);
              }
            });
          }
          item.style.transition = `all 1s linear`;
        }
        // item1 === "modal" ? (item.style.transition = `all 1s linear`) : null;
        // item1.split("-")[0] === "top"
        //   ? (item.style.top = `${item1.split("-")[1]}%`)
        //   : null;
        // item1.split("-")[0] === "bottom"
        //   ? (item.style.bottom = `${item1.split("-")[1]}%`)
        //   : null;
        // item1.split("-")[0] === "left"
        //   ? (item.style.left = `${item1.split("-")[1]}%`)
        //   : null;
        // item1.split("-")[0] === "right"
        //   ? (item.style.right = `${item1.split("-")[1]}%`)
        //   : null;
      });
    }
  });
}
Modal();
