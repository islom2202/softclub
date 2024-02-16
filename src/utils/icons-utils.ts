// This is used for dynamic imports of icons
export const getIconUrl = (iconName:string):string =>  new URL(`../assets/icons/${iconName}`, import.meta.url).href;