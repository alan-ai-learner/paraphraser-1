

// const replaceFromSuggestedText = (selected1, text) => {
//     let li = document.createElement('li');
//     li.textContent = "Services"
//     li.style.background = "blue"
//     li.onclick = (selected) => {
//         // alert("hello")
//         // selected.anchorNode.parentElement.
//         // let range = selected.getRangeAt(0);
//         console.log(selected1, selected, "Selected Text", text,)
//         // range.deleteContents();
//         // range.insertNode(document.createTextNode("Hello, Newton"));
//     }

//     selected1.anchorNode.parentElement.appendChild(li)
//     // let range = selected.getRangeAt(0);
//     // range.setStartAfter(li)

// }
const selectedArr = { node: '' }

const handleCLick = async () => {
    if (window.getSelection().toString().length > 0) {

        const text = window.getSelection().toString().trim()
        const F1selected = window.getSelection()
        // selectedArr.push(F1selected.anchorNode.parentElement.nodeName)
        selectedArr.node = window.getSelection().getRangeAt(0)
        console.log('hello', selectedArr, F1selected.anchorNode.parentElement)


        const replaceFromSuggestedText = (selected1, text) => {
            console.log(selected1, 'selected1');

            let li = document.createElement('li');
            li.textContent = "Services"
            li.style.background = "blue"
            li.onclick = (selected) => {
                // alert("hello")
                // selected.anchorNode.parentElement.
                let range = selectedArr.node
                console.log(selected1, "Selected Text", text, selectedArr, "selectedArr")
                range.deleteContents();
                range.insertNode(document.createTextNode("Hello, Newton"));
            }

            F1selected.anchorNode.parentElement.appendChild(li)
            // let range = selected.getRangeAt(0);
            // range.setStartAfter(li)

        }

        replaceFromSuggestedText(F1selected, text)

        // let range = selected.getRangeAt(0);
        // selected.getRangeAt(0).setStartBefore()
        // let range = selected.getRangeAt(0);
        // let li = document.createElement('li');
        // li.textContent = "Services"
        // li.style.background = "blue"
        // li.onclick = () => {
        //     // document.getElementsByTagName('')
        //     alert("hello", selected.toString(), "hello")
        // }
        // console.log("document.activeElement", document.activeElement)

        // let range = selected.getRangeAt(0);

        // range.insertNode(li)
        // replaceFromSuggestedText(selected, text)

        // selected.anchorNode.parentNode.insertBefore(li, selected.anchorNode.parentNode.nextSibling);

        // selected.anchorNode.appendChild(<p>Hello</p>)
        // window.getSelection().anchorNode.parentElement.appendChild()
        // console.log("e", window.getSelection().anchorNode.parentElement.nodeName, window.getSelection(), "textfghj", text1)
        // let range = selected.getRangeAt(0);
        // range.deleteContents();
        // range.insertNode(document.createTextNode("replacementText"));
        // for gmail
        // let eleId = `#${document.getSelection().anchorNode.parentElement.parentElement.id}`
        console.log(document.getSelection(), 'bj')
        // document.getSelection().toString()  === "Hello Newton"
        // document.querySelector('p').textContent = "hhh"
        // document.getSelection().anchorNode.textContent === "hello newton"
        // window.getSelection().anchorNode.parentElement.innerText === "jay guru maharaj ji"

        // console.log(window.getSelection().anchorNode.parentElement.nodeName, text1, window.getSelection())
        // let api_url = "https://5086-113-193-79-29.ngrok.io/paraphraser/"
        // let data = {text: "hello"};
        // let res = await fetch(api_url, {
        //     method: "POST",
        //     mode: 'no-cors',
        //     cache: 'no-cache',
        //     credentials: 'same-origin',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({text: "Hi, alankar"})
        // })


        // console.log(res)
        // let _data = {
        //     text: "hi, newton"
        //   }
        // https://d737-113-193-79-29.ngrok.io/paraphraser/
        //   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${good}`, {
        //     method: "POST",
        //     // mode: 'cors',
        //     body: JSON.stringify({text: text1}),
        //     headers: {"Content-type": "application/json; charset=UTF-8"}
        //   })
        //   .then(response => console.log(response)) 

        //   .then(json => console.log(json));
        //   .catch(err => console.log(err));


        // let api_res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text1}`);
        // let res = await api_res.json()
        // let definitions = res[0].meanings[0].definitions
        // console.log("res", res, "api_res", "api_res", typeof(res), "definitions", definitions)

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        
        // var raw = JSON.stringify({
        //   "text": "Collections let you group related requests, making them easier to access and run."
        // });
        
        // var requestOptions = {
        //   method: 'POST',
        //   headers: myHeaders,
        //   body: raw,
        // //   mode: 'no-cors',
        //   redirect: 'follow'
        // };
        
        // fetch("https://1e8c-1-23-111-49.ngrok.io/paraphraser/", requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error'))
            // .catch(error => console.log('error')

        // let origRes = await res.text()
        // console.log("origRes",  origRes)

        let res = await fetch("https://1e8c-1-23-111-49.ngrok.io/", {
            method:'GET',
            mode: "no-cors",
            redirect: 'follow'
        })
        let oriRes = await res.text()
        console.log(res, oriRes)


    }
}


document.addEventListener('mouseup', handleCLick);