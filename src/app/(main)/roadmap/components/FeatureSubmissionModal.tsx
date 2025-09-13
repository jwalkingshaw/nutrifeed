"use client";

import { FeatureSubmissionForm } from "./FeatureSubmissionForm";

interface FeatureSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFeatureSubmitted: () => void;
}

export function FeatureSubmissionModal({ isOpen, onClose, onFeatureSubmitted }: FeatureSubmissionModalProps) {
  if (!isOpen) return null;

  const handleFeatureSubmitted = () => {
    onFeatureSubmitted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl border border-gray-300 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Submit a Feature Request
              </h2>
              <p className="text-gray-600 mt-1">
                Tell us what feature would make the biggest impact for your business.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          <FeatureSubmissionForm onFeatureSubmitted={handleFeatureSubmitted} />
        </div>
      </div>
    </div>
  );
}