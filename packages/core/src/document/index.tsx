import * as React from 'react'

import { DocumentEditor } from './editor'
import { DocumentRenderer } from './renderer'
import {
  getDocument,
  getPlugin,
  isEditable,
  isEmpty,
  isFocused,
  State
} from '../store'
import { Plugin } from '@edtr-io/core'
import { connect } from 'react-redux'
import { PluginState } from '../plugin'
import { change, focus } from '../editor'

const DocumentConnector: React.FunctionComponent<
  DocumentProps & DocumentStateProps & DocumentDispatchProps
> = props => {
  return props.isEditable ? (
    <DocumentEditor {...props} />
  ) : (
    <DocumentRenderer {...props} />
  )
}

export interface DocumentProps {
  id: string
  pluginProps?: Record<string, unknown>
}

const mapStateToProps = (state: State): DocumentStateProps => ({
  isEditable: isEditable(state),
  isFocused: (id: string) => isFocused(state, id),
  getDocument: (id: string) => getDocument(state, id),
  getPlugin: (type: string) => getPlugin(state, type),
  isEmpty: (id: string) => isEmpty(state, id)
})

const mapDispatchToProps: DocumentDispatchProps = {
  focus,
  change
}

export const Document = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentConnector)

export interface DocumentStateProps {
  isEditable: boolean
  isFocused: (id: string) => boolean
  getDocument: (id: string) => PluginState | null
  getPlugin: (type: string) => Plugin | null
  isEmpty: (id: string) => boolean
}

export interface DocumentDispatchProps {
  focus: typeof focus
  change: typeof change
}
