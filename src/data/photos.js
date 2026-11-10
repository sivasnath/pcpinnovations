// Photographs from PCP Innovations' own trainings, site studies and project visits.
// Files live in /public/photos (WebP, max 1400px). Captions are kept generic: no individuals named.

export const photos = {
  'agrika-site-team': { w: 1280, h: 597, alt: 'Project team at the Agrika cold storage site, Kasaragod', caption: 'Site visit for the Agrika cold storage project, Kasaragod' },
  'agrika-site-board': { w: 1280, h: 597, alt: 'Project signboard on the cold storage site', caption: 'Cold storage project land, ready for development' },
  'agrika-site-land': { w: 1280, h: 597, alt: 'Open laterite land at a project site', caption: 'Land assessment before the project report' },
  'bplan-class-1': { w: 1024, h: 576, alt: 'Participants seated in a business plan training hall', caption: 'Training for preparation of business plans' },
  'bplan-class-2': { w: 1024, h: 768, alt: 'Large hall full of participants at a training programme', caption: 'Business plan training for FPO members' },
  'bplan-class-3': { w: 1280, h: 597, alt: 'Participants working through a business plan exercise', caption: 'Hands-on business plan exercises' },
  'bplan-class-4': { w: 1280, h: 597, alt: 'Small group working at laptops during a business plan session', caption: 'Group work on financial projections' },
  'fpo-session-1': { w: 1280, h: 960, alt: 'Trainer presenting a slide on FPO regulations', caption: 'Session on FPO regulations' },
  'fpo-session-2': { w: 1280, h: 960, alt: 'Trainer presenting the FPO operational mechanism to farmers', caption: 'Explaining the FPO operational mechanism' },
  'fpo-session-3': { w: 1280, h: 960, alt: 'FPO training session with directors and farmers', caption: 'Capacity building for FPO directors' },
  'fpo-session-4': { w: 1280, h: 960, alt: 'Trainer addressing a full room of FPO members', caption: 'Orientation on schemes and funding for FPOs' },
  'fpo-session-5': { w: 1400, h: 654, alt: 'Audience of FPO members at a training programme', caption: 'FPO members at a training programme' },
  'fpo-session-6': { w: 1400, h: 654, alt: 'Panel speaking on the structure of farmer producer organisations', caption: 'Panel on the structure and roles of FPOs' },
  'compliance-1': { w: 1280, h: 720, alt: 'Speaker addressing a legal compliance class', caption: 'Legal compliance class for Farmer Producer Companies' },
  'compliance-2': { w: 1400, h: 788, alt: 'Participants taking notes at a compliance class', caption: 'Directors, CEOs and accountants at a compliance class' },
  'compliance-3': { w: 1280, h: 720, alt: 'Presentation on licences required for FPOs', caption: 'Licences and statutory requirements' },
  'compliance-4': { w: 1400, h: 788, alt: 'Participants at a compliance workshop', caption: 'Accounts and audit duties under the Companies Act' },
  'residential-group': { w: 1040, h: 492, alt: 'Group photo of residential training participants', caption: 'Residential practical class participants' },
  'residential-1': { w: 1040, h: 492, alt: 'Participants around a table at a residential class', caption: 'Mock board meeting at a residential class' },
  'residential-2': { w: 1040, h: 492, alt: 'Participants discussing at a long table', caption: 'Discussion on FIG formation and farmer mobilisation' },
  'residential-3': { w: 1040, h: 492, alt: 'Facilitator speaking to participants seated around tables', caption: 'Practical session on meetings and minutes' },
  'residential-4': { w: 1040, h: 492, alt: 'Participants at a residential training session', caption: 'Accounts preparation session' },
  'farm-banana': { w: 1280, h: 960, alt: 'Banana plantation', caption: 'Banana cultivation at a member farm' },
  'farm-saplings': { w: 1050, h: 1400, alt: 'Coconut saplings ready for planting', caption: 'Coconut saplings for a planting programme' },
  'copra-unloading': { w: 1280, h: 575, alt: 'Workers unloading coconuts from a truck', caption: 'Raw material arriving at a processing unit' },
  'farm-land-prep': { w: 1400, h: 788, alt: 'Excavator preparing land in a coconut grove', caption: 'Land preparation at a project site' },
  'oil-bottling': { w: 1280, h: 1280, alt: 'Rows of bottled coconut oil', caption: 'Finished product: bottled coconut oil' },
  'site-visit-unit': { w: 1280, h: 1280, alt: 'Consultants inspecting a small processing building', caption: 'On-site study of existing infrastructure' },
  'oil-expeller': { w: 1280, h: 1280, alt: 'Oil expeller machine in a processing unit', caption: 'Oil expeller at a coconut processing unit' },
  'copra-store': { w: 1280, h: 1280, alt: 'Large wooden bin of dried copra', caption: 'Copra storage' },
  'filling-machine': { w: 1280, h: 1280, alt: 'Liquid filling machine on a table', caption: 'Filling and packing equipment' },
  'warehouse-front': { w: 1400, h: 1400, alt: 'Modern warehouse building with loading bays', caption: 'Warehouse and cold chain facility' },
  'cold-room': { w: 1400, h: 1400, alt: 'Empty insulated cold storage chamber', caption: 'Cold storage chamber' },
  'warehouse-side': { w: 1280, h: 1280, alt: 'Consultants walking alongside a large warehouse', caption: 'Site tour of a storage facility' },
  'cold-store-racks': { w: 1280, h: 1280, alt: 'Racks stacked with crates in a cold store', caption: 'Racked storage in a cold store' },
  'warehouse-visit': { w: 1280, h: 1280, alt: 'Consultants inspecting stock inside a warehouse', caption: 'Inspecting stock and capacity' },
}

export const photo = (id) => ({ id, src: `/photos/${id}.webp`, ...photos[id] })

// Industry pages: a hero photo (replaces the generated pattern) and a gallery.
// Industries without their own photographs keep the generated pattern.
export const industryPhotos = {
  'agriculture-fpo': { hero: 'agrika-site-team', gallery: ['agrika-site-board', 'farm-land-prep', 'farm-banana', 'farm-saplings', 'fpo-session-2', 'residential-group'] },
  'food-processing': { hero: 'oil-expeller', gallery: ['copra-unloading', 'copra-store', 'filling-machine', 'oil-bottling'] },
  'construction-real-estate': { hero: 'warehouse-front', gallery: ['warehouse-side', 'site-visit-unit', 'agrika-site-land'] },
  'finance-cooperatives': { hero: 'compliance-2', gallery: ['compliance-1', 'compliance-3', 'compliance-4'] },
  'trusts-ngos-institutions': { hero: 'residential-group', gallery: ['residential-1', 'fpo-session-5', 'bplan-class-2'] },
  'technology-startups': { hero: 'bplan-class-4', gallery: ['bplan-class-1', 'bplan-class-3', 'fpo-session-1'] },
  'other-industries': { hero: 'cold-store-racks', gallery: ['cold-room', 'warehouse-visit', 'filling-machine'] },
}

// Service pages: a photo strip under the title, plus photos for individual sections (keyed by heading).
export const servicePhotos = {
  'project-reports': {
    strip: ['site-visit-unit', 'warehouse-front', 'cold-store-racks'],
    sections: {
      'Project Report': ['agrika-site-team', 'oil-expeller'],
      'Detailed Project Report (DPR)': ['warehouse-visit', 'farm-land-prep'],
    },
  },
  'fpo-management': {
    strip: ['fpo-session-2', 'residential-group', 'compliance-2'],
    sections: {
      'Residential Practical Classes': ['residential-1', 'residential-2', 'residential-3', 'residential-4'],
      'Training for Preparation of Business Plan': ['bplan-class-1', 'bplan-class-2', 'bplan-class-3', 'bplan-class-4'],
      'Legal Compliance Classes': ['compliance-1', 'compliance-3', 'compliance-4', 'fpo-session-1'],
      'Project Preparation': ['cold-store-racks', 'oil-expeller', 'farm-land-prep', 'warehouse-front'],
      'Assistance for FPO Schemes': ['fpo-session-3', 'fpo-session-4', 'fpo-session-6', 'fpo-session-5'],
    },
  },
  'government-schemes': {
    strip: ['agrika-site-team', 'fpo-session-4', 'farm-banana'],
    sections: { 'Our Expertise': ['fpo-session-6', 'compliance-2'] },
  },
  'startup-support': {
    strip: ['bplan-class-2', 'bplan-class-4', 'fpo-session-1'],
    sections: {},
  },
}

// Home page: service column covers and the "from the field" mosaic.
export const serviceCover = {
  'project-reports': 'site-visit-unit',
  'fpo-management': 'fpo-session-2',
  'government-schemes': 'agrika-site-team',
  'startup-support': 'bplan-class-4',
}
export const fieldMosaic = ['residential-group', 'fpo-session-3', 'warehouse-front', 'oil-expeller', 'compliance-2', 'farm-land-prep']
