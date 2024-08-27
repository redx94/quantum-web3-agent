// Update this page (the content is just a fallback if you fail to update the page)

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AtomIcon, CubeIcon, GlobeIcon } from 'lucide-react';

const TechnologyCard = ({ icon, title, description, action }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button className="w-full">{action}</Button>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Quantum Web3 Agent
        </h1>
        <p className="text-xl text-white text-center mb-12">
          Harness the power of quantum computing, blockchain, and web3 technologies to build the future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechnologyCard
            icon={<AtomIcon className="h-6 w-6" />}
            title="Quantum Computing"
            description="Leverage quantum algorithms for unprecedented computational power."
            action="Explore Quantum"
          />
          <TechnologyCard
            icon={<CubeIcon className="h-6 w-6" />}
            title="Blockchain"
            description="Build decentralized applications and smart contracts."
            action="Dive into Blockchain"
          />
          <TechnologyCard
            icon={<GlobeIcon className="h-6 w-6" />}
            title="Web3"
            description="Create the next generation of web applications with decentralized technologies."
            action="Discover Web3"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
