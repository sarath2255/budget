function regis(){
    let user = {
        uname:uname.value,
        em:em.value,
        psw:psw.value,
        income:[],
        expense:[],
        saving:0,
        spent:0
    }
    if(user.uname==""||user.em==""||user.psw==""){
        alert("Please enter all details!")
    }
    else{
        if(user.em in localStorage){
            alert("A profile with this email already exist!")
        }
        else{
            localStorage.setItem(user.em,JSON.stringify(user))
            alert("Details added succesfully.")
            window.location="./index.html"
        }
    }
    uname.value=""
    em.value=""
    psw.value=""
}
function login(){
    if(em1.value in localStorage){
        let user1 = JSON.parse(localStorage.getItem(em1.value))
        if(user1.psw == psw1.value){
            sessionStorage.setItem("users",JSON.stringify(user1))
            alert('Login successfull.')
            window.location="./wel.html"
        }
        else{
            alert('Login failed! Wrong password or Wrong email')
        }
    }
    else{
        alert('Invalid user')
        em1.value=""
    }
    psw1.value=""
}







var amounts=0;
function income(){
  totAmt=totalamount.value


  if(totAmt==""||isNaN(totAmt))
  {
      alert("Please enter a valid number")
  }
  else{
      localStorage.setItem("AMOUNT",totAmt)
      alert("Add successfully");
      data=Number(localStorage.getItem("AMOUNT"))
      console.log(data);

      amounts+=data;
      amount.innerHTML=amounts



  }
}


expenses=0;
balance=0
function expense(){
  exp=useramount.value
  expDetail=producttitle.value
  if(exp==""||isNaN(exp)){
      alert("Please enter a valid number")
  }
  else{
      localStorage.setItem("EXPENSE",exp)
      alert("Add succesfully")
      data1=Number(localStorage.getItem("EXPENSE"))
      console.log(data1);

      expenses+=data1;
      expenditurevalue.innerHTML=expenses

      balance=amounts-expenses
      balanceamount.innerHTML=balance
      console.log(balance);


      htmlData=`
      ${expDetail}   <------------------------------------>
      ${exp}
      `
      list.innerHTML+=htmlData
  }

}

function clearAll(){
    list.innerHTML=""
    balanceamount.innerHTML='0'
    expenditurevalue.innerHTML = '0'
    amount.innerHTML='0'
    useramount.value=""
    producttitle.value=""
    totalamount.value=""
   }


   function logout(){
    sessionStorage.clear()
    window.location = "./reg.html"
}