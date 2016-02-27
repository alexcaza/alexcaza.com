
export function modifyClassList(element, method, n) {
    let length = element.children.length;
    let iter = n || 0;

    if (iter >= length) return;

    if (method === "remove") element.children[iter].classList.remove("hide");
    if (method === "add") element.children[iter].classList.add("hide");

    setTimeout(() => {
        modifyClassList(element, method, iter+1);
    }, 100);

}
