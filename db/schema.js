import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'farms',
        columns: [
          { name: 'name', type: 'string' },
          { name: 'investment', type: 'number' },
          { name: 'location', type: 'string' },
        ]
      }),
    // tableSchema({
    //     name: 'divisions',
    //     columns: [
    //       { name: 'name', type: 'string' },
    //       { name: 'product', type: 'string' },
    //       { name: 'investment', type: 'number' },
    //       { name: 'activity', type: 'string', isOptional:true },
    //     ]
    //   }),
  ]
})