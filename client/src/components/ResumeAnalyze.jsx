import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Cat } from 'lucide-react';

const catFacts = [
  "DRDO cats are experts in feline-guided missile systems.",
  "Our cats have mastered the art of stealth technology... for sneaking extra treats.",
  "DRDO's cybersecurity division employs cats to catch both mice and bugs.",
  "Our feline friends assist in developing purr-fect communication systems.",
  "DRDO cats are working on a top-secret project: the ultimate cardboard box fort."
];

const LoadingComponent = ({ estimatedTime }) => (
  <Card className="w-full max-w-md mx-auto mt-8">
    <CardHeader>
      <CardTitle>Analyzing Resume</CardTitle>
      <CardDescription>Estimated time: {estimatedTime} seconds</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <div className="mt-4 text-center">
        <p className="font-semibold">Did you know?</p>
        <p className="italic">{catFacts[Math.floor(Math.random() * catFacts.length)]}</p>
      </div>
    </CardContent>
  </Card>
);

const ResumeAnalysisComponent = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/analyze_resume', { resume_url: data.resumeUrl });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred while analyzing the resume.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">DRDO Resume Analysis</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <Label htmlFor="resumeUrl">Resume URL</Label>
            <Input
              id="resumeUrl"
              type="url"
              placeholder="https://example.com/resume.pdf"
              {...register('resumeUrl', { required: 'Resume URL is required' })}
            />
            {errors.resumeUrl && (
              <p className="text-sm text-red-500 mt-1">{errors.resumeUrl.message}</p>
            )}
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Cat className="mr-2 h-4 w-4" />}
            Analyze Resume
          </Button>
        </div>
      </form>

      {loading && <LoadingComponent estimatedTime={30} />}

      {error && (
        <Alert variant="destructive" className="mb-8">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="panel">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="panel">Interview Panel</TabsTrigger>
                <TabsTrigger value="materials">Interview Materials</TabsTrigger>
              </TabsList>
              <TabsContent value="panel">
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Panel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="whitespace-pre-wrap">{result.interview_panel}</pre>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="materials">
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="whitespace-pre-wrap">{result.interview_materials}</pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => setResult(null)}>Analyze Another Resume</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ResumeAnalysisComponent;