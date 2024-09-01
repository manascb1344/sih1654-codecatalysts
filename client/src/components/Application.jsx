import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const DRDOApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    education: '',
    experience: '',
    skills: '',
    achievements: '',
    resumeUrl: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const uploadData = new FormData();
      uploadData.append('file', file);
      uploadData.append('upload_preset', 'sih1654');

      const response = await fetch(`https://api.cloudinary.com/v1_1/dhpph1u6x/upload`, {
        method: 'POST',
        body: uploadData,
      });

      const data = await response.json();
      if (data.secure_url) {
        setFormData((prevState) => ({
          ...prevState,
          resumeUrl: data.secure_url,
        }));
        setIsUploading(false);
      } else {
        throw new Error('Cloudinary upload failed.');
      }
    } catch (error) {
      console.error('Failed to upload resume:', error);
      setError('Failed to upload resume. Please try again.');
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.resumeUrl) {
      setError('Resume is required.');
      return;
    }

    try {
      // Assume saveApplicationToDatabase is a function to save the application data
      // const id = await saveApplicationToDatabase(formData);
      // console.log('Application saved with ID:', id);
      setSuccess(true);

      // Optionally reset the form or navigate to another page
    } catch (error) {
      console.error('Failed to submit application:', error);
      setError('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto bg-gray-800 shadow-xl border border-gray-700">
        <CardHeader className="bg-gray-700">
          <CardTitle className="text-3xl font-extrabold">DRDO Job Application Form</CardTitle>
          <CardDescription className="text-gray-300">Please fill out all required fields</CardDescription>
        </CardHeader>
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-medium text-gray-300">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-medium text-gray-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-medium text-gray-300">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-lg font-medium text-gray-300">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-lg font-medium text-gray-300">Address</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="education" className="text-lg font-medium text-gray-300">Education</Label>
              <Textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                required
                className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-lg font-medium text-gray-300">Work Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-lg font-medium text-gray-300">Skills</Label>
              <Textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                required
                className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="achievements" className="text-lg font-medium text-gray-300">Achievements</Label>
              <Textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
                className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume" className="text-lg font-medium text-gray-300">Upload Resume (PDF)</Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4 bg-red-700 text-white">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert variant="success" className="mt-4 bg-green-700 text-white">
                <CheckCircle className="h-5 w-5" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Your application has been submitted successfully!</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:bg-gray-600"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading Resume...' : 'Submit Application'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DRDOApplicationForm;
