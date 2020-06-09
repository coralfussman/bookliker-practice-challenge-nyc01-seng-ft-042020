BASE_URL = "http://localhost:3000"
BOOK_URL = `${BASE_URL}/books`
USERS_URL = `${BASE_URL}/users`
document.addEventListener("DOMContentLoaded", function() {

    likesArray = []

    fetch(BOOK_URL)
    .then(response => response.json())
    .then(books => {
        renderBooksName(books)
    })
   
    const renderBooksName = books => {

        books.forEach(book => {
            const ulList =  document.querySelector("#list")
            const li = document.createElement("li")
            li.className = "lister"
            li.dataset.id = book.id
            //console.dir(li)
            li.innerText = book.title

            ulList.appendChild(li)
        })

    }

    const renderBooksShow = bookInfo => {
        bookInfo.forEach(book => {
            const showDiv =  document.querySelector("div#show-panel")
            showDiv.innerHTML = 
            `
            <h1> ${book.title}</h1>
            <img src="${book.img_url}">
            <p> ${book.description} </p>
            <h3> ${book.user}</h3>
        
            `
            const button = document.createElement('button')
                button.innerText = "like"
                showDiv.append(button)

            //thumbnail
            //description
            //users who have liked

        })
    }

    function renderBook(book) {
        const showDiv =  document.querySelector("div#show-panel")
            showDiv.innerHTML = 
            `
            <h1> ${book.title}</h1>
            <img src="${book.img_url}">
            <p> ${book.description} </p>`
            book.users.forEach(user => {
                const h3 = document.createElement('h3')
                h3.innerText = user.username
                showDiv.appendChild(h3)

            });
            const button = document.createElement('button')
            button.innerText = "like"
            showDiv.append(button)
            
        
    }

    //how to make this work as a helper function
    // const getUser = user => {
    //     book.users.forEach(user => {
    //        const h3 = document.createElement('h3')
    //        h3.innerText = user.username
    //         showDiv.appendChild(h3)
    //     });
    // }


  document.addEventListener("click", (event) => {
      const li = document.querySelector("#list > li")
    //   document.querySelector("#list > li")
      if(event.target ) {
          //figure out the how to correctly toggle thru the list
          const bookId = event.target.dataset.id 
          fetch(`${BOOK_URL}/${bookId}`)
          .then(resp => resp.json())
          .then(book => renderBook(book)) 
        }

      })
    //   function findBook(books) {
    //     books.find(function(id) {
    //         return id === event.target.dataset.id
    //     })
    //   }

      //document.querySelector("#list ${event.id}")

//   })

//   fetch(`${BOOK_URL}/${id}` {
        
//               method: 'POST',
//               headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({
//                   key: value,
//                   key2: value2
               
  
//               })
//             });
});
