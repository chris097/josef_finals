function setInitial()
        {
             var value=localStorage.getItem("balance");
             if (value==null) {localStorage.setItem("balance","1000")};
        }
 
        setInitial()
 
        function depositTransaction()
        {
            var balance =document.getElementById("balance");
            var charge  =document.getElementById("charge");
            var amount  =document.getElementById("amount");
            var bal=localStorage.getItem("balance");
            // alert(amount.value);
            // alert(charge.value);
            // alert(bal);

            bal=parseFloat(bal)-parseFloat(charge.value)+parseFloat(amount.value);
            //alert("new balance: "+bal);
            balance.value=bal;
            localStorage.setItem("balance",bal);
        }
        function clearInput() 
        {
            var balance =document.getElementById("balance");
            if(balance.value !== Number){
                return balance.value = ''
            }
        }