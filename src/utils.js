export const isMobile = () => {
    const {navigator : { userAgent }} = window;
    if( userAgent.match(/Android/i)
        || userAgent.match(/webOS/i)
        || userAgent.match(/iPhone/i)
        || userAgent.match(/iPad/i)
        || userAgent.match(/iPod/i)
        || userAgent.match(/BlackBerry/i)
        || userAgent.match(/Windows Phone/i)) {
    return true;
 }
 return false;
}

const findPos = (obj) => {
    var curtop = 0;
    if (obj && obj.offsetParent) {
        do {
            curtop = curtop + obj.offsetTop - 18;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

export const scrollToElement = (element) => {
    window.scroll(0, findPos(document.getElementById(element)));
}