export const scrollToBottom = (elementid) => {
    const theElement = document.getElementById(elementid);
    // I have optional elements that my useEffect still tries to scroll when absent
    if (theElement) {
        theElement.scrollTop = theElement.scrollHeight;
    }
}
