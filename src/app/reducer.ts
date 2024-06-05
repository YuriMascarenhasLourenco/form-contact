import { computeFromManifest } from "next/dist/build/utils";
import { FormType } from "./form";
type firstName={
    type:'first',
    payload:{
        firstName:string
    };
}
type lastName={
    type:'last',
    payload:{
        lastName:string;
    }
}
type QueryOptions={
    type:'query',
    payload:{
        query:{
            item:number|null,
            valid:boolean
        }
    }
}
type Message={
    type:'message',
    payload:{
        message:string
    }
}
type endingForm={
    type:'ending',
    payload:{
        ending:boolean
    }
}
type Email={
    type:'email',
    payload:{
        email:string
    }
}


type sendInfo = firstName |lastName|QueryOptions|Message|endingForm|Email;
export const FormReducer=(post:FormType,action:sendInfo):FormType=>{
    switch(action.type){
        case 'first':
         return {...post, firstName:action.payload.firstName}
        case 'last':
          return {...post,lastName:action.payload.lastName}
        case 'query':
            return {...post,query:{item:action.payload.query.item,valid:action.payload.query.valid}}
        case 'ending':
            return {...post,ending:action.payload.ending}
        case 'message':
            return {...post,message:action.payload.message}
        case 'email':
            return{...post,email:action.payload.email}
        default:
            return post
       
    }
}