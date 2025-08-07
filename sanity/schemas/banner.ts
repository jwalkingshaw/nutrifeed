import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Advertisement Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'campaignName',
      title: 'Campaign Name',
      type: 'string',
      description: 'Internal name for this banner campaign',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'placement',
      title: 'Banner Placement',
      type: 'string',
      options: {
        list: [
          { title: 'Top Banner (Main Page)', value: 'top' },
          { title: 'Right Sidebar', value: 'sidebar' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desktopImage',
      title: 'Desktop Image',
      type: 'image',
      description: 'Banner image for desktop (728x90 for top, 300x250 for sidebar)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      description: 'Banner image for mobile (320x50 for top banner, same as desktop for sidebar)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clickThroughUrl',
      title: 'Click Through URL',
      type: 'url',
      description: 'URL to redirect when banner is clicked',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetBlank',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'Should the link open in a new tab?',
      initialValue: true,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      description: 'When this banner should start showing',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'When this banner should stop showing',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Is this banner currently active?',
      initialValue: true,
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Higher numbers show first if multiple banners are active (1-10)',
      validation: (Rule) => Rule.required().min(1).max(10),
      initialValue: 5,
    }),
    defineField({
      name: 'clickTracking',
      title: 'Enable Click Tracking',
      type: 'boolean',
      description: 'Track clicks on this banner',
      initialValue: true,
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Internal notes about this banner campaign',
    }),
  ],
  preview: {
    select: {
      title: 'campaignName',
      placement: 'placement',
      media: 'desktopImage',
      startDate: 'startDate',
      endDate: 'endDate',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, placement, startDate, endDate, isActive } = selection
      const placementLabel = placement === 'top' ? 'Top Banner' : 'Sidebar'
      const status = isActive ? '🟢' : '🔴'
      const dates = startDate && endDate 
        ? ` (${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()})`
        : ''
      
      return {
        title: `${status} ${title}`,
        subtitle: `${placementLabel}${dates}`,
        media: selection.media,
      }
    },
  },
  orderings: [
    {
      title: 'Priority (High to Low)',
      name: 'priorityDesc',
      by: [{ field: 'priority', direction: 'desc' }],
    },
    {
      title: 'Start Date (Newest First)',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
})