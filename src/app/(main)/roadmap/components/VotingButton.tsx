"use client";

import { useState, useEffect } from "react";

interface VotingButtonProps {
  featureId: string;
  voteCount: number;
  onVoteUpdate: (featureId: string, newVoteCount: number) => void;
}

export function VotingButton({ featureId, voteCount, onVoteUpdate }: VotingButtonProps) {
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false);
  const [currentVoteCount, setCurrentVoteCount] = useState(voteCount);

  useEffect(() => {
    // Check if user has already voted for this feature
    checkVoteStatus();
  }, [featureId]);

  useEffect(() => {
    setCurrentVoteCount(voteCount);
  }, [voteCount]);

  const checkVoteStatus = async () => {
    try {
      const response = await fetch(`/api/roadmap/votes/${featureId}/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voterIdentifier: getVoterIdentifier()
        })
      });

      if (response.ok) {
        const data = await response.json();
        setHasVoted(data.hasVoted);
      }
    } catch (error) {
      console.error('Failed to check vote status:', error);
    }
  };

  const getVoterIdentifier = () => {
    // Use a combination of browser fingerprinting for anonymous voting
    // In a real app, you might want to use a more sophisticated approach
    let identifier = localStorage.getItem('voter_id');
    if (!identifier) {
      identifier = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('voter_id', identifier);
    }
    return identifier;
  };

  const handleVote = async () => {
    setIsVoting(true);

    try {
      const response = await fetch(`/api/roadmap/votes`, {
        method: hasVoted ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          featureRequestId: featureId,
          voterIdentifier: getVoterIdentifier()
        })
      });

      if (response.ok) {
        const data = await response.json();
        const newVoteCount = hasVoted ? currentVoteCount - 1 : currentVoteCount + 1;
        
        setHasVoted(!hasVoted);
        setCurrentVoteCount(newVoteCount);
        onVoteUpdate(featureId, newVoteCount);
      } else {
        const errorData = await response.json();
        console.error('Vote failed:', errorData.message);
      }
    } catch (error) {
      console.error('Failed to vote:', error);
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleVote}
        disabled={isVoting}
        className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg ${
          hasVoted 
            ? "bg-blue-600 text-white" 
            : "bg-gray-100 text-gray-600 border border-gray-200"
        } ${isVoting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <svg 
          className="w-5 h-5 mb-1"
          fill={hasVoted ? "currentColor" : "none"}
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 15l7-7 7 7" 
          />
        </svg>
        <span className="text-sm font-semibold">
          {currentVoteCount}
        </span>
      </button>
    </div>
  );
}