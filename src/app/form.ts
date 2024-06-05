export type FormType={
    firstName:string;
    lastName:string;
    query:{
        item:number|null;
        valid:boolean
    };
    message:string;
    ending:boolean;
    email:string
}