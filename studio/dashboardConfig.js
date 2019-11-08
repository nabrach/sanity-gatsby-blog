export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dc4e891f7034d69d00a4a77',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qbww4j9t',
                  apiId: '2d83d649-f1ab-41a2-ae23-b0789f23a0ea'
                },
                {
                  buildHookId: '5dc4e89166be35903f32ee47',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uc8aih1w',
                  apiId: '54015686-4bcb-4056-b040-eae7564a27ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nabrach/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uc8aih1w.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
