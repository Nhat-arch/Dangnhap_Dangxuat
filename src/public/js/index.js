// CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
//     toolbar: {
//         items: [
// 'bold','italic','|','undo','redo','|','numberedList','bulletedList',,
//         ],
//         shouldNotGroupWhenFull: true
//     },
    // list: {
    //     properties: {
    //         styles: true,
    //         startIndex: true,
    //         reversed: true
    //     }
    // },
    // heading: {
    //     options: [
    //         { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
    //         { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
    //         { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
    //         { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
    //         { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
    //         { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
    //         { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
    //     ]
    // },
    // placeholder: 'Welcome to CKEditor 5!',
    // fontFamily: {
    //     options: [
    //         'default',
    //         'Arial, Helvetica, sans-serif',
    //         'Courier New, Courier, monospace',
    //         'Georgia, serif',
    //         'Lucida Sans Unicode, Lucida Grande, sans-serif',
    //         'Tahoma, Geneva, sans-serif',
    //         'Times New Roman, Times, serif',
    //         'Trebuchet MS, Helvetica, sans-serif',
    //         'Verdana, Geneva, sans-serif'
    //     ],
    //     supportAllValues: true
    // },
    // fontSize: {
    //     options: [10, 12, 14, 'default', 18, 20, 22],
    //     supportAllValues: true
    // },
    // htmlSupport: {
    //     allow: [
    //         {
    //             name: /.*/,
    //             attributes: true,
    //             classes: true,
    //             styles: true
    //         }
    //     ]
    // },
    // htmlEmbed: {
    //     showPreviews: true
    // },
    // link: {
    //     decorators: {
    //         addTargetToExternalLinks: true,
    //         defaultProtocol: 'https://',
    //         toggleDownloadable: {
    //             mode: 'manual',
    //             label: 'Downloadable',
    //             attributes: {
    //                 download: 'file'
    //             }
    //         }
    //     }
    // },
    // mention: {
    //     feeds: [
    //         {
    //             marker: '@',
    //             feed: [
    //                 '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
    //                 '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
    //                 '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
    //                 '@sugar', '@sweet', '@topping', '@wafer'
    //             ],
    //             minimumCharacters: 1
    //         }
    //     ]
    // },
//     removePlugins: [
//         'CKBox',
//         'CKFinder',
//         'EasyImage',
//         'RealTimeCollaborativeComments',
//         'RealTimeCollaborativeTrackChanges',
//         'RealTimeCollaborativeRevisionHistory',
//         'PresenceList',
//         'Comments',
//         'TrackChanges',
//         'TrackChangesData',
//         'RevisionHistory',
//         'Pagination',
//         'WProofreader',
//         'MathType'
//     ]
// });
CKEDITOR.ClassicEditor.create(document.getElementById("editor"),{
    toolbar:{
        items:[
            'bold','italic','|','undo','redo','|','numberedList','bulletedList','|','fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',

        ],
        shouldNotGroupWhenFull: false,
    },
    removePlugins:[
        'CKBox',
        'CKFinder',
        'EasyImage',
        'RealTimeCollaborativeComments',
        'RealTimeCollaborativeTrackChanges',
        'RealTimeCollaborativeRevisionHistory',
        'PresenceList',
        'Comments',
        'TrackChanges',
        'TrackChangesData',
        'RevisionHistory',
        'Pagination',
        'WProofreader',
        'MathType'
    ]
})