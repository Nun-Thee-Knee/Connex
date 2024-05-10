export type NavBarItemType = {
    id:number
    title: string,
    color: string,
    link?:string
}
export type AboutType = {
    title: string,
    color: string,
    text:string
}

export type CardType = {
    title: string,
    text: string,
    img: string
}

export type ContactType = {
    link: string,
    icon: React.ReactNode
}