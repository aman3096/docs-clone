import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { Editor, Transforms, createEditor } from 'slate'
import { withHistory } from 'slate-history'
import './Sync.css';

import { Button, Icon, Toolbar } from './components/components'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const RichTextExample = () => {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <React.Fragment>
       <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      
    <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" href="css/main.css"/>
        <link rel="stylesheet" href="css/toolbar.css"/>
        <link rel="stylesheet" href="css/content.css"/>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,600' rel='stylesheet' type='text/css'/>
            <div className="header">
                <div className="whiteBar">
                    <a href="#"><img style={{margin:"0px 5px 10px 5px"}} width="40px" length="30px" className="docsLogo" src="https://webstockreview.net/images/google-docs-icon-png-2.png" alt=""/></a>

                    <h1 id="untitled">
                        <em>UI Google Docs Clone</em>
                    </h1>

    <ul id="mainMenu">
    <li>File</li>
    <li>Edit</li>
    <li>View</li>
    <li>Insert</li>
    <li>Format</li>
    <li>Tools</li>
    <li>Table</li>
    <li>Add-Ons</li>
    <li>Help</li>
    <li><a href="#" style={{color:"#756f5d"}}>All changes saved in saved in drive</a></li>
  </ul>

  <div className="rightSide">

    <span id="emailLogin">aman.tandon3096@gmail.com<img id="emailcaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""/></span>

    <ul className="extraButtons">
      <li><img width="20px" src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/10548381421556277320-512.png"/></li>
      <li>Share</li>
    </ul>

  </div>
</div>

<div className="toolBar">

  <div className="toolBag"></div>
  <Toolbar >
      
  <MarkButton format="undo" icon="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/783468161537182990-512.png" />
  <MarkButton format="redo" icon="https://www.pngrepo.com/png/21936/170/redo.png" />
  <MarkButton format="print" icon="https://www.freeiconspng.com/uploads/printer-icon-23.png" />
  <MarkButton format="formatpainter" icon="https://cdn.onlinewebfonts.com/svg/img_528892.png" />
          
  
        <a href="#"><span className="toolbarButtons100">100%<img id="hunCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""/></span></a>
        <a href="#"><span className="toolbarButtonsNormal">Heading 2<img id="normalCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""/></span></a>
        <a href="#"><span className="toolbarButtonsArial">Arial<img id="openCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""/></span></a>
        <a href="#"><span className="toolbarButtons11">16<img id="twelveCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt=""/></span></a>


        <MarkButton format="bold" icon="https://cdn4.iconfinder.com/data/icons/text-editor/154/bold-weight-text-format-edit-512.png" />
        <MarkButton format="underline" icon="https://cdn4.iconfinder.com/data/icons/finite-editor/16/underline-512.png" />
        <MarkButton format="italic" icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/italic-2-381061.png" />
        <MarkButton format="textcolor" icon="https://cdn0.iconfinder.com/data/icons/editing-vol-2/100/word_color_text_editing-512.png" />
        <MarkButton format="textHighlight" icon="https://cdn0.iconfinder.com/data/icons/design-25/24/highlighter_marker_color_highlight_tool-512.png" />

        <BlockButton format="hyperlink" icon="https://cdn.iconscout.com/icon/free/png-256/insert-link-1780028-1518418.png" />
        <BlockButton format="block-quote" icon="https://cdn.iconscout.com/icon/free/png-256/add-comment-1780005-1518395.png" />
        <BlockButton format="image" icon="https://image.flaticon.com/icons/png/512/16/16410.png" />

        <BlockButton format="leftAlign" icon="https://simpleicon.com/wp-content/uploads/align-left.png" />
        <BlockButton format="center" icon="https://cdn2.iconfinder.com/data/icons/text-editing-glyph-black/614/3792_-_Center_Align-512.png" />
        <BlockButton format="rightAlign" icon="https://simpleicon.com/wp-content/uploads/align-right.png" />
        <BlockButton format="justify" icon="https://img.icons8.com/ios-filled/452/align-justify.png" />
        <BlockButton format="line-spacing" icon="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_format_line_spacing_48px-512.png" />

        <BlockButton format="numbered-list" icon="https://cdn4.iconfinder.com/data/icons/line-icons-2/256/list_number-512.png" />
        <BlockButton format="bulleted-list" icon="https://cdn.iconscout.com/icon/free/png-256/format-list-bulleted-1780710-1514274.png" />
        <BlockButton format="decrease-indent" icon="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_format_indent_decrease_48px-512.png"></BlockButton>
        <BlockButton format="increase-indent" icon="https://cdn4.iconfinder.com/data/icons/text-editor-glyph/32/2.increase_indent_format-512.png"></BlockButton>
        

        <BlockButton format="clear-text" icon="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_format_clear_48px-512.png"/>
        <BlockButton format="other" icon="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Edit-01-512.png"/>
    </Toolbar>
     
  </div>
</div>
{/*  end toolBar*/}
{/* end header  */}

<div className="clear"></div>

</div>

   
      
      <Editable
        className="page"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
    </Slate>
    </React.Fragment>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'title':
  return <h1{...attributes}>{children}</h1>
    case 'link':
      return(
        <a {...attributes} href={element.url}>
        {children}</a>
      )
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    case 'undo':
      return <p {...attributes}>{children}</p>
    case 'redo':
        return <p {...attributes}>{children}</p>
    case 'print':
        return <p {...attributes}>{children}</p>
    case 'formatpainter':
      return <p {...attributes}>{children}</p>
    case 'textHighlight':
      return <mark {...attributes}>{children}</mark>
      case 'hyperlink':
        return <p {...attributes}>{children}</p>
    case 'image':
          return <p {...attributes}>{children}</p>
    case 'leftAlign':
      return <p {...attributes}>{children}</p>
    case 'center':
        return <p {...attributes}>{children}</p>
    case 'rightAlign':
      return <p {...attributes}>{children}</p>
    case 'justify':
      return <p {...attributes}>{children}</p>
    case 'line-spacing':
      return <p {...attributes}>{children}</p>
    case 'numbered-list':
      return <p {...attributes}>{children}</p>
    case 'bulleted-list':
      return <p {...attributes}>{children}</p>
    case 'decrease-indent':
      return <p {...attributes}>{children}</p>
    case 'increase-indent':
      return <p {...attributes}>{children}</p>
    case 'clear-text':
      return <p {...attributes}>{children}</p>
    case 'paragraph':
      return <p {...attributes}>{children}</p>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold||'b') {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }
  if(leaf.textHighlight){
    children= <mark>{children}</mark>
  }
  if(leaf.leftAlign){
  children=<div align="left">{children}</div>
  }
  if(leaf.hyperlink){
    children=  <a {...attributes}>
    {children}</a>
  }
  if(leaf.rightAlign){
    children=<div align="right">{children}</div>
    }
  if(leaf.center){
      children=<div align="center">{children}</div>
      } 
  if(leaf.justify){
        children=<div align="justify">{children}</div>
        }
  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <img src={icon} width="20px" />
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <img src={icon} width="20px" />
    </Button>
  )
}

const initialValue = [
  {
    type: 'heading-one',
    children: [{ text: '      Problem Statement' }],
    },
    {
      type: 'paragraph',
    children: [
      
      { text: '\n', },
      { text: '             Create a clone of google docs page as given in the below screenshot.' },
      { text: '\n'},
    
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: '             The page at the center should have a page upon which you can actually type. You may use any' },

      {
        text: '\n             editor tools like '  
      },
      {
        type: 'link',
        url: 'https://www.tinymce.com/',
        children: [{ text: 'https://www.tinymce.com/'}]
      },
      {
        text: ' or '
      },
      { 
        type:'link',
        url:'https://github.com/textAngular/textAngular',
        children: [{ text: 'https://github.com/textAngular/textAngular'}]
      },
      {
        text:' but the '
      },
      { text: '\n             end look of your page must look like the google doc page in the screenshot below.'},
      {
        text:'\n',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [{ text: `            You don't need to save any data at the backend. Only UI view is required\n` }],
  },
  
  {
    type:'heading-one',
    children: [{ text: '      Instructions'}]
  },
  {
    type:'numbered-list',
    children:[{text:''}],
    
  },
  {
    type:'numbered-list',
    children:[{text:'      1. You should write the code and submit your entire code including readme in a zip file by responding to the email'}]    
  },

 {
   type:'numbered-list',
   children:[{text:'      2. The repository should have complete code.'}]
 },
 {
   type:'numbered-list',
   children:[{text:'      3. Your submission should contain a detailed README.md to help us understand and run at our end'}]
 },
 {
   type:'numbered-list',
   children:[{text:`      4. Don't include any library files, instead provie instructions on how we can install at our end`}]
 },
 {
   text:'\n',
 },
 {
   type:'heading-one',
   children:[{text:'      Judgement'}]
 },
 {
   type:'text',
   children:[{text:'              The assignment will be judged base on'}]
 },
 {
   type:'text',
   children:[{text:'                    1.  Efficiency of the code viz. the code length,complexity and time taken'}]
 },
 {
  type:'text',
  children:[{text:'                    2.  Understanding of pythonic concepts involved (className, date, structure etc.)'}]
},
{
  type:'text',
  children:[{text:'                    3.  Final Output'}]
},
{
  type:'title',
  children:[{text:'      Submission'}]
},
{
  text:'                Time allowed: 5 hours from the time when received.'
}
]

export default RichTextExample