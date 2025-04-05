export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add("location-content");
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add("location-logo");
      }
      if (d === 1) {
        div.classList.add("location-content");
        // const pTags = div.querySelectorAll("p");
        // pTags.forEach((p, index) => {
        //   p.classList.add(`p-${index + 1}`, "header-nav-list");
        // });
      }
    });
  });
}
