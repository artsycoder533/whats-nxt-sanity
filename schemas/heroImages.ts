export default {
    name: 'heroImage',
    type: 'document',
    title: 'Two Hero Images',
    fields: [
        {
            name: 'image1',
            type: 'image',
            title: 'First Image',
            fields: [
                {
                  name: 'altText',
                  type: 'string',
                  title: 'Alt Text for First Image',
                  description: 'Enter a descriptive alt text for the first image',
                },
              ],
        },
        {
            name: 'image2',
            type: 'image',
            title: 'Second Image',
            fields: [
                {
                  name: 'altText',
                  type: 'string',
                  title: 'Alt Text for First Image',
                  description: 'Enter a descriptive alt text for the first image',
                },
              ],
        }
    ]
}