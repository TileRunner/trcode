export const scrollToLeft = (elementid) => {
    const theElement = document.getElementById(elementid);
    if (theElement) {
        theElement.scrollLeft = 0;
    }
}
