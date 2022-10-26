module.exports = {
  ci: {
    collect: {
        url: ['https://semaphoreci.com', 'https://semaphoreci.com/blog'],
        numberOfRuns: 5
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.4}],
        'categories:accessibility': ['error', {minScore: 0.4}],
        'categories:seo': ['error', {minScore: 0.4}]
        }
    },
    upload: {
      target: 'filesystem',
      outputDir: 'reports'
    },
  },
};
