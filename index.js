
document.querySelector('body').appendChild(document.createElement("h1"))

const replaceFromSuggestedText = (selected1, text, isLoading, event) => {
    // var rect = event.target.getBoundingClientRect();
    // var x = event.clientX - rect.left;
    // var y = event.clientY - rect.top;

    // console.log(event.pageY)

    let pContainer = document.createElement("div")
    pContainer.id = "pcontainer"
    // pContainer.setAttribute("class", "pcontainer")
    pContainer.style.border = "border: 1px solid rgb(230, 232, 238)"
    pContainer.style.borderRadius = "3px"
    // pContainer.style.top = `${event.pageY + 10}px`
    // pContainer.style.left = `${event.pageX}px`
    pContainer.style.width = "360px"
    pContainer.style.display = "block"
    pContainer.style.boxShadow = "rgb(63 62 77 / 20%) 0px 2px 14px 0px"
    pContainer.style.transition = "height 0.1s ease 0"
    pContainer.style.height = "150px"
    pContainer.style.overflowY = "auto"
    pContainer.style.position = "absolute"
    pContainer.style.background = "rgb(255 255 255)"

    let h2 = document.createElement('h2')
    h2.textContent = "AI-Phraser"
    h2.style.textAlign = "center"
    h2.style.paddingTop = '7px'
    h2.style.paddingBottom = "5px"
    h2.style.lineHeight = 1;
    h2.style.background = "#47ad8c"
    h2.style.fontWeight = 400;
    h2.style.margin = '0px'
    h2.style.fontFamily = "cursive"
    h2.style.fontSize = "30px"
    pContainer.appendChild(h2)

    if (!isLoading) {
        let loadingEle = document.createElement('div');
        loadingEle.id = "loadingEle"
        loadingEle.textContent = "Loading..."
        loadingEle.style.height = "108px";
        loadingEle.style.paddingTop = "35px";
        loadingEle.style.textAlign = "center";
        pContainer.appendChild(loadingEle);
    }
    else {
        let loadingElementByID = document.getElementById('loadingEle')
        // loadingElementByID.remove()

        data.forEach((ele => {

            let divEleChild = document.createElement('div');
            divEleChild.textContent = `${ele}`
            divEleChild.style.color = "rgb(160, 34, 234)"
            divEleChild.style.border = "solid 1px #eceef4"
            divEleChild.setAttribute("class", "pcontainer")
            divEleChild.style.alignSelf = "center"
            divEleChild.style.paddingTop = "8px"
            divEleChild.
            divEleChild.style.paddingBottom = "8px"
            divEleChild.style.display = "block"
            divEleChild.style.flexShrink = "initial"
            divEleChild.style.userSelect = "none"
            divEleChild.style.cursor = "pointer"

            divEleChild.onclick = (selected) => {
                if (event.target.nodeName === "TEXTAREA") {
                    // event.target.value = `${ele}`
                    let range = selectedArr.node

                    // range.deleteContents();
                    // range.innerText = "hyuuiii"
                    pContainer.remove()
                }
                else {
                    // console.log("selected", selected.target.value, selected)
                    let range = selectedArr.node
                    range.deleteContents();
                    range.insertNode(document.createTextNode(`${ele}`));
                    pContainer.remove()
                    // event.target.value = `${ele}`
                    // pContainer.remove()
                }
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

    }
    // document.querySelector('body').appendChild(pContainer)


    selected1.anchorNode.parentElement.appendChild(pContainer)
    // let range = selected.getRangeAt(0);
    // range.setStartAfter(li)

}



let data = ["It Will Fetched Text 1", "It Will Fetched Text 2", "It Will Fetched Text 3", "It Will Fetched Text 4", "It Will Fetched Text 5"]
const selectedArr = { node: '', text: '', }

const handleCLick = async (event) => {
    if (window.getSelection().toString().length > 0) {
        const text = window.getSelection().toString().trim()
        console.log("1", event.target.nodeName, event, window.getSelection(), ` vaue: ${event.target.value}, ${text}`)
        selectedArr.node = window.getSelection().getRangeAt(0)
        if (text !== selectedArr.text) {
            // console.log("3");
            selectedArr.text = text
            const F1selected = window.getSelection()
            // selectedArr.push(F1selected.anchorNode.parentElement.nodeName)
            // console.log('hello', selectedArr, F1selected.anchorNode.parentElement)
            let isLoading = true

            replaceFromSuggestedText(F1selected, text, isLoading, event)

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
            // console.log(document.getSelection(), 'bj')
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
}


document.addEventListener('mouseup', handleCLick);

// window.addEventListener('load', () => {
//     let ele = document.body
//     let pContainer = document.createElement('div');
//     pContainer.setAttribute('class', "pcontainer")
//     ele.appendChild(pContainer)
// })

const handleMouseDown = (event) => {
    console.log("2", event.target.id, event)
    let eleContainer = document.getElementById('pcontainer');
    if (event.target.id !== "pcontainer" && eleContainer !== null && event.target.className !== "pcontainer") {
        eleContainer.remove()
    }
}

document.addEventListener('mousedown', handleMouseDown)
