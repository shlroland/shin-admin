import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8023/graphql',
  generates: {
    'src/utils/graphql/types/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
