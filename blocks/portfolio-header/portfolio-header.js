export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add("header-main-content");
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add("header-name");
      }
     if (d === 1) {
       div.classList.add("header-content");
       const pTags = div.querySelectorAll("p");
       pTags.forEach((p, index) => {
         p.classList.add(`p-${index + 1}`, "header-nav-list");
       });
     }
    });
  });
}
