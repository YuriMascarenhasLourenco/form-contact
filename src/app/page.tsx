'use client'
import { Email, FormContact, Message, Name, Query } from "./style";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { FormReducer } from "./reducer";
import success from '../app/assets/images/icon-success-check.svg'
import { err } from "./error";
import Image from "next/image";


export default function Home() {
  const[error,setError]= useState<err>({first:false,last:false,email:false,query:false,message:false,ending:false})
  const [formSubmited,setFormSubmited]= useState(false)
  const[list, dispatch]= useReducer(FormReducer,{
    firstName:'',
    lastName:'',
    query:{
      item:null,
      valid:false
    },
    message:'',
    ending:false,
    email:''
  })
  const ChangeFirstName=(e:ChangeEvent<HTMLInputElement>)=>{
    dispatch({
      type:'first',
      payload:{
        firstName:e.target.value
      }
    })
  }
 
  const sendForm=(e:FormEvent)=>{
    e.preventDefault()


    const newError = {
      first: list.firstName === '',
      last: list.lastName === '',
      email: list.email === '',
      query: list.query.item === null && list.query.valid===false,
      message: list.message === '',
      ending: !list.ending,
    };

    setError(newError);

    
    const hasError = Object.values(newError).some(value=>value);
    if (hasError) {
    console.log(error.query)
      return;
    }else{
      setFormSubmited(true)
      dispatch({type:'first',payload:{firstName:''}})
      dispatch({type:'last',payload:{lastName:''}})
      dispatch({type:'email',payload:{email:''}})
      dispatch({type:'query',payload:{query:{item:null, valid:false}}})
      dispatch({type:'message',payload:{message:''}})
      dispatch({type:'ending',payload:{ending:false}})
      setTimeout(()=>setFormSubmited(false),2000)
      console.log('Formulário enviado com sucesso:', list);

    }

 
   
  }
  
  return (
    
      <FormContact>
        
       {formSubmited && 
       
       <div className="karla-sent">
          <div className="icon-sent">
            <Image src={success} alt=""/>
            <p>Message sent!</p>
          </div>
            <p className="sent">Thanks for completing the form. we'll be in touch soon!</p>
          </div>
          }
        
       <form action="" onSubmit={sendForm}>
       <h1>Contact Us</h1>
        <Name> 
      
          <div>
               <div className="labelName">
                  <label htmlFor="" className='karla-label'>First Name</label>
                  <input type="text" 
                  className={error.first?'error-input':''}
                  value={list.firstName} 
                  onChange={ChangeFirstName}
                  />
               </div>
               
         {error.first && <div className="karla-errors">This field is required</div>}
          </div>
       <div>
          <div className="labelName">
                <label htmlFor="" className="karla-label" >Last Name</label>
                <input type="text" 
                onChange={(e)=>dispatch({type:'last', payload:{lastName:e.target.value}})} value={list.lastName} 
                className={error.last ? 'error-input':''}/>
         </div>
         {error.last && <div className="karla-errors">This field is required</div>}
       </div>
          
        </Name>
        <Email>
          <div className="area">
            <label htmlFor="" className="karla-label">Email Address</label>
            <input type="email" 
            className={error.email ? 'error-input':''}
            onChange={(e)=>dispatch({type:'email', payload:{email:e.target.value}})} 
            value={list.email}/>
          </div>
          {error.email && <div className="karla-errors">Please enter a valid email address</div>}
        </Email>
        <Query>
          <label htmlFor="" className="karla-label">Query Type</label>
          <div className="options" >
            
              <div className={error.query ? 'error-input option' : 'option'}>
                <input type="checkbox" 
              
                checked={list.query.item === 1 && list.query.valid} 
                onChange={(e)=>dispatch({type:'query', payload:{query:{
                  item:1,
                  valid:!list.query.valid
                }}})} id="1" />
                <label htmlFor="" >General Enquiry</label>
              </div>
             
            
           
            <div className={error.query ? 'error-input option' : 'option'}>
                <input type="checkbox"
                
                checked={list.query.item===2 && list.query.valid} 
                onChange={(e)=>dispatch({type:'query', payload:{query:{
                  item:2,
                  valid:!list.query.valid
                }}})} id="2"  />
                <label htmlFor="">Support Request</label>
              </div>                                    
          </div>
          {error.query && <div className="karla-errors">Please select a query type</div>}
        </Query>
        <Message>
          <div className="area-message">
            <label htmlFor="" className="karla-label">Message</label>
            <textarea name=""
            id="" value={list.message}
            onChange={(e)=>dispatch({type:'message',payload:{message:e.target.value}})} 
            className={error.message ?'error-input':''}
            ></textarea>
          </div>
          {error.message && <div className="karla-errors">This field is required</div>}
        </Message>
        <div className=" ending">
          <input type="checkbox" name="" id=""
            checked={list.ending}
            onChange={()=>dispatch({type:'ending',payload:{ending:!list.ending}})}/>
          <label htmlFor="" className="karla-label">I consent to be contacted by the team</label>
        </div>
        {error.ending && <div className="karla-errors">To submit this form please consent to be contacted</div>}
        <button>Submit</button>
       </form>
        
      </FormContact>
  );
}
