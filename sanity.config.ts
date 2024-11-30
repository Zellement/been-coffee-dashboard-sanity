import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { FaTruck } from "react-icons/fa6";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { IoIosTrophy, IoIosNotifications } from "react-icons/io";
import { FaRepeat } from "react-icons/fa6";
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import { SiteBrand } from './components/SiteBrand';
import { MdTableRestaurant } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { TbChristmasTree } from "react-icons/tb";

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["adventCalendar"])


export default defineConfig({
  name: 'been-coffee-dashboard',
  title: 'Been Coffee Dashboard',

  projectId: 'mxklvbih',
  dataset: 'production',
  icon: SiteBrand,

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([

            S.listItem().title("Orders").icon(RiMoneyPoundCircleFill).child(S.documentTypeList("order")),

            S.listItem().title("Standing Orders").icon(FaRepeat).child(S.documentTypeList("standingOrder")),

            S.listItem().title("Suppliers").icon(FaTruck).child(S.documentTypeList("supplier")),

            S.divider(),

            S.listItem().title("Articles").icon(FaPen).child(S.documentTypeList("article")),

            // S.listItem().title("Standing Orders").child(S.documentTypeList("order")),


            S.listItem().title("Article Categories").icon(TbCategoryFilled).child(S.documentTypeList("articleCategory")),

            S.divider(),
            orderableDocumentListDeskItem({
              type: 'teamMember',
              title: 'Team Members',
              // icon: Paint,
              // Required if using multiple lists of the same 'type'
            icon: FaUsers,
              S,
              context,
            }),
            S.listItem().title("Been Awesome Winners").icon(IoIosTrophy).child(S.documentTypeList("beenAwesomeWinner")),

            S.divider(),

            S.listItem().title("Awards").icon(FaAward).child(S.documentTypeList("award")),

            S.listItem().title("Notices").icon(IoIosNotifications).child(S.documentTypeList("notice")),

            S.listItem().title("Table Bookings").icon(MdTableRestaurant).child(S.documentTypeList("tableBooking")),

            S.listItem().title("Routine Tasks").icon(MdOutlineCleaningServices).child(S.documentTypeList("routineTasks")),

            S.divider(),

            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Advent Calendar")
              .id("adventCalendar")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .title('Advent Calendar')
                  .schemaType("adventCalendar")
                  .documentId("adventCalendar")
              ),

          ])
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
  // For singleton types, filter out actions that are not explicitly included
  // in the `singletonActions` list defined above
  actions: (input, context) =>
    singletonTypes.has(context.schemaType)
      ? input.filter(({ action }) => action && singletonActions.has(action))
      : input,
},

})
