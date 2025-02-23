import React, { useState } from 'react';
import {
  HiOutlinePencil,
  HiOutlineDocumentText,
  HiOutlineClipboardCheck,
  HiOutlineCalendar,
} from 'react-icons/hi';

interface CampaignDetailsData {
  title: string;
  description: string;
  requirements: string;
  qualityCriteria: string;
  expirationDate: string;
}

const CampaignDetails = () => {
  const [formData, setFormData] = useState<CampaignDetailsData>({
    title: '',
    description: '',
    requirements: '',
    qualityCriteria: '',
    expirationDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <form className="space-y-8 ml-24">
        {/* Title Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <HiOutlinePencil className="w-5 h-5 text-[#a855f7]" />
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-[#f5f5faf4]"
            >
              Campaign Title
            </label>
          </div>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#f5f5fa14] border border-[#f5f5fa14] text-[#f5f5faf4] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent placeholder-[#f5f5fa4a] transition-all duration-200"
            placeholder="Enter a descriptive title for your campaign"
          />
        </div>

        {/* Description Textarea */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <HiOutlineDocumentText className="w-5 h-5 text-[#a855f7]" />
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-[#f5f5faf4]"
            >
              Description
            </label>
          </div>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-[#f5f5fa14] border border-[#f5f5fa14] text-[#f5f5faf4] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent placeholder-[#f5f5fa4a] transition-all duration-200 resize-none"
            placeholder="Provide a detailed description of what you're looking to collect"
          />
        </div>

        {/* Requirements Textarea */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <HiOutlineClipboardCheck className="w-5 h-5 text-[#a855f7]" />
            <label
              htmlFor="requirements"
              className="block text-sm font-semibold text-[#f5f5faf4]"
            >
              Requirements
            </label>
          </div>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-[#f5f5fa14] border border-[#f5f5fa14] text-[#f5f5faf4] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent placeholder-[#f5f5fa4a] transition-all duration-200 resize-none"
            placeholder="List specific requirements for data submission"
          />
        </div>

        {/* Quality Criteria Textarea */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <HiOutlineClipboardCheck className="w-5 h-5 text-[#a855f7]" />
            <label
              htmlFor="qualityCriteria"
              className="block text-sm font-semibold text-[#f5f5faf4]"
            >
              Quality Criteria
            </label>
          </div>
          <textarea
            id="qualityCriteria"
            name="qualityCriteria"
            value={formData.qualityCriteria}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-[#f5f5fa14] border border-[#f5f5fa14] text-[#f5f5faf4] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent placeholder-[#f5f5fa4a] transition-all duration-200 resize-none"
            placeholder="Define the quality standards for acceptable submissions"
          />
        </div>

        {/* Expiration Date Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <HiOutlineCalendar className="w-5 h-5 text-[#a855f7]" />
            <label
              htmlFor="expirationDate"
              className="block text-sm font-semibold text-[#f5f5faf4]"
            >
              Expiration Date
            </label>
          </div>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl bg-[#f5f5fa14] border border-[#f5f5fa14] text-[#f5f5faf4] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent placeholder-[#f5f5fa4a] transition-all duration-200 [color-scheme:dark]"
          />
        </div>
      </form>
    </div>
  );
};

export default CampaignDetails;
