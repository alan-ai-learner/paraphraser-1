

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
let data = ["It Will Fetched Text 1", "It Will Fetched Text 2", "It Will Fetched Text 3", "It Will Fetched Text 4", "It Will Fetched Text 5"]
const selectedArr = { node: '' }

const handleCLick = async () => {
    if (window.getSelection().toString().length > 0) {
        const text = window.getSelection().toString().trim()
        const F1selected = window.getSelection()
        // selectedArr.push(F1selected.anchorNode.parentElement.nodeName)
        selectedArr.node = window.getSelection().getRangeAt(0)
        console.log('hello', selectedArr, F1selected.anchorNode.parentElement)

        const replaceFromSuggestedText = (selected1, text) => {

            let pContainer = document.createElement('div');
            pContainer.id = "pcontainer"
            pContainer.style.border = "border: 1px solid rgb(230, 232, 238)"
            pContainer.style.borderRadius = "3px"
            pContainer.style.width = "360px"
            pContainer.style.boxShadow = "rgb(63 62 77 / 20%) 0px 2px 14px 0px"
            pContainer.style.transition = "height 0.1s ease 0"
            pContainer.style.height = "150px"
            pContainer.style.overflowY = "auto"
            pContainer.style.position = "absolute"
            pContainer.style.background = "rgb(255 255 255)"

            data.forEach((ele => {

                let divEleChild = document.createElement('div');
                divEleChild.textContent = `${ele}`
                divEleChild.style.color = "rgb(160, 34, 234)"
                divEleChild.style.border = "solid 1px #eceef4"
                divEleChild.style.alignSelf = "center"
                divEleChild.style.paddingTop = "8px"
                divEleChild.style.paddingBottom = "8px"
                divEleChild.style.display = "block"
                divEleChild.style.flexShrink = "initial"
                divEleChild.style.userSelect = "none"
                divEleChild.style.cursor = "pointer"

                divEleChild.onclick = (selected) => {
                    console.log("selected", selected.target.value, selected)
                    let range = selectedArr.node
                    range.deleteContents();
                    range.insertNode(document.createTextNode(`${ele}`));
                }

                divEleChild.onmouseover = () => {
                    divEleChild.style.background = "#ededed"
                }
                divEleChild.onmouseout = () => {
                    divEleChild.style.background = "white"
                }

                pContainer.appendChild(divEleChild)
            }))
            // pContainer.innerHTML = divEleChild

            F1selected.anchorNode.parentElement.appendChild(pContainer)
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
        // let api_url = "https://7c62-1-23-55-130.ngrok.io/paraphraser/"
        // let res = await fetch(api_url, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({text: "Hi, alankar"})
        // })
        // let orRes = await res.json()
        // console.log(res, orRes);
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

        // let res = await fetch("https://55b0-1-23-111-49.ngrok.io/", {
        //     method:'GET',
        //     mode: "no-cors",
        //     headers: {"Content-type": "application/json; charset=UTF-8",
        //             "Access-Control-Allow-Origin": "*",
        //             "Access-Control-Allow-Headers": "*"
        //     },
        //     redirect: 'follow'
        // })
        // // let oriRes = await res.json()
        // console.log(res, "it's res")


    }
}


document.addEventListener('mouseup', handleCLick);
