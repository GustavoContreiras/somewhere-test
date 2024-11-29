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

// Output:
// Speaker A: Thank you for calling all of our agents.
// Speaker B: Thank you for calling Bauman. I'm Jacob. How may I help you?
// Speaker A: Hi, Jacob. This is Nancy O'Leary. I live at 1140 10th street in apartment 2 in Santa Monica. And I don't know if this qualifies for emergency, but it is to me. My kitchen sink is totally backed up, both sides of it where the disposal is and on the other side, and I just cannot clear it. I've tried plunging and everything, and it just won't clear. And I even put my hand down and I couldn't find anything really blocking it. So I just don't know.
// Speaker B: Well, ma'am, I'm really sorry to hear about this, first of all. And yes, I can have an emergency person call you back about this. So they will call you and they'll let you know what can be done about the whole situation. But I need some of your information, like your first and last name as well as your callback number. May I have that, please?
// Speaker A: Yeah, so it's Nancy O'Leary. O, apostrophe, L, e, a, R, Y.
// Speaker B: Okay, so that's O, apostrophe, L, E, A, R, Y. Right?
// Speaker A: Yes. Yes.
// Speaker B: All right. And for your first name, that's N A, N, C, Y.
// Speaker A: Yes.
// Speaker B: Okay. Ma'am, may I also have a callback number?
// Speaker A: Yes. 310-433-4686.
// Speaker B: Okay, so that's 310-433-4686, right?
// Speaker A: Yeah.
// Speaker B: And you were calling from the apartment 2 of Building 11, 40 10th Street, Santa Monica, Zipka 904, correct?
// Speaker A: Correct. Yes.
// Speaker B: Okay. And this is in. This is about a sink blockage. A sink stoppage? Yes.
// Speaker A: Yeah. And there's water. The water won't even drain, so it fills.
// Speaker B: Yeah, it's putting dirty water. And you want someone to come and see to it. I'll make sure to forward this message to the office right away. So they will call you back as soon as possible. Is there anything.
// Speaker A: Okay, thank you so much. No, you're terrific. Thank you very much.
// Speaker B: You, too, ma'am. Have a good one, Ms. O'leary.
// Speaker A: Thank you. Bye.
// Speaker B: Goodbye.