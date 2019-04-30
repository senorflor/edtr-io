import * as React from 'react'
import { Editor } from 'slate'
import { EditorProps } from 'slate-react'
import { TextPlugin } from '..'
import { HoveringOverlay, BottomToolbar, styled } from '@edtr-io/editor-ui'
import { SlatePluginClosure } from '../factory/types'
import { DefaultControls } from './default'
import { HeadingControls } from './headings'
import { ListControls } from './lists'
import { ColorControls } from './colors'
export enum VisibleControls {
  All,
  Headings,
  Lists,
  Colors
}

export interface ControlProps {
  editor: Editor
  name: string
  readOnly?: boolean
}

export interface UiPluginOptions {
  Component: React.ComponentType<Partial<EditorProps> & ControlProps>
}

const ControlsSwitch: React.FunctionComponent<{
  editor: Editor
  name: string
  visibleControls: VisibleControls
  setVisibleControls: (x: VisibleControls) => void
}> = ({ visibleControls, setVisibleControls, ...props }) => {
  switch (visibleControls) {
    case VisibleControls.All:
      return <DefaultControls {...props} switchControls={setVisibleControls} />
    case VisibleControls.Headings:
      return <HeadingControls {...props} switchControls={setVisibleControls} />
    case VisibleControls.Lists:
      return <ListControls {...props} switchControls={setVisibleControls} />
    case VisibleControls.Colors:
      return <ColorControls {...props} switchControls={setVisibleControls} />
  }
}

const TimeoutBottomToolbar = styled(BottomToolbar)<{ visible: boolean }>(
  props => {
    return {
      opacity: props.visible ? 1 : 0,
      transition: '500ms opacity ease-in-out'
    }
  }
)

let debounceTimeout: number
export const Controls: React.FunctionComponent<ControlProps> = props => {
  const selectionCollapsed = props.editor.value.selection.isCollapsed
  const [visibleControls, setVisibleControls] = React.useState(
    VisibleControls.All
  )
  const [bottomToolbarVisible, setBottomToolbarVisible] = React.useState(false)

  React.useEffect(() => {
    debounceTimeout = setTimeout(() => setBottomToolbarVisible(true), 2500)
  }, [])
  const currentValue = JSON.stringify(props.editor.value.toJSON())
  const memoized = React.useRef({
    value: currentValue,
    selectionCollapsed
  })
  React.useEffect(() => {
    const valueChanged = memoized.current.value !== currentValue
    if (
      valueChanged ||
      memoized.current.selectionCollapsed !== selectionCollapsed
    ) {
      memoized.current = {
        value: currentValue,
        selectionCollapsed
      }
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
      const timeout = valueChanged ? 2500 : 1000
      debounceTimeout = setTimeout(() => setBottomToolbarVisible(true), timeout)
      setBottomToolbarVisible(false)
    }
  }, [currentValue, selectionCollapsed])
  return (
    <React.Fragment>
      {!selectionCollapsed && (
        <HoveringOverlay position={'above'}>
          <ControlsSwitch
            {...props}
            visibleControls={visibleControls}
            setVisibleControls={setVisibleControls}
          />
        </HoveringOverlay>
      )}
      {!props.readOnly && (
        <TimeoutBottomToolbar
          visible={selectionCollapsed && bottomToolbarVisible}
        >
          <ControlsSwitch
            {...props}
            visibleControls={visibleControls}
            setVisibleControls={setVisibleControls}
          />
        </TimeoutBottomToolbar>
      )}
    </React.Fragment>
  )
}

export const createUiPlugin = (options: UiPluginOptions) => (
  pluginClosure: SlatePluginClosure
): TextPlugin => {
  const { Component } = options

  return {
    renderEditor(props, editor, next) {
      const { readOnly } = props
      if (readOnly) {
        editor.blur()
      }
      const name = pluginClosure.current ? pluginClosure.current.name : ''
      const children = next()
      return (
        <React.Fragment>
          {!readOnly ? (
            <Component editor={editor} {...props} name={name} />
          ) : null}
          {children}
        </React.Fragment>
      )
    }
  }
}
