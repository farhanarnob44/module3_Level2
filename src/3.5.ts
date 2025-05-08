{
  // access modifiers

  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

   public addDeposite ( amount : number) {
        this._balance = this._balance+amount
    }

  public  getBalance(){
        return this._balance
    }
    
  }

  class StudentAccount extends BankAccount{
    test(){
        this._balance
    }
    
  }


  const goribManusherAccount = new BankAccount(111, "farhan", 30);
  goribManusherAccount.addDeposite (200);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);
}
