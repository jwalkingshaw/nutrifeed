"use client";

import { useState, useEffect } from "react";
import { FeatureSubmissionModal } from "./components/FeatureSubmissionModal";
import { FeatureRequestList } from "./components/FeatureRequestList";
import { FeatureRequest } from "./types";

export default function RoadMapClient() {
  const [featureRequests, setFeatureRequests] = useState<FeatureRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchFeatureRequests();
  }, []);

  const fetchFeatureRequests = async () => {
    try {
      const response = await fetch(`/api/roadmap/feature-requests`);
      if (response.ok) {
        const data = await response.json();
        setFeatureRequests(data);
      }
    } catch (error) {
      console.error('Failed to fetch feature requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeatureSubmitted = () => {
    // Refresh the feature requests list after submission
    fetchFeatureRequests();
  };

  const handleVoteUpdate = (featureId: string, newVoteCount: number) => {
    setFeatureRequests(prev => 
      prev.map(feature => 
        feature.id === featureId 
          ? { ...feature, vote_count: newVoteCount }
          : feature
      )
    );
  };

  return (
    <div className="min-h-screen bg-white pt-[67px]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Have Your Say
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Together we're building the OS for Sports Supplements. Share your ideas and vote on features 
            that will help solve the biggest challenges facing sports supplement brands and retailers.
          </p>
          
          {/* Submit Feature Request Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 h-10 rounded-lg text-sm"
          >
            Submit a Feature Request
          </button>
        </div>
      </div>

      {/* Main Content - Full Width Community Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Community Feature Requests
            </h2>
            <p className="text-lg text-gray-600">
              Vote for the features that matter most to you. The most voted requests 
              will be prioritized for development.
            </p>
          </div>
          
          <FeatureRequestList 
            featureRequests={featureRequests}
            loading={loading}
            onVoteUpdate={handleVoteUpdate}
          />
        </div>
      </div>

      {/* Feature Submission Modal */}
      <FeatureSubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFeatureSubmitted={handleFeatureSubmitted}
      />
    </div>
  );
}