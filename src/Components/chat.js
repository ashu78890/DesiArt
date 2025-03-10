import { Fragment, useEffect, useState } from "react"
import "./chat.css"

function ChatApp() {

    const responses = [
        "Hello! How can I assist you today?",
        "I'm here to help you with any questions.",
        "Can you please clarify your request?",
        "That's interesting! Tell me more.",
        "I'm not sure I understand, could you explain further?",
        "Thanks for your message! How else can I assist?",
        "Feel free to ask me anything.",
        "That's a great question! Let me think about it.",
        "I'm learning from you as we chat!",
        "Would you like to hear a fun fact?",
      ];
      


    const [chat, setChat] = useState("")
    const [chatHistory, setChatHistory] = useState([]);
    const [response,setResponse] = useState([])

    console.log(chatHistory,"history")

    const sendMessage = () => {
        if (chat.trim()) {
          setChatHistory((prevHistory) => [...prevHistory, { message: chat }]);
        //   setResponse((prevResponses) => [
        //     ...prevResponses,
        //     { respond: "Bot Response to:       " + chat },
        //   ]);
    
          setChat("");
        }
      }
    const handleChange = (e) =>{
        console.log(e.target.value,'value')
        setChat(e.target.value)
    }


    useEffect(()=>{
       
    },[chat])


    // const sum = (array)=>{
      
    // }

    for(let i = 5; i>0; i--){
        console.log(i,"print")
    }

    const fruits = ['apple', 'banana', 'cherry'];


    // for (let i = 0; i<= 1000; i+=3 )
    // {
    //   console.log(i,"three")
    // }

  //   function Sum (arr){
  //     let sum = 0;
  //     for(let i = 0; i < arr.length; i++ ){
  //        sum += arr[i]
  //     }
  //     console.log(sum,"pt")
  //     return sum
      
  //   }
    
  // Sum([1,2,5656,858])


  // for(let i=4;i>=0;i--){
  // console.log(i,"reverse")
  // }

  const newValue = [1,2,3,4]


  function reverse (arr){
    const snew = []
    // console.log(arr.length,"length")
    for(let i = arr.length-1;i>=0;i--){
      console.log(arr[i],"reverse")
       snew.push(arr[i])
    }
    console.log(snew)
     return snew
  }

  reverse(newValue)

  const numbers = [3, 5, 7, 2, 8, 6, 4,4];
  function findSimilar(arr,targetValue){
  let similar = 0;
  for(let i = 0;i<arr.length;i++ ){
    if(arr[i] == targetValue){
      similar++
    }
  }
  console.log(similar,"ss")
  return similar
  }
 findSimilar(numbers,3)



 function evenNumber (arr) {
   let result = []
  for(let i = 0; i< arr.length;i++ ){
    if(arr[i]%2  !== 0){
      result.push(arr[i])
    }

  }
  console.log(result,"rto")
  return result
 }

 evenNumber(newValue)

 let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30];
 function primeNumber(arr){
  let prime = []
  for(let i = 2; i < arr.length ; i++){
     if(i%2 === 0){
      prime.push(arr[i])
     }
  }
  console.log(prime,"prime")
  return prime
 }

 primeNumber(testArray)

console.log( testArray.splice(2,2,99,100,13),"splice")
console.log(testArray,"tt")



//   function findLargest (arr){
//     let large = arr[0]
//     for(let i = 1; i<arr.length,i++;){
//       if(arr[i]>large){
//         large = arr[i]
//       }
//     }
//     console.log(large,"big")
//     return large

//   }
  
  
//   findLargest(numbers)
    // const newValue = [1,2,3,4]
    // console.log(newValue.length,"length")

  // const smallestNumber =  () =>{
  
  // }

    function findMaximum (arr){
    let maxima = 0;
    for(let i = 0; i>=arr.length ; i++){
      if(arr[i]>maxima){
        
      }
    }
    }


    // function findVowel (str){
    //   let vowel = ["a","e","i","o","u"]
    //   let count = 0;
    //   for(let i = 0; i<str.length; i++){
    //    for(let j = 0;j<vowel.length;i++){
    //       if(str[i] === vowel[j]){
    //         count++;
    //            break;
    //       }
    //    }
    //   }

    // }

    // console.log(findVowel("ashish"),"dfd")

    function pyramid() {
      // let count = "#"
      for (let i = 9; i > 0; i--) {
        if (i % 2 !== 0) {
          // count++
        console.log("#".repeat(i)); 
       }
      }
      // console.log(count)co
    }
    
    pyramid();
    
  
    function isPalidrome (str){
     let another = "";
      for( let j = str.length -1 ;j>=0;j--){
       another += str[j]
     }
     console.log(another,"hh")
     if(str === another){
     
      console.log("true")
     }
    }

    isPalidrome("racecar")



    // const char  = "heyn"
    const char= ["asg","suci"]
    for (const  hwai of char){
        console.log(hwai[2],"hwai")
    }

    function reverseString(str){
      let char = "";
    for(let i = str.length-1;i>=0;i--){
      char += str[i]
    }
    return char
    }

  console.log(reverseString("datada"))


  function findthreeorFive(){
   for(let i=0;i<=100;i++){
    if(i%2===0 && i%3===0){
      console.log("fizzbuzz")
    }
    else if(i%2===0){
      console.log("fizz")
    }
    else if(i%3===0){
      console.log("fizz")
    }
    
   }
  }
  const findLarge = [1, 5, 10, 25, 16, -5]
 function findLargest(arr){
  let largest = arr[0];
  for(let i = 1; i<arr.length;i++){
    if(arr[i]>largest){
      largest=arr[i]
    }
   
  }
  return largest
 }

//  function findDuplicate (arr){
//   let btw=[];
//   let duplicate = arr[0];
//   // console.log()
//   for(let i = 0; i<arr.length;i++){
//     if(arr[i]!= duplicate){                        wrong one
//       duplicate = arr [i];
//       btw.push(arr[i]);
//     }
//   }
//   console.log(btw,"btw")
//   return btw
//  }
//  findDuplicate([ 2, 3, 4, 5,4])




function findDuplicate(arr){
  let duplicate = []
  for (let i=0; i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
      if(arr[j]===arr[i] && !duplicate.includes(arr[i])){
        duplicate.push(arr[i])
      }
    }
  }
  console.log(duplicate,"ss")
  return duplicate
  
}

findDuplicate([ 2, 3, 4, 5,4])


 
console.log( findLargest(findLarge),"dh")
//  findthreeorFive()

// function example() {
//   if (true) {
//     var x = 10;  
//   }
//   console.log(x); 
// }

// example();  
// function example() {
//   if (true) {
//     let y = 20;  
//     const z = 30; 
//   }
//   console.log(y);  
//   console.log(z);  
// }

// example();

// x = 10;
// console.log(x,"sg")
// var x = 10;
//    x= 16;

// function checking(){
//   let x = 10;
//      x=16;
//   console.log(x,"checking")

// }


// checking()


const arrer = [1,2,3,4,4]

// const findReduce = arrer.reduce()



   return (
    <Fragment>
      <div className="relative   height-10 border">
      <div className="fixed height-5 border-green"></div>

      </div>
      {/* <div className="inline border height-10">
        jdhjhjhsndnjj
      </div>
      <div></div>
     <div className="relative flex  height-10 border"></div>
    <div className="absolute flex  height-500 border-yellow"></div>
    <div className="fixed flex height-10 border-green"></div>   */}
     </Fragment>

        // <div className="relative height">
        //     <div>{chatHistory.map((chatItem, index) => (
        //   <div key={index} className="chat-message">
        //     {chatItem.message}
        //   </div>
        // ))}</div>
        //  <div>{response.map((chatItem, index) => (
        //   <div key={index} className="response-message">
        //     {chatItem.respond}
        //   </div>
        // ))}</div>
        // <div className="flex absolute">
        //     <input id="chat" value={chat} placeholder="type your message here" onChange={handleChange}></input>
        //     <div className="cursor" onClick={sendMessage}>Sent</div>
        // </div>
        // </div>
    )
}

export default ChatApp