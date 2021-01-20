export default () => {
    if (!Object.getOwnPropertyDescriptor(Element.prototype,'classList')){
        if (HTMLElement&&Object.getOwnPropertyDescriptor(HTMLElement.prototype,'classList')){
            Object.defineProperty(Element.prototype,'classList',Object.getOwnPropertyDescriptor(HTMLElement.prototype,'classList'));
        }
    }
}
