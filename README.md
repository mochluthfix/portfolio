# Portfolio Website dengan ReactBits

Portfolio website modern yang dibangun menggunakan Next.js dan ReactBits - library komponen animasi React yang powerful.

## 🚀 Fitur

- ✨ Animasi interaktif menggunakan ReactBits
- 🎨 Desain modern dan responsif
- 📱 Mobile-friendly
- ⚡ Performa optimal dengan Next.js
- 🎯 Smooth scrolling navigation
- 💫 Efek hover dan click yang menarik

## 🛠️ Teknologi

- **Next.js 16** - React framework
- **ReactBits** - Animation components library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **GSAP** - Animation engine
- **Framer Motion** - Motion library

## 📦 Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📁 Struktur Proyek

```
app/
├── components/
│   ├── Hero.tsx          # Hero section dengan animasi
│   ├── About.tsx         # Tentang saya
│   ├── Skills.tsx        # Keahlian dengan progress bars
│   ├── Projects.tsx      # Portfolio projects
│   ├── Contact.tsx       # Form kontak
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer
├── page.tsx              # Halaman utama
├── layout.tsx            # Root layout
└── globals.css           # Global styles
```

## 🎨 Komponen ReactBits yang Digunakan

- **Bounce** - Animasi bounce pada hero section
- **FadeContent** - Fade in animations
- **GradientText** - Text dengan gradient animasi
- **ClickSpark** - Spark effect pada button click
- **AnimatedContent** - Scroll-triggered animations
- **StarBorder** - Animated star borders
- **GlareHover** - Hover effects dengan glare

## ✏️ Kustomisasi

Anda dapat dengan mudah mengkustomisasi:

1. **Konten**: Edit file di `app/components/` untuk mengubah teks dan informasi
2. **Warna**: Ubah warna di Tailwind classes atau di komponen ReactBits
3. **Proyek**: Tambah/edit proyek di `app/components/Projects.tsx`
4. **Skills**: Edit daftar skills di `app/components/Skills.tsx`

## 🚀 Deploy

Deploy ke Vercel dengan mudah:

```bash
npm run build
```

Atau push ke GitHub dan hubungkan dengan Vercel untuk automatic deployment.

## 📚 Dokumentasi

- [Next.js Documentation](https://nextjs.org/docs)
- [ReactBits Documentation](https://reactbits.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 License

MIT License
