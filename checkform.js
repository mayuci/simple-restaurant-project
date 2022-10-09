window.onload = init;

function init() {
document.getElementById('customerName').value=name; 
var Today=new Date();
document.getElementById('date1').value=Today.getDate()+"/"+ (Today.getMonth()+1) + "/" +Today.getFullYear();
//document.getElementById('date1').value=Today;

document.forms[0].onsubmit = function() {
    if (this.checkValidity()) {
       
            if(document.getElementById('totalAmount').value>0 ) {
            
                    if (confirm("Are sure that you would like to submit the order?") == 1){   // 1==1 True
                    //name1= document.getElementById('customerName').value;
                    alert( name + " , your order has been successfully submitted. You may proceed to payment ")
               
                         window.print();
                         return true;
                         //document.book.submit();
                         //location.href = "success.html";
                         //window.location = "success.html" public name;                                
                    }else{
                        return false;  
                    }
                    
            
            } else { 
                    alert("Total Amount is invalid");   
                    return false;      
           }     

     }
    }
}

 
