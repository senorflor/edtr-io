import * as React from 'react'

import { createEditorUiTheme, EditorThemeProps, styled } from '../theme'
import { InputProps, InputTheme } from './overlay-input'

export const createEditorInputTheme = createEditorUiTheme<InputTheme>(theme => {
  return {
    color: theme.backgroundColor,
    backgroundColor: 'transparent',
    highlightColor: theme.primary.background
  }
})

const EditorInputLabel = styled.label((props: EditorThemeProps) => {
  const theme = createEditorInputTheme('input', props.theme)

  return {
    color: theme.color
  }
})

const EditorInputLabelInner = styled.span({ width: '5%' })

const EditorInputInner = styled.input((props: EditorThemeProps) => {
  const theme = createEditorInputTheme('input', props.theme)

  return {
    backgroundColor: theme.backgroundColor,
    border: 'none',
    borderBottom: `2px solid ${theme.color}`,
    color: theme.color,
    paddingLeft: '10px',
    '&:focus': {
      outline: 'none',
      borderBottom: `2px solid ${theme.highlightColor}`
    }
  }
})

export class EditorInput extends React.Component<InputProps> {
  private input = React.createRef<HTMLInputElement>()

  public focus() {
    const input = this.input.current
    if (input) {
      input.focus()
    }
  }

  public render() {
    const { label, ...props } = this.props
    return (
      <EditorInputLabel>
        <EditorInputLabelInner>{label}</EditorInputLabelInner>
        <EditorInputInner {...props} ref={this.input} />
      </EditorInputLabel>
    )
  }
}
