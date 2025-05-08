{
    // type gaurds 

    type Alphanumeric = string | number

    const add = (param1 : Alphanumeric, param2: Alphanumeric) : Alphanumeric => {

        if(typeof param1 === 'number' && typeof param2 === "number"){
            return param1+param2
        }
        return param1.toString() + param2.toString()
    }
    const result = add (2,4)
    console.log(result)



    type NormalUSer = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: "admin"
    }

    const getUser = (user : NormalUSer | AdminUser) =>{
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}` )
        }else{
            console.log(`My name is ${user.name}`)
        }
    }

}