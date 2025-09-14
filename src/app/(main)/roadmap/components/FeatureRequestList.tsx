"use client";

import { useState } from "react";
import { FeatureRequest } from "../types";
import { VotingButton } from "./VotingButton";

interface FeatureRequestListProps {
  featureRequests: FeatureRequest[];
  loading: boolean;
  onVoteUpdate: (featureId: string, newVoteCount: number) => void;
}

const statusColors = {
  pending: "bg-[#333333] text-[#f7f8f8] border-[#f7f8f8]/20",
  approved: "bg-[#f7f8f8] text-[#0a0a0a] border-[#f7f8f8]/20",
  rejected: "bg-[#222222] text-[#8a8f98] border-[#f7f8f8]/10",
  in_development: "bg-[#333333] text-[#f7f8f8] border-[#f7f8f8]/20",
  completed: "bg-[#444444] text-[#f7f8f8] border-[#f7f8f8]/20",
};

const statusLabels = {
  pending: "Pending Review",
  approved: "Open for Voting",
  rejected: "Not Planned",
  in_development: "In Development", 
  completed: "Completed",
};

export function FeatureRequestList({ 
  featureRequests, 
  loading, 
  onVoteUpdate 
}: FeatureRequestListProps) {
  const [sortBy, setSortBy] = useState<'votes' | 'date'>('votes');

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="animate-pulse bg-gray-50 rounded-lg p-6">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (featureRequests.length === 0) {
    return (
      <div className="text-center py-12 text-[#f7f8f8]">
        <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <p>No feature requests yet. Be the first to submit one!</p>
      </div>
    );
  }

  const sortedRequests = [...featureRequests].sort((a, b) => {
    if (sortBy === 'votes') {
      return b.vote_count - a.vote_count;
    }
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Sort Controls */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#f7f8f8]">
          {featureRequests.length} feature request{featureRequests.length !== 1 ? 's' : ''}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('votes')}
            className={`h-8 px-3 text-xs font-medium rounded-lg ${
              sortBy === 'votes'
                ? 'bg-[#f7f8f8] text-[#0a0a0a]'
                : 'bg-[#333333] text-[#f7f8f8]'
            }`}
          >
            Most Voted
          </button>
          <button
            onClick={() => setSortBy('date')}
            className={`h-8 px-3 text-xs font-medium rounded-lg ${
              sortBy === 'date'
                ? 'bg-[#f7f8f8] text-[#0a0a0a]'
                : 'bg-[#333333] text-[#f7f8f8]'
            }`}
          >
            Newest
          </button>
        </div>
      </div>

      {/* Feature Request Cards */}
      <div className="space-y-4">
        {sortedRequests.map((request) => (
          <div key={request.id} className="border border-[#f7f8f8]/20 rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="font-semibold text-[#f7f8f8] text-lg">{request.title}</h3>
                  <span className={`inline-flex self-start px-2 py-1 text-xs font-medium rounded-full border ${statusColors[request.status]}`}>
                    {statusLabels[request.status]}
                  </span>
                </div>
                <p className="text-[#f7f8f8] mb-4 leading-relaxed">
                  {request.description}
                </p>
                <div className="text-sm text-[#f7f8f8]">
                  Submitted by <span className="font-medium">{request.submitter_name}</span> on {formatDate(request.created_at)}
                </div>
              </div>
              
              {request.status === 'approved' && (
                <div className="flex-shrink-0 self-start">
                  <VotingButton
                    featureId={request.id}
                    voteCount={request.vote_count}
                    onVoteUpdate={onVoteUpdate}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}