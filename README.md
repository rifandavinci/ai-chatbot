
# @rifandavinci/ai-chatbot
Get AI responses from multiple models (GPT-4, Claude, Llama, Mixtral) with simple API calls.

## 🌐 Direct API Usage

### Base URL
```
https://ai.fannjavascript.workers.dev
```

### Endpoints

#### Get AI Response
```
GET /chat?prompt=<message>&model=<model_name>
```

### Example Get
```
https://ai.fannjavascript.workers.dev/chat?prompt=Halo&model=gpt4
```

### Example Response
```
action	 "success"
status	  200
response "Halo! How can I assist you today?"
model	 "gpt-4o-mini"
```

Parameters:
- `prompt` (required): Your message
- `model` (optional): AI model to use
  - `gpt4` (default) - GPT-4
  - `claude` - Claude 3 Haiku
  - `llama` - Meta Llama 3
  - `mixtral` - Mixtral 8x7B

### Examples

#### Using fetch
```javascript
// Default model (GPT-4)
fetch('https://ai.fannjavascript.workers.dev/chat?prompt=Hello')
    .then(res => res.json())
    .then(console.log);

// Specific model
fetch('https://ai.fannjavascript.workers.dev/chat?prompt=Hello&model=claude')
    .then(res => res.json())
    .then(console.log);
```

#### Using curl
```bash
curl "https://ai.fannjavascript.workers.dev/chat?prompt=Hello"

# Specific model
curl "https://ai.fannjavascript.workers.dev/chat?prompt=Hello&model=claude"
```

#### Using axios
```javascript
const axios = require('axios');

// Default model (GPT-4)
axios.get('https://ai.fannjavascript.workers.dev/chat?prompt=Hello')
    .then(res => console.log(res.data));

// Specific model
axios.get('https://ai.fannjavascript.workers.dev/chat?prompt=Hello&model=claude')
    .then(res => console.log(res.data));
```

### Response Format
```json
{
    "action": "success",
    "status": 200,
    "response": "AI response here",
    "model": "model-name"
}
```

### Error Response
```json
{
    "status": 500,
    "error": "Error message here"
}
```

## 📦 Using NPM Package

### Installation
```bash
npm install @rifandavinci/ai-chatbot
```

### Usage with Package
```javascript
const FannAI = require('@rifandavinci/ai-chatbot');
const ai = new FannAI();

// Using GPT-4 (default)
ai.chat('Hello!').then(response => {
    console.log(response);
});

// Using specific model
ai.chat('Hello!', 'claude').then(response => {
    console.log(response);
});

// Get API info
console.log(ai.getInfo());
```


## 📝 Available Models
- `gpt4` - GPT-4 (default)
- `claude` - Claude 3 Haiku
- `llama` - Meta Llama 3
- `mixtral` - Mixtral 8x7B

## 👨‍💻 Creator
- GitHub: [@rifandavinci](https://github.com/rifandavinci)