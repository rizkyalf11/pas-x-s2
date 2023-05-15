// RRD
import { BrowserRouter as Router } from 'react-router-dom'

// Comp
import Navbar from './component/Navbar'

// FM
import { AnimatePresence } from 'framer-motion'

// Pages
import AnimateRoutes from './animateRoute/AnimateRoutes'

function App() {
	return (
		<Router>
			<Navbar />
			<AnimatePresence>
				<AnimateRoutes />
			</AnimatePresence>
		</Router>
	)
}

export default App
