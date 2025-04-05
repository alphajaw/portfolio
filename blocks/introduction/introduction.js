export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add("introduction-main-content");
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add("introduction-name");
      }
      if (d === 1) {
        div.classList.add("introduction-content");
        const pTags = div.querySelectorAll("p");
        pTags.forEach((p, index) => {
          p.classList.add(`p-${index + 1}`, "introduction-list");
        });
      }
    });
  });
}
