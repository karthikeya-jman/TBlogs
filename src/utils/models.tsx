export type postType = {
    id: number;
    title: string;
    imgUrl: string;
    content: string;
    date: string;
};


export interface blogDetails {
    title :string,
    imgUrl : string,
    content : string
}

export interface ack {
    success : boolean
    setSuccess :React.Dispatch<React.SetStateAction<boolean>>;
}