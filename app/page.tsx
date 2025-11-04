// app/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AI Blog – Novinky, návody a tipy',
  description: 'Úvodní stránka blogu postaveného na Next.js s ukázkovými příspěvky.',
  openGraph: {
    title: 'AI Blog – Novinky, návody a tipy',
    description: 'Úvodní stránka blogu postaveného na Next.js s ukázkovými příspěvky.',
    type: 'website',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
}

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  author: string
  cover?: string
  tags: string[]
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Jak začít s Next.js App Routerem',
    slug: 'jak-zacit-s-nextjs-app-routerem',
    excerpt: 'Praktický úvod do App Routeru a struktury složek pro moderní projekty.',
    date: '2025-11-04',
    author: 'Redakce',
    cover: '/covers/nextjs.jpg',
    tags: ['Next.js', 'Návod'],
  },
  {
    id: '2',
    title: 'SEO základy: Metadata API v praxi',
    slug: 'seo-zaklady-metadata-api',
    excerpt: 'Nastavení title, description a Open Graph metadat bez pluginů.',
    date: '2025-11-03',
    author: 'Redakce',
    cover: '/covers/seo.jpg',
    tags: ['SEO', 'Metadata'],
  },
  {
    id: '3',
    title: 'Plánování publikace a nasazení',
    slug: 'planovani-publikace-a-nasadeni',
    excerpt: 'Jak připravit blog na pravidelné publikování a automatické deploye.',
    date: '2025-11-02',
    author: 'Redakce',
    cover: '/covers/deploy.jpg',
    tags: ['Deployment', 'Workflow'],
  },
]

function PostCard({ post }: { post: Post }) {
  return (
    <article style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
      {post.cover ? (
        <div style={{ position: 'relative', width: '100%', height: 160 }}>
          <Image src={post.cover} alt={post.title} fill style={{ objectFit: 'cover' }} />
        </div>
      ) : null}
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 12, color: '#6b7280' }}>
          {new Date(post.date).toLocaleDateString('cs-CZ')} • {post.author}
        </div>
        <h3 style={{ margin: '8px 0' }}>
          <Link href={`/posts/${post.slug}`} style={{ textDecoration: 'none', color: '#111827' }}>
            {post.title}
          </Link>
        </h3>
        <p style={{ color: '#374151' }}>{post.excerpt}</p>
        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {post.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                padding: '2px 8px',
                background: '#f3f4f6',
                borderRadius: 999,
                color: '#374151',
              }}
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      {/* Hero */}
      <section style={{ padding: '40px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>AI Blog</h1>
        <p style={{ fontSize: 18, color: '#4b5563' }}>
          Novinky, návody a tipy pro moderní web a automatizaci obsahu.
        </p>
      </section>

      {/* Featured / Latest */}
      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr 1fr' }}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </section>

      {/* Categories */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Kategorie</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['Next.js', 'SEO', 'AI', 'Workflow', 'Deployment'].map((c) => (
            <Link
              key={c}
              href={`/tags/${encodeURIComponent(c.toLowerCase())}`}
              style={{
                fontSize: 14,
                padding: '6px 10px',
                background: '#eef2ff',
                color: '#4338ca',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ marginTop: 40, padding: 24, border: '1px solid #e5e7eb', borderRadius: 8 }}>
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>Odebírej novinky</h2>
        <p style={{ color: '#4b5563', marginBottom: 12 }}>
          Jednou týdně shrnutí nejdůležitějších článků přímo do e‑mailu.
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 8 }}>
          <input
            type="email"
            placeholder="tvuj@email.cz"
            required
            style={{
              flex: 1,
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 16px',
              background: '#111827',
              color: 'white',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Přihlásit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #e5e7eb', color: '#6b7280' }}>
        © {new Date().getFullYear()} AI Blog. Vytvořeno v Next.js.
      </footer>
    </main>
  )
}
