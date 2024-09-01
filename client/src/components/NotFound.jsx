import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GhostIcon, HomeIcon } from 'lucide-react';

const NotFound = () => {
	const handleClick = () => {
		window.location.href = '/';
	}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-gray-900 to-black">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-gray-800">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <GhostIcon className="mx-auto mb-4 h-24 w-24 text-gray-400" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Oops! Page Not Found</h2>
          <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" className="flex items-center" onClick={handleClick}>
            <HomeIcon className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;