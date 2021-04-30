function changeOuterLinks() {
     const outerLinks = document.querySelectorAll('nav#link-list a');
    outerLinks.forEach( item => {
        if (item.innerHTML.includes('outer-link')) {
            item.target ='_blank';
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    });
    document.querySelectorAll("nav").forEach((e) => {
        e.style.display = "flex";
        e.style.flexDirection = "column";
        e.style.margin = "0px auto";
        e.style.width = "30%";
        e.style.border = "1px solid blue";
        e.style.padding = "16px";
      });
};

changeOuterLinks();

export { changeOuterLinks };

