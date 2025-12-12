//  • Fetch API + async/await example
let apiUrl = "https://jsonplaceholder.typicode.com/users";


// async function gitHubUsers(apiUrl) {
//     let response = await fetch(apiUrl);
//     response.json().then(data => console.log(data));
// }

async function gitHubUsers(apiUrl) {
    let response = await fetch(apiUrl);
    try {
        if(!response.ok) {
        throw new Error(`Http Error: ${response.status}`)
        }
        const data = await response.json();
        console.log("api data", data);
        // response.json().then(data => console.log(data));
   } catch(error) {
      console.error("Fetch error:", error);
   }    
}

/* 
Misuse of await and .then() together —
Once you use await, the result is already resolved.

You don’t need to call .then() on it again.
In fact, api_result is a Response object, not a promise anymore at that point.

You’re not parsing the JSON response —
The data from fetch() needs to be converted using .json() before you can use it.
*/

let gitData = gitHubUsers(apiUrl);

