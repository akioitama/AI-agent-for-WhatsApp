# AI-agent-for-WhatsApp
An AI agent for WhatsApp built with Node.js that uses **Google Gemini** to deliver intelligent, context-aware automated conversations without the official WhatsApp Business API.
# Intelligent WhatsApp AI Agent 🤖💬

A powerful conversational agent for WhatsApp that uses **Google Gemini AI** to understand and respond to messages intelligently. Built with `whatsapp-web.js` and `Google Generative AI`.

## 🚀 Features

- **Automated Responses**: Reply to incoming WhatsApp messages instantly.
- **Intelligent Conversations**: Powered by Google's **Gemini Flash** model for natural, context-aware replies.
- **Contextual Memory**: Remembers the conversation history for more coherent interactions (in-memory).
- **QR Code Login**: Easy setup by scanning a QR code with your WhatsApp app.
- **No Business API Required**: Works with your existing personal or business WhatsApp number.

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A Google Gemini API Key (Get it from [Google AI Studio](https://aistudio.google.com/))
- A WhatsApp account (on your phone)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/whatsapp-ai-agent.git
   cd whatsapp-ai-agent
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## ⚙️ Configuration

1. **Create a `.env` file** in the root directory:
   ```bash
   touch .env
   # or manually create the file
   ```

2. **Add your API Key:**
   Open the `.env` file and add your Google Gemini API key:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

## ▶️ Usage

1. **Start the bot:**
   ```bash
   node index.js
   ```

2. **Scan the QR Code:**
   - The terminal will display a QR code (it will also be saved as `qr.png`).
   - Open WhatsApp on your phone.
   - Go to **Settings** > **Linked Devices** > **Link a Device**.
   - Scan the QR code.

3. **Start Chatting!**
   - Once connected, the bot will listen for incoming messages.
   - Send a message to the bot's number (or have a friend message you) to test it out!

## 📝 Technologies Used

- [whatsapp-web.js](https://wwebjs.dev/) - WhatsApp Client Library
- [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai) - AI Model Integration
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) - Terminal QR Code Display

## ⚠️ Disclaimer

This project is not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with WhatsApp or any of its subsidiaries or its affiliates. Use at your own risk.

## 📄 License

MIT
