
import React, { useState } from 'react';
import { ChartPie, Thermometer, DatabaseBackup } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';

const Recommendations = () => {
  // Crop recommendation form state
  const [cropFormData, setCropFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });

  // Soil recommendation form state
  const [soilFormData, setSoilFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    crop: ''
  });

  // Results state
  const [cropResult, setCropResult] = useState<string | null>(null);
  const [soilResult, setSoilResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle crop form input changes
  const handleCropInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCropFormData({
      ...cropFormData,
      [name]: value
    });
  };

  // Handle soil form input changes
  const handleSoilInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSoilFormData({
      ...soilFormData,
      [name]: value
    });
  };

  // Handle crop recommendation form submit
  const handleCropSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    toast('Processing crop recommendation', {
      description: 'Analyzing your inputs...'
    });

    // Simulate API call with timeout
    setTimeout(() => {
      const crops = ['Rice', 'Wheat', 'Maize', 'Cotton', 'Sugarcane', 'Tomato', 'Potato'];
      const randomCrop = crops[Math.floor(Math.random() * crops.length)];
      setCropResult(randomCrop);
      setIsLoading(false);
      
      toast('Recommendation Ready', {
        description: `Recommended Crop: ${randomCrop}`
      });
    }, 2000);
  };

  // Handle soil recommendation form submit
  const handleSoilSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    toast('Processing soil recommendation', {
      description: 'Analyzing your inputs...'
    });

    // Simulate API call with timeout
    setTimeout(() => {
      const soilRecommendation = {
        nitrogen: Math.floor(Math.random() * 50) + 50,
        phosphorus: Math.floor(Math.random() * 40) + 30,
        potassium: Math.floor(Math.random() * 30) + 40,
        organic_matter: Math.random() * 5 + 1
      };
      
      setSoilResult(soilRecommendation);
      setIsLoading(false);
      
      toast('Recommendation Ready', {
        description: 'Soil nutrient recommendations generated'
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Crop & Soil Recommendations
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get personalized crop and soil recommendations based on environmental factors and soil conditions.
          Our machine learning models will help you make data-driven decisions.
        </p>
      </div>

      <Tabs defaultValue="crop" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="crop">Crop Recommendation</TabsTrigger>
          <TabsTrigger value="soil">Soil Recommendation</TabsTrigger>
        </TabsList>
        
        {/* Crop Recommendation Tab */}
        <TabsContent value="crop">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartPie className="h-5 w-5 text-crop-green-600" />
                Crop Recommendation
              </CardTitle>
              <CardDescription>
                Enter the soil and environmental parameters to get the most suitable crop recommendation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCropSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nitrogen">Nitrogen (N) Content (kg/ha)</Label>
                    <Input
                      id="nitrogen"
                      name="nitrogen"
                      type="number"
                      placeholder="e.g., 90"
                      value={cropFormData.nitrogen}
                      onChange={handleCropInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phosphorus">Phosphorus (P) Content (kg/ha)</Label>
                    <Input
                      id="phosphorus"
                      name="phosphorus"
                      type="number"
                      placeholder="e.g., 45"
                      value={cropFormData.phosphorus}
                      onChange={handleCropInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="potassium">Potassium (K) Content (kg/ha)</Label>
                    <Input
                      id="potassium"
                      name="potassium"
                      type="number"
                      placeholder="e.g., 60"
                      value={cropFormData.potassium}
                      onChange={handleCropInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      name="temperature"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 25.5"
                      value={cropFormData.temperature}
                      onChange={handleCropInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="humidity">Humidity (%)</Label>
                    <Input
                      id="humidity"
                      name="humidity"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 70.5"
                      value={cropFormData.humidity}
                      onChange={handleCropInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ph">pH Value</Label>
                    <Input
                      id="ph"
                      name="ph"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 6.5"
                      value={cropFormData.ph}
                      onChange={handleCropInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="rainfall">Rainfall (mm)</Label>
                    <Input
                      id="rainfall"
                      name="rainfall"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 120.5"
                      value={cropFormData.rainfall}
                      onChange={handleCropInputChange}
                      required
                    />
                  </div>
                </div>
                
                <Button
                  className="w-full mt-6 bg-crop-green-600 hover:bg-crop-green-700"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    'Get Crop Recommendation'
                  )}
                </Button>
              </form>
            </CardContent>
            
            {cropResult && (
              <CardFooter className="flex flex-col">
                <div className="bg-crop-green-50 border border-crop-green-200 rounded-lg p-6 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-gray-900">Recommended Crop</h3>
                      <p className="text-gray-600 text-sm">Based on your soil parameters</p>
                    </div>
                    <div className="bg-crop-green-100 text-crop-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      94% Match
                    </div>
                  </div>
                  <div className="bg-white rounded-md p-4 border border-gray-100">
                    <p className="text-2xl font-semibold text-crop-green-700 mb-2">{cropResult}</p>
                    <p className="text-gray-600">This crop is well-suited for your soil conditions and environmental factors.</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Tips for Growing {cropResult}</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Ensure proper spacing for adequate air circulation</li>
                      <li>Maintain consistent soil moisture</li>
                      <li>Apply organic mulch to retain moisture and suppress weeds</li>
                      <li>Monitor for pests and diseases regularly</li>
                    </ul>
                  </div>
                </div>
              </CardFooter>
            )}
          </Card>
        </TabsContent>
        
        {/* Soil Recommendation Tab */}
        <TabsContent value="soil">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DatabaseBackup className="h-5 w-5 text-crop-brown-600" />
                Soil Recommendation
              </CardTitle>
              <CardDescription>
                Enter the current soil nutrient levels and crop type to get fertilizer and soil management recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSoilSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="soil-nitrogen">Current Nitrogen (N) Content (kg/ha)</Label>
                    <Input
                      id="soil-nitrogen"
                      name="nitrogen"
                      type="number"
                      placeholder="e.g., 40"
                      value={soilFormData.nitrogen}
                      onChange={handleSoilInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="soil-phosphorus">Current Phosphorus (P) Content (kg/ha)</Label>
                    <Input
                      id="soil-phosphorus"
                      name="phosphorus"
                      type="number"
                      placeholder="e.g., 25"
                      value={soilFormData.phosphorus}
                      onChange={handleSoilInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="soil-potassium">Current Potassium (K) Content (kg/ha)</Label>
                    <Input
                      id="soil-potassium"
                      name="potassium"
                      type="number"
                      placeholder="e.g., 30"
                      value={soilFormData.potassium}
                      onChange={handleSoilInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="crop">Target Crop</Label>
                    <Input
                      id="crop"
                      name="crop"
                      placeholder="e.g., Wheat"
                      value={soilFormData.crop}
                      onChange={handleSoilInputChange}
                      required
                    />
                  </div>
                </div>
                
                <Button
                  className="w-full mt-6 bg-crop-brown-600 hover:bg-crop-brown-700"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    'Get Soil Recommendation'
                  )}
                </Button>
              </form>
            </CardContent>
            
            {soilResult && (
              <CardFooter className="flex flex-col">
                <div className="bg-crop-brown-50 border border-crop-brown-200 rounded-lg p-6 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-gray-900">Soil Recommendations</h3>
                      <p className="text-gray-600 text-sm">For optimal growth of {soilFormData.crop}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-md p-4 border border-gray-100 mb-4">
                    <h4 className="font-medium text-gray-900 mb-3">Recommended Nutrient Levels</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Nitrogen (N):</p>
                        <p className="text-lg font-semibold text-crop-brown-700">{soilResult.nitrogen} kg/ha</p>
                        <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                          <div 
                            className="h-2 bg-crop-green-500 rounded-full" 
                            style={{ width: `${(parseInt(soilFormData.nitrogen) / soilResult.nitrogen) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phosphorus (P):</p>
                        <p className="text-lg font-semibold text-crop-brown-700">{soilResult.phosphorus} kg/ha</p>
                        <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                          <div 
                            className="h-2 bg-crop-blue-500 rounded-full" 
                            style={{ width: `${(parseInt(soilFormData.phosphorus) / soilResult.phosphorus) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Potassium (K):</p>
                        <p className="text-lg font-semibold text-crop-brown-700">{soilResult.potassium} kg/ha</p>
                        <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                          <div 
                            className="h-2 bg-crop-brown-500 rounded-full" 
                            style={{ width: `${(parseInt(soilFormData.potassium) / soilResult.potassium) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Organic Matter:</p>
                        <p className="text-lg font-semibold text-crop-brown-700">{soilResult.organic_matter.toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-md p-4 border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">Fertilizer Recommendations</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Apply {soilResult.nitrogen - parseInt(soilFormData.nitrogen)} kg/ha of nitrogen fertilizer</li>
                      <li>Add {soilResult.phosphorus - parseInt(soilFormData.phosphorus)} kg/ha of phosphorus</li>
                      <li>Supplement with {soilResult.potassium - parseInt(soilFormData.potassium)} kg/ha of potassium</li>
                      <li>Consider adding organic compost to improve soil structure</li>
                      <li>Test soil pH and adjust if necessary for {soilFormData.crop}</li>
                    </ul>
                  </div>
                </div>
              </CardFooter>
            )}
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="font-heading text-xl font-semibold mb-4">How We Generate Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-crop-green-600" />
              Crop Recommendations
            </h3>
            <p className="text-gray-600">
              Our machine learning model analyzes your soil nutrients, climate conditions, and local environmental factors 
              to determine which crops will thrive in your specific conditions. The algorithm has been trained on 
              thousands of successful farming examples.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <DatabaseBackup className="h-5 w-5 text-crop-brown-600" />
              Soil Recommendations
            </h3>
            <p className="text-gray-600">
              Based on your current soil composition and target crop, our system calculates the optimal nutrient
              balance needed. It provides precise fertilizer recommendations to ensure your soil has exactly what 
              your crops need to flourish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
