import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lutervyn Blog | OS Ecosystem Articles & Updates',
  description: 'Discover articles about Lutervyn OS, ecosystem features, development updates, and tutorials for our advanced operating system interface.',
  keywords: ['Lutervyn blog', 'OS articles', 'ecosystem updates', 'tutorials', 'features'],
}

export default function BlogPage() {
  const posts = [
    {
      id: 'intro-lutervyn-os',
      title: 'Introduction to Lutervyn: The Advanced OS Experience',
      slug: 'intro-lutervyn-os',
      excerpt: 'Explore Lutervyn OS - a revolutionary operating system interface designed with modern aesthetics and powerful ecosystem capabilities.',
      date: '2026-05-11',
      category: 'Overview',
    },
    {
      id: 'lutervyn-ecosystem-guide',
      title: 'Complete Guide to the Lutervyn Ecosystem',
      slug: 'lutervyn-ecosystem-guide',
      excerpt: 'Discover all the built-in applications and tools available in the Lutervyn ecosystem and how to maximize your productivity.',
      date: '2026-05-10',
      category: 'Guide',
    },
    {
      id: 'getting-started-lutervyn',
      title: 'Getting Started with Lutervyn OS',
      slug: 'getting-started-lutervyn',
      excerpt: 'Learn how to navigate the Lutervyn interface, customize your desktop, and explore the core features of our OS.',
      date: '2026-05-09',
      category: 'Tutorial',
    },
    {
      id: 'lutervyn-desktop-customization',
      title: 'Customizing Your Lutervyn Desktop Experience',
      slug: 'lutervyn-desktop-customization',
      excerpt: 'Personalize your Lutervyn desktop with themes, wallpapers, docks, and advanced customization options.',
      date: '2026-05-08',
      category: 'Tips',
    },
    {
      id: 'lutervyn-apps-explained',
      title: 'Lutervyn Built-In Applications: Features and Functions',
      slug: 'lutervyn-apps-explained',
      excerpt: 'Deep dive into Lutervyn\'s included applications including Safari, Mail, Terminal, VS Code, and specialized tools.',
      date: '2026-05-07',
      category: 'Features',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Lutervyn Blog</h1>
          <p className="text-xl text-slate-300">Articles, tutorials, and updates about the Lutervyn OS ecosystem</p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm">{new Date(post.date).toLocaleDateString()}</p>
                </div>
                <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded text-sm whitespace-nowrap">
                  {post.category}
                </span>
              </div>
              <p className="text-slate-300 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
          <h3 className="text-lg font-bold mb-2">About This Blog</h3>
          <p className="text-slate-300">
            Stay updated with the latest Lutervyn OS developments, ecosystem features, tutorials, and best practices for maximizing your experience with our advanced operating system interface.
          </p>
        </div>
      </div>
    </div>
  )
}
