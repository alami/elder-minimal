module.exports = {
  all: () => [{ slug: '/company' }],
  permalink: ({ request }) => request.slug,
  data: () => {
    return {};
  },
};
