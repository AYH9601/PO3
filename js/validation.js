const form = document.querySelector("#member"); 
const btnSubmit = form.querySelector("input[type=submit]"); 

btnSubmit.addEventListener("click", e=>{
   //userid
   if(!isTxt("userid", 5)) e.preventDefault();
   //pwd
   if(!isPwd("pwd1", "pwd2", 5)) e.preventDefault(); 
   //email
   if(!isEmail("email")) e.preventDefault(); 
   //select
   if(!isSelect("planet")) e.preventDefault(); 

   //gender
   // if(!isCheck("gender")) e.preventDefault(); 

   //hobby
   // if(!isCheck("hobby")) e.preventDefault(); 
   //comments
   if(!isTxt("comments", 20)) e.preventDefault(); 
}); 


function isTxt(name, len){
   if(len === undefined) len =5; 
   let input = form.querySelector(`[name=${name}]`);  
   let txt = input.value; 
   
   if(txt.length >=len && txt !=""){
      const errMsgs = input.closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) input.closest("td").querySelector("p").remove(); 
      return true; 
   }else{
      const errMsgs = input.closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) input.closest("td").querySelector("p").remove(); 

      const errMsg = document.createElement("p"); 
      errMsg.append(`Please enter ${len} or more characters.`); 
      input.closest("td").append(errMsg); 
      return false; 
   }
   
}

function isEmail(name){
   let input = form.querySelector(`[name=${name}]`); 
   let txt = input.value; 

   if(/@/.test(txt)){
      const errMsgs = input.closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) input.closest("td").querySelector("p").remove();
      return true; 
   }else{
      const errMsgs = input.closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) input.closest("td").querySelector("p").remove(); 

      const errMsg = document.createElement("p"); 
      errMsg.append("Please enter your full email address including @."); 
      input.closest("td").append(errMsg); 
      return false; 
   }
}

function isCheck(name){
   let inputs = form.querySelectorAll(`[name=${name}]`); 
   let isChecked = false; 

   for(let el of inputs){
      if(el.checked) isChecked = true; 
   }

   if(isChecked){
      const errMsgs = inputs[0].closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) inputs[0].closest("td").querySelector("p").remove(); 
      return true; 
   }else{
      const errMsgs = inputs[0].closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) inputs[0].closest("td").querySelector("p").remove(); 

      const errMsg = document.createElement("p"); 
      errMsg.append("Please check the required fields."); 
      inputs[0].closest("td").append(errMsg); 

      return false; 
   }
}


function isPwd(name1, name2, len){
   let pwd1 = form.querySelector(`[name=${name1}]`); 
   let pwd2 = form.querySelector(`[name=${name2}]`); 
   let pwd1_val = pwd1.value; 
   let pwd2_val = pwd2.value; 

   const num = /[0-9]/; 
   const eng = /[a-zA-Z]/;
   const spc=/[~!@#$%^&*()_+]/;

   if(pwd1_val === pwd2_val && pwd1_val.length>=len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)){
      const errMsgs = pwd1.closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove(); 
      return true; 
   }else{
      const errMsgs = pwd1.closest("td").querySelectorAll("p"); 
      if(errMsgs.length>0) pwd1.closest("td").querySelector("p").remove(); 

      const errMsg = document.createElement("p"); 
      errMsg.append(`Enter a password of ${len} or more characters, including English, numeric, and special characters.`);
      pwd1.closest("td").append(errMsg);
      return false; 
   }
}

function isSelect(name){
   let sel = form.querySelector(`[name=${name}]`); 
   let sel_index = sel.options.selectedIndex; 
   let val = sel[sel_index].value; 
   
   if(val !== ""){
      const errMsgs = sel.closest("td").querySelectorAll("p"); 
      if(errMsgs.length >0) sel.closest("td").querySelector("p").remove(); 
      return true; 
   }else{
      const errMsgs = sel.closest("td").querySelectorAll("p"); 
      if(errMsgs.length >0) sel.closest("td").querySelector("p").remove(); 

      const errMsg = document.createElement("p"); 
      errMsg.append("Please select a required item."); 
      sel.closest("td").append(errMsg); 

      return false; 
   }
}