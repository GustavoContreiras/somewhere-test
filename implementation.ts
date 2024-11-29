import { AssemblyAI } from 'assemblyai'
import 'dotenv/config'

const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY || ''

if (!ASSEMBLYAI_API_KEY) {
    throw new Error('ASSEMBLYAI_API_KEY is required')
}

const assemblyAIClient = new AssemblyAI({
  apiKey: ASSEMBLYAI_API_KEY
})

const audioFile = "./recording.ogg"

const params = {
  audio: audioFile,
  speaker_labels: true,
  speakers_expected: 2
}

const run = async () => {
  const transcript = await assemblyAIClient.transcripts.transcribe(params)

  const messagesLength = transcript.utterances!.length || 0

  // Start from 1 to skip the first message which is the robot greeting message
  for (let i = 1; i < messagesLength; i++) {
    
    const message = transcript.utterances 
        ? transcript.utterances[i]
        : null

    if (!message) {
        continue
    }

    const speaker = message.speaker === 'B' ? 'AGENT' : 'CALLER'
    const text = message.text

    console.log(`${speaker}: ${text}`)
  }
}

run()