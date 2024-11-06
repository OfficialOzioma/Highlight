
import './App.css';
import Home from './pages/Home';
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { extendTheme, ChakraProvider, CSSReset } from '@chakra-ui/react'

const Video = React.lazy(() => import('./components/Video'));
const PageGroups = React.lazy(() => import('./pages/QatarFifa/PageGroups'));

function App() {
  const customTheme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "#4ED2C7",
        },
      }),
    },

    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },

    breakpoints: {
      sm: "250px",
      md: "768px",
    },

    semanticTokens: {
      colors: {
        error: 'red.500',
        success: 'green.500',
        primary: {
          default: 'red.500',
          _dark: 'red.400',
        },
        secondary: {
          default: 'red.800',
          _dark: 'red.700',
        },
      },
    },

  })

  return (
    <ChakraProvider theme={customTheme} >
      <CSSReset />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/video/:key" element={<Video />}/>
          <Route path="/groups" element={<PageGroups />}/>
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
