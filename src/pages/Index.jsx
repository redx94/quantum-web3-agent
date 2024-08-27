// Update this page (the content is just a fallback if you fail to update the page)

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AtomIcon, BoxIcon, GlobeIcon, BrainCircuitIcon, CloudIcon, RobotIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const Index = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Quantum Web3 AI Agent
        </h1>
        <p className="text-xl text-white text-center mb-12">
          Harness the power of quantum computing, blockchain, web3, and AI technologies to build the future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            icon={<RobotIcon className="h-6 w-6" />}
            title="Auto Agents & Chatbots"
            description="Create and deploy intelligent agents and chatbots."
            action="Build Agents"
            onClick={() => handleCardClick('/agents')}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
