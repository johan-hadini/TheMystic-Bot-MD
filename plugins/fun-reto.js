let handler  = async (m, { conn, usedPrefix, command }) => {
    conn.reply(m.chat,`⬣━━━━━━[ تحدي ❓ ]━━━━━━╭\n*“${pickRandom(global.bucin)}”*\n⬣━━━━━━━[ ❓ ]━━━━━━━━╰`, m)
}

    handler.help = ['reto']
    handler.tags = ['fun']
    handler.command = /^reto|تحدي|اتحداك|أتحداك/i
    handler.fail = null
    export default handler
    
    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
    }
    global.bucin = [
        "هل تستطيع مشاركة شيء مضحك أو ممتع؟",
        "هل يمكنك أن تخبر أصدقائك أنك ستنتقل للعيش في الولايات المتحدة وترسل لي صورة لردودهم؟",
        "هل يمكنك أن تصرخ من النافذة معلنًا أنك تريد أن تقوم بأمر ما وترسل لي الفيديو؟",
        "من هو الشخص الذي تعجب به؟",
        "هل يمكنك وضع اسم مُنشئ الجروب في حالتك على واتساب دون تقديم سياق؟",
        "هل يمكنك أن ترسل لي صورة لك؟",
        "هل يمكنك أن تكتب اسم أحد أعضاء الجروب على جسمك في أي مكان ثم ترسل لي صورة لذلك؟",
        "هل يمكنك أن تأخذ صورة لنفسك وأنت تقبّل تلفزيونًا؟",
        "هل يمكنك أن ترسل لي صورة لك وأنت ترتدي ملابس داخلية؟",
        "هل يمكنك أن تغرد على واتساب أنك تحب تناول التراب؟",
        "هل يمكنك أن تضع صورة لأحد أعضاء الجروب من الجنس المعاكس في صورتك الشخصية على واتساب لمدة 3 أيام؟",
        "هل يمكنك أن ترسل لي رسالة نصية لصديقك السابق وتقول له 'ما زلت أعجب بك'؟",
        "هل يمكنك أن ترسل لي تسجيلاً صوتيًا قائلاً 'أنا أحب Raphel - Bot'؟",
        "ل يمكنك أن تخبر الشخص الذي تعجب به أنك تحبه وترسل لي صورة للرسالة التي ترسلها إلى الجروب؟",
        "هل يمكنك أن ترسل لي تسجيلاً صوتيًا لك وأنت تغني؟",
        "هل يمكنك أن ترسل لي صورة لك دون تغطية وجهك؟",
        "هل يمكنك أن ترسل لي فيديو لك وأنت ترقص؟",
        "هل يمكنك دعوة أشخاصًا غرباء لالتقاط صورة سيلفي معك ثم إرسالها إلى الجروب؟",
        "هل يمكنك اختيار أرقام عشوائية من جهات الاتصال الخاصة بك وإرسال رسائل نصية بها تقول 'أنا حامل'؟",
        "هل يمكنك أن تخلط أي مشروب متاح بالقرب منك مع الفلفل وتشربه؟",
        "هل يمكنك اختيار رقم عشوائي من جهات الاتصال الخاصة بك والاتصال به ثم قول له 'أنا أحبك'؟",
        "هل يمكنك شراء وجبة طعام رخيصة جدًا في الكافيتيريا (أو شراء زجاجة ماء) وقول بين البكاء 'هذا هو أغلى طعام اشتريته من أي وقت مضى'؟",
        "هل يمكنك شراء زجاجة من مشروب كوكاكولا ورش الزهور بها أمام الناس؟",
        "هل يمكنك الوقوف بالقرب من الثلاجة وإغلاق عينيك، ثم اختيار الأطعمة بشكل عشوائي حتى عندما تتناولها، يجب أن تظل عينيك مغلقة؟",
        "هل يمكنك الوقوف في منتصف ملعب السلة والصراخ قائلًا 'أنا أحبك يا أميري / يا أميرتي'؟",
        "هل يمكنك أن تقدم احترامك لشخص في الفصل وبعد ذلك قول 'أنا في خدمتك، سيدي'؟",
        "هل يمكنك المشي وأنت تصفق وتغني أغنية 'عيد ميلاد سعيد' أمام الفصل؟",
        "هل يمكنك الركوع على ركبة وقول 'هل تتزوجينني؟' لأول شخص يدخل الغرفة؟",
        "هل يمكنك صنع تاج غريب من ورق النسخ ومن ثم طلب من الجميع في الغرفة أن يتخذوا وضعيات معينة أمام الكاميرا؟",
        "هل يمكنك أن تقول لفتاة تعتقد أنها الأجمل في الفصل 'أنت جميلة جدًا، لا تكذبين'؟",
        "هل يمكنك قول لشخص في الفصل 'أولًا، قالوا لي إنك توأمي، ثم انفصلنا وبعد ذلك أجريت عملية تجميل. وهذا هو أكثر ما قلته بجدية'؟",
        "هل يمكنك أن تلقي دفتر شخص ما في سلة المهملات أمام عينيهم قائلاً 'هذا الكتاب لا يفهمه أحد'؟",
        "هل يمكنك أن تقوم بمزاج عملي عن طريق قطع شعر ساقك ثلاث مرات؟",
        "هل يمكنك محادثة والديك عبر الدردشة وقول لهما 'أنا أشتاق إليكما' باستخدام رموز تعبير حزينة؟",
        "هل يمكنك محاولة البحث عبر Google عن أشياء مخيفة أو غريبة مثل الثلاثوفوبيا وما إلى ذلك؟",
        "هل يمكنك الجلوس بشكل مريح في وسط ملعب كرة السلة وتظاهر بأنها شاطئ للتشمس؟",
        "هل يمكنك ملء فمك بالماء ومحاولة الاحتفاظ به حتى مرتين، وإذا ضحكت أو انسكب أو شربت، فإنك تحتاج إلى ملء فمك مرة أخرى وإضافة جولة أخرى؟",
        "هل يمكنك أن ترحب بأول شخص يدخل الغرفة وتقول 'مرحبًا في من يريد أن يصبح مليونير!'؟"

    ] 