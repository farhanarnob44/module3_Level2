{
    // getter and setter
  
    class BankAccount {
      readonly id: number;
      public name: string;
      protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
    //  public addDeposite ( amount : number) {
    //       this._balance = this._balance+amount
    //   }
  
    // public  getBalance(){
    //       return this._balance
    //   }
      
    // get modifier 
    get Balance () {
        return this._balance;
    }

    set addDeposite (amount : number){
         this._balance = this._balance+amount
    }


    }
  
    class StudentAccount extends BankAccount{
      test(){
          this._balance
      }
      
    }
  
  
    const goribManusherAccount = new BankAccount(111, "farhan", 30);
    // goribManusherAccount.addDeposite (200);
    // const myBalance = goribManusherAccount.getBalance();

    goribManusherAccount.addDeposite = 50;
    const myBalance = goribManusherAccount.Balance; //property er mton kore
    console.log(myBalance);
  }
  