# @latticejs/froala-editor

A editor component built upon `froala-editor`.

## Install

```bash
npm install @latticejs/froala-editor --save-dev
```

## Usage

```javascript
import React from 'react';
import Editor from '@latticejs/froala-editor';
import '@latticejs/froala-editor/styles/css/style.css';

export default class EditorComponent extends React.Component {
  render() {
    return (
      <Editor />
    )
  }
} 
```

The above snippet will render a basic Editor with a material _look'n'feel_. It also support themes (dark, light).

<!-- start:api -->
### Props 
>  `config`
>  `model`
>  `onModelChange`

<!-- end:api -->

For detailed documentation of props , refer to following link :
https://www.froala.com/wysiwyg-editor/docs/framework-plugins/react .