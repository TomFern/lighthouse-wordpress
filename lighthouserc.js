module.exports = {
  ci: {
    collect: {
        url: ['https://semaphoreci.com'],
        numberOfRuns: 1
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.9}]
        }
    },
    upload: {
      target: 'filesystem',
      outputDir: 'reports'
    },
  },
};
