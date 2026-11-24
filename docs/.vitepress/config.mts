import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Simple Rich Text',
  description: 'Documentation for the Simple Rich Text Unreal Engine plugin',
  base: '/SimpleRichTextDoc/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Blueprints', link: '/blueprints/' },
      { text: 'C++', link: '/cpp/' },
    ],
    sidebar: [
  {
    "text": "Getting started",
    "collapsed": false,
    "items": [
      {
        "text": "Introduction",
        "link": "/guide/getting-started"
      },
      {
        "text": "Segments and formatting",
        "link": "/guide/segments"
      },
      {
        "text": "Input modes",
        "link": "/guide/input-modes"
      },
      {
        "text": "Markup and troubleshooting",
        "link": "/guide/markup"
      }
    ]
  },
  {
    "text": "Blueprints",
    "collapsed": false,
    "items": [
      {
        "text": "Overview and node index",
        "link": "/blueprints/"
      },
      {
        "text": "Recipes",
        "link": "/blueprints/recipes"
      },
      {
        "text": "Set Segments",
        "link": "/blueprints/nodes/set-segments"
      },
      {
        "text": "Set Combined Text",
        "link": "/blueprints/nodes/set-combined-text"
      },
      {
        "text": "Set Combined Text With Formats",
        "link": "/blueprints/nodes/set-combined-text-with-formats"
      },
      {
        "text": "Set Segment Text",
        "link": "/blueprints/nodes/set-segment-text"
      },
      {
        "text": "Set Segment Color",
        "link": "/blueprints/nodes/set-segment-color"
      },
      {
        "text": "Set All Segments Color",
        "link": "/blueprints/nodes/set-all-segments-color"
      },
      {
        "text": "Set Segment Size",
        "link": "/blueprints/nodes/set-segment-size"
      },
      {
        "text": "Set Segment Format",
        "link": "/blueprints/nodes/set-segment-format"
      },
      {
        "text": "Set Formats",
        "link": "/blueprints/nodes/set-formats"
      },
      {
        "text": "Add Segment",
        "link": "/blueprints/nodes/add-segment"
      },
      {
        "text": "Insert Segment",
        "link": "/blueprints/nodes/insert-segment"
      },
      {
        "text": "Remove Segment",
        "link": "/blueprints/nodes/remove-segment"
      },
      {
        "text": "Clear Segments",
        "link": "/blueprints/nodes/clear-segments"
      },
      {
        "text": "Get Segment Count",
        "link": "/blueprints/nodes/get-segment-count"
      },
      {
        "text": "Get Segment Text",
        "link": "/blueprints/nodes/get-segment-text"
      },
      {
        "text": "Get Plain Text",
        "link": "/blueprints/nodes/get-plain-text"
      },
      {
        "text": "Build Markup",
        "link": "/blueprints/nodes/build-markup"
      }
    ]
  },
  {
    "text": "C++",
    "collapsed": false,
    "items": [
      {
        "text": "Integration",
        "link": "/cpp/"
      },
      {
        "text": "Types and properties",
        "link": "/cpp/types"
      },
      {
        "text": "Function reference",
        "link": "/cpp/functions"
      },
      {
        "text": "Decorator and extension points",
        "link": "/cpp/internals"
      }
    ]
  }
],
    search: { provider: 'local' },
  },
})
