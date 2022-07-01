// Synchronous

// console.log(" I ");

// console.log(" eat ");

// console.log(" ice cream ");

// console.log("  with a ");

// console.log(" spoon ");

// Asynchronous

// console.log(" I ");

// console.log(" eat ");

// setTimeout(()=>{console.log(" ice cream ");},4000);   

// console.log("  with a ");

// console.log(" spoon ");
            
 //arrow function
//  setTimeout(()=>{}

//regular function
// function abcdef(a,b,c,d){ }

//callbacks
//regular function
// function one(){
//     console.log(" step 1 ");
// }

// function two(){
//     console.log(" step 2 ");
// }

// one();
// two();

//not regular
// function one(call_two){              // call_two is just a argumennt
//     console.log(" step 1 complete please call step 2");
//     call_two()
// }

// function two(){
//     console.log(" step 2 ");
// }

// one(two)

// example of callbacks(ABOVE)
// let order =(call_production)=>{
//     console.log("order placed, please call production");
//     call_production();
// };


// let production = ()=>{
//     console.log("order recieved, starting production");
// };

// order(production);

// let stocks = {                                                                  
//     Fruits : ["strawberry", "grapes", "banana", "apple"],                        
                       
// };

// console.log(stocks.Fruits[2]);

// let stocks = {                                                                  
//     Fruits : ["strawberry", "grapes", "banana", "apple"],                    
//        liquid : ["water", "ice"],
//        holder : ["cone", "cup", "stick"],
//        toppings : ["chocolate", "peanuts"],                  
// };

// let order =(Fruit_name,call_production)=>{
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//         call_production();
//     }, 2000);
   
// };

// let production = ()=>{
//     setTimeout(()=>{
//         console.log("production has started");

//       setTimeout(()=>{
//         console.log("the fruit has been chopped");

//         setTimeout(()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            
//             setTimeout(()=>{
//                 console.log("the machine was started");

//                 setTimeout(()=>{
//                     console.log(`ice cream was placed on ${stocks.holder[0]}`);

//                     setTimeout(()=>{
//                         console.log(`${stocks.toppings[0] } was added as toppings`);

//                         setTimeout(()=>{
//                             console.log("serve ice cream")
//                         },2000)
//                     },3000)
//                 },2000)
//             },1000);
//         },1000);
//       },2000);

//     }, 0000);
// };

// order(0, production);

//Promises
// Relation between time & work
// let stocks = {                                                                  
//     Fruits : ["strawberry", "grapes", "banana", "apple"],                    
//        liquid : ["water", "ice"],
//        holder : ["cone", "cup", "stick"],
//        toppings : ["chocolate", "peanuts"],                  
// };

// let is_shop_open = true;

// let order = (time, work) =>{
//     return new Promise( (resolve, reject) =>{
//         if( is_shop_open){
//             setTimeout(()=>{
//                 resolve( work() )
//             },time)
//           }else{
//             reject(console.log("our shop is closed"))
//         }
//     });
// };

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{                                                                       //promise chaining
//     return order (0000, () => console.log("production has started"));
// })                       

// .then(()=>{
//     return order(2000, ()=>console.log("the fruit was chopped"));
// })

// .then(()=>{
//     return order(1000, ()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//     })
// })

// .then(()=>{
//     return order(1000, ()=>console.log("start the machine"))
// })

// .then(()=>{
//     return order(2000, ()=>{
//         console.log(`ice cream placed on ${stocks.holder[0]}`)
//     })
// })

// .then(()=>{
//     return order(3000, ()=>{
//         console.log(`${stocks.toppings[0]} choclate was selected`)
//     })
// })

// .then(()=>{
//     return order(2000, ()=>console.log("ice cream was served"))
// })

// .catch(()=> {
//     console.log("Customer left");                                           //catch handller only work our promise is rejected     
//                                                                               //e.g let is_shop_open = false;
// })

// .finally(()=>{
//     console.log("day ended, shop is closed");                                // finally works on both statement true and false
// })


// Difference between promises and async/awaits
// in promise
// let stocks = {                                                                  
//     Fruits : ["strawberry", "grapes", "banana", "apple"],                    
//        liquid : ["water", "ice"],
//        holder : ["cone", "cup", "stick"],
//        toppings : ["chocolate", "peanuts"],                  
// };

// let is_shop_open = true;

// let order = () =>{

//     return new Promise( (resolve, reject)=>{
//         if(true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// in async/awaits                                                  // in async/awaits we gonna write try, catch & finally                
// let stocks = {                                                                  
//     Fruits : ["strawberry", "grapes", "banana", "apple"],                    
//        liquid : ["water", "ice"],
//        holder : ["cone", "cup", "stick"],
//        toppings : ["chocolate", "peanuts"],                  
// };

// let is_shop_open = true;

// async function order (){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc dosen't exist", error)
//     }

//     finally{
//         console.log("runs code anyways")
//     }
// }

// order()
// .then(()=> {
//     console.log("dgdsgougfuw");
// })


//Lets do a small test

// let stocks = {                                                                  
//     Fruits : ["strawberry", "grapes", "banana", "apple"],                    
//        liquid : ["water", "ice"],
//        holder : ["cone", "cup", "stick"],
//        toppings : ["chocolate", "peanuts"],                  
// };

// let is_shop_open = true;


// let toppoings_choice =()=> {
//     return new Promise( (resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(
//                 console.log("which toppings would you love?")
//             );
            
//         },3000);
//     });
// };

// async function kitchen ( ){
//   console.log(" A ")
//   console.log(" B ")
//   console.log(" C ")

//   await toppoings_choice ()

//   console.log(" D ")
//   console.log(" E ")
// }

// kitchen()

// console.log("doing the dishesh")
// console.log("cleaning the tables")
// console.log("taking the orders")


//let's open our shop
//relation between time and work

let stocks = {                                                                  
    Fruits : ["strawberry", "grapes", "banana", "apple"],                    
       liquid : ["water", "ice"],
       holder : ["cone", "cup", "stick"],
       toppings : ["chocolate", "peanuts"],                  
};

let is_shop_open = true;

function time(ms){
    return new Promise ( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms)
        }else {
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen () {
    try{

        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000)
        console.log("start the production")

        await time(2000)
        console.log("cut the fruit")

        await time (1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time (2000)
        console.log("serve ice cream")
    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen();