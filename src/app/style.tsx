import styled from "styled-components";


export const Name= styled.div`
margin-top: 20px;
display: flex;
.labelName{
    display: flex;
    margin-right: 2px;
    flex-direction: column;
    align-items: baseline;
    transition: all ease .3s;
    input{
        margin-top: 5px;
        width: 300px;
        padding: 10px 0;
        border-radius: 8px;
        border:1px solid hsl(186, 15%, 59%);
        &:hover{
        border: 2px solid hsl(169, 82%, 27%);
        
    }
    &:focus{
           border: 2px solid hsl(169, 82%, 27%);
            outline: none;
        }
       
    }
   
}
@media (max-width:376px) {
    display: flex;
    flex-direction: column;
}


`;
export const Email= styled.div`
.area{
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    input{
        margin-top:5px;
        width: 300px;
        border-radius:8px;
        padding: 7px 0;
        transition: all ease .3s;
        border: 1px solid hsl(186, 15%, 59%);
        &:hover{
            border: 2px solid hsl(169, 82%, 27%);
            
        }
        &:focus{
            border: 2px solid hsl(169, 82%, 27%);
            outline: none;
        }
    }
    
}
    
    

`;
export const Query= styled.div`
margin: 5px 0 ;
.options{
    display: flex;
    gap: 10px;
    
}
@media (max-width:376px) {
    .options{display: flex;
    flex-direction: column;
    }
}


`;
export const Message= styled.div`
.area-message{
    display: flex;
    flex-direction: column;
    textarea{
        margin-top: 5px;
        width: 600px;
        height: 60px;
        border-radius: 8px;
        border: 1px solid hsl(186, 15%, 59%);
        &:hover{
            border: 2px solid hsl(169, 82%, 27%);
        }
        &:focus{
            border: 2px solid hsl(169, 82%, 27%);
            outline: none;
        }
    }
   
    margin-bottom: 5px;
}
@media (max-width:376px) {
    .area-message{
        width:300px;
        textarea{
        width: 300px;
    }
    }
   
  
}
`;
export const FormContact= styled.div`
    
    width:750px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    form{
        background-color: hsl(0, 0%, 100%);
        display: flex;
        flex-direction: column;
        padding: 30px;
        border-radius: 8px;
        label{
        font-size: 16px;
    }
    button{
        width: 600px;
        padding: 15px 0;
        border-radius: 5px;
        cursor: pointer;
        background: hsl(169, 82%, 27%);
        color:hsl(0, 0%, 100%);
        @media (max-width:376px) {
            width:320px;
            form{
                width:auto;
                margin:10px auto;
                padding: 0px;
                align-items: center;
            }
        }
    }
    .error-input{
    border:2px solid hsl(0, 66%, 56%)
}
  
    }
    .option{
        margin: 8px 0;
        display: flex;
        width: 280px;  
        gap: 5px;
        border: 1px solid hsl(186, 15%, 59%);
        padding:8px 50px;
        border-radius: 10px;
        transition: all ease 0.3s;
        input,label{
            position:relative;
            right: 25px;
        }
        &:hover{
            border:2px solid hsl(169, 82%, 27%);
        }
        &:active{
            background-color:hsl(186, 15%, 59%);
            
        }
        &:focus{
            border:1px solid hsl(169, 82%, 27%);
            background-color:hsl(186, 15%, 59%);
            outline: none;
        }
}
.ending{
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
}
 .karla-errors {
  font-family: "Karla";
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  color:hsl(0, 66%, 56%);
}
.karla-label {
  font-family: "Karla";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  

}

.karla-sent{
    background-color: hsl(187, 24%, 22%);
    color:white;
    padding: 10px 15px;
    font-family: "Karla";
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: all ease .8s;
    
   
}
.icon-sent{
    display:flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 8px;
}
.sent{
    font-size:12px;
}
@media (max-width:376px) {
    width: 300px;
}
`;


