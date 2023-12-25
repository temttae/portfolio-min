import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title>Tem Taepaisitphongse</title>
				<meta name="description" content="Tem Taepaisitphongse's personal website" />
				<meta name="author" content="Tem Taepaisitphongse" />

				{/* OG */}
				<meta property="og:title" content="Tem Taepaisitphongse" />
				<meta property="og:description" content="Tem Taepaisitphongse's personal website" />
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://deploy.url" /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
			</head>
			<body className='max-w-screen-sm mx-auto selection:bg-primary selection:text-white font-notoSans'>
				<div>
					{children}
				</div>
			</body>
		</html>
	)
}
