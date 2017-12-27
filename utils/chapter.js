import React from 'react'
import Markdown from 'jsx-markdown'
import Layout from '../layout/Layout.js'

export default (...args) => <Layout children={Markdown(...args)} />
