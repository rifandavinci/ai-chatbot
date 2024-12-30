// ----------------------------------------------. 
// Fann Davinci - 2024/2025
// https://github.com/rifandavinci
// https://www.npmjs.com/~rifandavinci
// ----------------------------------------------. 


const fetch = require('node-fetch');

class FannAI {
  constructor() {
    this.BASE_URL = 'https://ai.fannjavascript.workers.dev';
    this.MODELS = {
      gpt4: 'GPT-4 (default)',
      claude: 'Claude 3 Haiku',
      llama: 'Meta Llama 3',
      mixtral: 'Mixtral 8x7B'
    };
  }

  /**
   * Send message to AI
   * @param {string} prompt - Message to send
   * @param {string} model - AI Model (gpt4|claude|llama|mixtral)
   * @returns {Promise<Object>} AI Response
   */
  async chat(prompt, model = 'gpt4') {
    try {
      if (!prompt) {
        throw new Error('Prompt cannot be empty');
      }

      if (!this.MODELS[model]) {
        throw new Error(`Invalid model. Use: ${Object.keys(this.MODELS).join('|')}`);
      }

      const response = await fetch(
        `${this.BASE_URL}/chat?prompt=${encodeURIComponent(prompt)}&model=${model}`
      );

      const data = await response.json();
      
      // Validasi response
      if (data.status === 500) {
        throw new Error(data.response || 'Server error');
      }

      return data;

    } catch (error) {
      return {
        status: 500,
        error: error.message
      };
    }
  }

  /**
   * Get API information
   * @returns {Object} API Info
   */
  getInfo() {
    return {
      creator: '@rifandavinci',
      github: 'https://github.com/rifandavinci/ai-chatbot',
      models: this.MODELS,
      example: {
        installation: `npm install @rifandavinci/fann-ai`,
        usage: `
const FannAI = require('@rifandavinci/fann-ai');
const ai = new FannAI();

// Using GPT-4 (default)
ai.chat('Hello!').then(console.log);

// Using specific model
ai.chat('Hello!', 'claude').then(console.log);
        `
      }
    };
  }
}

module.exports = FannAI;