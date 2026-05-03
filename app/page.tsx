export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          No SQL skills required
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Build Complex SQL Queries<br />
          <span className="text-[#58a6ff]">With Drag &amp; Drop</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          QueryCraft lets product managers and analysts explore databases visually.
          Drag tables, set filters, and get production-ready SQL instantly — no engineering help needed.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Building Queries — $16/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#8b949e]">
          <div className="flex gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block"></span>
          </div>
          <p className="text-[#58a6ff]">-- Generated SQL (live preview)</p>
          <p className="mt-1">SELECT <span className="text-[#79b8ff]">u.name, o.total, p.title</span></p>
          <p>FROM <span className="text-[#79b8ff]">users u</span></p>
          <p>JOIN <span className="text-[#79b8ff]">orders o</span> ON u.id = o.user_id</p>
          <p>JOIN <span className="text-[#79b8ff]">products p</span> ON o.product_id = p.id</p>
          <p>WHERE <span className="text-[#79b8ff]">o.total &gt; 100</span></p>
          <p>ORDER BY <span className="text-[#79b8ff]">o.total DESC</span>;</p>
          <p className="mt-3 text-[#3fb950]">-- ✓ Index on orders.user_id detected. Query is optimized.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Drag-and-drop query builder',
              'Real-time SQL preview',
              'Join wizard for multiple tables',
              'Performance hints & index analysis',
              'Secure database credential vault',
              'Export to CSV or JSON',
              'Unlimited saved queries'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need to know SQL to use QueryCraft?</h3>
            <p className="text-[#8b949e] text-sm">No. QueryCraft is designed for non-technical users. You drag tables, pick columns, and set filters — the SQL is generated automatically in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which databases are supported?</h3>
            <p className="text-[#8b949e] text-sm">QueryCraft supports PostgreSQL, MySQL, and SQLite. More adapters are on the roadmap. Your credentials are encrypted and never stored in plaintext.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} QueryCraft. All rights reserved.
      </footer>
    </main>
  )
}
