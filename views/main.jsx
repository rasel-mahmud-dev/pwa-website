import { render } from 'preact'
import { App } from './app'
import './index.css'
import React from "preact/compat";
import AppProvider from "./store/AppProvider";


render(<AppProvider>
	<App />
</AppProvider>, document.getElementById('app'))
