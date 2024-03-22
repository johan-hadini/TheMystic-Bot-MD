global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '⬆️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    // this code make config.js to be a more understandable code
const role = [
  { name: 'محارب الخامس', level: 0 }, { name: 'محارب الرابع', level: 4 }, { name: 'محارب الثالث', level: 8 }, { name: 'محارب الثاني', level: 12 }, { name: 'محارب الأول', level: 16 },
  { name: 'فارس الخامس', level: 20 }, { name: 'فارس الرابع', level: 24 }, { name: 'فارس الثالث', level: 28 }, { name: 'فارس الثاني', level: 32 }, { name: 'فارس الأول', level: 36 },
  { name: 'ساحر الخامس', level: 40 }, { name: 'ساحر الرابع', level: 44 }, { name: 'ساحر الثالث', level: 48 }, { name: 'ساحر الثاني', level: 52 }, { name: 'ساحر الأول', level: 56 },
  { name: 'مستكشف الخامس', level: 60 }, { name: 'مستكشف الرابع', level: 64 }, { name: 'مستكشف الثالث', level: 68 }, { name: 'مستكشف الثاني', level: 72 }, { name: 'مستكشف الأول', level: 76 },
  { name: 'ساحر النار الخامس', level: 80 }, { name: 'ساحر النار الرابع', level: 84 }, { name: 'ساحر النار الثالث', level: 88 }, { name: 'ساحر النار الثاني', level: 92 }, { name: 'ساحر النار الأول', level: 96 },
  { name: 'كاهن الخامس', level: 100 }, { name: 'كاهن الرابع', level: 104 }, { name: 'كاهن الثالث', level: 108 }, { name: 'كاهن الثاني', level: 112 }, { name: 'كاهن الأول', level: 116 },
  { name: 'لص الخامس', level: 120 }, { name: 'لص الرابع', level: 124 }, { name: 'لص الثالث', level: 128 }, { name: 'لص الثاني', level: 132 }, { name: 'لص الأول', level: 136 },
  { name: 'قاتل الخامس', level: 140 }, { name: 'قاتل الرابع', level: 144 }, { name: 'قاتل الثالث', level: 148 }, { name: 'قاتل الثاني', level: 152 }, { name: 'قاتل الأول', level: 156 },
  { name: 'راهب الخامس', level: 160 }, { name: 'راهب الرابع', level: 164 }, { name: 'راهب الثالث', level: 168 }, { name: 'راهب الثاني', level: 172 }, { name: 'راهب الأول', level: 176 },
  { name: 'فارس الأغاني الخامس', level: 180 }, { name: 'فارس الأغاني الرابع', level: 184 }, { name: 'فارس الأغاني الثالث', level: 188 }, { name: 'فارس الأغاني الثاني', level: 192 }, { name: 'فارس الأغاني الأول', level: 196 },
  { name: 'مستنبط الأموات الخامس', level: 200 }, { name: 'مستنبط الأموات الرابع', level: 204 }, { name: 'مستنبط الأموات الثالث', level: 208 }, { name: 'مستنبط الأموات الثاني', level: 212 }, { name: 'مستنبط الأموات الأول', level: 216 },
  { name: 'ساحر الشياطين الخامس', level: 220 }, { name: 'ساحر الشياطين الرابع', level: 224 }, { name: 'ساحر الشياطين الثالث', level: 228 }, { name: 'ساحر الشياطين الثاني', level: 232 }, { name: 'ساحر الشياطين الأول', level: 236 },
  { name: 'ساحر السحرة الخامس', level: 240 }, { name: 'ساحر السحرة الرابع', level: 244 }, { name: 'ساحر السحرة الثالث', level: 248 }, { name: 'ساحر السحرة الثاني', level: 252 }, { name: 'ساحر السحرة الأول', level: 256 },
  { name: 'حكيم الخامس', level: 260 }, { name: 'حكيم الرابع', level: 264 }, { name: 'حكيم الثالث', level: 268 }, { name: 'حكيم الثاني', level: 272 }, { name: 'حكيم الأول', level: 276 },
  { name: 'كاهن الكواكب الخامس', level: 280 }, { name: 'كاهن الكواكب الرابع', level: 284 }, { name: 'كاهن الكواكب الثالث', level: 288 }, { name: 'كاهن الكواكب الثاني', level: 292 }, { name: 'كاهن الكواكب الأول', level: 296 },
  { name: 'لص الظلام الخامس', level: 300 }, { name: 'لص الظلام الرابع', level: 304 }, { name: 'لص الظلام الثالث', level: 308 }, { name: 'لص الظلام الثاني', level: 312 }, { name: 'لص الظلام الأول', level: 316 },
  { name: 'ملاكم الخامس', level: 320 }, { name: 'ملاكم الرابع', level: 324 }, { name: 'ملاكم الثالث', level: 328 }, { name: 'ملاكم الثاني', level: 332 }, { name: 'ملاكم الأول', level: 336 },
  { name: 'رامي السهام الخامس', level: 340 }, { name: 'رامي السهام الرابع', level: 344 }, { name: 'رامي السهام الثالث', level: 348 }, { name: 'رامي السهام الثاني', level: 352 }, { name: 'رامي السهام الأول', level: 356 },
  { name: 'قناص الخامس', level: 360 }, { name: 'قناص الرابع', level: 364 }, { name: 'قناص الثالث', level: 368 }, { name: 'قناص الثاني', level: 372 }, { name: 'قناص الأول', level: 376 },
  { name: 'نينجا الخامس', level: 380 }, { name: 'نينجا الرابع', level: 384 }, { name: 'نينجا الثالث', level: 388 }, { name: 'نينجا الثاني', level: 392 }, { name: 'نينجا الأول', level: 396 },
  { name: 'ساموراي الخامس', level: 400 }, { name: 'ساموراي الرابع', level: 404 }, { name: 'ساموراي الثالث', level: 408 }, { name: 'ساموراي الثاني', level: 412 }, { name: 'ساموراي الأول', level: 416 },
  { name: 'محارب الغضب الخامس', level: 420 }, { name: 'محارب الغضب الرابع', level: 424 }, { name: 'محارب الغضب الثالث', level: 428 }, { name: 'محارب الغضب الثاني', level: 432 }, { name: 'محارب الغضب الأول', level: 436 },
  { name: 'أسطورة الخامس', level: 440 }, { name: 'أسطورة الرابع', level: 444 }, { name: 'أسطورة الثالث', level: 448 }, { name: 'أسطورة الثاني', level: 452 }, { name: 'أسطورة الأول', level: 456 },
  { name: 'بطل الخامس', level: 460 }, { name: 'بطل الرابع', level: 464 }, { name: 'بطل الثالث', level: 468 }, { name: 'بطل الثاني', level: 472 }, { name: 'بطل الأول', level: 476 },
  { name: 'سيد السيادة الخامس', level: 480 }, { name: 'سيد السيادة الرابع', level: 484 }, { name: 'سيد السيادة الثالث', level: 488 }, { name: 'سيد السيادة الثاني', level: 492 }, { name: 'سيد السيادة الأول', level: 496 },
  { name: 'مشعوذ الخامس', level: 500 }, { name: 'مشعوذ الرابع', level: 504 }, { name: 'مشعوذ الثالث', level: 508 }, { name: 'مشعوذ الثاني', level: 512 }, { name: 'مشعوذ الأول', level: 516 },
  { name: 'خالد الخامس', level: 520 }, { name: 'خالد الرابع', level: 524 }, { name: 'خالد الثالث', level: 528 }, { name: 'خالد الثاني', level: 532 }, { name: 'خالد الأول', level: 536 },
  { name: 'نيفالم الخامس', level: 540 }, { name: 'نيفالم الرابع', level: 544 }, { name: 'نيفالم الثالث', level: 548 }, { name: 'نيفالم الثاني', level: 552 }, { name: 'نيفالم الأول', level: 556 },
  { name: 'أبدي الخامس', level: 560 }, { name: 'أبدي الرابع', level: 564 }, { name: 'أبدي الثالث', level: 568 }, { name: 'أبدي الثاني', level: 572 }, { name: 'أبدي الأول', level: 576 },
  { name: 'نبتون الخامس', level: 580 }, { name: 'نبتون الرابع', level: 584 }, { name: 'نبتون الثالث', level: 588 }, { name: 'نبتون الثاني', level: 592 }, { name: 'نبتون الأول', level: 596 },
  { name: 'بلوتو الخامس', level: 600 }, { name: 'بلوتو الرابع', level: 604 }, { name: 'بلوتو الثالث', level: 608 }, { name: 'بلوتو الثاني', level: 612 }, { name: 'بلوتو الأول', level: 616 },
  { name: 'إيريس الخامس', level: 620 }, { name: 'إيريس الرابع', level: 624 }, { name: 'إيريس الثالث', level: 628 }, { name: 'إيريس الثاني', level: 632 }, { name: 'إيريس الأول', level: 636 },
  { name: 'صعود الخامس', level: 640 }, { name: 'صعود الرابع', level: 644 }, { name: 'صعود الثالث', level: 648 }, { name: 'صعود الثاني', level: 652 }, { name: 'صعود الأول', level: 656 },
  { name: 'جنة الخامس', level: 660 }, { name: 'جنة الرابع', level: 664 }, { name: 'جنة الثالث', level: 668 }, { name: 'جنة الثاني', level: 672 }, { name: 'جنة الأول', level: 676 },
  { name: 'إثر الخامس', level: 680 }, { name: 'إثر الرابع', level: 684 }, { name: 'إثر الثالث', level: 688 }, { name: 'إثر الثاني', level: 692 }, { name: 'إثر الأول', level: 696 },
  { name: 'جايا الخامس', level: 700 }, { name: 'جايا الرابع', level: 704 }, { name: 'جايا الثالث', level: 708 }, { name: 'جايا الثاني', level: 712 }, { name: 'جايا الأول', level: 716 },
  { name: 'هاديس الخامس', level: 720 }, { name: 'هاديس الرابع', level: 724 }, { name: 'هاديس الثالث', level: 728 }, { name: 'هاديس الثاني', level: 732 }, { name: 'هاديس الأول', level: 736 },
  { name: 'هايمدال الخامس', level: 740 }, { name: 'هايمدال الرابع', level: 744 }, { name: 'هايمدال الثالث', level: 748 }, { name: 'هايمدال الثاني', level: 752 }, { name: 'هايمدال الأول', level: 756 },
  { name: 'هيبيريون الخامس', level: 760 }, { name: 'هيبيريون الرابع', level: 764 }, { name: 'هيبيريون الثالث', level: 768 }, { name: 'هيبيريون الثاني', level: 772 }, { name: 'هيبيريون الأول', level: 776 },
  { name: 'إيريس الخامس', level: 780 }, { name: 'إيريس الرابع', level: 784 }, { name: 'إيريس الثالث', level: 788 }, { name: 'إيريس الثاني', level: 792 }, { name: 'إيريس الأول', level: 796 },
  { name: 'زيوس الخامس', level: 800 }, { name: 'زيوس الرابع', level: 804 }, { name: 'زيوس الثالث', level: 808 }, { name: 'زيوس الثاني', level: 812 }, { name: 'زيوس الأول', level: 816 },
  { name: 'كرونوس الخامس', level: 820 }, { name: 'كرونوس الرابع', level: 824 }, { name: 'كرونوس الثالث', level: 828 }, { name: 'كرونوس الثاني', level: 832 }, { name: 'كرونوس الأول', level: 836 },
  { name: 'ليليث الخامس', level: 840 }, { name: 'ليليث الرابع', level: 844 }, { name: 'ليليث الثالث', level: 848 }, { name: 'ليليث الثاني', level: 852 }, { name: 'ليليث الأول', level: 856 },
  { name: 'عاصفة الخامس', level: 860 }, { name: 'عاصفة الرابع', level: 864 }, { name: 'عاصفة الثالث', level: 868 }, { name: 'عاصفة الثاني', level: 872 }, { name: 'عاصفة الأول', level: 876 },
  { name: 'نوفا الخامس', level: 880 }, { name: 'نوفا الرابع', level: 884 }, { name: 'نوفا الثالث', level: 888 }, { name: 'نوفا الثاني', level: 892 }, { name: 'نوفا الأول', level: 896 },
  { name: 'أودين الخامس', level: 900 }, { name: 'أودين الرابع', level: 904 }, { name: 'أودين الثالث', level: 908 }, { name: 'أودين الثاني', level: 912 }, { name: 'أودين الأول', level: 916 },
  { name: 'فالكون الخامس', level: 920 }, { name: 'فالكون الرابع', level: 924 }, { name: 'فالكون الثالث', level: 928 }, { name: 'فالكون الثاني', level: 932 }, { name: 'فالكون الأول', level: 936 },
  { name: 'نيوترون الخامس', level: 940 }, { name: 'نيوترون الرابع', level: 944 }, { name: 'نيوترون الثالث', level: 948 }, { name: 'نيوترون الثاني', level: 952 }, { name: 'نيوترون الأول', level: 956 },
  { name: 'مسترال الخامس', level: 960 }, { name: 'مسترال الرابع', level: 964 }, { name: 'مسترال الثالث', level: 968 }, { name: 'مسترال الثاني', level: 972 }, { name: 'مسترال الأول', level: 976 },
  { name: 'غليون الخامس', level: 980 }, { name: 'غليون الرابع', level: 984 }, { name: 'غليون الثالث', level: 988 }, { name: 'غليون الثاني', level: 992 }, { name: 'غليون الأول', level: 996 },
  { name: 'أسطورة المائة', level: 1000 }
]

    return role.reverse().find(role => level >= role.level)
  }
}