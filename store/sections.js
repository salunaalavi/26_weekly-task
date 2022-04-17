export const state = () => ({
  lists: [
    {
      id: 1,
      title: 'Version Control and Branch Management (Git)',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan Git',
          description:
            'Git merupakan suatu sistem kontrol versi terdistribusi yang populer di kalangan developer yang fungsinya mempermudah dalam berkolaborasi dan pastinya versioning, yaitu mengatur versi dari source code program.',
        },
        {
          id: 2,
          title: 'Implementasi Git',
          description:
            'Bagaimana mengimplementasikan langsung (hands-on) materi ke Git mulai dari instalasi; add dan commit repository; push, fetch dan pull repository; reset; pengenalan file .gitignore; stash; hingga branch management, khususnya menggunakan repository GitHub.',
        },
        {
          id: 3,
          title: 'Tips-tips optimalisasi workflow pada Git',
          description:
            'Tips-tips untuk mengoptimalisasikan workflow pada Git, seperti membiarkan branch master tidak tersentuh sama sekali, tidak mengedit langsung ke branch development sebaiknya menambah fitur-fitur branch, jika ingin merge fitur lakukan merge ke development, ketika semua sudah selesai baru kita bisa merging branch development dan main.',
        },
      ],
      icon: 'mdi-git',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section2/insightNetwork.PNG'),
        },
      ],
    },
    {
      id: 2,
      title: 'Introduction UI dan UX',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan Dasar UI/UX',
          description:
            'UI atau User Interface merupakan proses dimana menampilkan sebuah hasil dalam bentuk tampilan yang dapat dilihat oleh pengguna (user). UX atau User Experience merupakan proses dimana pengguna dapat berinteraksi dengan interface secara baik dan nyaman.',
        },
        {
          id: 2,
          title: 'Konsep Design Thingking',
          description:
            '1. Empathize. 2. Define. 3. Ideate. 4. Prototype. 5. Validate.',
        },
        {
          id: 3,
          title: 'User Persona',
          description:
            'User Persona merupakan jenis pandangan pengguna yang sebenarnya sesuai dengan harapan, kebutuhan, tujuan, dan pola perilaku yang diamati.',
        },
        {
          id: 4,
          title: 'Pilar Utama UI',
          description:
            '1. Consistency. 2. Keep the Interface Simple. 3. Good Typography. 4. Offer informative feedback.',
        },
      ],
      icon: 'mdi-television-guide',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section3/homePage.png'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section3/aboutPage.png'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section3/pagesPage.png'),
        },
      ],
    },
    {
      id: 3,
      title: 'Figma',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan Figma',
          description:
            'Figma adalah editor grafik vektor dan alat prototyping yang terutama berbasis web, dengan fitur offline tambahan yang diaktifkan oleh aplikasi desktop untuk macOS dan Windows.',
        },
        {
          id: 2,
          title: 'Kelebihan dan Kekurangan Figma',
          description:
            'a. kelebihan - free - Runs on Mac and PC - Real-time team collaboration - Can import sketch file - integrated developers hand-off/specs for Mac and PC - fantastic team library - integrated high-quality prototyping b. kekurangan - You need to be online to work',
        },
        {
          id: 3,
          title: 'Tools Figma',
          description:
            '1. Importing old Sketch files 2. Setting up new frames  3. Grid and layout columns 4. Layer and groups',
        },
      ],
      icon: 'mdi-drawing-box',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section4/homePage.png'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section4/aboutPage.png'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section4/pagesPage.png'),
        },
      ],
    },
    {
      id: 4,
      title: 'HTML',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan dan Definisi Frontend',
          description:
            'Frontend adalah sebuah bagian dari website yang membuat tampilan yang menarik kepada user.',
        },
        {
          id: 2,
          title: 'Definisi, Kegunaan dan Editor HTML',
          description:
            '1. HTML (Hypertext Markup Language) adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web. 2. Kegunaan - Membuat struktur dari halaman website - Mengatur tampilan dan isi dari halaman HTML - Membuat tabel dengan tag HTML table - Membuat form HTML - Membuat gambar dengan kanvas - Mempublikasikan halaman web secara online 3. Editor - Notepad - Notepad ++ - Sublime - VS Code - dll',
        },
        {
          id: 3,
          title: 'Struktur Halaman HTML',
          description:
            'Materi struktur halaman HTML mempelajari mengenai struktur halaman HTML itu sendiri, kemudian tag-tag pada HTML seperti tag link, image dll. Kemudian heading & paragraph, styling, form & tabel.',
        },
      ],
      icon: 'mdi-language-html5',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section5/index.png'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section5/form.png'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section5/welcome.png'),
        },
      ],
    },
    {
      id: 5,
      title: 'CSS',
      subtitles: [
        {
          id: 1,
          title: 'Fungsi CSS',
          description:
            '1. Dapat menghias halaman web(color, size, font, background, width, height, dll) 2. Dapat mengatur posii pada halaman web (float, align, display, position,dll)',
        },
        {
          id: 2,
          title: 'Cara Menambah file CSS',
          description:
            '1. External CSS 2. Internal CSS  3. Inline CSS',
        },
        {
          id: 3,
          title: 'Pengenalan CSS Selector',
          description:
            'Pengenalan pola yang digunakan untuk memilih element yang ingin di styling 1. Selector ID (#) 2. Selector Class (.)',
        },
        {
          id: 4,
          title: 'Pengenalan CSS Grouping',
          description:
            'Beberapa selector dapat dikelompokkan dalam satu deklarasi style.',
        },
        {
          id: 5,
          title: 'Implementasi CSS font',
          description:
            'Pada implementasi font dapat dilakukan dengan beberapa cara, yakni bisa secara online dengan memanggil link dari font ataupun bisa dengan import font yang dimasukkan kedalam style dalam file html.',
        },
        {
          id: 6,
          title: 'Implementasi CSS Margin & Padding',
          description:
            'Margin merupakan sebuah properti dalam css yang berfungsi untuk memberikan suatu jarak antar elemen atau tag HTM, sedangkan Padding berfungsi untuk memberikan jarak elemen tersebut dengan konten elemen yang ada di dalamnya.',
        },
        {
          id: 7,
          title: 'Implementasi CSS Background',
          description:
            '1. Background-color 2. Background-image 3. Background-repeat 4. Background-size 5. Background-position',
        },
      ],
      icon: 'mdi-language-css3',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section6/file1.PNG'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section6/file2-a.PNG'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section6/file2-b.PNG'),
        },
      ],
    },
    {
      id: 6,
      title: 'Bootstrap',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan Bootstrap',
          description:
            'Merupakan framework CSS yang dapat digunakan untuk pengembangan front-end website dengan desain yang responsive dan mobile-first.',
        },
        {
          id: 2,
          title: 'Implementasi Bootstrap',
          description:
            'Untuk dapat memulai menggunakan bootstrap, dapat dengan membuka dokumentasi pada website resmi bootstrap, kemudian dapat menggunakan starter template yang ada.',
        },
        {
          id: 3,
          title: 'Pengenalan Class, Container, Sistem Grid',
          description:
            'Class : 1. Container - container - container-fluid 2. Row 3. Column 4. Button Sistem Grid: Dalam layouting tampilan website dalam framework bootstrap dibagi menjadi 12 column',
        },
      ],
      icon: 'mdi-bootstrap',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section7/navbarHeaderDesktop.PNG'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section7/contentDesktop.PNG'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section7/footerDesktop.PNG'),
        },
        {
          id: 4,
          url: require('@/assets/sections/section7/mobileResponsive.PNG'),
        },
      ],
    },
    {
      id: 7,
      title: 'Javascript Refreshment',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan Javascript',
          description:
            'Javascript adalah bahasa pemrograman yang high level, scripting, untype, dan interpreted.',
        },
        {
          id: 2,
          title: 'Jenis-jenis Deklarasi dalam Javascript',
          description:
            '1. Var 2. Let 3. Const',
        },
        {
          id: 3,
          title: 'Destructuring Javascript',
          description:
            'Adalah adalah ekspresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array, atau properti dari objek, kedalam variabel yang berbeda, seperti : 1. Array 2. Object',
        },
        {
          id: 4,
          title: 'Method, Control Flow, Function, Class',
          description:
            '1. Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing. Contoh method : Concat, Map, Foreach, Slice, Filter, Reduce 2. Control flow digunakan untuk mengatur eksekusi pada statement atau jalannya program sesuai keinginan kita 3. Function di dalam Javascript adalah sebuah object, karena memiliki property dan juga method. 4. Class adalah prototype dari suatu object yang akan dibuat.',
        },
      ],
      icon: 'mdi-language-javascript',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section8/1.PNG'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section8/3.PNG'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section8/4.PNG'),
        },
        {
          id: 4,
          url: require('@/assets/sections/section8/5.PNG'),
        },
        {
          id: 5,
          url: require('@/assets/sections/section8/6.PNG'),
        },
      ],
    },
    {
      id: 8,
      title: 'Clean Code',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan Clean Code',
          description:
            'Clean code adala istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer.',
        },
        {
          id: 2,
          title: 'Kenapa "Clean Code"?',
          description:
            '1. Work Collaboration 2. Feature Development 3. Faster Development',
        },
        {
          id: 3,
          title: 'Karakteristik Clean Code',
          description:
            '1. Mudah Dipahami 2. Mudah Di eja dan dicari 3. Singkat namun mendefinisikan konteks 4. Konsisten 5. Hindari penambahan konteks yang tidak perlu 6. Komentar 7. Good function 8. Gunakan konvensi 9. Formatting',
        },
        {
          id: 4,
          title: 'KISS(Keep It So Simple)',
          description:
            'Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C dst.',
        },
        {
          id: 5,
          title: 'DRY(Don`t Repeat Yourself)',
          description:
            'Untuk menghindari duplikasi code bautlah fungsi yang dapat digunakan secara berulang-ulang',
        },
        {
          id: 6,
          title: 'Refactoring',
          description:
            'adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal Teknik Refactoring 1. Membuat sebuah abstraksi 2. Memecah kode dengan fungsi/class 3. Perbaiki penamaan dan lokasi code 4. Deteksi kode yang memiliki duplikasi',
        },
      ],
      icon: 'mdi-code-braces-box',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section9/problem2.png'),
        },
      ],
    },
    {
      id: 9,
      title: 'Frontend Fundamental',
      subtitles: [
        {
          id: 1,
          title: 'HTML',
          description:
            'HTML(Htpertext Markup Language) merupakan bahasa markup standar untuk membuat dan menyusun halaman dan aplikasi web. - Cara Kerja : file html diakhiri dengan ekstensi .html atau .htm yang kemudian dapat dirender menggunakan web browser. - Tag : sebagian besar elemen bahasa markup ini memiliki tag pembuka dan penutup yang menggunakan syntax <tag> </tag>',
        },
        {
          id: 2,
          title: 'CSS',
          description:
            'CSS(Cascading Style Sheets) dipakai untuk mendesain halaman depan atau tampilan website. - Cara Kerja: CSS membuat styke didalam halaman web yang dapat berinteraksi dengan elemen HTML - Macam-macam CSS 1. Inline CSS 2. Internal CSS 3. External CSS',
        },
        {
          id: 3,
          title: 'Javascript',
          description:
            'Javascript adalah script yang "membuat halaman web menjadi hidup" yang memungkinkan adanya interaksi dengan pengguna - Cara Kerja : Dapat langsung menambahkan JavaScript di HTML dengan menggunakan tag <script></script>',
        },
        {
          id: 4,
          title: 'Node.js',
          description:
            'Node.js adalah runtime environment untuk JavaScript. Dengan Node.js kita dapat menjalankan kode JavaScript dimanapun, tidak hanya terbatas pada lingkungan browser - Cara Kerja : Node.js akan melakukan eksekusi atau menjalankan file yang memiliki ekstensi js.',
        },
        {
          id: 5,
          title: 'NPM',
          description:
            'NPM (Node Package Manager) merupakan command line yang dapat menginstal dan meng-uninstall package, mengelola versi dan dependensi yang diperlukan untuk menjalankan proyek - Cara Kerja : NPM bekerja untuk mengatur package pada proyek yang berjalan dengan node.js',
        },
        {
          id: 6,
          title: 'Git',
          description:
            'Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak.',
        },
      ],
      icon: 'mdi-camera-front-variant',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section10/tampilanDesktop.png'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section10/tampilanTablet.png'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section10/tampilanMobile.png'),
        },
      ],
    },
    {
      id: 10,
      title: 'Vue Fundamental',
      subtitles: [
        {
          id: 1,
          title: 'Pengenalan Vue',
          description:
            'Vue adalah framework dari JavaScript untuk mengembangkan tampilan website yang lebih interaktif dan dinamis.- Keunggulan : 1. Mudah membuat aplikasi frontend dan website 2. Mudah dipelajari dan menyenangkan 3. Dokumentasi yang lengkap dan rapi 4. Ramping dan cepat - Cara Kerja : 1. Vue dapat digunakan langsung di file HTML dengan menambahkan <script src="unpkg.com/vue"> </script> 2. Dengan menggunakan CLI yang akan dijelaskan pada materi selanjutnya',
        },
        {
          id: 2,
          title: 'Dasar-dasar Vue',
          description:
            '1. Vue Instance Setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue. 2. Vue Data Binding Vue.js menggunakan sintaks template berbasis HTML yang memungkinkan kita untuk secara deklaratif mengikat DOM yang dirender ke data instance Vue yang mendasarinya. Terdapat 3 jenis Vue Binding, yaitu: - Di dalam konten - Di atribut elemen - Elemen HTML 3. Vue Reactivity Vue instance memiliki property bernama data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimulai ulang.',
        },
        {
          id: 3,
          title: 'Vue Directive',
          description:
            'Directive adalah atribut khusus yang diawali dengan <v->. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascript di dalam atribut. 1. v-bind Direktif untuk memberitahu Vue kalau kita ingin melakukan one way data binding 2. v-model Direktif untuk memberitahu Vue kalau kita ingin melakukan two way data binding 3. v-if, v-else, v-else-if Direktif yang digunakan untuk melakukan rendering secara kondisional 4. v-on Direktif untuk memberitahu Vue kalau kita ingin memanggil fungsi 5. v-for Direktif untuk memberitahu Vue kalau kita ingin melakukan pengulangan',
        },
        {
          id: 4,
          title: 'Events dan Method',
          description:
            '1. Memantau Events Kita dapat menggunakan direktif v-on untuk mendengarkan peristiwa DOM dan menjalankan beberapa JavaScript saat di picu. 2. Menggunakan Methods Methods adalah fungsi, yang dapat diakses secara langsung pada instance VM, atau menggunakannya dalam ekspresi direktif. Semua metode akan memiliki konteks "this" secara otomatis terikat ke instance Vue.',
        },
        {
          id: 5,
          title: 'Computed Properties dan Watchers',
          description:
            '1. Computed Properties Memberikan terlalu banyak logika secara langsung di template dapat menyebabkan menjadi berat dan susah untuk dipelihara. Pada poin ini, template tidak lagi sederhana dan deklaratif. Masalahnya diperburuk ketika kita ingin memasukan pesan terbalik itu ke dalam template lebih dari sekali. Itulah mengapa untuk logika yang kompleks, kita harus menggunakan computed properties. 2. Watchers Watchers di Vue.js adalah vitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah ',
        },
        {
          id: 6,
          title: 'Component',
          description:
            'Komponen adalah Vue instance yang dapat digunakan kembali dengan nama yang kita definisikan. Kita bisa menggunakan komponen ini sebagai kustom elemen di dalam instance root Vue yang dibuat dengan new Vue',
        },
      ],
      icon: 'mdi-vuejs',
      images: [
        {
          id: 1,
          url: require('@/assets/sections/section11/tampilanDefault.png'),
        },
        {
          id: 2,
          url: require('@/assets/sections/section11/tampilanIsi.png'),
        },
        {
          id: 3,
          url: require('@/assets/sections/section11/tampilanKondisional.png'),
        },
      ],
    },
  ],
})
