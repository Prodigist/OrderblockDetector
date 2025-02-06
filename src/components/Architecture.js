import React, { useState } from 'react';
import { ChevronRight, GitBranch, Circle, Box, Activity, BarChart3 } from 'lucide-react';

// Simplified Card components
const Card = ({ children, className = '', onClick }) => (
  <div 
    className={`rounded-lg border border-gray-200 shadow-sm ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-200">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">
    {children}
  </h3>
);

const CardContent = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);

const ArchitectureVisualization = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const components = {
    detector: {
      title: "OrderBlock Detector (Main)",
      description: "Core indicator managing the detection pipeline",
      subComponents: ["Market Structure", "Momentum", "Order Block Strategy"],
      key_features: [
        "Manages detection workflow",
        "Integrates all components",
        "Handles visualization",
        "Real-time analysis"
      ]
    },
    marketStructure: {
      title: "Market Structure Analysis",
      description: "Analyzes market structure context",
      subComponents: ["Range Based", "Swing Based", "ATR Based"],
      key_features: [
        "Structure classification",
        "Trend identification",
        "Volatility analysis",
        "Pattern recognition"
      ]
    },
    momentum: {
      title: "Momentum Detection",
      description: "Identifies significant momentum moves",
      key_features: [
        "Impulse detection",
        "Volume confirmation",
        "Movement validation",
        "Reversal identification"
      ]
    },
    strategy: {
      title: "Order Block Strategies",
      description: "Pluggable detection strategies",
      subComponents: ["Volume-Impulse", "Simple Volume", "Structural"],
      key_features: [
        "Strategy interface",
        "Configurable parameters",
        "Scoring system",
        "Quality metrics"
      ]
    }
  };

  const ComponentCard = ({ id, data, isMain }) => (
    <Card 
      className={`cursor-pointer transition-all ${
        selectedComponent === id ? 'ring-2 ring-blue-500' : ''
      } ${isMain ? 'bg-blue-50' : 'bg-white'}`}
      onClick={() => setSelectedComponent(id)}
    >
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2">
            {id === 'detector' && <Box className="w-5 h-5" />}
            {id === 'marketStructure' && <GitBranch className="w-5 h-5" />}
            {id === 'momentum' && <Activity className="w-5 h-5" />}
            {id === 'strategy' && <BarChart3 className="w-5 h-5" />}
            {data.title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{data.description}</p>
        {data.subComponents && (
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">Implementations:</p>
            <ul className="text-sm space-y-1">
              {data.subComponents.map((sub, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedComponent === id && (
          <div className="mt-4 border-t pt-4">
            <p className="text-sm font-semibold mb-2">Key Features:</p>
            <ul className="text-sm space-y-1">
              {data.key_features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">OrderBlock Detector Architecture</h2>
      
      <div className="grid grid-cols-1 gap-6 mb-6">
        <ComponentCard id="detector" data={components.detector} isMain={true} />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-8 bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ComponentCard id="marketStructure" data={components.marketStructure} />
        <ComponentCard id="momentum" data={components.momentum} />
        <ComponentCard id="strategy" data={components.strategy} />
      </div>
    </div>
  );
};

export default ArchitectureVisualization;