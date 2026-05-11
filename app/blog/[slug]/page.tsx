import { Metadata } from 'next'

interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  'intro-lutervyn-os': {
    slug: 'intro-lutervyn-os',
    title: 'Introduction to Lutervyn: The Advanced OS Experience',
    date: '2026-05-11',
    category: 'Overview',
    content: `# Introduction to Lutervyn: The Advanced OS Experience

Lutervyn represents a paradigm shift in operating system design. Built with modern web technologies and contemporary user experience principles, Lutervyn OS delivers a desktop environment that is both powerful and intuitive.

## What Makes Lutervyn Different?

Lutervyn OS combines the familiar desktop metaphor with cutting-edge design and functionality. Every element has been carefully crafted to provide:

- **Intuitive Interface**: Clean, minimalist design that's easy to navigate
- **Powerful Ecosystem**: Comprehensive set of built-in applications
- **Modern Architecture**: Built on Next.js and React for optimal performance
- **Customizable Experience**: Extensive personalization options

## Core Features

### Desktop Environment
The Lutervyn desktop provides a sophisticated workspace with customizable layouts, themes, and organizational tools.

### Application Suite
From development tools like VS Code and Terminal to entertainment apps like YouTube and Spotify, Lutervyn comes ready for any task.

### Advanced Customization
Users can customize virtually every aspect of their experience, from dock appearance to desktop wallpapers and system themes.

## Getting Started

Whether you're a developer, designer, or everyday computer user, Lutervyn OS provides the tools and flexibility you need. Explore our documentation and tutorials to get started today.

## The Future of Computing

Lutervyn represents a vision of what modern operating systems can achieve when designed with users in mind. Join us on this journey.`,
  },
  'lutervyn-ecosystem-guide': {
    slug: 'lutervyn-ecosystem-guide',
    title: 'Complete Guide to the Lutervyn Ecosystem',
    date: '2026-05-10',
    category: 'Guide',
    content: `# Complete Guide to the Lutervyn Ecosystem

The Lutervyn ecosystem encompasses a comprehensive collection of applications and tools designed to work seamlessly together.

## Built-In Applications

### Productivity
- **Notes**: Take and organize notes with ease
- **Mail**: Manage your email communications
- **Terminal**: Access command-line tools and development

### Development
- **VS Code**: Professional code editor and development environment
- **GitHub**: Direct GitHub integration and repository management

### Entertainment
- **Music**: Stream and manage your music library
- **YouTube**: Direct YouTube access
- **Spotify**: Music streaming integration
- **Snake**: Classic game for quick breaks

### Communication
- **FaceTime**: Video and voice calling
- **Safari**: Web browsing

### Utilities
- **Weather**: Local weather information
- **Settings**: System configuration and preferences
- **Website**: Quick web access

## Ecosystem Philosophy

Every application in the Lutervyn ecosystem is designed to integrate smoothly with the rest of the system. This unified approach creates a cohesive user experience where switching between tasks is seamless and intuitive.

## Extending Your Experience

The ecosystem continues to grow with new applications and features being added regularly. Users can also customize which applications appear in their Launchpad and Dock.`,
  },
  'getting-started-lutervyn': {
    slug: 'getting-started-lutervyn',
    title: 'Getting Started with Lutervyn OS',
    date: '2026-05-09',
    category: 'Tutorial',
    content: `# Getting Started with Lutervyn OS

Welcome to Lutervyn OS! This guide will help you get started with the basics and start exploring everything our system has to offer.

## First Steps

### Logging In
Start by entering your credentials at the login screen. Your account gives you access to all Lutervyn features and customization options.

### Exploring the Desktop
Once logged in, you'll see the Lutervyn desktop. The main elements are:

- **Dock**: Quick access to your favorite applications (bottom of screen)
- **Menu Bar**: System controls and notifications (top of screen)
- **Desktop**: Your workspace where windows and icons appear
- **Launchpad**: Access all available applications

### Opening Applications
You can open applications through:
1. The **Dock** at the bottom
2. The **Launchpad** (grid icon)
3. **Spotlight search** (magnifying glass in menu bar)

## Basic Navigation

### Spotlight Search
Press the search icon or use keyboard shortcuts to quickly find applications and files.

### Organizing Your Workspace
Create your ideal workflow by:
- Customizing which apps appear in the Dock
- Arranging app windows
- Using multiple workspaces
- Setting up keyboard shortcuts

## Tips for Success

1. **Explore Gradually**: Don't try to learn everything at once
2. **Customize Your Dock**: Add the apps you use most frequently
3. **Use Spotlight**: It's your fastest way to find things
4. **Check Settings**: Customize appearance and behavior to your liking
5. **Take Breaks**: Use the Snake game or other entertainment when needed

## Next Steps

Check out our other guides for:
- Advanced desktop customization
- Application-specific tutorials
- Tips and tricks for power users`,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} | Lutervyn Blog`,
    description: post.content.substring(0, 160),
  }
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-slate-300 mb-6">The blog post you are looking for does not exist.</p>
          <a href="/blog" className="text-blue-400 hover:text-blue-300 font-semibold">
            ← Back to Blog
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <a href="/blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Blog
        </a>

        <article className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-between text-slate-400">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded text-sm">
                {post.category}
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
                    {line.substring(2)}
                  </h1>
                )
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-6 mb-3">
                    {line.substring(3)}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-xl font-bold mt-4 mb-2">
                    {line.substring(4)}
                  </h3>
                )
              }
              if (line.startsWith('- ')) {
                return (
                  <li key={i} className="ml-6 mb-2 text-slate-300">
                    {line.substring(2)}
                  </li>
                )
              }
              if (line.trim() === '') {
                return <div key={i} className="my-4" />
              }
              return (
                <p key={i} className="text-slate-300 mb-4 leading-relaxed">
                  {line}
                </p>
              )
            })}
          </div>
        </article>
      </div>
    </div>
  )
}
