// async function getPost(id) {
//   try {
//     // console.log("try");
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
//     console.log(response);
//     const data = await response.json();
//     console.log(data);

//     if (!response.ok) {
//       throw new Error(`message: "Response ok was false ${response.status}`);
//     }


//   } catch (e) {
//     console.log(e.message);
//     // Will run if try doesnt resolve
//   } finally {
//     // console.log("finally");
//     // Will happen at the end regardless of try/catch results
//   }
//   // My api code
// }

// getPost(3478);

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function postPost(userId, body, title, method = "GET") {
  try {
    // console.log("try");
    const settings = {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId
      })
    };
    let response;
    if (method === "GET") {
      response = await fetch(`${BASE_URL}/posts/`);
    } else {
      response = await fetch(`${BASE_URL}/posts/`, settings);
    }

    const data = await response.json();
    console.log(data);
    console.log(response);

    // if (response.status !== 201) {
    //   throw new Error("I want to go to catch");
    // }

  } catch (e) {
    console.log(e);
    console.log(e + " catch");
    // Will run if try doesnt resolve
  } finally {
    console.log("finally");
    // Will happen at the end regardless of try/catch results
  }
  // My api code
}

postPost(2, "lorem masse greier", "Lorem");