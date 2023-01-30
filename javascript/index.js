// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Your mash potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute('hidden');
        });
      });
    });
  });
});


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 2);
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 3);
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 4);
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 5);
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 6);
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    document.querySelector("#steak").innerHTML += `<li>Your steak is ready!</li>`
    document.querySelector("#steakImg").removeAttribute('hidden');
  })
  .final
  // ... Your code here

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let step1 = await obtainInstruction('broccoli' , 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    let step2 = await obtainInstruction('broccoli' , 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

    let step3 = await obtainInstruction('broccoli' , 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

    let step4 = await obtainInstruction('broccoli' , 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

    let step5 = await obtainInstruction('broccoli' , 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`

    let step6 = await obtainInstruction('broccoli' , 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`

    let step7 = await obtainInstruction('broccoli' , 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`

    document.querySelector("#broccoliImg").removeAttribute('hidden');
  } catch(err) {
    console.log(err)
  } 
}

makeBroccoli();

// Bonus 2 - Promise all

let s1 = obtainInstruction('brusselsSprouts' , 0);
let s2 = obtainInstruction('brusselsSprouts' , 1);
let s3 = obtainInstruction('brusselsSprouts' , 2);
let s4 = obtainInstruction('brusselsSprouts' , 3);
let s5 = obtainInstruction('brusselsSprouts' , 4);
let s6 = obtainInstruction('brusselsSprouts' , 5);
let s7 = obtainInstruction('brusselsSprouts' , 6);
let s8 = obtainInstruction('brusselsSprouts' , 7);

Promise.all( [s1, s2, s3, s4, s5, s6, s7, s8] )
  .then( (values) => {
    values.forEach((value) => document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`);
    document.querySelector("#brusselsSproutsImg").removeAttribute('hidden')
  })