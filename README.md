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