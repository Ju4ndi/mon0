export const globalAttributes = {
	initial: 'initial',
	animate: 'animate',
	exit: 'exit'
}

export const loginVariant = {
	initial: {
		x: 30,
		opacity: 0,
		transition: {
			duration: 0.32
		}
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.32
		}
	}
}

export const formVariant = {
	initial: {
		x: -30,
		opacity: 0,
		transition: {
			duration: 0.32
		}
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.32
		}
	}
}
