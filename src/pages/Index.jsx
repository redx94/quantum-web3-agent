/**
 * Project: Quantum Web3 Agent
 * Author: Reece Dixon
 * Copyright: © 2024 Reece Dixon. All rights reserved.
 * License: This file is part of the Quantum Web3 Agent project, licensed under the GNU Affero General Public License v3.0.
 *          You should have received a copy of the GNU Affero General Public License along with this program.
 *          If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AtomIcon, BoxIcon, GlobeIcon, BrainCircuitIcon, CloudIcon, BotIcon, WrenchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TechnologyCard = ({ icon, title, description, action, onClick }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button className="w-full" onClick={onClick}>{action}</Button>
    </CardContent>
  </Card>
);

const MainChat = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const generateAIResponse = async (userInput) => {
    // Simulated AI processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    const lowercaseInput = userInput.toLowerCase();
    let response = { role: 'assistant', content: '' };

    if (lowercaseInput.includes('quantum')) {
      response.content = "For quantum computing projects, I recommend starting with Qiskit, an open-source framework for quantum computing. Would you like me to guide you through setting up a quantum environment?";
    } else if (lowercaseInput.includes('blockchain') || lowercaseInput.includes('web3')) {
      response.content = "For blockchain and Web3 development, we can start by setting up a development environment with tools like Truffle and Web3.js. Shall we begin by creating a simple smart contract?";
    } else if (lowercaseInput.includes('ai') || lowercaseInput.includes('machine learning')) {
      response.content = "For AI and machine learning projects, we can use frameworks like TensorFlow or PyTorch. What specific type of AI model are you interested in building?";
    } else if (lowercaseInput.includes('cloud')) {
      response.content = "Cloud integration often involves working with services from providers like AWS, Azure, or Google Cloud. Which cloud provider are you most interested in working with?";
    } else if (lowercaseInput.includes('chatbot') || lowercaseInput.includes('agent')) {
      response.content = "To build an intelligent agent or chatbot, we can use natural language processing libraries and conversational AI frameworks. Would you like to start by defining the chatbot's purpose and capabilities?";
    } else {
      response.content = `I understand you're interested in building: ${userInput}. To get started, let's break down your project into smaller components. What's the core functionality you'd like to implement first?`;
    }

    return response;
  };

  const mutation = useMutation({
    mutationFn: generateAIResponse,
    onSuccess: (data) => {
      setConversation(prev => [...prev, data]);
    },
    onError: (error) => {
      console.error("Failed to get a response", error);
    }
  });

  const handleSubmit = () => {
    if (!input.trim()) return;

    setConversation(prev => [...prev, { role: 'user', content: input }]);
    mutation.mutate(input);
    setInput('');
  };

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4" style={{maxHeight: '300px', overflowY: 'auto'}}>
          {conversation.map((message, index) => (
            <div key={index} className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100'}`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to build..."
            className="flex-grow"
          />
          <Button onClick={handleSubmit} disabled={mutation.isPending}>
            {mutation.isPending ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-12">
            Quantum Web3 AI Agent
          </h1>
          <p className="text-xl text-white text-center mb-12">
            Harness the power of quantum computing, blockchain, web3, and AI technologies to build the future.
          </p>
          <MainChat />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechnologyCard
              icon={<WrenchIcon className="h-6 w-6" />}
              title="Software Builder"
              description="Build full-stack web and mobile applications with AI assistance."
              action="Start Building"
              onClick={() => handleCardClick('/builder')}
            />
            <TechnologyCard
              icon={<AtomIcon className="h-6 w-6" />}
              title="Quantum Computing"
              description="Leverage quantum algorithms and IBM Quantum integration."
              action="Explore Quantum"
              onClick={() => handleCardClick('/quantum')}
            />
            <TechnologyCard
              icon={<BoxIcon className="h-6 w-6" />}
              title="Blockchain"
              description="Build decentralized applications and smart contracts."
              action="Dive into Blockchain"
              onClick={() => handleCardClick('/blockchain')}
            />
            <TechnologyCard
              icon={<GlobeIcon className="h-6 w-6" />}
              title="Web3"
              description="Create decentralized web applications with customizable backends."
              action="Discover Web3"
              onClick={() => handleCardClick('/web3')}
            />
            <TechnologyCard
              icon={<BrainCircuitIcon className="h-6 w-6" />}
              title="AI/ML Development"
              description="Train and deploy custom AI models and LLMs."
              action="Explore AI/ML"
              onClick={() => handleCardClick('/ai-ml')}
            />
            <TechnologyCard
              icon={<CloudIcon className="h-6 w-6" />}
              title="Cloud Integration"
              description="Seamlessly integrate with major cloud providers and services."
              action="Setup Cloud"
              onClick={() => handleCardClick('/cloud')}
            />
            <TechnologyCard
              icon={<BotIcon className="h-6 w-6" />}
              title="Auto Agents & Chatbots"
              description="Create and deploy intelligent agents and chatbots."
              action="Build Agents"
              onClick={() => handleCardClick('/agents')}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
