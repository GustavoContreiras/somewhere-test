# Technical Assignment: Call Recording Transcription Service

This was created by Gustavo Contreiras.

## Setup

1. Put the `recording.ogg` in the same folder as `implementation.ts` and `README.md`
2. Go into https://www.assemblyai.com/app and create a free account (you will receive $50 in credits)
3. Generate an AssemblyAI API Key
4. Create a `.env` file and paste the following content inside of it:
   `ASSEMBLYAI_API_KEY=f870b79d13064a9eb40b5afb7406bfbb`
5. Create a `package.json` file and paste the following content inside of it:
    ```
    {
        "name": "somewhere-test",
        "version": "1.0.0",
        "main": "implementation.ts",
        "scripts": {
            "start": "npx ts-node .\\implementation.ts"
        },
        "author": "Gustavo Contreiras",
        "license": "UNLICENSED",
        "description": "Technical Assignment: Call Recording Transcription Service",
        "dependencies": {
            "assemblyai": "^4.8.0",
            "dotenv": "^16.4.5"
        }
    }
    ```
6. Run `npm install`
7. Run `npm run start` (if it asks you to install `ts-node` package, install it)
8. Wait for some seconds and you will see the result with transcripted text

## Node version used

v20.11.1

## The output

```
npm run start

> somewhere-test@1.0.0 start
> npx ts-node .\implementation.ts

AGENT: Thank you for calling Bauman. I'm Jacob. How may I help you?
CALLER: Hi, Jacob. This is Nancy O'Leary. I live at 1140 10th street in apartment 2 in Santa Monica. And I don't know if this qualifies for emergency, but it is to me. My kitchen sink is totally backed up, both sides of it where the disposal is and on the other side, and I just cannot clear it. I've tried plunging and everything, and it just won't clear. And I even put my hand down and I couldn't find anything really blocking it. So I just don't know.
AGENT: Well, ma'am, I'm really sorry to hear about this, first of all. And yes, I can have an emergency person call you back about this. So they will call you and they'll let you know what can be done about the whole situation. But I need some of your information, like your first and last name as well as your callback number. May I have that, please?
CALLER: Yeah, so it's Nancy O'Leary. O, apostrophe, L, e, a, R, Y.
AGENT: Okay, so that's O, apostrophe, L, E, A, R, Y. Right?
CALLER: Yes. Yes.
AGENT: All right. And for your first name, that's N A, N, C, Y.
CALLER: Yes.
AGENT: Okay. Ma'am, may I also have a callback number?
CALLER: Yes. 310-433-4686.
AGENT: And you were calling from the apartment 2 of Building 11, 40 10th Street, Santa Monica, Zipka 904, correct?
CALLER: Correct. Yes.
AGENT: Okay. And this is in. This is about a sink blockage. A sink stoppage? Yes.
CALLER: Yeah. And there's water. The water won't even drain, so it fills.
AGENT: Yeah, it's putting dirty water. And you want someone to come and see to it. I'll make sure to forward this message to the office right away. So they will call you back as soon as possible. Is there anything.
CALLER: Okay, thank you so much. No, you're terrific. Thank you very much.
AGENT: You, too, ma'am. Have a good one, Ms. O'leary.
CALLER: Thank you. Bye.
AGENT: Goodbye.
```