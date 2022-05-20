window.recognition=new SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
const recognition =new SpeechRecognition()
recognition.interimResult=true

let p=document.createElement('p')
const words=document.querySelector('.words')
words.appendChild(p)

recognition.addEventListener('result', e=>{

const transcription=Array.from(e.results)
.map(result=>result[0])
.map(result=>result.transcription)
.join('')

p.textContent=transcription
if(e.results[0].isFinal) {
    p=document.createElement('p')
    words.appendChild(p)
}

})

recognition.addEventListener('end', recognition.start)
recognition.start()