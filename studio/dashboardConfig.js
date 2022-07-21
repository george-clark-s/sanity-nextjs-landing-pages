export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62d91f1c06773a1f2bc57be3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vy9oep67',
                  apiId: '4dcf0501-7d16-4a26-b532-676d527c7d5a'
                },
                {
                  buildHookId: '62d91f1d465d421d9b08af7f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t7q3akiy',
                  apiId: 'fba85c7c-9c3b-4873-a9e7-d232add96c54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/george-clark-s/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t7q3akiy.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
