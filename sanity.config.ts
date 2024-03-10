import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'


export default defineConfig({
  name: 'been-coffee-dashboard',
  title: 'Been Coffee Dashboard',

  projectId: 'mxklvbih',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [
    visionTool(),
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([

            S.listItem().title("Orders").child(S.documentTypeList("order")),

            // S.listItem().title("Standing Orders").child(S.documentTypeList("order")),


            S.listItem().title("Suppliers").child(S.documentTypeList("supplier")),

            S.divider(),

            S.listItem().title("Articles").child(S.documentTypeList("article")),

            // S.listItem().title("Standing Orders").child(S.documentTypeList("order")),


            S.listItem().title("Article Categories").child(S.documentTypeList("articleCategory")),

            S.divider(),
            orderableDocumentListDeskItem({
              type: 'teamMember',
              title: 'Team Members',
              // icon: Paint,
              // Required if using multiple lists of the same 'type'
            
              S,
              context,
            }),
            S.listItem().title("Been Awesome Winners").child(S.documentTypeList("beenAwesomeWinner")),

            // ...S.documentTypeListItems().filter(
            //   item => item.getId() !== 'teamMember'
            // )  

          ])
      },
    }),
  ]


})
