import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResourceSection = ({ title, description, resources }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <Button key={index} variant="outline" asChild>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-left">
              {resource.name}
            </a>
          </Button>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Resources = () => {
  const quantumResources = [
    { name: "IBM Quantum", url: "https://quantum-computing.ibm.com/" },
    { name: "Microsoft Quantum", url: "https://azure.microsoft.com/en-us/solutions/quantum-computing/" },
    { name: "Qiskit", url: "https://qiskit.org/" },
  ];

  const web3Resources = [
    { name: "Ethereum.org", url: "https://ethereum.org/en/" },
    { name: "Web3.js", url: "https://web3js.readthedocs.io/" },
    { name: "MetaMask", url: "https://metamask.io/" },
  ];

  const blockchainResources = [
    { name: "Solidity", url: "https://docs.soliditylang.org/" },
    { name: "Truffle Suite", url: "https://www.trufflesuite.com/" },
    { name: "OpenZeppelin", url: "https://openzeppelin.com/" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Advanced Technology Resources</h1>
      
      <ResourceSection 
        title="Quantum Computing" 
        description="Explore quantum computing resources and development tools."
        resources={quantumResources}
      />
      
      <ResourceSection 
        title="Web3" 
        description="Discover tools and platforms for Web3 development."
        resources={web3Resources}
      />
      
      <ResourceSection 
        title="Blockchain Development" 
        description="Learn about blockchain technologies and smart contract development."
        resources={blockchainResources}
      />
    </div>
  );
};

export default Resources;