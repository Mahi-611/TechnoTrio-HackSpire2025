import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, Mic, MicOff, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatbotPage = () => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm InnoBot, your friendly mental wellness companion. How are you feeling today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Mock responses - would be replaced with actual ML/AI responses
  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('unhappy')) {
      return "I'm sorry to hear you're feeling down. Remember that it's okay to feel this way sometimes. Would you like to try a quick breathing exercise to help center yourself?";
    } else if (lowerMessage.includes('anxious') || lowerMessage.includes('worried') || lowerMessage.includes('stress')) {
      return "I notice you're feeling anxious. Let's take a moment together. Try focusing on five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste.";
    } else if (lowerMessage.includes('happy') || lowerMessage.includes('good') || lowerMessage.includes('great')) {
      return "I'm so glad to hear you're feeling good today! That's wonderful. What's something that contributed to your positive mood?";
    } else if (lowerMessage.includes('tired') || lowerMessage.includes('exhausted') || lowerMessage.includes('sleep')) {
      return "Being tired can really affect how we feel. Have you considered trying a relaxing bedtime routine? Even small changes to your sleep habits can make a big difference.";
    } else if (lowerMessage.includes('thank')) {
      return "You're very welcome! I'm here anytime you need to talk or need some support on your wellness journey. 🌻";
    } else if (lowerMessage.includes('exercise') || lowerMessage.includes('workout')) {
      return "Physical activity is great for mental wellness! Even a short 10-minute walk can boost your mood through the release of endorphins. What kind of movement do you enjoy?";
    } else {
      return "Thank you for sharing that with me. How does that make you feel? Remember that acknowledging your emotions is an important step in your wellness journey. 🌿";
    }
  };
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate bot typing
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };
  
  const toggleListening = () => {
    // This would be replaced with actual speech recognition
    setIsListening(!isListening);
    if (!isListening) {
      // Mock speech recognition
      setTimeout(() => {
        setInput("I'm feeling a bit stressed today");
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-full bg-primary/20 dark:bg-primary/10 mr-4">
            <Bot size={24} className="text-primary dark:text-primary-light" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">InnoBot</h1>
            <p className="text-neutral-600 dark:text-neutral-400">Your compassionate AI companion</p>
          </div>
        </div>
        
        {/* Chat container */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 h-[calc(100vh-350px)] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-neutral-100 dark:bg-neutral-700 rounded-tl-none'
                      : 'bg-primary text-white rounded-tr-none'
                  }`}
                >
                  <div className="flex items-center mb-1">
                    <div className="mr-2">
                      {message.isBot ? (
                        <Bot size={16} className="text-primary dark:text-primary-light" />
                      ) : (
                        <User size={16} />
                      )}
                    </div>
                    <span className="text-xs opacity-70">
                      {message.isBot ? 'InnoBot' : 'You'} • {new Intl.DateTimeFormat('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                      }).format(message.timestamp)}
                    </span>
                  </div>
                  <p className={`text-sm ${message.isBot ? 'text-neutral-800 dark:text-neutral-200' : ''}`}>
                    {message.text}
                  </p>
                </motion.div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
          
          {/* Input area */}
          <div className="border-t border-neutral-200 dark:border-neutral-700 px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={toggleListening}
                className={`p-2 rounded-full mr-2 ${
                  isListening
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                }`}
                aria-label={isListening ? 'Stop listening' : 'Start voice input'}
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message here..."
                className="flex-grow px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 
                  bg-neutral-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary 
                  text-neutral-800 dark:text-neutral-200"
              />
              
              <button
                onClick={handleSendMessage}
                disabled={input.trim() === ''}
                className={`p-2 rounded-full ml-2 ${
                  input.trim() === ''
                    ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500'
                    : 'bg-primary text-white'
                }`}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            Remember, InnoBot is an AI assistant and not a replacement for professional mental health support.{' '}
            <a href="#" className="text-primary dark:text-primary-light hover:underline">
              Find professional help
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatbotPage;