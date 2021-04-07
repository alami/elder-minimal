const fetch = require('node-fetch');
module.exports = {
  all: async () => {
    const companyData = await fetch(
      'https://opendata.arcgis.com/datasets/a4d813c396934fc09d0b801a0c491852_0.geojson',
    ).then((res) => res.json());
    const companies = Object.values(companyData.features).map((entry) => entry.properties);
    return companies.map((company) => ({ slug: company.FID }));
  },
  permalink: ({ request }) => `/${request.slug}/`,
  data: async () => {
    return {};
  },
};
