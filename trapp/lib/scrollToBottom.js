export const scrollToBottom = (elementid) => {
    const theElement = document.getElementById(elementid);
    theElement.scrollTop = theElement.scrollHeight;
}
