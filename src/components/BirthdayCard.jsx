import React, { useState, useEffect } from 'react';
import { Heart, Star, Gift, Cake } from 'lucide-react';

const BirthdayCard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [showCard, setShowCard] = useState(false);

  // Floating decorations component
  const FloatingDecorations = ({ density = 'normal' }) => {
    const decorations = [];
    const count = density === 'high' ? 25 : 15;
    
    for (let i = 0; i < count; i++) {
      const shapes = ['●', '♦', '■', '♥', '★', '▲'];
      const colors = ['text-pink-400', 'text-purple-400', 'text-yellow-400', 'text-green-400', 'text-blue-400', 'text-red-400'];
      const sizes = ['text-xs', 'text-sm', 'text-base'];
      
      decorations.push(
        <div
          key={i}
          className={`absolute ${colors[Math.floor(Math.random() * colors.length)]} ${sizes[Math.floor(Math.random() * sizes.length)]} animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          {shapes[Math.floor(Math.random() * shapes.length)]}
        </div>
      );
    }
    return decorations;
  };

  // Start with loading screen
  useEffect(() => {
    if (currentStep === 0) {
      // Show loading for 3 seconds
      const timer = setTimeout(() => setCurrentStep(1), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Countdown logic
  useEffect(() => {
    if (currentStep === 1 && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (currentStep === 1 && countdown === 0) {
      setCurrentStep(2);
    }
  }, [currentStep, countdown]);

  // Step 0: Loading Screen
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
        <FloatingDecorations />
        
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-xl text-center relative z-10">
          <div className="space-y-6">
            <div className="flex justify-center space-x-2">
              <Heart className="text-pink-500 animate-bounce" style={{ animationDelay: '0s' }} />
              <Heart className="text-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Heart className="text-purple-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-pink-600 mb-2">Loading something</h2>
              <h2 className="text-xl font-bold text-pink-600">special...</h2>
            </div>
            
            <div className="flex justify-center space-x-2 text-2xl">
              <Cake className="text-yellow-500 animate-pulse" />
              <Star className="text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Gift className="text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
              <Heart className="text-red-500 animate-pulse" style={{ animationDelay: '1.5s' }} />
              <span className="text-pink-500 animate-pulse" style={{ animationDelay: '2s' }}>♥</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Countdown
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
        <FloatingDecorations />
        
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl text-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-pink-600 flex items-center justify-center">
              Your Special Day is Almost Here
              <Heart className="ml-2 text-red-500" />
            </h2>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-purple-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-purple-600">0</div>
                <div className="text-xs text-purple-500">Days</div>
                <Heart className="w-4 h-4 text-purple-400 mx-auto mt-1" />
              </div>
              <div className="bg-purple-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-purple-600">0</div>
                <div className="text-xs text-purple-500">Hours</div>
                <Gift className="w-4 h-4 text-purple-400 mx-auto mt-1" />
              </div>
              <div className="bg-purple-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-purple-600">0</div>
                <div className="text-xs text-purple-500">Minutes</div>
                <Cake className="w-4 h-4 text-purple-400 mx-auto mt-1" />
              </div>
              <div className="bg-yellow-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-yellow-600">{countdown}</div>
                <div className="text-xs text-yellow-500">Seconds</div>
                <Star className="w-4 h-4 text-yellow-400 mx-auto mt-1" />
              </div>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-4">
              <p className="text-sm text-pink-600">Just a little more... A small gift for my favorite person</p>
              <Heart className="text-pink-500 mx-auto mt-2" />
              <div className="flex justify-center space-x-1 mt-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Ready screen
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
        <FloatingDecorations />
        
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl text-center relative z-10 space-y-6">
          <h2 className="text-xl font-bold text-pink-600 flex items-center justify-center">
            Your Special Day is Almost Here
            <Heart className="ml-2 text-red-500" />
          </h2>
          
          <div className="bg-pink-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-pink-600 mb-4">It's time!</h3>
            <p className="text-sm text-pink-600 mb-4">Just a little more... A small gift for my favorite person</p>
            <Heart className="text-pink-500 mx-auto mb-4" />
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          <button
            onClick={() => setCurrentStep(3)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-8 py-3 rounded-full flex items-center justify-center space-x-2 mx-auto transition-all transform hover:scale-105"
          >
            <Gift className="w-4 h-4" />
            <span>For you →</span>
          </button>
        </div>
      </div>
    );
  }

  // Step 3: Happy Birthday Card with Tap to Open
  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
        <FloatingDecorations density="high" />
        
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl relative z-10">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-pink-600 flex items-center justify-center">
                <span className="text-yellow-500 mr-2">◆</span>
                Happy Birthday!
              </h1>
              <div className="flex justify-center space-x-2 text-xl">
                <Cake className="text-yellow-500" />
                <Star className="text-yellow-400" />
                <Heart className="text-pink-500" />
              </div>
              <p className="text-lg text-purple-600 font-medium">To My Cutie</p>
            </div>
            
            <div 
              className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 text-white cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => setCurrentStep(4)}
            >
              <div className="space-y-2">
                <p className="text-sm opacity-90">Tap to open your card</p>
                <Gift className="w-8 h-8 mx-auto animate-bounce" />
              </div>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-4 space-y-3">
              <p className="text-sm text-gray-700">May every wish you make today come true. You deserve the world, and I'll always be here to remind you of that.</p>
              <p className="text-sm text-gray-700 flex items-center justify-center">
                Let's always stay like this... together, forever
                <span className="ml-2 text-yellow-500">😊</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Final detailed card
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingDecorations density="high" />
      
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl relative z-10">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-pink-600">Happy Birthday!</h1>
            <div className="flex justify-center space-x-2 text-xl">
              <Cake className="text-yellow-500" />
              <Star className="text-yellow-400" />
              <Heart className="text-pink-500" />
            </div>
            <p className="text-lg text-purple-600 font-medium">To My Cutie</p>
          </div>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed text-left">
            <p>Just wanted to remind you—you're my favorite person. My days are better, smiles are wider, and life is sweeter because of you.</p>
            
            <p className="flex items-center justify-center">
              I hope your birthday is full of love, magic, and everything that makes you smile 
              <span className="ml-2 text-red-500">💖</span>
            </p>
            
            <p>May every wish you make today come true. You deserve the world, and I'll always be here to remind you of that.</p>
            
            <p className="flex items-center justify-center">
              <span>Let's always stay like this... together, forever</span>
              <span className="ml-2 text-yellow-500">😊</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;