class account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500;
    constructor(id, Name,amount){
        this.acc_Id =id;
        this.acc_Name = Name;
        this.acc_Bal= amount;
    }
    deposit_Amount(){}
    withdrawl(){}
    get_Bal(){}
}
let a1=new Account()
a1.deposit_Amount(500)
a1.deposit_Amount(1500)
a1.deposit_Amount(2500)
let a2=new Account()
a2.deposit_Amount(50)
a2.withdrawl(10)
let a3=new Account()
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a1.get_Bal())
console.log(a2.get_Bal())
console.log(a3.get_Bal())
