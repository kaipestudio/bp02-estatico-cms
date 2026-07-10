import { defineConfig } from 'astro/config';

import sveltia from 'astro-loader-sveltia-cms';

export default defineConfig({
  integrations: [
    
    sveltia({
      config: {
        backend: {
          name: 'github',
          repo: 'kaipestudio/minha-agencia',
          branch: 'master',
        },
        media_folder: 'public/images/uploads',
        public_folder: '/images/uploads',
        collections: [
          {
            name: 'servicos',
            label: 'Serviços',
            folder: 'src/content/servicos',
            create: true,
            slug: '{{slug}}',
            fields: [
              { label: 'Título', name: 'title', widget: 'string' },
              { label: 'Descrição', name: 'description', widget: 'text' },
              { label: 'Ícone', name: 'icon', widget: 'string', required: false },
              { label: 'Ordem', name: 'order', widget: 'number', default: 0 },
            ],
          },
        ],
      },
    }),
  ],
  output: 'static',
});