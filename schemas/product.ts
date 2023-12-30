export default {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
        // validation: Rule => Rule.required(),
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        options: {
          hotspot: true,
        },
        of: [
          {
            type: 'object', 
            fields: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                },
                {
                    name: 'altText',
                    type: 'string',
                    title: 'Alt text for image',
                    description: 'Enter a descriptive alt text for the image.'
                }
            ]
          },
        ],
      },
      {
        name: 'videos',
        type: 'array',
        title: 'Product Videos',
        of: [
          {
            type: 'object',
            title: 'Video',
            fields: [
              {
                name: 'videoFile',
                type: 'file',
                title: 'Video File',
              },
              {
                name: 'altText',
                type: 'string',
                title: 'Alt Text for Video',
                description: 'Enter a descriptive alt text for the video.',
              },
            ],
          },
        ],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Product Description',
      },
      {
        name: 'color',
        type: 'string',
        title: 'Product Color',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
          source: 'name',
        },
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
        options: {
          format: '$0,0.00',
        },
      },
      {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [
          {
            type: 'category',
          },
        ],
      },
      {
        name: 'stockQuantity',
        type: 'number',
        title: 'Stock Quantity on Hand',
      },
    ],
  };

   // preview: {
    //   select: {
    //     title: 'name',
    //     media: 'images.0', // Display the first image in the preview
    //   },
    // },
  

  