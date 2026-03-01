// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react';
// import logo from './logo.svg'
import './App.css';
// import awsconfig from './aws-exports';
// import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { CheckboxField } from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import { withAuthenticator } from 'aws-amplify-react-native'

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
return (
	<Authenticator
		// Default to Sign Up screen
		initialState="signUp"
		// Customize `Authenticator.SignUp.FormFields`
		components={{
			SignUp: {
				FormFields() {
					const { validationErrors } = useAuthenticator();
					return (
						<>
							{/* Re-use default `Authenticator.SignUp.FormFields` */}
							<Authenticator.SignUp.FormFields />

							{/* Append & require Terms & Conditions field to sign up  */}
							<CheckboxField
								errorMessage={validationErrors.acknowledgement}
								hasError={!!validationErrors.acknowledgement}
								name="acknowledgement"
								value="yes"
								label="I agree with the Terms & Conditions"
							/>
						</>
					);
				},
			},
		}}
		services={{
			async validateCustomSignUp(formData) {
				if (!formData.acknowledgement) {
					return {
						acknowledgement: 'You must agree to the Terms & Conditions',
					};
				}
			},
		}}
	>
		{({ signOut, user }) => (
			<main>
				<h1>Hello {user.username}</h1>
				<button onClick={signOut}>Sign out</button>
			</main>
		)}
	</Authenticator>
);
}