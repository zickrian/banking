export interface Nasabah {
  id: string;
  nama: string;
  telepon: string;
  pekerjaan: string;
  statusKontak: 'contacted' | 'not-contacted' | 'follow-up';
  prioritas: 'high' | 'medium' | 'low';
  probabilitasML: number;
  umur: number;
  saldo: number;
  jenisKelamin: 'Laki-laki' | 'Perempuan';
  statusPernikahan: 'Menikah' | 'Belum Menikah' | 'Cerai';
  domisili: string;
  sektorIndustri: string;
  ketertarikan?: 'tertarik' | 'tidak-tertarik' | '';
  catatan?: string;
  riwayatKontak: {
    tanggal: string;
    catatan: string;
    hasil: string;
  }[];
  rekomendasiPercakapan: string[];
}

export const mockNasabah: Nasabah[] = [
  {
    id: '1',
    nama: 'Budi Santoso',
    telepon: '081234567890',
    pekerjaan: 'Entrepreneur',
    statusKontak: 'contacted',
    prioritas: 'high',
    probabilitasML: 85,
    umur: 45,
    saldo: 250000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Jakarta',
    sektorIndustri: 'Teknologi & Startup',
    ketertarikan: 'tertarik',
    catatan: 'Nasabah sangat responsif dan tertarik dengan produk deposito',
    riwayatKontak: [
      { tanggal: '2024-01-15', catatan: 'Tertarik deposito 100jt', hasil: 'Positif' },
      { tanggal: '2024-01-10', catatan: 'Follow up produk', hasil: 'Perlu follow up' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan deposito dengan bunga kompetitif',
      'Jelaskan benefit program prioritas',
      'Diskusikan portfolio investasi'
    ]
  },
  {
    id: '2',
    nama: 'Siti Nurhaliza',
    telepon: '081234567891',
    pekerjaan: 'Dokter Spesialis',
    statusKontak: 'follow-up',
    prioritas: 'high',
    probabilitasML: 78,
    umur: 38,
    saldo: 180000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Menikah',
    domisili: 'Surabaya',
    sektorIndustri: 'Kesehatan',
    ketertarikan: '',
    catatan: 'Meminta waktu untuk pertimbangan lebih lanjut',
    riwayatKontak: [
      { tanggal: '2024-01-12', catatan: 'Minta waktu untuk pertimbangan', hasil: 'Perlu follow up' }
    ],
    rekomendasiPercakapan: [
      'Follow up keputusan deposito',
      'Tawarkan konsultasi finansial gratis'
    ]
  },
  {
    id: '3',
    nama: 'Ahmad Wijaya',
    telepon: '081234567892',
    pekerjaan: 'Software Engineer',
    statusKontak: 'not-contacted',
    prioritas: 'medium',
    probabilitasML: 65,
    umur: 32,
    saldo: 95000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Belum Menikah',
    domisili: 'Bandung',
    sektorIndustri: 'Teknologi Informasi',
    riwayatKontak: [],
    rekomendasiPercakapan: [
      'Perkenalkan produk deposito untuk profesional muda',
      'Tawarkan simulasi perhitungan bunga'
    ]
  },
  {
    id: '4',
    nama: 'Dewi Lestari',
    telepon: '081234567893',
    pekerjaan: 'Pengacara',
    statusKontak: 'contacted',
    prioritas: 'high',
    probabilitasML: 82,
    umur: 42,
    saldo: 220000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Menikah',
    domisili: 'Jakarta',
    sektorIndustri: 'Hukum',
    ketertarikan: 'tertarik',
    catatan: 'Sangat tertarik, sudah minta proposal detail',
    riwayatKontak: [
      { tanggal: '2024-01-14', catatan: 'Sangat tertarik, minta proposal', hasil: 'Positif' }
    ],
    rekomendasiPercakapan: [
      'Kirim proposal deposito detail',
      'Jadwalkan meeting untuk closing'
    ]
  },
  {
    id: '5',
    nama: 'Rudi Hartono',
    telepon: '081234567894',
    pekerjaan: 'Pemilik Usaha',
    statusKontak: 'follow-up',
    prioritas: 'high',
    probabilitasML: 88,
    umur: 50,
    saldo: 350000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Semarang',
    sektorIndustri: 'Manufaktur',
    ketertarikan: 'tertarik',
    catatan: 'Ingin deposito besar, sedang negosiasi rate khusus',
    riwayatKontak: [
      { tanggal: '2024-01-13', catatan: 'Ingin deposito besar, nego rate', hasil: 'Negosiasi' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan rate khusus untuk deposito besar',
      'Diskusikan benefit exclusive banking'
    ]
  },
  {
    id: '6',
    nama: 'Linda Wijayanti',
    telepon: '081234567895',
    pekerjaan: 'Akuntan',
    statusKontak: 'not-contacted',
    prioritas: 'medium',
    probabilitasML: 60,
    umur: 35,
    saldo: 75000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Belum Menikah',
    domisili: 'Yogyakarta',
    sektorIndustri: 'Keuangan',
    riwayatKontak: [],
    rekomendasiPercakapan: [
      'Perkenalkan produk deposito dengan tenor fleksibel'
    ]
  },
  {
    id: '7',
    nama: 'Hendra Gunawan',
    telepon: '081234567896',
    pekerjaan: 'Manager',
    statusKontak: 'contacted',
    prioritas: 'medium',
    probabilitasML: 70,
    umur: 40,
    saldo: 120000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Medan',
    sektorIndustri: 'Retail',
    ketertarikan: '',
    catatan: 'Masih mempertimbangkan produk lain',
    riwayatKontak: [
      { tanggal: '2024-01-11', catatan: 'Pertimbangkan produk lain', hasil: 'Netral' }
    ],
    rekomendasiPercakapan: [
      'Bandingkan produk deposito dengan investasi lain'
    ]
  },
  {
    id: '8',
    nama: 'Maya Sari',
    telepon: '081234567897',
    pekerjaan: 'Guru',
    statusKontak: 'not-contacted',
    prioritas: 'low',
    probabilitasML: 45,
    umur: 30,
    saldo: 45000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Belum Menikah',
    domisili: 'Malang',
    sektorIndustri: 'Pendidikan',
    riwayatKontak: [],
    rekomendasiPercakapan: [
      'Tawarkan deposito dengan nominal kecil'
    ]
  },
  {
    id: '9',
    nama: 'Andi Prasetyo',
    telepon: '081234567898',
    pekerjaan: 'Arsitek',
    statusKontak: 'contacted',
    prioritas: 'high',
    probabilitasML: 80,
    umur: 37,
    saldo: 195000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Jakarta',
    sektorIndustri: 'Konstruksi & Properti',
    ketertarikan: 'tertarik',
    catatan: 'Tertarik dengan produk deposito jangka panjang',
    riwayatKontak: [
      { tanggal: '2024-01-16', catatan: 'Diskusi produk deposito', hasil: 'Positif' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan deposito dengan tenor 12-24 bulan',
      'Jelaskan benefit tax saving'
    ]
  },
  {
    id: '10',
    nama: 'Ratna Dewi',
    telepon: '081234567899',
    pekerjaan: 'Konsultan Keuangan',
    statusKontak: 'contacted',
    prioritas: 'high',
    probabilitasML: 86,
    umur: 41,
    saldo: 280000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Menikah',
    domisili: 'Surabaya',
    sektorIndustri: 'Keuangan',
    ketertarikan: 'tertarik',
    catatan: 'Sangat paham produk keuangan, butuh rate kompetitif',
    riwayatKontak: [
      { tanggal: '2024-01-16', catatan: 'Negosiasi rate deposito', hasil: 'Negosiasi' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan rate premium untuk deposito besar',
      'Diskusikan portfolio diversifikasi'
    ]
  },
  {
    id: '11',
    nama: 'Bambang Sutrisno',
    telepon: '081234567900',
    pekerjaan: 'Direktur Perusahaan',
    statusKontak: 'contacted',
    prioritas: 'high',
    probabilitasML: 92,
    umur: 48,
    saldo: 420000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Jakarta',
    sektorIndustri: 'Perdagangan',
    ketertarikan: 'tertarik',
    catatan: 'VIP client, butuh layanan prioritas',
    riwayatKontak: [
      { tanggal: '2024-01-17', catatan: 'Meeting dengan relationship manager', hasil: 'Positif' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan priority banking service',
      'Diskusikan wealth management'
    ]
  },
  {
    id: '12',
    nama: 'Sinta Maharani',
    telepon: '081234567901',
    pekerjaan: 'Pengusaha Fashion',
    statusKontak: 'contacted',
    prioritas: 'medium',
    probabilitasML: 72,
    umur: 34,
    saldo: 145000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Belum Menikah',
    domisili: 'Bandung',
    sektorIndustri: 'Retail & Fashion',
    ketertarikan: 'tertarik',
    catatan: 'Tertarik deposito untuk modal usaha',
    riwayatKontak: [
      { tanggal: '2024-01-17', catatan: 'Konsultasi produk deposito', hasil: 'Positif' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan deposito dengan likuiditas tinggi',
      'Jelaskan benefit untuk pengusaha'
    ]
  },
  {
    id: '13',
    nama: 'Fajar Ramadhan',
    telepon: '081234567902',
    pekerjaan: 'IT Manager',
    statusKontak: 'follow-up',
    prioritas: 'medium',
    probabilitasML: 68,
    umur: 36,
    saldo: 110000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Jakarta',
    sektorIndustri: 'Teknologi Informasi',
    ketertarikan: '',
    catatan: 'Masih membandingkan dengan bank lain',
    riwayatKontak: [
      { tanggal: '2024-01-15', catatan: 'Minta waktu untuk pertimbangan', hasil: 'Perlu follow up' }
    ],
    rekomendasiPercakapan: [
      'Follow up perbandingan rate',
      'Tawarkan benefit tambahan'
    ]
  },
  {
    id: '14',
    nama: 'Dian Puspita',
    telepon: '081234567903',
    pekerjaan: 'Apoteker',
    statusKontak: 'not-contacted',
    prioritas: 'medium',
    probabilitasML: 63,
    umur: 33,
    saldo: 88000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Menikah',
    domisili: 'Yogyakarta',
    sektorIndustri: 'Kesehatan',
    riwayatKontak: [],
    rekomendasiPercakapan: [
      'Perkenalkan produk deposito untuk profesional kesehatan',
      'Tawarkan program khusus'
    ]
  },
  {
    id: '15',
    nama: 'Rizki Firmansyah',
    telepon: '081234567904',
    pekerjaan: 'Marketing Director',
    statusKontak: 'contacted',
    prioritas: 'high',
    probabilitasML: 84,
    umur: 43,
    saldo: 235000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Surabaya',
    sektorIndustri: 'Marketing & Advertising',
    ketertarikan: 'tertarik',
    catatan: 'Ingin deposito untuk dana pensiun',
    riwayatKontak: [
      { tanggal: '2024-01-18', catatan: 'Diskusi perencanaan keuangan', hasil: 'Positif' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan deposito jangka panjang',
      'Diskusikan retirement planning'
    ]
  },
  {
    id: '16',
    nama: 'Nurul Hidayah',
    telepon: '081234567905',
    pekerjaan: 'Notaris',
    statusKontak: 'follow-up',
    prioritas: 'high',
    probabilitasML: 79,
    umur: 39,
    saldo: 205000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Menikah',
    domisili: 'Jakarta',
    sektorIndustri: 'Hukum',
    ketertarikan: '',
    catatan: 'Menunggu approval dari suami',
    riwayatKontak: [
      { tanggal: '2024-01-16', catatan: 'Presentasi produk', hasil: 'Perlu follow up' }
    ],
    rekomendasiPercakapan: [
      'Follow up keputusan',
      'Tawarkan meeting dengan pasangan'
    ]
  },
  {
    id: '17',
    nama: 'Agus Setiawan',
    telepon: '081234567906',
    pekerjaan: 'Pilot',
    statusKontak: 'not-contacted',
    prioritas: 'medium',
    probabilitasML: 66,
    umur: 35,
    saldo: 125000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Tangerang',
    sektorIndustri: 'Penerbangan',
    riwayatKontak: [],
    rekomendasiPercakapan: [
      'Perkenalkan produk deposito untuk profesional',
      'Tawarkan fleksibilitas tenor'
    ]
  },
  {
    id: '18',
    nama: 'Kartika Sari',
    telepon: '081234567907',
    pekerjaan: 'Desainer Interior',
    statusKontak: 'contacted',
    prioritas: 'medium',
    probabilitasML: 71,
    umur: 31,
    saldo: 98000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Belum Menikah',
    domisili: 'Bali',
    sektorIndustri: 'Desain & Kreatif',
    ketertarikan: 'tertarik',
    catatan: 'Tertarik deposito untuk dana investasi properti',
    riwayatKontak: [
      { tanggal: '2024-01-18', catatan: 'Konsultasi produk', hasil: 'Positif' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan deposito dengan auto-renewal',
      'Diskusikan strategi investasi'
    ]
  },
  {
    id: '19',
    nama: 'Wahyu Hidayat',
    telepon: '081234567908',
    pekerjaan: 'Dosen',
    statusKontak: 'not-contacted',
    prioritas: 'low',
    probabilitasML: 52,
    umur: 38,
    saldo: 67000000,
    jenisKelamin: 'Laki-laki',
    statusPernikahan: 'Menikah',
    domisili: 'Semarang',
    sektorIndustri: 'Pendidikan',
    riwayatKontak: [],
    rekomendasiPercakapan: [
      'Perkenalkan produk deposito untuk akademisi',
      'Tawarkan rate kompetitif'
    ]
  },
  {
    id: '20',
    nama: 'Rina Kusuma',
    telepon: '081234567909',
    pekerjaan: 'HR Manager',
    statusKontak: 'contacted',
    prioritas: 'medium',
    probabilitasML: 69,
    umur: 36,
    saldo: 115000000,
    jenisKelamin: 'Perempuan',
    statusPernikahan: 'Menikah',
    domisili: 'Jakarta',
    sektorIndustri: 'Human Resources',
    ketertarikan: 'tertarik',
    catatan: 'Ingin deposito untuk dana pendidikan anak',
    riwayatKontak: [
      { tanggal: '2024-01-19', catatan: 'Diskusi perencanaan dana pendidikan', hasil: 'Positif' }
    ],
    rekomendasiPercakapan: [
      'Tawarkan deposito pendidikan',
      'Jelaskan benefit jangka panjang'
    ]
  }
];

export const monthlyDeposits = [
  { month: 'Jan', amount: 450 },
  { month: 'Feb', amount: 520 },
  { month: 'Mar', amount: 480 },
  { month: 'Apr', amount: 590 },
  { month: 'May', amount: 620 },
  { month: 'Jun', amount: 680 },
  { month: 'Jul', amount: 720 },
  { month: 'Aug', amount: 650 },
  { month: 'Sep', amount: 700 },
  { month: 'Oct', amount: 780 },
  { month: 'Nov', amount: 820 },
  { month: 'Dec', amount: 850 }
];

export const conversionData = [
  { month: 'Jan', rate: 12 },
  { month: 'Feb', rate: 15 },
  { month: 'Mar', rate: 14 },
  { month: 'Apr', rate: 18 },
  { month: 'May', rate: 20 },
  { month: 'Jun', rate: 22 },
  { month: 'Jul', rate: 25 },
  { month: 'Aug', rate: 23 },
  { month: 'Sep', rate: 26 },
  { month: 'Oct', rate: 28 },
  { month: 'Nov', rate: 30 },
  { month: 'Dec', rate: 32 }
];

export const professionData = [
  { profession: 'Entrepreneur', count: 45 },
  { profession: 'Doctor', count: 38 },
  { profession: 'Lawyer', count: 32 },
  { profession: 'Engineer', count: 28 },
  { profession: 'Business Owner', count: 25 },
  { profession: 'Manager', count: 22 }
];

export const rejectionReasonsData = [
  { name: 'Tidak butuh produk', value: 28, color: '#ef4444' },
  { name: 'Sedang sibuk / tidak sempat', value: 24, color: '#f59e0b' },
  { name: 'Tidak percaya / butuh penjelasan ulang', value: 20, color: '#8b5cf6' },
  { name: 'Dana belum tersedia', value: 18, color: '#3b82f6' },
  { name: 'Kontak tidak aktif', value: 10, color: '#6b7280' }
];
