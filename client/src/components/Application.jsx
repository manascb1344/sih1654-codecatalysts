import React, { useState } from 'react';
import { AlertCircle, CheckCircle, UploadCloud } from 'lucide-react';
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
      setSuccess(true);
      // Optionally reset the form or navigate to another page
    } catch (error) {
      console.error('Failed to submit application:', error);
      setError('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-50 to-purple-200 bg-gray-50 text-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg">
        <CardHeader className="bg-gray-100 rounded-t-lg p-6">
          <CardTitle className="text-2xl font-bold text-gray-800">DRDO Job Application Form</CardTitle>
          <CardDescription className="text-gray-600 mt-1">Please fill out all required fields</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">Address</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="education" className="text-sm font-medium text-gray-700">Education</Label>
              <Textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-sm font-medium text-gray-700">Work Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-sm font-medium text-gray-700">Skills</Label>
              <Textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="achievements" className="text-sm font-medium text-gray-700">Achievements</Label>
              <Textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
                className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume" className="text-sm font-medium text-gray-700 flex items-center">
                <UploadCloud className="mr-2" /> Upload Resume (PDF)
              </Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4 bg-red-100 text-red-700 border border-red-300 rounded-md">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert variant="success" className="mt-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
                <CheckCircle className="h-5 w-5" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Your application has been submitted successfully!</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md flex items-center justify-center"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading Resume...' : 'Submit Application'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="bg-gray-100 rounded-b-lg p-4">
          <p className="text-sm text-gray-600 text-center">
            Note: Please make sure all fields are filled out before submitting the form.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DRDOApplicationForm;
