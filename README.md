# 🍳 ResepKuliner - Aplikasi Katalog Resep Masakan

Aplikasi web katalog resep masakan yang dibangun dengan **React** dan **Bootstrap** sebagai proyek Capstone Frontend Web Programming UKM Neo Telemetri Universitas Andalas 2026.

---

## 📋 Daftar Isi

- [Deskripsi](#deskripsi)
- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Cara Menjalankan di Lokal](#cara-menjalankan-di-lokal)
- [Akun Demo](#akun-demo)
- [Struktur Proyek](#struktur-proyek)
- [Deploy ke Vercel (Tanpa Terminal)](#deploy-ke-vercel-tanpa-terminal)
- [Environment Variables](#environment-variables)
- [Lisensi](#lisensi)

---

## 📝 Deskripsi

**ResepKuliner** adalah platform katalog resep masakan yang memungkinkan pengguna untuk:
- Melihat daftar resep dengan gambar dan deskripsi
- Mencari resep berdasarkan judul, kategori, atau deskripsi
- Melihat detail resep (bahan, langkah, waktu memasak)
- Menambahkan resep baru (hanya untuk pengguna terdaftar)
- Menghapus resep yang sudah ditambahkan

Proyek ini dikembangkan sebagai tugas akhir **Capstone Frontend Web Programming** di UKM Neo Telemetri Universitas Andalas 2026.

---

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| **Autentikasi** | Login, Register, Logout, dan proteksi route |
| **Katalog Resep** | Menampilkan semua resep dengan kartu menarik |
| **Pencarian** | Cari resep berdasarkan judul, deskripsi, atau kategori |
| **Detail Resep** | Tampilkan bahan, langkah, waktu, dan kategori |
| **Tambah Resep** | Pengguna terdaftar bisa menambahkan resep baru |
| **Hapus Resep** | Pengguna terdaftar bisa menghapus resep yang dibuat |
| **Profil Pengguna** | Melihat dan mengelola resep milik sendiri |
| **Responsif** | Tampilan optimal di desktop, tablet, dan mobile |

---

## 🛠️ Teknologi yang Digunakan

- **React 18** - Library UI
- **React Router v6** - Routing dan navigasi
- **Bootstrap 5** - Styling dan komponen UI
- **Context API** - State management global (autentikasi & resep)
- **localStorage** - Penyimpanan data (mock database)
- **Vite** - Build tool dan development server

---

## 🚀 Cara Menjalankan di Lokal

Ikuti langkah-langkah di bawah untuk menjalankan proyek di komputer Anda.

### 1. Clone Repository

```bash
git clone https://github.com/username/resep-kuliner.git
cd resep-kuliner