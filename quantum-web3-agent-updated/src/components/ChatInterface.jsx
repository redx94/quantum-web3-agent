import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ChatInterface = ({ domain }) => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!input.trim()) return;

    // Add user message to conversation
    setConversation([...conversation, { role: 'user', content: input }]);

    // TODO: Implement actual API call to your backend
    try {
      // Simulated API call
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ role: 'assistant', content: `Response for ${domain}: ${input}` }), 1000)
      );

      // Add assistant response to conversation
      setConversation(conv => [...conv, response]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    }

    setInput('');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{domain} Chat Interface</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversation.map((message, index) => (
            <div key={index} className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100'}`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="mt-4 flex space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Enter your ${domain} query or command...`}
            className="flex-grow"
          />
          <Button onClick={handleSubmit}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;