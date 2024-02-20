// This is used for dynamic imports of images
export const getImageUrl = (imageName:string):string =>  new URL(`../assets/images/${imageName}`, import.meta.url).href;