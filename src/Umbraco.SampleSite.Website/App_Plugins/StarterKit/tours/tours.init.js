app.run(['tourService', 'eventsService',
    function (tourService, eventsService) {

        var contentTours = [
            {
                "name": "The Content section",
                "alias": "theStarterKitTheContentSection",
                "group": "Create content",
                "steps": [
                    {
                        "title": "The Content section",
                        "content": "<p>In this tour you will get a short introduction to the Content section in Umbraco.</p><p>The content section is where all the pages and content for the website lives.</p><p>You will learn how to navigate the content, update some content, and preview the website.</p>",
                        "type": "intro"
                    },
                    {
                        "element": "#applications [data-element='section-content']",
                        "title": "Navigate to the Content section",
                        "content": "<p>In the <b>Content section</b> you can create and manage the content of the website.</p><p>The <b>Content section</b> contains the content of your website. Content is displayed as <b>nodes</b> in the content tree.</p>",
                        "event": "click",
                        "backdropOpacity": 0.6
                    },
                    {
                        "element": "#tree [data-element='tree-item-Home']",
                        "title": "The Home page",
                        "event": "click",
                        "content": "<p>The first node you will see in the content tree is the <b>Home</b> page.</p><p><b>Click</b> on the <b>small triangle</b> on the left of the Home page to see the pages underneath the Home page.</p>",
                        "eventElement": "#tree [data-element='tree-item-Home'] [data-element='tree-item-expand']"
                    },
                    {
                        "element": "#tree [data-element='tree-item-Home']",
                        "title": "The site structure",
                        "content": "<p>In the content tree you will see the site structure. You can expand trees by clicking the down arrow to the left of the node.</p>"
                    },
                    {
                        "element": "#tree [data-element='tree-item-Home']",
                        "title": "Open the Home page",
                        "content": "<p>Let's have a look at what the content of a page could look like.</p><p><b>Click</b> on the <b>Home page name</b> to open the node.</p>",
                        "event": "click",
                        "eventElement": "#tree [data-element='tree-item-Home'] a.umb-tree-item__label"
                    },
                    {
                        "element": "[data-element='editor-name-field']",
                        "elementPreventClick": true,
                        "title": "The page name",
                        "content": "<p>On the top of the page you will find the page name.</p>"
                    },
                    {
                        "element": "[data-element='property-heroHeader']",
                        "title": "Properties",
                        "content": "<p>In the center of the page you will find the page <b>Properties</b>.</p><p>These are all the pieces of information the page consist of. Properties can vary depending on wich <b>Document type</b> the current item belongs to.</p>"
                    },
                    {
                        "element": "[data-element='editor-tabs']",
                        "elementPreventClick": true,
                        "title": "Organise with tabs",
                        "content": "<p>The properties of a page can be organised into <b>tabs</b> so it is easy to find the right place to update the content.</p>"
                    },
                    {
                        "element": "[data-element='button-preview']",
                        "title": "Preview content",
                        "content": "<p>Before a page is published to your website you can preview any changes you have made to the page.</p><p><b>Click</b> the preview to see how the website looks like now.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='property-heroHeader']",
                        "title": "Update the header",
                        "content": "<p>Let's make an update to the content in the <b>Header</b> field.</p><p>It could be: <pre>Welcome to my website</pre></p>"
                    },
                    {
                        "element": "[data-element='button-preview']",
                        "title": "Preview update",
                        "content": "<p><b>Click</b> the preview button to preview the changes we just made.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='button-saveAndPublish']",
                        "title": "Save and Publish",
                        "content": "<p><b>Click</b> on <b>Save and Publish</b> button to publish the changes and make the change visible to the public.</p>",
                        "event": "click"
                    }
                ]
            },
            {
                "name": "Creating Content",
                "alias": "theStarterKitCreatingContent",
                "group": "Create content",
                "steps": [
                    {
                        "title": "Creating your first content page",
                        "content": "<p>In this tour you will learn how to create a new page for your website.</p>",
                        "type": "intro"
                    },
                    {
                        "element": "#applications [data-element='section-content']",
                        "title": "Navigate to the Content section",
                        "content": "<p>In the <b>Content section</b> you can create and manage the content of the website.</p><p>The <b>Content section</b> contains the content of your website. Content is displayed as <b>nodes</b> in the content tree.</p>",
                        "event": "click",
                        "backdropOpacity": 0.6
                    },
                    {
                        "element": "#tree [data-element='tree-item-Home']",
                        "title": "Open the context menu",
                        "content": "<p>Open the context menu by hovering the Home node.</p><p>Now click the <b>three small dots</b> to the right.</p>",
                        "event": "click",
                        "eventElement": "[data-element='tree-item-Home'] [data-element='tree-item-options']"
                    },
                    {
                        "element": "#dialog [data-element='action-create-contentPage']",
                        "title": "Create new content page",
                        "content": "<p>Select the <b>Content Page</b> option to create a new page of that type.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-content'] [data-element='editor-name-field']",
                        "title": "Give your new page a name",
                        "content": "<p>Our new page needs a name. Enter <code>My Page</code> in the field and click <b>Next</b>.</p>",
                        "validateText": "My Page",
                        "view": "/App_Plugins/StarterKit/Tours/views/validateText.html"
                    },
                    {
                        "element": "[data-element='editor-content'] [data-element='property-pageTitle'] input",
                        "title": "Add a page title",
                        "content": "<p>On this page we are also required to fill out the <b>Page Title</b> property.</p><p><b>Enter</b> <code>My Page</code> in the field and click <b>Next</b></p>",
                        "validateText": "My Page",
                        "view": "/App_Plugins/StarterKit/Tours/views/validateText.html"
                    },
                    {
                        "element": "[data-element='editor-footer'] [data-element='button-group-toggle']",
                        "title": "Save as draft",
                        "content": "<p>Before we can preview the page we need to save it as a draft.</p><p><b>Click</b> the small arrow to see more save options.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-footer'] [data-element='button-save']",
                        "title": "Save as draft",
                        "content": "<p><b>Click</b> the <b>Save</b> option to save the page.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-footer'] [data-element='button-preview']",
                        "title": "Preview",
                        "content": "<p><b>Click</b> the <b>Preview</b>-button to preview the new page before publishing it.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-container']",
                        "title": "Go explore",
                        "content": "<p>The page still looks a bit empty. You can now try and fill out some of the other properties on the page.</p>",
                        "event": "click"
                    }
                ]
            },
            {
                "name": "The Media Library",
                "alias": "theStarterKitTheMediaLibrary",
                "group": "Create content",
                "steps": [
                    {
                        "title": "How to use the media library",
                        "content": "<p>A website would be boring without media content. In Umbraco you can manage all your images, documents, videos etc. in the <b>Media section</b>. Here you can upload and organise your media items and see details about each item.</p><p>In this tour you will learn how to upload and organise your Media library in Umbraco. It will also show you how to view details about a specific media item.</p>",
                        "type": "intro"
                    },
                    {
                        "element": "#applications [data-element='section-media']",
                        "title": "Navigate to the Media section",
                        "content": "The <b>Media</b> section is where you manage all your media items.",
                        "event": "click",
                        "backdropOpacity": 0.6
                    },
                    {
                        "element": "#tree",
                        "elementPreventClick": true,
                        "title": "The media tree",
                        "content": "<p>Like the content section the media section also has a tree.</p>"
                    },
                    {
                        "element": "#tree [data-element='tree-item-Design']",
                        "title": "Folders",
                        "content": "<p>In this starterkit we have added a couple of folders. One of them is called <b>Design</b>.</p><p>This folder is meant to hold all the design related media items like background images etc.</p><p><b>Click</b> the folder name to open the folder.</p>",
                        "event": "click",
                        "eventElement": "#tree [data-element='tree-item-Design'] a.umb-tree-item__label"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='dropzone']",
                        "elementPreventClick": true,
                        "title": "Upload area",
                        "content": "<p>Inside a folder you will find an area to upload your media files...</p>"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='media-grid']",
                        "elementPreventClick": true,                        
                        "title": "Uploaded media",
                        "content": "<p>...and an area with all your uploaded files.</p>"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='dropzone']",
                        "title": "Upload a background image",
                        "content": "<p>Let's upload a new image we can use as background image on the Home page in the next tour.</p><p>Click the <b>Click here to choose files</b>-button and select an image on your computer to upload.</p>",
                        "view": "/App_Plugins/StarterKit/Tours/views/medialibrary/uploadimages.html"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='media-grid-item-0']",
                        "title": "View media item details",
                        "content": "Hover the media item and <b>Click the purple bar</b> to view details about the media item",
                        "event": "click",
                        "eventElement": "[data-element='editor-media'] [data-element='media-grid-item-0'] [data-element='media-grid-item-edit']"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='property-umbracoFile']",
                        "elementPreventClick": true,                        
                        "title": "The uploaded image",
                        "content": "<p>Here you can see the image you have uploaded.</p>"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='property-umbracoBytes']",
                        "elementPreventClick": true,                        
                        "title": "Image size",
                        "content": "<p>You will also find other details about the image, like the size.</p><p>Media items work in much the same way as content. Properties can vary depending on wich <b>Media type</b> the current item belongs to.</p>"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='tab-_umb_infoTab']",
                        "title": "Info",
                        "content": "Under the info tab you will find  default information about the media item.",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='node-info-urls']",
                        "elementPreventClick": true,                        
                        "title": "Link to media",
                        "content": "The path to the media item..."
                    },
                    {
                        "element": "[data-element='editor-media'] [data-element='node-info-general']",
                        "elementPreventClick": true,
                        "title": "General information",
                        "content": "...and information about when the media item has been created and edited."
                    }
                ]
            },
            {
                "name": "Adding media to content",
                "alias": "theStarterKitAddingMediaToContent",
                "group": "Create content",
                "steps": [
                    {
                        "title": "Adding media to content",
                        "content": "<p>In this tour you will learn how to add media to a content page using a <b>Media picker</b>.</p><p>Your will use the image you uploaded to the design folder as a new background image for the <b>Home page</b>.</p>",
                        "type": "intro"
                    },
                    {
                        "element": "#applications [data-element='section-content']",
                        "title": "Navigate to the Content section",
                        "content": "<p><b>Click</b> the content section icon to open the content section.</p>",
                        "event": "click",
                        "backdropOpacity": 0.6
                    },
                    {
                        "element": "#tree [data-element='tree-item-Home']",
                        "title": "Home",
                        "content": "<p><b>Click</b> the Home node to open it.</p>",
                        "event": "click",
                        "eventElement": "#tree [data-element='tree-item-Home'] a.umb-tree-item__label"
                    },
                    {
                        "element": "[data-element='editor-content'] [data-element='tab-Design']",
                        "title": "Design",
                        "content": "<p>Under the design tab you will find the property to change the background image.</p><p><b>Click</b> the tab to open it.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-content'] [data-element='property-HeroBackgroundImage'] [data-element='sortable-thumbnails'] [data-element='sortable-thumbnail-0']",
                        "title": "Remove the current image",
                        "content": "<p>First we need to remove the current image so we can add our new image.</p><p><b>Hover</b> the image and <b>click</b> on the red X i the bottom right corner of the image.</p>",
                        "event": "click",
                        "eventElement": "[data-element='editor-content'] [data-element='property-HeroBackgroundImage'] [data-element='sortable-thumbnails'] [data-element='sortable-thumbnail-0'] [data-element='action-remove']"
                    },
                    {
                        "element": "[data-element='editor-content'] [data-element='property-HeroBackgroundImage'] [data-element='sortable-thumbnails'] [data-element='sortable-thumbnails-add']",
                        "title": "Open the media picker",
                        "content": "<p>Click the <b>Add icon</b> to open the <b>Media Picker</b>.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element~='overlay'] [data-element='overlay-content']",
                        "title": "Select image",
                        "content": "<p><b>Click</b> on the image you just uploaded to select it.</p>"
                    },
                    {
                        "element": "[data-element~='overlay'] [data-element='button-overlaySubmit']",
                        "title": "Submit dialog",
                        "content": "Click <b>Submit</b> to add the selected image.",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='button-preview']",
                        "title": "Preview",
                        "content": "<p><b>Click</b> preview to see the changed background image.</p>",
                        "event": "click"
                    }
                ]
            }
        ];

        var developerTours = [
            {
                "name": "Document types",
                "alias": "theStarterKitDocumentTypes",
                "group": "Data structure",
                "steps": [
                    {
                        "title": "Document types = content structure",
                        "content": "<p>Step 1 of any site is to create a <strong>Document Type</strong>.<br> A Document Type is a template for content. For each <em>type</em> of content you want to create you'll create a Document Type. This will define where content based on this Document Type can be created, how many properties it holds and what the input method should be for these properties.</p><p>When you have at least one Document type in place you can start creating content and this content can the be used in a template.</p><p>In this tour you will get an introduction to the starterkits data structure and learn how to add a property to a document type.</p>",
                        "type": "intro"
                    },
                    {
                        "element": "#applications [data-element='section-settings']",
                        "title": "Navigate to the settings sections",
                        "content": "In the <b>Settings section</b> you will find the document types.",
                        "event": "click",
                        "backdropOpacity": 0.6
                    },
                    {
                        "element": "#tree [data-element='tree-item-documentTypes']",
                        "title": "Document types tree",
                        "content": "<p>To see all the document types click the <b>small triangle</b> to the left of the <b>Document Types</b> node.</p>",
                        "event": "click",
                        "eventElement": "#tree [data-element='tree-item-documentTypes'] [data-element='tree-item-expand']"
                    },
                    {
                        "element": "#tree [data-element='tree-item-documentTypes']",
                        "elementPreventClick": true,
                        "title": "Document types",
                        "content": "<p>In the tree you will find all the document types for the different types of content we can create for our website.</p><p>You can see a document type for a <b>Blog</b> and one for a <b>Blog post</b>. There is also a document type for a standard <b>Content Page</b> and one for a special <b>Contact page</b>.</p>"
                    },
                    {
                        "element": "#tree [data-element='tree-item-documentTypes'] [data-element='tree-item-Home']",
                        "title": "Home document type",
                        "content": "<p>We wan't to add a new piece of text on our <b>Home page</b>.</p><p>Let's have a look at how a Document type is set up. <b>Click</b> on the <b>Home</b> document type to open it.</p>",
                        "event": "click",
                        "eventElement": "#tree [data-element='tree-item-documentTypes'] [data-element='tree-item-Home'] a.umb-tree-item__label"
                    },
                    {
                        "element": "[data-element='editor-icon']",
                        "elementPreventClick": true,
                        "title": "The icon",
                        "content": "<p>In the top of the screen you will find the <b>Document type icon</b>.</p><p>Use the icon to help choose the right Document type when creating content.</p>"
                    },
                    {
                        "element": "[data-element='editor-name-field']",
                        "elementPreventClick": true,
                        "title": "The name",
                        "content": "<p>The name of the Document type.</p>"
                    },
                    {
                        "element": "[data-element='editor-sub-views']",
                        "elementPreventClick": true,
                        "title": "Navigation",
                        "content": "<p>The document type settings are split up into multiple views to keep them organized.</p><p>Right now we are on the <b>Design view</b> where we structure the <b>Properties</b>.</p>"
                    },
                    {
                        "element": "[data-element='group-Hero']",
                        "elementPreventClick": true,
                        "title": "Tabs to structure properties",
                        "content": "<p>Properties can be organised in tabs.</p><p>Use tabs to group your properties so it is easy to find the right place to update a piece of content.</p>"
                    },
                    {
                        "element": "[data-element='group-Hero'] [data-element='property-heroHeader']",
                        "elementPreventClick": true,
                        "title": "Property",
                        "content": "<p>Every document type has properties. These are the fields that the content editor is allowed to edit for the node.</p>"
                    },
                    {
                        "element": "[data-element='group-Content'] [data-element='property-add']",
                        "title": "Add new property",
                        "content": "<p>Let's add a new property to the <b>Content</b>-tab where we can add an About text to our Home page.</p>",
                        "event": "click"
                    },
                    {
                        "element": "[data-element~='overlay-property-settings'] [data-element='property-name']",
                        "title": "Enter a name",
                        "content": "Enter <code>About</code> as name for the property.",
                        "validateText": "About",
                        "view": "/App_Plugins/StarterKit/Tours/views/validateText.html"
                    },
                    {
                        "element": "[data-element~='overlay-property-settings'] [data-element='property-description']",
                        "title": "Enter a description",
                        "content": "<p>A description will help to fill in the right content.</p><p>Enter a description for the property editor. It could be:<br/> <pre>Write a nice introduction so the visitors feel welcome</pre></p>"
                    },
                    {
                        "element": "[data-element~='overlay-property-settings'] [data-element='editor-add']",
                        "title": "Add editor",
                        "content": "The editor defines what data type the property is. Click <b>Add editor</b> to open the editor picker dialog.",
                        "event": "click"
                    },
                    {
                        "element": "[data-element~='overlay-editor-picker']",
                        "elementPreventClick": true,
                        "title": "Editor picker",
                        "content": "<p>In the editor picker dialog we can pick one of the many build in editor.</p>"
                    },
                    {
                        "element": "[data-element~='overlay-editor-picker'] [data-element='editor-Textarea']",
                        "title": "Select editor",
                        "content": "Select the <b>Textarea</b> editor which allows us to enter long texts.",
                        "event": "click"
                    },
                    {
                        "element": "[data-element~='overlay-editor-settings']",
                        "elementPreventClick": true,
                        "title": "Editor settings",
                        "content": "Each property editor can have individual settings. We don't want to change any of these now."
                    },
                    {
                        "element": "[data-element~='overlay-editor-settings'] [data-element='button-overlaySubmit']",
                        "title": "Save editor",
                        "content": "Click <b>Submit</b> to save the editor.",
                        "event": "click"
                    },
                    {
                        "element": "[data-element~='overlay-property-settings'] [data-element='button-overlaySubmit']",
                        "title": "Add property to document type",
                        "content": "Click <b>Submit</b> to add the property to the document type.",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='button-save']",
                        "title": "Save the document type",
                        "content": "All we need now is to save the document type. Click <b>Save</b> to save the document type.",
                        "event": "click"
                    }
                ]
            },
            {
                "name": "Templating",
                "alias": "theStarterKitTemplates",
                "group": "Data structure",
                "steps": [
                    {
                        "title": "Render your content in a template",
                        "content": "<p>Templating in Umbraco builds on the concept of <b>Razor Views</b> from asp.net MVC. - This tour is a sneak peak on how to write templates in Umbraco.</p><p>In this tour you will learn how to render content from the new <b>Welcome Text</b> property we added to the <b>Home</b> document type so you can see the content added to our <b>Home</b> content page.</p>",
                        "type": "intro"
                    },
                    {
                        "element": "#applications [data-element='section-settings']",
                        "title": "Navigate to the Settings section",
                        "content": "<p>In the <b>Settings</b> section you will find all the templates.</p><p>It is of course also possible to edit all your code files in your favorite code editor.</p>",
                        "event": "click",
                        "backdropOpacity": 0.6
                    },
                    {
                        "element": "#tree [data-element='tree-item-templates']",
                        "title": "Expand the Templates node",
                        "content": "<p>To see all our templates click the <b>small triangle</b> to the left of the templates node.</p>",
                        "event": "click",
                        "eventElement": "#tree [data-element='tree-item-templates'] [data-element='tree-item-expand']"
                    },
                    {
                        "element": "#tree [data-element='tree-item-templates'] [data-element='tree-item-Master']",
                        "title": "Master templates",
                        "content": "<p>The first template you will see is the <b>Master template</b>.</p><p>When creating new templates we don't want to duplicate header, footer etc. across all our templates so they get inherited from the Master.</p><p><b>Click</b> the <b>small triangle</b> to the left of the Master template node to see the child templates.</p>",
                        "event": "click",
                        "eventElement": "#tree [data-element='tree-item-templates'] [data-element='tree-item-Master'] [data-element='tree-item-expand']"
                    },
                    {
                        "element": "#tree [data-element='tree-item-templates'] [data-element='tree-item-Home']",
                        "title": "Open Home template",
                        "content": "<p>When a document type is created you can choose to get a matching template created.</p><p>Click the <b>Home</b> template to open it.</p>",
                        "eventElement": "#tree [data-element='tree-item-templates'] [data-element='tree-item-Home'] a.umb-tree-item__label",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-templates'] [data-element='editor-container']",
                        "title": "Edit template",
                        "content": '<p>To render the field <b>About</b> from the Home document type add the following code on <b>line 19</b> underneath the first <b>section</b>:<br/> <pre>&#60;section class="section section--themed"&#62;@Model.Content.About&#60;/section&#62;</pre></p>'
                    },
                    {
                        "element": "[data-element='editor-templates'] [data-element='button-save']",
                        "title": "Save the template",
                        "content": "Click the <b>Save button</b> and your template will be saved.",
                        "event": "click"
                    },
                    {
                        "element": "[data-element='editor-container']",
                        "elementPreventClick": true,
                        "title": "Update Home content",
                        "content": "<p>The Document type and template is now ready for the new content.</p><p>You can now go to the <b>Home</b> page in the content section and update the page the way you learned in the content tours.</p>"
                    }
                ]
            }
        ];
        
        eventsService.on("app.ready", function(evt, data) {
            tourService.unregisterTourGroup("Getting Started");
            tourService.registerTours(contentTours);
            tourService.registerTours(developerTours);
        });

    }]);