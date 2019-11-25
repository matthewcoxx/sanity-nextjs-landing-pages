export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddc44b57754424f103877cb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uprd3on2',
                  apiId: '8f11edbd-b55d-4d55-9bb5-36eed02ecec6'
                },
                {
                  buildHookId: '5ddc44b501169ce6301e9a2a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-acvcs3ws',
                  apiId: 'cb85ee3b-d643-4e7d-ae47-bf290cc4d7b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matthewcoxx/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-acvcs3ws.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
