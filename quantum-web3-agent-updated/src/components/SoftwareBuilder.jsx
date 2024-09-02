import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const SoftwareBuilder = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [currentFile, setCurrentFile] = useState('');
  const [fileContent, setFileContent] = useState('');
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setConversation([...conversation, { role: 'user', content: input }]);

    try {
      // TODO: Replace with actual API call
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ role: 'assistant', content: `Here's a plan to build your software: ${input}` }), 1000)
      );

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCurrentFile(file.name);
      const reader = new FileReader();
      reader.onload = (e) => setFileContent(e.target.result);
      reader.readAsText(file);
    }
  };

  const handleSaveFile = () => {
    // TODO: Implement file saving logic
    toast({
      title: "File Saved",
      description: `${currentFile} has been saved successfully.`,
    });
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle>Software Builder</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chat">
          <TabsList>
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="editor">Code Editor</TabsTrigger>
          </TabsList>
          <TabsContent value="chat">
            <div className="space-y-4 mb-4" style={{height: '400px', overflowY: 'auto'}}>
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
                placeholder="Describe the software you want to build..."
                className="flex-grow"
              />
              <Button onClick={handleSubmit}>Send</Button>
            </div>
          </TabsContent>
          <TabsContent value="editor">
            <div className="mb-4">
              <Input type="file" onChange={handleFileChange} />
            </div>
            <Textarea
              value={fileContent}
              onChange={(e) => setFileContent(e.target.value)}
              placeholder="Your code here..."
              className="w-full h-96 mb-4"
            />
            <Button onClick={handleSaveFile}>Save File</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SoftwareBuilder;