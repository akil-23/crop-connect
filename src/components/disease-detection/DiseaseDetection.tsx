
import React, { useState } from 'react';
import { Upload, Check, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Reset previous results
      setResult(null);
      setConfidence(null);
      
      // Create URL for preview
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      
      // Display toast notification
      toast('Image uploaded successfully', {
        description: 'Ready to analyze crop image'
      });
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    toast('Analyzing image...', {
      description: 'This may take a few seconds'
    });
    
    // Simulate analysis with timeout
    setTimeout(() => {
      // Placeholder for ML model result
      const diseases = [
        { name: "Late Blight", confidence: 89.7 },
        { name: "Early Blight", confidence: 76.3 },
        { name: "Septoria Leaf Spot", confidence: 65.2 },
        { name: "Healthy", confidence: 95.8 }
      ];
      
      // Randomly select a result for demonstration
      const randomIndex = Math.floor(Math.random() * diseases.length);
      const diagnosisResult = diseases[randomIndex];
      
      setResult(diagnosisResult.name);
      setConfidence(diagnosisResult.confidence);
      setIsAnalyzing(false);
      
      toast('Analysis complete', {
        description: `Detected: ${diagnosisResult.name}`
      });
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Crop Disease Detection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload an image of your crop to identify potential diseases using our machine learning model.
          Get instant results and recommendations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Upload Image</CardTitle>
              <CardDescription>
                Select a clear image of the affected plant. For best results, ensure good lighting and focus.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-80">
              {selectedImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={selectedImage}
                    alt="Selected crop"
                    className="w-full h-full object-contain rounded-md"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-2 right-2"
                    onClick={() => setSelectedImage(null)}
                  >
                    Replace
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center w-full h-full flex flex-col items-center justify-center">
                  <Image className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">Drag and drop your image here or click to browse</p>
                  <Button variant="outline" className="relative">
                    Choose Image
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-crop-green-600 hover:bg-crop-green-700"
                disabled={!selectedImage || isAnalyzing}
                onClick={handleAnalyze}
              >
                {isAnalyzing ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Analyze Image
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>
                Disease detection and recommended actions based on the image analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              {result ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-semibold text-lg">Detected Issue:</h3>
                      <span className="bg-crop-green-100 text-crop-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {confidence?.toFixed(1)}% Confidence
                      </span>
                    </div>
                    <p className="text-xl font-semibold mt-2 text-gray-900">
                      {result === "Healthy" ? (
                        <span className="text-green-600 flex items-center">
                          <Check className="mr-2 h-5 w-5" />
                          Healthy Plant
                        </span>
                      ) : (
                        <span className="text-orange-600">{result}</span>
                      )}
                    </p>
                  </div>
                  
                  {result !== "Healthy" && (
                    <>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">Description:</h3>
                        <p className="text-gray-700">
                          {result === "Late Blight" && "Late blight is a destructive disease that affects potatoes and tomatoes, causing dark, water-soaked spots on leaves and stems."}
                          {result === "Early Blight" && "Early blight is characterized by small, dark spots on older leaves that enlarge and develop concentric rings, creating a target-like pattern."}
                          {result === "Septoria Leaf Spot" && "Septoria leaf spot causes small, circular spots with dark borders and light centers on the leaves, leading to early defoliation."}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">Recommended Actions:</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {result === "Late Blight" && (
                            <>
                              <li>Remove and destroy infected plant parts</li>
                              <li>Apply fungicides containing chlorothalonil or copper</li>
                              <li>Improve air circulation around plants</li>
                              <li>Avoid overhead watering</li>
                            </>
                          )}
                          {result === "Early Blight" && (
                            <>
                              <li>Remove infected leaves</li>
                              <li>Apply fungicides containing chlorothalonil</li>
                              <li>Mulch around the base of plants</li>
                              <li>Practice crop rotation</li>
                            </>
                          )}
                          {result === "Septoria Leaf Spot" && (
                            <>
                              <li>Remove infected leaves</li>
                              <li>Apply fungicides at first sign of disease</li>
                              <li>Avoid wetting leaves when watering</li>
                              <li>Space plants for good air circulation</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </>
                  )}
                  
                  {result === "Healthy" && (
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Recommended Actions:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Continue with your current care practices</li>
                        <li>Monitor for any changes in plant health</li>
                        <li>Regular watering and fertilization as needed</li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <Upload className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-gray-700 font-heading font-semibold mb-2">No Image Analyzed Yet</h3>
                  <p className="text-gray-500 max-w-md">
                    Upload an image and click the "Analyze Image" button to get disease detection results.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <div className="w-full text-center text-gray-500 text-sm">
                {result ? "Analysis completed. Upload another image for a new analysis." : "Results will appear here after analysis."}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="font-heading text-xl font-semibold mb-4">Tips for Better Disease Detection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Image Quality</h3>
            <p className="text-gray-600">Ensure good lighting and a clear focus on the affected parts. Take close-up shots that clearly show the symptoms.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Multiple Images</h3>
            <p className="text-gray-600">For complex cases, consider uploading multiple images showing different affected areas for more accurate results.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Regular Monitoring</h3>
            <p className="text-gray-600">Track the progression of symptoms over time by uploading new images periodically to check treatment effectiveness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;
