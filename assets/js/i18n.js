/**
 * Elevencia Learning - Instant EN / ID Language Switcher
 * Primary: English (en), Secondary: Bahasa Indonesia (id)
 */
(function () {
  "use strict";

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.programs": "Programs",
      "nav.courses": "Courses",
      "nav.catalogue": "All 12 Courses Catalogue",
      "nav.igcse": "Cambridge IGCSE",
      "nav.alevel": "Cambridge AS & A-Level",
      "nav.languages": "English & Mandarin Classes",
      "nav.pricing": "Pricing & Packages",
      "nav.register": "Register Class",
      "nav.tutors": "Tutors",
      "nav.faq": "FAQ",
      "nav.torche": "Torche.app",
      "nav.enroll": "Enroll Now",

      "hero.eyebrow": "Part of Torche Education • High School Academy",
      "hero.title_pre": "Elevate Your High School",
      "hero.title_gold": "Academic Excellence",
      "hero.subtitle":
        "Specialized online tutoring for Cambridge IGCSE, International AS & A-Levels, and Global Languages (English & Mandarin Chinese). Taught live by top STEM scholars and language mentors.",
      "hero.cta_catalogue": "Explore Course Catalogue",
      "hero.cta_register": "Register / Book Trial",

      "about.badge": "About Elevencia Learning",
      "about.title": "Empowering International High School Learners",
      "about.subtitle":
        "Elevencia Learning is the dedicated high school division of Torche Education (PT. Obor Pengetahuan Indonesia untuk Masyarakat), guiding students from foundational STEM clarity to A* Cambridge exam mastery.",

      "services.badge": "Learning Programs",
      "services.title": "Flexible Class Formats Built Around Your Goals",
      "services.subtitle":
        "Whether you need weekly concept reinforcement, intensive past-paper exam prep, or fluent English and Mandarin communication, every session adapts to your school syllabus.",

      "featured.badge": "Course Catalogue",
      "featured.title": "Explore Our Core High School Subjects",
      "featured.subtitle":
        "Structured around official Cambridge Assessment International Education (IGCSE & AS/A-Level) syllabi alongside IELTS & HSK language tracks.",
      "featured.view_all": "View All 12 Courses in Catalogue",

      "why.badge": "Why Elevencia",
      "why.title": "Why Students & Parents Trust Elevencia Learning",
      "why.subtitle":
        "Combining Torche Education's proven academic rigor with interactive digital tools, recordings, and continuous mentor support.",

      "testimonials.badge": "Student Voices",
      "testimonials.title": "What Students & Parents Say",
      "testimonials.subtitle":
        "Real academic progress across Cambridge IGCSE, AS & A-Levels, and global language classes.",

      "tutors.badge": "Meet Our Mentors",
      "tutors.title": "Dedicated STEM & Language Tutors",
      "tutors.subtitle":
        "Learn with experienced mentors from leading universities who specialize in breaking down complex concepts clearly.",

      "faq.badge": "FAQ",
      "faq.title": "Frequently Asked Questions",
      "faq.subtitle": "Everything you need to know before booking your first session.",

      "cta.title": "Ready to Boost Your IGCSE or A-Level Grades?",
      "cta.subtitle":
        "Consult with our academic advisor to match your school syllabus and preferred schedule in minutes.",
      "cta.btn": "Register Now via WhatsApp",

      "catalogue.title": "Course Catalogue",
      "catalogue.desc": "Explore 12 specialized courses across Cambridge IGCSE, AS & A-Levels, English, and Mandarin Chinese.",
      "pricing.title": "Pricing & Class Packages",
      "pricing.desc": "Transparent per-session and bundled exam preparation plans for 1-on-1 and small group classes.",
      "registration.title": "Class Registration",
      "registration.desc": "Book your personalized high school tutoring session with Elevencia Learning."
    },
    id: {
      "nav.home": "Beranda",
      "nav.about": "Tentang Kami",
      "nav.programs": "Program",
      "nav.courses": "Kursus",
      "nav.catalogue": "Katalog 12 Mata Pelajaran",
      "nav.igcse": "Cambridge IGCSE",
      "nav.alevel": "Cambridge AS & A-Level",
      "nav.languages": "Kelas Bahasa Inggris & Mandarin",
      "nav.pricing": "Harga & Paket",
      "nav.register": "Daftar Kelas",
      "nav.tutors": "Tutor",
      "nav.faq": "FAQ",
      "nav.torche": "Torche.app",
      "nav.enroll": "Daftar Sekarang",

      "hero.eyebrow": "Bagian dari Torche Education • Akademi SMA Internasional",
      "hero.title_pre": "Tingkatkan Prestasi Akademik",
      "hero.title_gold": "Siswa Sekolah Menengah",
      "hero.subtitle":
        "Bimbingan belajar online khusus kurikulum Cambridge IGCSE, International AS & A-Level, serta Bahasa Global (Inggris & Mandarin). Dibimbing langsung oleh tutor STEM dan bahasa terbaik.",
      "hero.cta_catalogue": "Lihat Katalog Kursus",
      "hero.cta_register": "Daftar / Konsultasi Kelas",

      "about.badge": "Tentang Elevencia Learning",
      "about.title": "Membimbing Siswa SMA Menuju Standar Internasional",
      "about.subtitle":
        "Elevencia Learning adalah divisi khusus sekolah menengah dari Torche Education (PT. Obor Pengetahuan Indonesia untuk Masyarakat) yang membekali siswa dari pemahaman konsep dasar hingga nilai A* ujian Cambridge.",

      "services.badge": "Program Belajar",
      "services.title": "Format Kelas Fleksibel Sesuai Target Belajar",
      "services.subtitle":
        "Baik untuk pendalaman materi mingguan, persiapan intensif ujian past-paper, maupun kelancaran Bahasa Inggris dan Mandarin, setiap sesi disesuaikan dengan silabus sekolah Anda.",

      "featured.badge": "Katalog Mata Pelajaran",
      "featured.title": "Jelajahi Mata Pelajaran Unggulan SMA",
      "featured.subtitle":
        "Disusun berdasarkan silabus resmi Cambridge Assessment International Education (IGCSE & AS/A-Level) serta program kefasihan IELTS & HSK.",
      "featured.view_all": "Lihat Semua 12 Kursus di Katalog",

      "why.badge": "Keunggulan Kami",
      "why.title": "Mengapa Siswa & Orang Tua Memilih Elevencia Learning",
      "why.subtitle":
        "Menggabungkan standar akademik Torche Education dengan papan tulis digital interaktif, rekaman kelas gratis, dan konsultasi tutor berkelanjutan.",

      "testimonials.badge": "Testimoni",
      "testimonials.title": "Kata Siswa & Orang Tua",
      "testimonials.subtitle":
        "Perkembangan nilai nyata di program Cambridge IGCSE, AS & A-Level, serta kelas bahasa.",

      "tutors.badge": "Tim Pengajar",
      "tutors.title": "Tutor STEM & Bahasa Berpengalaman",
      "tutors.subtitle":
        "Belajar bersama pengajar dari universitas terkemuka yang ahli menyederhanakan konsep sulit menjadi mudah dipahami.",

      "faq.badge": "Tanya Jawab",
      "faq.title": "Pertanyaan yang Sering Diajukan",
      "faq.subtitle": "Informasi penting sebelum Anda mendaftarkan sesi belajar pertama.",

      "cta.title": "Siap Meraih Nilai A* di Ujian IGCSE atau A-Level?",
      "cta.subtitle":
        "Konsultasikan silabus sekolah dan jadwal belajar pilihan Anda dengan penasihat akademik kami.",
      "cta.btn": "Daftar Sekarang via WhatsApp",

      "catalogue.title": "Katalog Kursus",
      "catalogue.desc": "Jelajahi 12 program kursus khusus untuk Cambridge IGCSE, AS & A-Level, Bahasa Inggris, dan Mandarin.",
      "pricing.title": "Harga & Paket Kelas",
      "pricing.desc": "Pilihan paket per sesi dan bundel persiapan ujian yang transparan untuk kelas privat 1-on-1 maupun grup kecil.",
      "registration.title": "Pendaftaran Kelas",
      "registration.desc": "Daftarkan sesi bimbingan belajar SMA personal Anda bersama Elevencia Learning."
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang === "id" ? "id" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try {
      localStorage.setItem("elevencia_lang", lang);
    } catch (_) {
      // Ignore storage errors in restricted contexts
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let savedLang = "en";
    try {
      const stored = localStorage.getItem("elevencia_lang");
      if (stored === "en" || stored === "id") {
        savedLang = stored;
      }
    } catch (_) {
      // Ignore
    }

    applyLanguage(savedLang);

    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetLang = btn.getAttribute("data-lang") || "en";
        applyLanguage(targetLang);
      });
    });
  });
})();
