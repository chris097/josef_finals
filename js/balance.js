function setBalance()
{
    var bal=document.getElementById("balance");

    localStorage.setItem("balance",bal.value);
}
function getBalance()
{
    var value=localStorage.getItem("balance");
    if (value==null) {value="1000";localStorage.setItem("balance","1000")};
    document.getElementById("balance").value=value
}