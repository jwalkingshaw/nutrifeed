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
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium !text-[#f7f8f8] mb-4 sm:mb-6 tracking-[-0.02em] leading-[1.05]">
            Help us build your stack
          </h1>
          
          {/* Submit Feature Request Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black font-medium px-6 py-3 rounded-lg text-base hover:bg-white/90 transition-colors w-full sm:w-auto mt-4 sm:mt-6"
          >
            Submit a Feature Request
          </button>
        </div>
      </section>

      {/* Main Content - Full Width Community Features */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0a0a0a]/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-medium !text-[#f7f8f8] mb-3 sm:mb-4 tracking-[-0.02em]">
                Community Feature Requests
              </h2>
              <p className="text-base sm:text-lg !text-[#8a8f98] leading-[1.4]">
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
      </section>

      {/* Feature Submission Modal */}
      <FeatureSubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFeatureSubmitted={handleFeatureSubmitted}
      />
    </div>
  );
}