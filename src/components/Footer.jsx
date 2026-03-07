export default function Footer() {
  return (
    <footer className="py-12 px-8 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
          Design by Samir Nazim. All Rights Reserved.
        </div>
        <div className="flex space-x-12 text-[10px] font-mono tracking-widest uppercase">
          <a className="hover:opacity-50 transition-opacity" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
