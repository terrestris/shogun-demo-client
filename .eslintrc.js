module.exports = {
  extends: [
    '@terrestris/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:import/recommended'
  ],
  rules: {
    '@typescript-eslint/member-ordering': 'off',

    'arrow-spacing': 'warn',
    'comma-spacing': 'warn',
    'comma-dangle': 'warn',
    'eol-last': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', {
      'max': 1
    }],
    'object-property-newline': 'warn',
    'object-curly-newline': ['warn', {
      'multiline': true,
      'minProperties': 1
    }],
    'space-before-function-paren': ['warn', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],

    'react/jsx-max-props-per-line': ['warn', {
      'maximum': 1
    }],
    'react/jsx-closing-tag-location': ['warn'],
    'react/jsx-closing-bracket-location': ['warn'],

    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/order': ['warn', {
      'groups': [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index',
        'object'
      ],
      'pathGroups': [{
        'pattern': 'react',
        'group': 'external',
        'position': 'before'
      }, {
        'pattern': '@terrestris/**',
        'group': 'external',
        'position': 'after'
      }],
      'pathGroupsExcludedImportTypes': ['react'],
      'newlines-between': 'always-and-inside-groups',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true
      }
    }]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};
