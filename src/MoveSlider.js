function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (enteries) => {
    const isIntersecting = enteries[0].isIntersecting;
    console.log(element, isIntersecting);
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);
}

const line1 = document.getElementById("line-1");

setupIntersectionObserver(line1, true, 0.15);