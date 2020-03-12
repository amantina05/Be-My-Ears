// import React from 'react'
// import PropTypes from 'prop-types'

// const speechToText = props => {
//   return (
//     <div>
//       <h2>Speech To Text</h2>
//     </div>
//   )
//   async function main() {
//     // Imports the Google Cloud client library
//     const speech = require('@google-cloud/speech')
//     const fs = require('fs')

//     // Creates a client
//     const client = new speech.SpeechClient()

//     // The name of the audio file to transcribe

//     // const fileName = '../public/Audio/brooklyn.wav'
//     const fileName =
//       '/Users/amantinasosa/Desktop/Junior Phase2/Be-My-Ears/public/Audio/brooklyn.wav'

//     // Reads a local audio file and converts it to base64
//     const file = fs.readFileSync(fileName)
//     const audioBytes = file.toString('base64')

//     // The audio file's encoding, sample rate in hertz, and BCP-47 language code
//     const audio = {
//       content: audioBytes
//     }
//     const config = {
//       encoding: 'LINEAR16',
//       sampleRateHertz: 16000,
//       languageCode: 'en-US'
//     }
//     const request = {
//       audio: audio,
//       config: config
//     }

//     // Detects speech in the audio file
//     //returns a promise that resloves to contain the result
//     const [response] = await client.recognize(request)
//     const transcription = response.results
//       .map(result => result.alternatives[0].transcript)
//       .join('\n')
//     console.log(`Transcription: ${transcription}`)
//     return `Transcription: ${transcription}`
//   }
//   main().catch(console.error)
// }

// speechToText.propTypes = {}

// export default speechToText

///////--------------------

import React, {useState} from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'
import {ReactMic} from 'react-mic'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening: PropTypes.func
}

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
  addNewNote
}) => {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState()
  const [record, setRecord] = useState(false)
  const [audio, setAudio] = useState()
  const [title, setTitle] = useState()

  if (!browserSupportsSpeechRecognition) {
    return 'Sorry, your browser is outdated, try using the latest version of Chrome'
  }

  const handleChange = () => {
    if (!isListening) {
      startListening()
      setRecord(true)
      setIsListening(true)
    } else {
      stopListening()
      setRecord(false)
      setIsListening(false)
      setNote(transcript)
    }
  }

  const onStop = recordedBlob => {
    console.log('recordedBlob is: ', recordedBlob + 'hi there')
    console.log('hello')

    setAudio(recordedBlob.blobURL)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addNewNote({
      time: new Date().toLocaleString(),
      title,
      content: note,
      audio
    })
    setTitle('')
    setNote('')
    resetTranscript()
  }

  const handleReset = e => {
    resetTranscript()
    setRecord(false)
    setRecord(true)
  }

  return (
    <div>
      <h2>Speech To Text</h2>
      {isListening && <button onClick={handleReset}> Reset </button>}
      <span>{transcript}</span>
      <div>
        <div>
          <p>Click the button to start/stop recording</p>
          <br />
          <button onClick={handleChange}>
            <i>mic</i>
          </button>
          {isListening && <p>Recording..</p>}
        </div>
        <ReactMic record={record} onStop={onStop} strokeColor="#000000" />
      </div>
      {/* {note && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={e => setTitle(e.target.value)}
              value={title}
              placeholder="Enter Title"
              type="text"
              required
            />
            <h4>Transcript</h4>
            <p>
              Make your edits here to improve the searching. If you want to
              continue recording, press the button again
            </p>
            <textarea
              name="transcript"
              onChange={e => setNote(e.target.value)}
              value={note}
            ></textarea>
            <button>
              <i>note_add</i>
              <span>Add Note</span>
            </button>
          </form>
        </div>
      )} */}
    </div>
  )
}

Dictaphone.propTypes = propTypes

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Dictaphone)
