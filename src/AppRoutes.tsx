import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Blog from './blog/Blog.tsx'
import BlogPost from './blog/BlogPost.tsx'
import NotFound from './blog/NotFound.tsx'

// Shared route table so the client (BrowserRouter) and the prerender step
// (MemoryRouter) always render the exact same tree.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
