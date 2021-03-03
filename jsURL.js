//url = document.URL
var url = 'https://limnuz.github.io/index.html?channel="https://www.youtube.com/channel/UCwJchClzCtxlv8QFGH6pjRQ?sub_confirmation=1"&link=http://duckduckgo.com'

function jsURL(url){
    //Separa o conteúdo entre aspas(convenciona-se ser endereços web com "?", "&" e "=") e os codifica em base-64 para não misturar com o resto da string
    url = url.split('"')
    for(i in url){
        if(i%2 != 0){
            
            url[i] = '"' + window.btoa(`${url[i]}`) + '"'
        }
    }

    //Reune novamente a string depois de removidas as aspas("") e codificados os endereços
    var temp = ""
    for(let i in url){
        temp += url[i]
    }

    url = temp.split("?")[1]
    
    
    temp = url.split("&")
    url = []
    for(let i in temp){
        let temp2 = temp[i].split("=")
        for(let j in temp2){
            url.push(temp2[j])
        }
    }

    

    //deixa os parametros em formato de texto para ser convertido em JSON
    temp = "{"
    for(let i = 0; i < url.length; i+=2){
        if(url[i+1].indexOf('"') == -1){
            temp += `"${url[i]}":"${url[i+1]}",'`
        } else {
            window.alert(i)
            temp += `"${url[i]}":"${window.atob(url[i+1].split('"')[1])}",`
        }
    }
    url = temp.substring(0, temp.length - 2) + "}"
    window.alert(url)

    url = JSON.parse(url)

    return url
}

function teste1(){
    var body = document.body

    url = jsURL(url)

    body.innerHTML = `${url.channel}, ${url.link}`
}



//https://limnuz.github.io/index.html?channel="https://www.youtube.com/channel/UCwJchClzCtxlv8QFGH6pjRQ?sub_confirmation=1"&link=http://duckduckgo.com