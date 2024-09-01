import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { saveResumeToDatabase } from '../services/databaseService';

const DRDOApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    resume: null,
    parsedResume: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prevState => ({
        ...prevState,
        resume: file
      }));
      
      // Simulated parsing
      setFormData(prevState => ({
        ...prevState,
        parsedResume: '## Parsed Resume\n\nThis is where the parsed resume content would appear.\n\n- Education\n- Experience\n- Skills'
      }));
    } else {
      setError('Please upload a PDF file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const resumeData = {
        fullName: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        education: formData.education,
        experience: formData.experience,
        skills: formData.parsedResume 
      };

      const id = await saveResumeToDatabase(resumeData);
      console.log('Resume saved with ID:', id);
      setSuccess(true);
      // Optionally reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        resume: null,
        parsedResume: ''
      });
    } catch (error) {
      console.error('Failed to save resume:', error);
      setError('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto bg-white shadow-lg border border-gray-300">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-blue-600">DRDO Job Application Form</CardTitle>
          <CardDescription className="text-gray-600">Please fill out all required fields</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-medium">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-gray-100 border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-100 border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg font-medium">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-gray-100 border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="education" className="text-lg font-medium">Education</Label>
              <Textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                required
                className="bg-gray-100 border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-lg font-medium">Work Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="bg-gray-100 border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume" className="text-lg font-medium">Upload Resume (PDF)</Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="bg-gray-100 border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {error && (
              <Alert variant="destructive" className="bg-red-100 text-red-700 border-red-300">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {formData.parsedResume && (
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-green-600">Parsed Resume</h2>
                <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap text-sm text-gray-900">
                  {formData.parsedResume}
                </pre>
              </div>
            )}
            <CardFooter>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                Submit Application
              </Button>
            </CardFooter>
          </form>
        </CardContent>
        {success && (
          <Alert variant="success" className="bg-green-100 text-green-700 border-green-300 mt-4">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your application has been successfully submitted.</AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default DRDOApplicationForm;