// script.js

const sorular = [
  {//0 
    metin: "Soru 1 Bölge idare mahkemelerinin tüm birimleri ile idare mahkemeleri ve vergi mahkemelerinin iş süreçlerindeki her türlü veri, bilgi ve belge akışı ile dokümantasyon işlemleri, bu işlemlere ilişkin   her türlü kayıt, dosyalama, saklama ve arşivleme işlemleri ile uyum ve işbirliği sağlanmış dış birimlerle yapılacak her türlü işlemler nerede yapılır ?",
    secenekler: ["Uyap ", "DAHASI ", "BUCA", "DOLUR", "ENİYİS"],
    dogruCevap: "UYAP"
  },
  {//1
    metin: "  Resmî yazışmalarda Uygulanacak Usul ve Esas lar Hakkında Yönetmelik'e göre, 'antet' bölümünde aşağıdakilerden hangisi yer alır?",
    secenekler: ["A) Belgenin gönderildiği idarenin adı" , " B)	Belgede ilgi kısmına yazılan idarenin adı" , "C) Belgeyi gönderen idarenin adı" , "D) Belgenin konusu" , " E)	Belgenin hangi ortamda hazırlandığı"],
    dogruCevap: "Belgeyi gönderen idarenin adı"},
  {//2
  metin: " Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre, 'metin' ile ilgili aşağıdakilerden hangisi doğrudur?",
  secenekler: [" A)Metin içinde geçen sayıların parantez içinde harfle de yazılması zorunludur." , " B) Dört ve dörtten çok haneli sayılar sondan sayılmak üzere üçlü gruplara ayrılarak yazılır ve araya virgül (,) işareti konulur." , " C) Metin içinde yer alan alıntılar tırnak içinde ve/veya eğik (italik) olarak yazılabilir." , " D) Metin içerisinde kısaltma kullanılacaksa ilk kullanımdan itibaren kısa şekilde yazılır ve belgenin sonuna kısaltma cetveli eklenir." , " E)	Paragraflar arasında bir satır boşluk bırakılır."],
  dogruCevap: "Metin içinde yer alan alıntılar tırnak içinde ve/veya eğik (italik) olarak yazılabilir."},

 {//3
  metin: " Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre, 'sayı' ile ilgili aşağıdakilerden hangisi doğrudur?",
  secenekler: ["A) Aynı kurumda hazırlanmış bazı belgeler aynı sayıya sahip olabilirler." , "B) Kayıt numarası, belge hazırlanırken EBYS üzerinden alınır." , " C) Sayıyı oluşturan harf ve rakamların arasına alt tireişareti konur." , " D) Sayıda en sona standart dosya planı kodu yazılır." , "E) 'Sayı:' yan başlığı, başlığın son satırından itibaren bir satır boşluk bırakılarak yazılır."],
  dogruCevap: "Kayıt numarası, belge hazırlanırken EBYS üzerinden alınır."}

  ,// 2023 YILI
    {//4 *
    metin: "1. Aşağıdakilerden hangisi T.C. Anayasası'nın  'kanun önünde eşitlik' hükmü kapsamında değildir?", 
  secenekler: ["  A)	Kadınlar ve erkekler eşit haklara sahiptir. Devlet, bu eşitliğin yaşama geçmesini sağlamakla yükümlüdür." , "  B) Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz." , "   C)	Çocuklar, yaşlılar, özürlüler, harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gaziler için alınacak tedbirler eşitlik ilkesine aykırı sayılmaz." , "  D)	Hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamaz." , " E)	Devlet organları ve idare makamları bütün işlemlerinde kanun önünde eşitlik ilkesine uygun olarak hareket etmek zorundadırlar." ],
  dogruCevap: "B)	Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz."},
      {//5 * 
  metin: "   2. T.C. Anayasası'na göre, aşağıdakilerden hangisi sosyal ve ekonomik haklar ve ödevler dendir?",
  secenekler: ["A) Konut hakkı" , " B) Mülkiyet hakkı" , " C)	Zorla çalıştırma yasağı" , " D)	Konut dokunulmazlığı" , " E) Vergi ödevi"], 
  dogruCevap: "A)	Konut hakkı diğerleri ise kişi hak ve ödevleri ve siyasi hak ve ödevlerle ilgili "}, 
  {//6 *
    metin: "1. Aşağıdakilerden hangisi T.C. Anayasası'nın 'kanun önünde eşitlik' hükmü kapsamında değildir?",
    secenekler: [" A)	Kadınlar ve erkekler eşit haklara sahiptir.  Devlet, bu eşitliğin yaşama geçmesini sağlamakla yükümlüdür." , " B)	Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz." , " C)	Çocuklar, yaşlılar, özürlüler, harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gaziler için alınacak tedbirler eşitlik ilkesine aykırı sayılmaz." , " D)	Hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamaz." , " E)	Devlet organları ve idare makamları bütün işlemlerinde kanun önünde eşitlik ilkesine uygun olarak hareket etmek zorundadırlar."],
    dogruCevap: "B)	Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz."}

,
  {//7 * 
    metin: " 2. T.C. Anayasası'na göre, aşağıdakilerden hangisi sosyal ve ekonomik haklar ve ödevler dendir?",
    secenekler: ["A) Konut hakkı" , " B) Mülkiyet hakkı" , " C)	Zorla çalıştırma yasağı" , " D)	Konut dokunulmazlığı" , " E) Vergi ödevi"],   
    dogruCevap: "A)	Konut hakkı"}

,
  {//8 * 
    metin: "3. T.C. Anayasası'nda 'Hiç kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz.' hükmü hangi başlık altında düzenlenmiştir?",
    secenekler: ["A) Hak arama hürriyeti" , " B) Suç ve cezalara ilişkin esaslar" , " C)	Yargı yetkisi" , "D) Kanuni hâkim güvencesi" , " E) Duruşmaların açık ve kararların gerekçeli olması"],
    dogruCevap: "D)	Kanuni hâkim güvencesi"}

,
  {//9 * 
    metin: " 4. T.C. Anayasası'na göre, 'temel haklar ve ödevler' ile ilgili aşağıdakilerden hangisi yanlıştır?",
    secenekler: [" A) Herkes, kişiliğine bağlı, dokunulmaz, devredilmez, vazgeçilmez temel hak ve hürriyetlere sahiptir." , " B) Türkiye Cumhuriyetimde temel hak ve ödevler yalnızca Türk vatandaşları için tanınır." , " C) Temel hak ve hürriyetler, kişinin topluma, ailesine ve diğer kişilere karşı ödev ve sorumluluklarını da ihtiva eder." , " D)	Anayasa hükümlerinden hiçbiri, Devlet'e veya kişilere, Anayasa'yla tanınan temel hak ve hürriyetlerin yok edilmesini veya Anayasa'da belirtilenden daha geniş şekilde sınırlandırılmasını amaçlayan bir faaliyette bulunmayı mümkün kılacak şekilde yorumlanamaz." , " E) Anayasa'da yer alan hak ve hürriyetlerden hiçbiri, Devletin ülkesi ve milletiyle bölünmez bütünlüğünü bozmayı ve insan haklarına dayanan demokratik ve laik Cumhuriyeti ortadan kaldırmayı amaçlayan faaliyetler biçiminde kullanılamaz."],
    dogruCevap: "B) Türkiye Cumhuriyetimde temel hak ve ödevler yalnızca Türk vatandaşları için tanınır."}

,
  {//10 * 
  metin: " 5. T.C. Anayasası'na göre, 'yasama' ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A) Türkiye Büyük Millet Meclisi ve Cumhurbaşkanlığı seçimleri beş yılda bir aynı günde yapılır." , "  B) Savaş sebebiyle yeni seçimlerin yapılmasına imkân görülmezse, Türkiye Büyük Millet Meclisi, seçimlerin bir yıl geriye bırakılmasına karar verebilir." , "  C)	Yüksek Seçim Kurulunun ve diğer seçim kurullarının görev ve yetkileri yönetmelikle düzenlenir." , " D)	Seçimler, yargı organlarının genel yönetim ve denetimi altında yapılır." , " E)	Türkiye Büyük Millet Meclisi üyeleri, seçildikleri bölgeyi veya kendilerini seçenleri değil, bütün Milleti temsil ederler."],
  dogruCevap: "C) Yüksek Seçim Kurulunun ve diğer seçim kurullarının görev ve yetkileri yönetmelikle düzenlenir."}

,
  {//11 * 
metin: " 6. T.C. Anayasası'na göre, Cumhurbaşkanı yardımcıları ve bakanlar ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Cumhurbaşkanı yardımcıları ve bakanlar, milletvekili seçilme yeterliliğine sahip olanlar arasından Cumhurbaşkanı tarafından atanır ve görevden alınır." , " B)	Cumhurbaşkanı yardımcıları ve bakanlar, Cumhurbaşkanına karşı sorumludur." , " C)	Cumhurbaşkanı yardımcıları ve bakanlar, Anayasa'da belirtilen şekilde Türkiye" , " Büyük Millet Meclisi önünde ant içerler." , " D) Yüce Divanda seçilmeye engel bir suçtan mahkûm edilen Cumhurbaşkanı yardımcısı veya bakanın görevi sona erer." , " E)	Cumhurbaşkanı yardımcıları ve bakanlar, görevleriyle ilgili suçlarda yasama dokunulmazlığına ilişkin hükümlerden yararlanır."],
dogruCevap: "E)	Cumhurbaşkanı yardımcıları ve bakanlar, görevleriyle ilgili suçlarda yasama dokunulmazlığına ilişkin hükümlerden yararlanır."}


,
  {//12 * 
metin: " 7. T.C. Anayasası'na göre, Millî Güvenlik Kurulun da aşağıdakilerden hangisi yer almaz?",
secenekler: [" A) Jandarma Genel Komutanı" , "B)	Genelkurmay Başkanı" , " C)	Kara, Deniz ve Hava Kuvvetleri Komutanları" , " D) Millî Savunma Bakanı" , " E)	İçişleri Bakanı"],
dogruCevap: "A) Jandarma Genel Komutanı"}

,
  {//13 * 
metin: " 8. T.C. Anayasası'na göre, 'Cumhurbaşkanlığı kararnameleri'  ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Anayasalın ikinci kısmının birinci ve ikinci bölümlerinde yer alan temel haklar, kişi hakları ve ödevleriyle dördüncü bölümde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı kararnamesiyle düzenlenir." , " B)	Cumhurbaşkanlığı kararnamesiyle kamu tüzel kişiliği kurulamaz." , " C) Kanunda açıkça düzenlenen konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz." , " D) Cumhurbaşkanlığı kararnamesi ile kanunlarda farklı hükümler bulunması hâlinde, Cumhurbaşkanlığı kararnamesi hükümleri uygulanır." , " E)	Yürütme yetkisine ilişkin konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz."],
dogruCevap: "C) Kanunda açıkça düzenlenen konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz."}

,
  {//14 * 
metin: " 9. T.C. Anayasası'na göre, Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları en geç kaç gün içinde yayımlar?",
secenekler: ["A) Beş" , " B) Yedi" , " C) On" , " D)	On beş" , " E)	Otuz"],
dogruCevap: "D)	On beş"}

,
  {//15 * 
metin: " 10. T.C. Anayasası'na göre, 'hâkimlik ve savcılık mesleği' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Hâkimler ve savcılar idari görevleri yönünden Hâkimler ve Savcılar Kuruluna bağlıdırlar." , "  B) Hâkimler ve savcılar altmış beş yaşını bitirinceye kadar hizmet görürler; askerî hâkimlerin yaş haddi, yükselme ve emeklilikleri kanunda gösterilir." , " C)	Hâkimler ve savcılar, kanunda belirtilenlerden başka, resmî ve özel hiçbir görev alamazlar." , " D)	Hâkimler, mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre görev ifa ederler." , " E)	Hâkimler ve savcılar adli ve idari yargı hâkim ve savcıları olarak görev yaparlar."],
dogruCevap: "A) Hâkimler ve savcılar idari görevleri yönünden Hâkimler ve Savcılar Kuruluna bağlıdırlar."}

,
  {//16 *
metin: " 11. Aşağıdakilerden hangisi I. Dünya Savaşı'ndan sonra İngilizlerin manda yönetimi kurduğu yerlerden değildir?",
secenekler: [" A) Irak" , "  B) Filistin" , "C) Lübnan" , "D)	Ürdün" , "E)	Yemen"],
dogruCevap: "C)Lübnan"}

,
  {//17 *
metin: " 12. Aşağıdakilerden hangisi Lozan Barış Konferansına yalnızca Boğazlarla ilgili konuların görüşülmesi sırasında katılan devletlerdendir?",
secenekler: [" A) Romanya" , " B) Yunanistan" , " C)	Bulgaristan" , " D)	Yugoslavya" , " E)	İtalya"],
dogruCevap: "C) Bulgaristan"}

,
  {//18 *
metin: " 13. Aşağıdakilerden hangisi I. Türkiye Büyük Millet Meclisinde oluşan gruplardan değildir?",
secenekler: [" A) Islahat" , " B) İstiklâl" , "C) Tesanüt" , " D)	Hürriyet ve İtilaf" , "  E) Müdafaa-i Hukuk"],
dogruCevap: "D) Hürriyet ve İtilaf"}

,
  {//19 *
metin: " 14. Aşağıdakilerden hangisi Türkiye'nin, Almanya ve İtalya'nın 1930'lu yıllardaki saldırgan ve yayılmacı politikaları sonucu yaklaşan II. Dünya Savaşı tehlikesine karşı tedbir almak amacıyla attığı adımlardan değildir?",
secenekler: ["A) Milletler Cemiyetine üye olması" , " B)	Balkan Antantfnı imzalaması" , " C)	Montrö Boğazlar Sözleşmesini imzalaması" , " D)	Sadabat Paktı'na katılması" , " E)	San Francisco Konferansıma katılması"],
dogruCevap: "E) San Francisco Konferansıma katılması"}

,
  {//20 *
metin: " 15. Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, Adalet Bakanlığının taşra teşkilatında kurulan bilgi işlem müdürlüklerindeki bilgi işlem müdürü, şef, bilgisayar işletmeni ve teknisyenler aşağıdakilerden hangisi tarafından atanır?",
secenekler: ["A) Adalet komisyonu" , " B) Adalet Bakanlığı" , " C)	İl Cumhuriyet başsavcısı" , " D)	Bölge adliye mahkemesi başkanı" , " E) Hâkimler ve Savcılar Kurulu"],
dogruCevap: "B)	Adalet Bakanlığı"} 

,
  {//21*
metin: " 16. T.C. Anayasası'na göre, kamu kurumu niteliğindeki meslek kuruluşları ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Kamu tüzel kişiliğine sahip değillerdir." , " B)	Cumhurbaşkanlığı kararnamesi ile kurulabilirler." , " C) Kamu iktisadi teşebbüslerinde asli ve sürekli görevlerde çalışanların meslek kuruluşlarına girme mecburiyeti vardır." , " D) Organlarının seçimlerinde siyasi partiler aday gösterebilirler." , " E) Kuruluş amaçları dışında faaliyette bulunamazlar."],
dogruCevap: "E)	Kuruluş amaçları dışında faaliyette bulunamazlar."}

,
  {//22 * 
metin: " 17. Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, Adalet Bakanlığının yurt dışı teşkilatında yer alan Adalet Müşavirliği kadrolarına atanacak olan kişilerin hâkimlik ve savcılık mesleğinde fiilen en az ne kadar süre görev yapmış olmaları gerekir?",
secenekler: [" A) 1 yıl" , " B) 2 yıl" , " C) 3 yıl" , " D)	5 yıl" , " E)	10 yıl"],
dogruCevap: "D)	5 yıl"}

,
  {//23 *
metin: " 18. Aşağıdakilerden hangisi Cumhurbaşkanlığına bağlı değildir?",
secenekler: [" A) Yükseköğretim Kurulu" , " B) Strateji ve Bütçe Başkanlığı" , " C)	Millî Güvenlik Kurulu Genel Sekreterliği" , " D) Türkiye Varlık Fonu" , " E)	Devlet Arşivleri Başkanlığı"],
dogruCevap: "A) Yükseköğretim Kurulu"}


,
  {//24 * 
metin: " 19.<br> I. Kendi bünyeleri içerisinde mesleki öğretim ve eğitim yapabilirler. <br>  II.	Diğer kamu kurumlarında mesleki öğretim, eğitim ve staj yaptırabilirler.<br> III.	Yurt içindeki öğrenim kurumlarında öğrenci okutabilir ve ihtisas yaptırabilirler.<br> IV.	Dış memleketlerde öğrenci okutabilir ve ihtisas yaptırabilirler.<br> 657 sayılı Devlet Memurları Kanunu'na göre, Devlet memurluğuna eleman yetiştirilmesi ile ilgili verilenlerden hangileri kamu kurumlarının başvurabileceği yöntemler arasında sayılmıştır?",
secenekler: [" A) I ve II" , " B) II ve III" , " C) II ve IV" , " D)	I, III ve IV" , " E)	II, III ve IV"],
dogruCevap: "D) I, III ve IV"}

,
  {//25 *
metin: " 20. 657 sayılı Devlet Memurları Kanunu'na göre, aşağıdakilerden hangisi görevden uzaklaştırmaya yetkili olanlar arasında sayılmamıştır?",
secenekler: [" A) Atamaya yetkili amirler" , " B) Bakanlık ve genel müdürlük müfettişleri" , " C)	İllerde valiler" , " D) İlçelerde kaymakamlar" , " E)	Bucaklarda bucak müdürleri"],
dogruCevap: "E)	Bucaklarda bucak müdürleri"}


,
  {//26 *
metin: " 21. 657 sayılı Devlet Memurları Kanunu'na göre, 'disiplin cezalarına itiraz' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: ["A) İtirazın kabulü hâlinde, disiplin amirleri kararı gözden geçirerek verilen cezayı hafifletebilir veya tamamen kaldırabilirler." , " B)	İtirazda süre, kararın ilgiliye tebliği tarihinden itibaren on beş gündür." , " C) İtiraz mercileri, itiraz dilekçesi ile karar ve eklerinin kendilerine intikalinden itibaren kırk beş gün içinde kararlarını vermek zorundadır." , " D)	Disiplin amirleri tarafından verilen uyarma, kınama ve aylıktan kesme cezalarına karşı yüksek disiplin kuruluna itiraz edilebilir." , "E) Disiplin cezalarına karşı idari yargı yoluna başvurulamaz."],
dogruCevap: "A) İtirazın kabulü hâlinde, disiplin amirleri kararı gözden geçirerek verilen cezayı hafifletebilir veya tamamen kaldırabilirler."}


,
  {//27*
metin: " 22. 657 sayılı Devlet Memurları Kanunu'na göre, 'Devlet memurlarına, yaptıkları hizmetler için lüzumlu bilgilere ve yetişme şartlarına uygun şekilde, sınıfları içinde en yüksek derecelere kadar ilerleme imkânı sağlamaktır.' şeklinde ifade edilen temel ilke aşağıdakilerden hangisidir?",
secenekler: [" A) Eşitlik" , " B) Liyakat" , " C) İstihdam" , " D)	Sınıflandırma" , " E)	Kariyer"],
dogruCevap: "E)	Kariyer"}

,
  {//28*
metin: " 23. 657 sayılı Devlet Memurları Kanunu'na göre, Devlet memurlarının 'ödevler ve sorumlulukları' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Devlet memurları siyasi partilere üye olamazlar." , " B)	Devlet memurları derneklere üye olamazlar." , " C) Devlet memurunun kasıt, kusur, ihmal veya tedbirsizliği sonucu idare zarara uğratılmışsa, bu zararın ilgili memur tarafından rayiç bedeli üzerinden ödenmesi esastır." , " D) Devlet memurları, kamu görevleri hakkında basına, haber ajanslarına veya radyo ve televizyon kurumlarına bilgi veya demeç veremezler. Bu konuda gerekli bilgi ancak bakanın yetkili kılacağı görevli, illerde valiler veya yetkili kılacağı görevli tarafından verilebilir." , " E)	Kişiler kamu hukukuna tabi görevlerle ilgili olarak uğradıkları zararlardan dolayı bu görevleri yerine getiren personel aleyhine değil, ilgili kurum aleyhine dava açarlar."],
dogruCevap: "B) Devlet memurları derneklere üye olamazlar."}

,
  {//29
metin: " 24. Ne hoştur kırlarda yazın uyumak! Bulutlar ufukta beyaz bir yumak, Ağaçlar bir derin hülyaya varmış, Saçında yepyeni teller ağarmış <br>  Bu dizelerde aşağıdaki ses olaylarından han gileri vardır?",
secenekler: [" A) Ünlü daralması - Ünsüz düşmesi" , " B)	Ünlü düşmesi - Ünsüz benzeşmesi" , " C) Ünsüz benzeşmesi - Ünsüz yumuşaması" , " D) Ünsüz düşmesi - Ünsüz yumuşaması" , " E)	Ünlü düşmesi - Ünlü daralması"],
dogruCevap: "C) Ünsüz benzeşmesi - Ünsüz yumuşaması"}


,
  {//30
metin: " 25. Zamanında beyaz olması gereken bir örtüyü sağını solunu silkeleyerek müşterisinin boynunun altından geçiren berber, çatlak cam bir kâsenin içindeki sıcak suyu sabunla köpürttükten sonra, sert kayışa sürterek usturasını biledi  <br> Bu cümlenin öğeleri, aşağıdakilerin hangisinde doğru sırayla verilmiştir?",
secenekler: ["A) Zarf tümleci - Özne - Dolaylı tümleç - Belirtili nesne - Yüklem" , " B)	Özne - Zarf tümleci - Zarf tümleci - Belirtili nesne - Yüklem" , " C)	Belirtili nesne - Özne - Zarf tümleci - Dolaylı tümleç - Yüklem" , " D) Özne - Belirtili nesne - Dolaylı tümleç - Zarf tümleci - Yüklem" , "E) Belirtili nesne - Özne - Dolaylı tümleç - Zarf tümleci - Yüklem"],
dogruCevap: "B) Özne - Zarf tümleci - Zarf tümleci - Belirtili nesne - Yüklem"}

,
  {//31
metin: " 26. Aşağıdaki cümlelerin hangisinde ikileme, farklı bir görevde kullanılmıştır?", 
secenekler: ["A) Yüreğimden bir hüzün, iplik iplik çözülüyor." , " B)	Gök, mavi mavi gülümsüyordu yeşil dallar arasından." , " C) Yarım yamalak bir hayatın tutsağı olmuştuk." , " D) Her akşam eve yorgun argın dönmek istemiyordu." , "E) Dostlarım yanımdan sessizce, birer birer gidiyor."],
dogruCevap: "C) Yarım yamalak bir hayatın tutsağı olmuştuk."}


,
  {//32
metin: " 27. Aşağıdaki cümlelerin hangisinde kullanılan tüm sözcükler basit yapılıdır?",
secenekler: [" A) Eski kışlarda evlerin çoğunda kış erzakı adı altında un, nohut ve fasulye olurdu." , " B) Hayatı iyi karşılamanın sırrını bulabilmek için her şeyden önce gülümsemeyi öğrenmeli." , " C) İnsan bir kere hayatı sevince onun bütün zorluklarına katlanır, hiçbiri ağır gelmez." , " D)	Nezaket, başkalarıyla beraber olduğumuz zaman onların hoşlarına gidecek şeyler yapmamızı gerektirir." , " E) Olgun insanlar, yalnız çocuklara değil herkese affedici, kusura pek aldırmayan bir yüzle bakarlar."],
dogruCevap: "A) Eski kışlarda evlerin çoğunda kış erzakı adı altında un, nohut ve fasulye olurdu."}

,
  {//33
metin: " 28. Aşağıdakilerin hangisinde virgül yanlış kullanılmıştır?",
secenekler: [" A) Çocukken cumartesi akşamlarını iple çekerdim, o akşam televizyonda Yeşilçam filmleri yayımlanır, annem geç yatmamıza izin verirdi." , " B)	Bizi ekran başına kilitleyen o filmler esasen hiç de çocuk dünyasına göre değildi; filmlerin çoğu aşk, acı, ızdırap doluydu." , " C)	'Sevmek Zamanı, Acı Hayat, Devlerin Aşkı, Seven Ne Yapmaz' gibi filmler bizden önceki nesli elde mendil, gözde yaşla sinema salonlarına bağlamıştı." , " D)	Sevgilisini görünce olduğu yere çakılıp kalan, uzun uzun onun gözlerine bakan, kavuşamasa da sevmekten vazgeçmeyen mahcup âşıklar zihnimde yer ederdi." , " E) Muhsin Ertuğrul'un filminde Münir Nurettin'in başrol oynayıp, film müziklerini seslendirmesi ünlü şarkıcıların beyaz perdeye taşınmasının başlangıcı oldu."],
dogruCevap: "E) Muhsin Ertuğrul'un filminde Münir Nurettin'in başrol oynayıp, film müziklerini seslendirmesi ünlü şarkıcıların beyaz perdeye taşınmasının başlangıcı oldu."}


,
  {//34*
metin: " 29. Aşağıdakilerden hangisi halkla ilişkiler kuram larından değildir?",
secenekler: [" A) Sistem Kuramları" , "  B) Kitle İletişim Kuramları" , " C)	Ortamsal Önderlik Kuramı" , " D) Bilgi ve Davranış Kuramları" , " E)	Toplumsal Alışveriş Kuramı"],
dogruCevap: "C) Ortamsal Önderlik Kuramı"}

,
  {//35*
metin: " 30. Aşağıdakilerden hangisi iletişimin etkililiğini arttırmak için birçok araç ve ortamın bir arada kullanıldığı olanaklardan değildir?",
secenekler: [" A) Geziler" , " B) Sergi ve fuar" , " C)	Yarışmalar" , " D)	Toplantı" , " E)	Broşür"],
dogruCevap: "E) Broşür"}


,
  {//36*
metin: "31. Halkla ilişkilerde kullanılan yöntemlerden olan 'telefon iletişimi' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Kurum ya da kuruluş telefonları uzun süre meşgul kalmamalıdır." , " B)	Telefonu yanıtlayan kişi, kurum ya da kuruluşun adını söylemeli ve kendisini tanıtmalıdır." , " C) Telefon edenin, ilgili birimle görüşüp görüşmediği ya da bağlantının kesilip kesilmediği denetlenmelidir." , " D) Yönlendirme süresinin uzaması durumunda arayan kişiye, daha sonra tekrar araması gerektiği söylenmelidir." , " E) Görüşme sırasında yanlış anlaşılabilecek rakamların ve sözcüklerin yinelenmesi (gerektiğinde kodlanması) gerekmektedir."],
dogruCevap: "D) Yönlendirme süresinin uzaması durumunda arayan kişiye, daha sonra tekrar araması gerektiği söylenmelidir."}

,
  {//37 *
metin: " 32. Halkla ilişkiler uygulamalarında izlenecek yol ve yöntemlerden olan dört adım kuralına göre, aşağıdakilerden hangisi bilgi toplama yöntemlerinden değildir?",
secenekler: [" A) Dinleme" , " B) Örnekleme" , " C)	Kitle iletişim araçları" , " D)	Kişisel soruşturmalar" , " E) Anket"],
dogruCevap: "C) Kitle iletişim araçları"}

,
  {//38 *
metin: " 33. 5176 sayılı Kamu Görevlileri Etik Kurulu Kurulması ve Bazı Kanunlarda Değişiklik Yapılması Hakkında Kanun'a göre, 'Kamu Görevlileri Etik Kurulunun oluşturulması' ile ilgili aşağıdaki-lerden hangisi yanlıştır?",
secenekler: ["A) Yargıtay, Danıştay, Sayıştay üyeleri arasından iki üye seçilir." , " B)	İl belediye başkanlığı yapmış olanlar arasından bir üye seçilir" , " C)	Bakanlık görevi yapmış olanlar arasından bir üye seçilir." , " D) Kamu kurumu niteliğinde meslek kuruluşlarında en üst kademe yöneticiliği yapmış olanlar arasından bir üye seçilir." , " E)	Üniversitelerde rektörlük veya dekanlık görevlerinde bulunmuş öğretim üyeleri veya bunların emeklileri arasından iki üye seçilir."],
dogruCevap: "A) Yargıtay, Danıştay, Sayıştay üyeleri arasından iki üye seçilir."}


,
  {//39 *
metin: " 34. Aşağıdakilerden hangisi Kamu Görevlileri Etik  Davranış İlkeleri ile Başvuru Usul ve Esasları Hakkında Yönetmelik'in amaçları arasında değildir?",
secenekler: [" A) Kamuda etik kültürünü geliştirmek" , " B)	Kamu görevlileri etik davranış ilkelerini belirlemek" , " C) Toplumu kamu görevlilerinden bekleyecekleri davranışlar konusunda bilgilendirmek" , " D) Kurula başvuru usul ve esaslarını düzenlemek" , "E)	Etik davranış ilkelerine uymayan kamu görevlilerinin tamamına yaptırım uygulamak"],
dogruCevap: "E) Etik davranış ilkelerine uymayan kamu görevlilerinin tamamına yaptırım uygulamak"}


,
  {//40 * 
metin: " 35. Kamu görevlisinin tarafsızlığını, performansını, kararını veya görevini yapmasını etkileyen veya etkileme ihtimali bulunan, ekonomik değeri olan ya da olmayan, doğrudan ya da dolaylı olarak kabul edilen her türlü eşya ve menfaat hangi kapsamda kabul edilmektedir? ",
secenekler: ["A) Bahşiş" , " B) Hediye" , " C) Ücret" , " D)	Maaş" , " E) 	Yan ödeme"],
dogruCevap: "B) Hediye"}

,
  {//41 *
metin: " 36. Mesleki etik ilkelerin geliştirilmesinin yararları ile ilgili aşağıdakilerden hangisi yanlıştır? ",
secenekler: [" A) Yönetici ya da patronların otokratik gücünü artırır." , " B)	Belirsiz durumlarda nasıl davranılacağı konusunda rehberlik eder." , " C)	Meslektaş baskısı sağlayarak bireyleri etik davranış göstermeye motive eder." , " D) Örgütlerin toplumsal sorumluluklarını tanımlar." , " E) Örgütün ya da mesleğin çıkarlarına hizmet eder."],
dogruCevap: "A) Yönetici ya da patronların otokratik gücünü artırır."}

,
  {//42 *
metin: " 37.<br> • Bakanlığa gönderilen kanun teklifleri hakkında görüş bildirmek <br> •	Yazılı olmayan hukuk kuralları ile örf ve adetleri ve eski hukuk kaynaklarını araştırmak, toplamak ve yayımlamak    <br> •	Bakanlığın görev ve yetkisine giren konularla ilgili istatistiki bilgilerin belirlenmesi, toplanması, sınıflandırılması ve değerlendirilmesi ile ilgili hizmetleri yürütmek <br>  •	Ceza muhakemesinde ön ödeme, uzlaştırma ve kamu davasının açılmasının ertelenmesi gibi alternatif uyuşmazlık çözüm usullerinin geliştirilmesi ve etkin şekilde uygulanmasını sağlamak  <br> Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, verilen görev ve yetkiler Adalet Bakanlığının aşağıdaki hizmet birimleri ile eşleştirildiğinde hangisi dışta kalır?",
secenekler: [" A)  Eğitim Dairesi Başkanlığı " , " B)	Mevzuat Genel Müdürlüğü" , " C)	Ceza İşleri Genel Müdürlüğü" , " D) Bilgi İşlem Genel Müdürlüğü" , " E)	Adli Sicil ve İstatistik Genel Müdürlüğü"],
dogruCevap: "D) Bilgi İşlem Genel Müdürlüğü"}

,
  {//43 *
metin: " 38. 5235 sayılı Adlî Yargı İlk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Görev ve Yetkileri Hakkında Kanun'a göre, 'bölge adliye mahkemesine gelen ceza davalarına ilişkin hüküm ve kararlara ait dosyaların duruşmalarına katılmayı sağlamak' görevi aşağıdakilerden hangisine aittir?",
secenekler: [" A) Bölge adliye mahkemesi başkanına" , " B)	Cumhuriyet başsavcısına" , " C)	Daire başkanlarına" , " D) Hukuk dairelerine" , " E) Ceza dairelerine"],
dogruCevap: "B) Cumhuriyet başsavcısına"}

,
  {//44 *
metin: " 39. 5070 sayılı Elektronik İmza Kanunu'na göre, 'elektronik mühür' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Elektronik mühür, resmî mühür dâhil her türlü fiziki mühür ile aynı hukuki niteliği haizdir." , "  B) Elektronik mühür, elektronik belgenin veya verinin mühür sahibi tarafından oluşturulduğunu, belgenin veya verinin kaynağını ve bütünlüğünü garanti eden delil kaydıdır." , " C) Elektronik mühür, başka bir elektronik veriye eklenen veya elektronik veriyle mantıksal bağlantısı bulunan ve mühür sahibinin bilgilerini doğrulama amacıyla kullanılan elektronik veridir." , "  D) İzinsiz elde edilen mühür oluşturma araçlarını kullanarak izinsiz elektronik mühür oluşturanlar üç yıldan beş yıla kadar hapis ve doksan günden az olmamak üzere adli para cezasıyla cezalandırılırlar." , " E) Elektronik mühür sahibi; elektronik mührü oluşturan kamu kurum ve kuruluşları, kamu idareleri, kamu kurumu niteliğindeki meslek kuruluşları ve üst kuruluşları, kamu ve özel hukuk tüzel kişileri ile yargı mercileri ve noterliklerdir."],
dogruCevap: "D) İzinsiz elde edilen mühür oluşturma araçlarını kullanarak izinsiz elektronik mühür oluşturanlar üç yıldan beş yıla kadar hapis ve doksan günden az olmamak üzere adli para cezasıyla cezalandırılırlar."}

,
  {//45 * 
metin: "40. 5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, 'bütçelerin uygulama esasları' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Kamu idareleri, bütçelerinde yer alan ödeneklerin üzerinde harcama yapamaz." , " B) Bütçeyle verilen ödenekler, tahsis edildikleri amaçlar doğrultusunda yılı içinde yaptırılan iş, satın alınan mal ve hizmetler ile diğer giderlerin karşılanmasında kullanılır." , " C)	Geçen yıllar borçları ile ilama bağlı borçlardan yılı içinde ödenmeyenler ilgili kamu idaresinin geçmiş yıl bütçesindeki ödeneklerden karşılanır." , " D) Merkezî yönetim kapsamındaki kamu idarelerinin bütçeleri arasındaki ödenek aktarmaları kanunla yapılır." , " E)	Cari yılda kullanılmayan ödenekler yıl sonunda iotal edilir."],
dogruCevap: "C) Geçen yıllar borçları ile ilama bağlı borçlardan yılı içinde ödenmeyenler ilgili kamu idaresinin geçmiş yıl bütçesindeki ödeneklerden karşılanır."}

,
  {//46 * 
metin: " 41. Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, aşağıdakilerden hangisi Adalet Bakanlığının görev ve yetkilerinden değildir?",
secenekler: [" A) İcra ve iflas daireleri vasıtasıyla, icra ve iflas iş ve işlemlerini yürütmek" , " B) Ulusal veya uluslararası düzeyde bilimsel toplantılar düzenlemek, bu nitelikteki çalışmaları teşvik etmek ve desteklemek" , " C) Bir mahkemenin kaldırılması veya yargı çevresinin değiştirilmesi konularında Hâkimler ve Savcılar Kuruluna teklifte bulunmak" , " D)	Uluslararası hukukun ve uluslararası hukuk içtihadının gelişimine yönelik süreçleri takip etmek ve bu süreçlere iştirak etmek" , " E) Bakanlıklarca gönderilen mevzuat taslaklarının Türk hukuk sistemine ve mevzuat tekniğine uygunluğunu incelemek ve bu konularda görüş bildirmek"],
dogruCevap: "D) Uluslararası hukukun ve uluslararası hukuk içtihadının gelişimine yönelik süreçleri takip etmek ve bu süreçlere iştirak etmek"}

,
  {//47 *
metin: " 42. Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, aşağıdakilerden hangisi Adalet Bakanlığı Mevzuat Genel Müdürlüğünün görev ve yetkilerindendir?",
secenekler: [" A) Adli konulara ilişkin kanunlarla ilgili inceleme ve araştırma yapmak, önerilerde bulunmak" , " B) Adalet Bakanı'na veya Adalet Bakanlığına mevzuatla verilen cezai işlerle ilgili işlemleri yürütmek" , " C) Mevzuatın Adalet Bakanlığına verdiği soruşturma, kovuşturma ve disiplin işlemlerini yürütmek" , " D) 7/6/2012 tarihli ve 6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu'nda verilen görevleri yapmak" , " E)	13/1/2011 tarihli ve 6102 sayılı Türk Ticaret Kanunu ve bu Kanun'a dayanılarak çıkarılan mevzuatın Bakanlıkça yapılması gereken  işlemleri yürütmek "],
dogruCevap: "A) Adli konulara ilişkin kanunlarla ilgili inceleme ve araştırma yapmak, önerilerde bulunmak"}

,
  {//48 * 
metin: " 43. Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, aşağıdakilerden hangisi Adalet Bakanlığı Personel Genel Müdürlüğüne ait görev ve yetkilerden değildir?",
secenekler: [" A) Mahkemelerin kurulmasına, kaldırılmasına ve yargı alanlarının değiştirilmesine ilişkin işlemleri yürütmek" , " B) Hâkim ve savcıların, eğitim, çalışma ziyareti veya benzeri amaçlarla yurt dışında görevlendirilmesi işlemlerini yapmak" , " C)	Bakanlık merkez ve taşra teşkilatında görev yapan hâkim ve savcıların eğitim, çalışma ziyareti veya benzeri amaçlarla yurt içinde görevlendirme işlemleri ile izin işlemlerini yerine getirmek" , "  D)	Ceza Muhakemesi Kanunu uyarınca uzlaştırmacıların eğitimi, sınavı, sicile kaydı, çalışma usul ve esasları, denetim ve performansları ile uzlaştırma kurumuna ilişkin gerekli diğer iş ve işlemleri yürütmek" , " E)	Adli ve idari yargı hâkim ve savcı adaylığına ilişkin; sınav, mülâkat, adaylığa atama, geçici görevlendirme, nakil, izin, göreve son verme gibi özlük işlemleri ile staj plan ve programlarına ilişkin işlemleri yapmak."],
dogruCevap: "D) Ceza Muhakemesi Kanunu uyarınca uzlaştırmacıların eğitimi, sınavı, sicile kaydı, çalışma usul ve esasları, denetim ve performansları ile uzlaştırma kurumuna ilişkin gerekli diğer iş ve işlemleri yürütmek"}

,
  {//49 * 
metin: " 44. Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, aşa-ğıdakilerden hangisi Adalet Bakanlığı İnsan Hakları Dairesi Başkanlığının görev ve yetkilerinden değildir?",
secenekler: [" A) Gerektiğinde dostane çözüm ve tek taraflı deklarasyon yöntemlerini kullanmak" , " B) Rücu hususunun değerlendirilmesi amacıyla ilgili kurum ve kuruluşlara bildirimde bulunmak" , " C) Görev alanına giren hususlarda insan hakları ihlallerinin ortadan kaldırılmasına yönelik çalış malar yapmak" , " D) Anayasa Mahkemesi tarafından Bakanlığa gönderilen bireysel başvurular hakkında gerekli görülen hâllerde Bakanlık görüşünü bildirmek" , " E)	Çevre, insan hakları, göç, iltica, insan ticareti ve insani yardımlar ile küresel boyut taşıyan diğer konularda politika ve hareket tarzlarının belirlenmesi için gerekli çalışmaları yapmak"],
dogruCevap: "E) Çevre, insan hakları, göç, iltica, insan ticareti ve insani yardımlar ile küresel boyut taşıyan diğer konularda politika ve hareket tarzlarının belirlenmesi için gerekli çalışmaları yapmak"}

,
  {//50 * 
metin: " 45. Cumhurbaşkanlığı Teşkilatı Hakkında 1 Sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, aşağıdakilerden hangisi Adalet Bakanlığı Adli Destek ve Mağdur Hizmetleri Dairesi Başkanlığının görev ve yetkilerindendir?",
secenekler: [" A) Sosyal tesislerin kurulması ve yönetimi ile ilgili hizmetleri yapmak" , " B)	Adli süreçte tanıklara yönelik hizmetlerin geliştirilmesine ve uygulanmasına ilişkin faaliyetleri yürütmek" , " C) Görev alanına giren konularda velayet ve vesayetin kaldırılması ve küçüklere vasi tayinine dair işlemleri takip etmek" , " D) Cezaları infaz edilen hükümlülerin işe yerleştirilmeleri konusunda, infaz sonrası yardım müesseseleri ve diğer kurumlarla iş birliği yapmak" , " E)	İnsan hakları konusunda ilgili kurum ve kuruluşlar ile iş birliği hâlinde projeler hazırlamak, ulusal ve uluslararası sempozyum, seminer ve eğitim faaliyetleri düzenlemek"],
dogruCevap: "B) Adli süreçte tanıklara yönelik hizmetlerin geliştirilmesine ve uygulanmasına ilişkin faaliyetleri yürütmek"}

,
  {//51 *
metin: " 46. 128/1 sayılı Adalet Bakanlığı İdari ve Mali İşler Dairesi Başkanlığı Arşiv Hizmetleri Konulu Genelgesi'ne göre; merkezdeki birimler için kurumlar arası yazışmalar, birim arşivinde kaç yıl saklanır?",
secenekler: ["A) 5" , " B) 10" , " C) 15 " , "D) 20" , " E) 25"],
dogruCevap: "A) 5"}

,
  {//52 *
metin: "47. 128/1 sayılı Adalet Bakanlığı İdari ve Mali İşler Dairesi Başkanlığı Arşiv Hizmetleri Konulu Genelgesi'ne göre, merkezdeki birimler için birimden çıkan genelgelerin kurum arşivinde saklanma süresi kaç yıldır?",
secenekler: [" A) 3" , " B) 5 " , "C) 7 " , " D) 13 " , " E) 15"],
dogruCevap: " D) 13"}

,
  {//53 *
metin: " 48. 79 sayılı Adalet Bakanlığı Personel Genel Müdürlüğü Resmî Yazışma ve Tebligat İşlemlerinde Uyulması Gereken Esaslar Konulu Genelgesi'ne göre, 'hâkim, Cumhuriyet savcısı ve ataması Adalet Bakanlığınca yapılan diğer personele ilişkin atama, tayin, terfi, müstemir yetki kararlarıyla Hâkimler ve Savcılar Kurulunun diğer kararlarının ivedilikle ilgililere tebliği ile ilgili belgelerin geciktirilmeden' aşağıdakilerden hangisine gönderilmesi gerekir?",
secenekler: [" A) Eğitim Dairesi Başkanlığı" , " B)	Personel Genel Müdürlüğü" , " C)	Bilgi İşlem Genel Müdürlüğü" , " D) İnsan Hakları Dairesi Başkanlığı" , " E)	Adli Sicil ve İstatistik Genel Müdürlüğü"],
dogruCevap: "B) Personel Genel Müdürlüğü"}

,
  {//54*
metin: " 49. 124/1 sayılı Adalet Bakanlığı Bilgi İşlem Dairesi Başkanlığı UYAP Uygulamaları Konulu Genelgesi'ne göre, 'UYAP Bilişim Sistemi kullanılarak soruşturma ve kovuşturma işlemleri ile diğer adli ve idari işlemlerin etkin, verimli, hızlı, düzenli, şeffaf ve usul ekonomisine uygun biçimde yürütülmesi amacıyla istenenler' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) UYAP üzerinden sağlanan; nüfus, adres, tapu, sabıka kaydı, yurt dışı adres bilgisi gibi, bilgi ve belgelerin temini için ayrıca fiziki yazışma yapılmaması" , " B)	UYAP'ın geliştirilmesi ve uygulama birliğinin sağlanması açısından öneri ve değişiklik taleplerinin UYAP birim sorumluları vasıtasıyla Hâkimler ve Savcılar Kuruluna bildirilmesi" , " C)	Yargı birimleri tarafından yapılan ilanların ayrıca UYAP sisteminde yer alan elektronik ilan sistemine aktarılması" , " D) UYAP ortamında düzenlenen her türlü belge ve kararın güvenli elektronik imza kullanılmak suretiyle imzalanması" , " E) Güvenli elektronik imza ile imzalanarak UYAP üzerinden gönderilen belgelerin, ayrıca elle atılan imza ile imzalanmış aslının istenmemesi"],
dogruCevap: "B) UYAP'ın geliştirilmesi ve uygulama birliğinin sağlanması açısından öneri ve değişiklik taleplerinin UYAP birim sorumluları vasıtasıyla Hâkimler ve Savcılar Kuruluna bildirilmesi"}


,
  {//55*
metin: "50. 154/2 sayılı Adalet Bakanlığı Adli Destek ve Mağdur Hizmetleri Dairesi Başkanlığı Aile İçi ve Kadına Karşı Şiddetin Önlenmesi Konulu Genelgesi'ne göre, 'vekili bulunmaması hâlinde; alt sınırı kaç yıldan fazla hapis cezasını gerektiren suçlarda, baro tarafından kendisine avukat görevlendirilmesini isteme hakkı bulunduğunun mağdura ve şikâyetçiye hatırlatılması' gerekir?",
secenekler: [" A) Bir" , "  B) İki" , " C) Üç" , "  D)	Dört" , "E)	Beş"],
dogruCevap: "E) Beş"}


,
  {//56*
metin: "51.  T.C. Anayasası'na göre, Anayasa Mahkemesinin 'çalışma ve yargılama usulü' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Genel Kurul, Mahkeme Başkanının veya Başkanın belirleyeceği başkanvekilinin başkanlığında en az on iki üye ile toplanır." , " B)	Anayasa değişikliğinde iptale karar verilebilmesi için üye tam sayısının salt çoğunluğunun oyu şarttır." , " C)	Mahkemenin çalışma esasları, bölüm ve komisyonların oluşumu ve iş bölümü yönetmelikle düzenlenir." , " D)	Yüce Divan sıfatıyla yürütülecek yargılamalara bölümlerce bakılır, bireysel başvurular ise Genel Kurulca karara bağlanır." , " E) Mahkeme, gerekli gördüğü hâllerde sözlü açıklamalarını dinlemek üzere ilgilileri ve konu üzerinde bilgisi olanları çağırabilir."],
dogruCevap: "E) Mahkeme, gerekli gördüğü hâllerde sözlü açıklamalarını dinlemek üzere ilgilileri ve konu üzerinde bilgisi olanları çağırabilir."}



,
  {//57*
metin: "52. 5235 sayılı Adli Yargı İlk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Görev ve Yetkileri Hakkında Kanun'a göre, aşa-ğıdakilerden hangisi bölge adliye mahkemesi Cumhuriyet savcılarının görevlerindendir?",
secenekler: [" A) Bölge adliye mahkemesi memurlarını denetlemek veya denetletmek, personelden kendisine doğrudan bağlı olanlar hakkında ilgili kanunda belirtilen disiplin cezalarını " , " B)	Adli yargı ilk derece ceza mahkemelerince verilen ve kesin olmayan hüküm ve kararlara karşı yapılacak başvuruları inceleyip karara bağlamak" , " C)	Mahkemenin uyumlu, verimli ve düzenli çalışmasını sağlamak, genel yönetim işlerini yürütmek ve bu yolda uygun göreceği önlemleri almak" , " D) Bölge adliye mahkemesine gelen ceza davalarına ilişkin hüküm ve kararlara ait dosyaların duruşmalarına katılmak" , " E) Yargı çevresi içerisinde bulunan adli yargı ilk derece hukuk mahkemeleri arasındaki yetki ve görev uyuşmazlıklarını çözmek"],
dogruCevap: "D) Bölge adliye mahkemesine gelen ceza davalarına ilişkin hüküm ve kararlara ait dosyaların duruşmalarına katılmak"}


,
  {//58 *
metin: "53. 2576 sayılı Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin Kuruluşu ve Görevleri Hakkında Kanun'a göre, aşa-ğıdakilerden hangisi bölge idare mahkemesi başkanının görevlerinden değildir?",
secenekler: [" A) Dairelerin benzer olaylarda kesin olarak verdikleri kararlar arasındaki uyuşmazlığın giderilmesi için başkanlar kuruluna başvurmak" , " B)	Bölge idare mahkemesi memurlarını denetlemek veya denetletmek, personelden kendisine doğrudan bağlı olanlar hakkında ilgili kanunda belirtilen disiplin cezalarını uygulamak" , " C)	Personelin özlük işlemlerinin yürütülmesini sağlamak ve izin isteklerini düşünceleriyle birlikte adalet komisyonuna aktarmak" , " D) Mahkemenin uyumlu, verimli ve düzenli çalışmasını sağlamak ve bu yolda uygun göreceği önlemleri almak" , " E) Bölge idare mahkemesi başkanlar kuruluna ve adalet komisyonuna başkanlık etmek, alınan kararları yürütmek"],
dogruCevap: "C) Personelin özlük işlemlerinin yürütülmesini sağlamak ve izin isteklerini düşünceleriyle birlikte adalet komisyonuna aktarmak"}


,
  {//59 * 
metin: "54. 2802 sayılı Hâkimler ve Savcılar Kanunu'na göre, 'herhangi bir nedenle görevine gelemeyen hâkimin yerine, bu hâkim görevine başlayıncaya veya Hâkimler ve Savcılar Kurulunca yetkilendirme yapılıncaya kadar, o yerdeki hâkimler arasından görevlendirme' aşağıdakilerden hangisi tarafından yapılır?",
secenekler: [" A) Personel genel müdürü" , " B)	Adalet komisyonu başkanı" , " C)	Yargıtay birinci başkanı" , " D) Danıştay başsavcısı" , " E)	Adalet Bakanı"],
dogruCevap: "B) Adalet komisyonu başkanı"}


,
  {//60 * 
metin: "55. 5070 sayılı Elektronik İmza Kanunu'nda, aşağıdakilerden hangisi 'İmza sahibine ait olan, imza sahibi tarafından elektronik imza oluşturma amacıyla kullanılan ve bir eşi daha olmayan şifreler, kriptografik gizli anahtarlar gibi veriler.' şeklinde tanımlanmıştır?",
secenekler: [" A) Elektronik imza" , " B) İmza oluşturma aracı" , " C)	İmza doğrulama aracı" , " D) İmza oluşturma verisi" , " E) İmza doğrulama verisi"],
dogruCevap: "D) İmza oluşturma verisi"}


,
  {//61 *
metin: "56. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, elektronik ortamdan fiziki örnek çıkartılması gereken hâllerde tutanak veya belgenin aslının aynı olduğu belirtilerek aşağıdakilerden hangisi tarafından imzalanır ve mühürlenir?",
secenekler: [" A) Hâkim" , " B) Cumhuriyet savcısı" , " C)	İdari işler müdürü" , " D)	Hukuk işleri genel müdürü" , " E) Zabıt kâtibi"],
dogruCevap: "A) Hâkim"}


,
  {//62 *
metin: "57. 5271 sayılı Ceza Muhakemesi Kanunu'na göre, 'elektronik işlemler' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Elektronik ortamda yapılan işlemlerde süre gün sonunda biter." , " B)	Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanır." , " C)	Güvenli elektronik imza ile imzalanan belge ve kararlar diğer kişi veya kurumlara elektronik ortamda gönderilir." , " D)	Her türlü ceza muhakemesi işlemlerinde Ulusal Yargı Ağı Bilişim Sistemi (UYAP) kullanılır." , " E)	Kanunlarda gösterilen istisnalar hariç olmak üzere, dosyalar güvenli elektronik imza kullanılarak UYAP'tan incelenebilir ve her türlü ceza muhakemesi işlemi yapılabilir."],
dogruCevap: "B) Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanır."}


,
  {//63 * 
metin: "58. Bölge Adliye ve Adli Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre, 'UYAP'ın kullanılması' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Fiziki ortamda yapılacak işlemler, ertesi güne sarkmaması açısından saat 00.00'a kadar yapılabilir." , " B) Elektronik ortama aktarılması imkânsız olan belgeler fiziki ortamda saklanır ve gerektiğinde fiziki olarak gönderilir." , "  C)	Teknik nedenlerle fiziki olarak düzenlenen belge veya kararlar, engelin ortadan kalkmasından sonra derhâl elektronik ortama aktarılır." , " D) Gelen evraktan sorumlu personel, UYAP üzerinden birimlere gönderilen ve iş listesine düşen belgeleri derhâl ilgili kişiye ya da doğrudan dosyasına aktarır." , " E)	İhtiyaç duyulan nüfus, tapu, adli sicil kaydı gibi dış bilişim sistemlerinden UYAP vasıtasıyla temin edilen bilgi, belge ve kayıtlar, zorunlu olmadıkça ayrıca fiziki olarak istenilmez."],
dogruCevap: " A) Fiziki ortamda yapılacak işlemler, ertesi güne sarkmaması açısından saat 00.00'a kadar yapılabilir."}


,
  {//64 * 
metin: "59. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre, 'UYAP'ın kullanılması' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Kanunlarda gösterilen istisnalar hariç olmak üzere, dosyalar güvenli elektronik imza kullanılarak UYAP'ta incelenebilir." , " B)	Fiziki olarak gelen ve gönderilen her türlü evrak, elektronik ortama aktarılarak UYAP'a kaydedilir ve ilgili birime gönderilir." , " C)	Başkan, üye, müdür hariç diğer personel, iş listesini günlük olarak kontrol etmek, doğru, eksiksiz ve zamanında UYAP ortamına girmekle yükümlüdür." , " D)	Bölge idare mahkemelerinin tüm birimleri ile idare mahkemeleri ve vergi mahkemelerinin iş süreçlerindeki her türlü veri, bilgi ve belge akışı ile dokümantasyon işlemleri, bu işlemlere ilişkin her türlü kayıt, dosyalama, saklama ve arşivleme işlemleri ile uyum ve iş birliği sağlanmış dış birimlerle yapılacak her türlü işlemler UYAP ortamında gerçekleştirilir." , " E) UYAP üzerinden hazırlanmış ve güvenli elektronik imza ile imzalanmış evrakın dış birimlere elektronik ortamda gönderilememesi hâlinde; belge veya kararın fiziki örneği alınır, güvenli elektronik imza ile imzalanmış aslının aynı olduğu belirtilerek altı; başkan, görevlendirdiği üye veya yazı işleri müdürü tarafından imzalanmak sureti ile gönderilir."],
dogruCevap: "C) Başkan, üye, müdür hariç diğer personel, iş listesini günlük olarak kontrol etmek, doğru, eksiksiz ve zamanında UYAP ortamına girmekle yükümlüdür."}


,
  {//65 * 
metin: "60. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre, aşağıda-kilerden hangisi resmî yazılarda bulunması ön görülen başlık veya yan başlıklardan değildir?",
secenekler: [" A) Bilgi" , " B) Konu" , " C) Vekâlet" , " D)	Dağıtım" , " E)	Ek"],
dogruCevap: "C) Vekâlet"}


,
  {//66*
metin: "61 . Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre, aşağı-dakilerden hangisi elektronik ortamda güvenli elektronik imza ile imzalanan resmî belgelere yazılması zorunlu olan unsurlardan değildir?",
secenekler: [" A) İletişim bilgileri" , " B) ' Bu belge elektronik imza ile imzalanmıştır.' ibaresi" , " C) Karekod" , "D) Belge doğrulama kodu" , " E) Arşiv imza"],
dogruCevap: "E) Arşiv imza"}

,
  {//67*
metin: "62. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre, 'metin' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Metin içinde geçen sayıların parantez içinde harfle de yazılması zorunludur." , "B) Dört ve dörtten çok haneli sayılar sondan sayılmak üzere üçlü gruplara ayrılarak yazılır ve araya virgül (,) işareti konulur." , " C) Metin içinde yer alan alıntılar tırnak içinde ve/veya eğik (italik) olarak yazılabilir." , " D) Metin içerisinde kısaltma kullanılacaksa ilk kullanımdan itibaren kısa şekilde yazılır ve belgenin sonuna kısaltma cetveli eklenir." , " E)	Paragraflar arasında bir satır boşluk bırakılır."],
dogruCevap: "C) Metin içinde yer alan alıntılar tırnak içinde ve/veya eğik (italik) olarak yazılabilir."}


,
  {//68*
metin: "63. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre, 'sayı' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Aynı kurumda hazırlanmış bazı belgeler aynı sayıya sahip olabilirler." , " B)	Kayıt numarası, belge hazırlanırken EBYS üzerinden alınır." , " C)	Sayıyı oluşturan harf ve rakamların arasına alt tireişareti konur." , " D) Sayıda en sona standart dosya planı kodu yazılır." , " E) 'Sayı:' yan başlığı, başlığın son satırından itibaren bir satır boşluk bırakılarak yazılır."],
dogruCevap: "B) Kayıt numarası, belge hazırlanırken EBYS üzerinden alınır."}


,
  {//69*
metin: "64. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre, 'antet' bölümünde aşağıdakilerden hangisi yer alır?",
secenekler: [" A) Belgenin gönderildiği idarenin adı" , " B)	Belgede ilgi kısmına yazılan idarenin adı" , " C) Belgeyi gönderen idarenin adı" , " D)	Belgenin konusu" , " E)	Belgenin hangi ortamda hazırlandığı"],
dogruCevap: "B) Belgede ilgi kısmına yazılan idarenin adı"}


,
  {//70*
metin: "65. 7201 sayılı Tebligat Kanunu'na göre, elektronik tebligat maddesinin uygulanmasına ilişkin usul ve esaslar aşağıdakilerden hangisi ile belirlenir?",
secenekler: [" A) Kanun" , " B) Tüzük" , " C) Tebliğ" , " D)	Yönetmelik" , " E)	Genelge"],
dogruCevap: "D) Yönetmelik"}


,
  {//71*
metin: "66. 7201 sayılı Tebligat Kanunu'na göre, 'tebligat esasları' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Tebliğ olunacak her nevi evrak, biri dosyasında konulmak ve diğeri tebliğ edilecek kimselere verilmek üzere lüzumu kadar nüshadan terekküp eder." , " B)	Vekil birden çok ise her birine tebligat yapılması mecburidir." , " C)	Avukat tarafından takip edilen işlerde, avukatın bürosunda yapılacak tebligatlar, resmî çalışma gün ve saatleri içinde yapılır." , " D)	Hükmi şahıslara tebliğ, salahiyetli mümessillerine, bunlar birden ziyade ise, yalnız birine yapılır." , " E) Mevkuf ve mahkûmlara ait tebliğlerin yapılmasını, bunların bulunduğu müessese müdür veya memuru temin eder."],
dogruCevap: "B) Vekil birden çok ise her birine tebligat yapılması mecburidir."}

,
  {//72*
metin: "67. 7201 sayılı Tebligat Kanunu'na göre, yabancı bir memlekette resmî bir vazife ile bulunan Türk memurlarına tebligat, aşağıdakilerden hangisi vasıtasıyla yapılır?",
secenekler: [" A) İçişleri Bakanlığı" , " B) Adalet Bakanlığı" , " C)	Dışişleri Bakanlığı" , " D)	Cumhurbaşkanlığı" , "  E) Millî Savunma Bakanlığı"],
dogruCevap: "C) Dışişleri Bakanlığı"}


,
  {//73*
metin: "68. Tebligat Kanununun Uygulanmasına Dair Yönetmelik'e göre, 'idari tebligat' ile ilgili aşağı dakilerden hangisi yanlıştır?",
secenekler: [" A) Kazaî ve mali tebligatın dışında kalan tebligat, idari tebligattır." , " B)	Birden fazla kişinin temsilcisine, tebliğ olunacak evrakın ancak bir nüshası verilir." , " C)	Gümrük ve tekel işlerinde, kendi kanunlarının imkân verdiği hâllerde, işlemin yapıldığı yerde hazır bulunan ilgiliye tebligat, bu işle görevli memurlar vasıtasıyla yapılır." , " D)	Evrakı tebellüğ için temsilci tayin ederek merciine bildirmiş olan kişinin kendisine de tebligat yapılır." , " E)	Tapuda kayıtlı taşınmazların veya miras, istimlak, cebrî icra veya mahkeme ilâmıyla iktisapta bulunan hak sahipleri, adreslerini ve değiştirdikleri takdirde yenisini bulundukları yerin tapu idaresine bildirmeye mecburdur."],
dogruCevap: "D) Evrakı tebellüğ için temsilci tayin ederek merciine bildirmiş olan kişinin kendisine de tebligat yapılır."}


,
  {//74*
metin: "69. Tebligat Kanununun Uygulanmasına Dair Yönetmelik'e göre, 'Usulsüz Tebligat, Gece ve Tatil Günlerinde Tebligat' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Muhatap, her ne şekilde olursa olsun tebliğ evrakını veya davetiyeyi alırsa ya da bunların içeriğini öğrenirse tebliği öğrenmiş sayılır." , " B)	Tebliğin usulüne aykırı yapılmış olması hâlinde, muhatabın tebliği öğrendiğinin ve bunun tarihinin iddia ve ispatı mümkün değildir." , " C) Tebliğ, usulüne aykırı yapılmış olsa bile, muhatabı tebliği öğrenmiş ise geçerlidir." , " D)	Muhatabın tebliği öğrendiğini beyan ettiği tarih, tebliğ tarihi olarak kabul edilir." , " E)	Resmî ve adli tatil günlerinde tebligat yapılamaz."],
dogruCevap: "E) Resmî ve adli tatil günlerinde tebligat yapılamaz."}

,
  {//75 * 
metin: "70. Elektronik Tebligat Yönetmeliği'ne göre, elektronik tebligat sisteminin etkin, verimli ve güvenli bir şekilde yürütülmesi için PTT'nin kullanacağı sistemler ve cihazlar hakkındaki teknik kriterlere ilişkin usul ve esaslar aşağıdakilerden hangisi tarafından belirlenir?",
secenekler: ["A) Adalet Bakanlığı" , " B) Ulaştırma ve Altyapı Bakanlığı" , " C)	Hazine ve Maliye Bakanlığı" , " D) Cumhurbaşkanlığı" , " E) TBMM"],
dogruCevap: "A) Adalet Bakanlığı"}


,
  {//76 * 
metin: "71. Tebligatın elektronik yolla yapılması zorunlu olan tüzel kişiler, elektronik tebligat adresiyle ilgili işlemleri yapmak üzere en az----, en fazla---- ana işlem yetkilisi belirleyerek PTT'ye bildirir. <br> Elektronik Tebligat Yönetmeliğine göre, bu hükümde boş bırakılan yerlere aşağıdakiler-den hangisi sırasıyla getirilmelidir?",
secenekler: [" A) 1 - 5" , " B) 1 - 8" , " C) 1 - 10" , " D)	2 - 5" , " E)	2- 10"],
dogruCevap: "C) 1 - 10"}


,
  {//77
metin: "72, 4721 sayılı Türk Medeni Kanunu'na göre, 'hukuki ilişkilerin kapsamı' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz." , " B)	Kanunun iyi niyete hukuki bir sonuç bağladığı durumlarda, asıl olan iyi niyetin varlığıdır." , " C)	Herkes, haklarını kullanırken ve borçlarını yerine getirirken dürüstlük kurallarına uymak zorundadır." , " D) Kanunun takdir yetkisi tanıdığı veya durumun gereklerini ya da haklı sebepleri göz önünde tutmayı emrettiği konularda hâkim, hukuka ve hakkaniyete göre karar verir." , " E)	Kanunun iyi niyete hukuki bir sonuç bağladığı durumlarda, durumun gereklerine göre kendisinden beklenen özeni göstermeyen kimse de iyi niyet iddiasında bulunur."],
dogruCevap: "C) Herkes, haklarını kullanırken ve borçlarını yerine getirirken dürüstlük kurallarına uymak zorundadır."}


,
  {//78*
metin: "72, 4721 sayılı Türk Medeni Kanunu'na göre, 'hukuki ilişkilerin kapsamı' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz." , " B)	Kanunun iyi niyete hukuki bir sonuç bağladığı durumlarda, asıl olan iyi niyetin varlığıdır." , " C)	Herkes, haklarını kullanırken ve borçlarını yerine getirirken dürüstlük kurallarına uymak zorundadır." , " D) Kanunun takdir yetkisi tanıdığı veya durumun gereklerini ya da haklı sebepleri göz önünde tutmayı emrettiği konularda hâkim, hukuka ve hakkaniyete göre karar verir." , " E)	Kanunun iyi niyete hukuki bir sonuç bağladığı durumlarda, durumun gereklerine göre kendisinden beklenen özeni göstermeyen kimse de iyi niyet iddiasında bulunur."],
dogruCevap: "E) Kanunun iyi niyete hukuki bir sonuç bağladığı durumlarda, durumun gereklerine göre kendisinden beklenen özeni göstermeyen kimse de iyi niyet iddiasında bulunur."}

,
  {//79 * 
metin: "73, 4721 sayılı Türk Medeni Kanunu'na göre, 'başlangıç hükümleri' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Kanun, sözüyle ve özüyle değindiği bütün konularda uygulanır." , " B)	Resmî sicil ve senetler, belgeledikleri olguların doğruluğuna kanıt oluşturur." , " C)	Hâkim, karar verirken bilimsel görüşlerden ve yargı kararlarından yararlanır." , " D)	Kanunda aksine bir hüküm bulunmadıkça, taraflardan her biri, hakkını dayandırdığı olguların varlığını ispatla yükümlü değildir." , " E) Resmî sicil ve senetlerin içeriğinin doğru olmadığının ispatı, kanunlarda başka bir hüküm bulunmadıkça, herhangi bir şekle bağlı değildir."],
dogruCevap: "D) Kanunda aksine bir hüküm bulunmadıkça, taraflardan her biri, hakkını dayandırdığı olguların varlığını ispatla yükümlü değildir."}

,
  {//80*
metin: "74, 4721 sayılı Türk Medeni Kanunu'na göre, 'kişisel durum sicili' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Kişisel durum sicilinin tutulmasına ve zorunlu bildirimlerin yapılmasına ilişkin esaslar, ilgili yönetmelikte gösterilir." , " B) Yabancı memleketlerdeki Türkiye temsilcilerine, Dışişleri Bakanlığının onayı ile nüfus memurluğu yetkisi verilebilir." , " C)	Mahkeme kararı olmasa da, isteğe bağlı olarak kişisel durum sicilinin kaydında düzeltme yapılabilir." , " D)	Doğumlara ilişkin bildirimler ve kimliği bilinmeyen bulunmuş çocuklar hakkındaki işlemler ilgili yönetmelik hükümlerine göre yapılır." , " E) Kişisel durum sicilinin tutulmasından doğan zararlar, kusurlu memura rücu edilmek kaydıyla, Devletçe tazmin edilir."],
dogruCevap: "E) Kişisel durum sicilinin tutulmasından doğan zararlar, kusurlu memura rücu edilmek kaydıyla, Devletçe tazmin edilir."}


,
  {//81 * 
metin: "75, 5237 sayılı Türk Ceza Kanunu'na göre, kanunda başka türlü yazılmış olan hâller dışında kamu davası, ağırlaştırılmış müebbet hapis cezasını gerektiren suçlarda kaç yıl geçmesiyle düşer?",
secenekler: [" A) Otuz" , " B) Yirmi beş" , " C) Yirmi" , " D)	On Beş" , " E)	On"],
dogruCevap: "A) Otuz"}

,
  {//82 * 
metin: "76, 2577 sayılı İdari Yargılama Usulü Kanunu'na göre, 'ivedi yargılama usulü' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Temyiz istemi en geç bir ay içinde karara bağlanır." , " B)	Temyiz dilekçelerine cevap verme süresi yirmi gündür." , " C) Temyiz dilekçeleri yedi gün içinde incelenir ve tebliğe çıkarılır." , " D) Yürütmenin durdurulması talebine ilişkin olarak verilecek kararlara itiraz edilebilir." , " E) Verilen nihai kararlara karşı tebliğ tarihinden itibaren on beş gün içinde temyiz yoluna başvurulabilir."],
dogruCevap: "E) Verilen nihai kararlara karşı tebliğ tarihinden itibaren on beş gün içinde temyiz yoluna başvurulabilir."}


,
  {//83 * 
metin: "77. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, 'yetki' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Davalı birden fazla ise; dava, bunlardan birinin yerleşim yeri mahkemesinde açılabilir." , " B) Sözleşmeden doğan davalar, sözleşmenin ifa edileceği yer mahkemesinde de açılabilir." , " C) Genel yetkili mahkeme, davalı gerçek veya tüzel kişinin davanın açıldığı tarihteki yerleşim yeri mahkemesidir." , " D) Mirasçılık belgesinin iptali ve yeni mirasçılık belgesi verilmesine ilişkin davalarda, ölen kimsenin son yerleşim yeri mahkemesi kesin yetkilidir." , " E)	Türkiye'de yerleşim yeri bulunmayanlar hakkında genel yetkili mahkeme, davalının Türkiye'deki mutad meskeninin bulunduğu yer mahkemesidir."],
dogruCevap: "D) Mirasçılık belgesinin iptali ve yeni mirasçılık belgesi verilmesine ilişkin davalarda, ölen kimsenin son yerleşim yeri mahkemesi kesin yetkilidir."}


,
  {//84 * 
metin: " 78. 5271 sayılı Ceza Muhakemesi Kanunu na göre 'görev' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Mahkemelerin görevleri yönetmelikle belirlenir." , " B)	Adli yargı içerisindeki mahkemeler bakımından verilen görevsizlik kararlarına karşı itiraz yoluna gidilemez." , " C)	Duruşmada suçun hukukî niteliğinin değiştiğinden bahisle görevsizlik kararı verilerek dosya alt dereceli mahkemeye gönderilir." , " D) Yenilenmesi mümkün olmayanlar dışında, görevli olmayan hâkim veya mahkemece yapılan işlemler hükümsüzdür." , " E)	Davaya bakan mahkeme, görevli olup olmadığına kovuşturma evresinde re'sen karar veremez."],
dogruCevap: "D) Yenilenmesi mümkün olmayanlar dışında, görevli olmayan hâkim veya mahkemece yapılan işlemler hükümsüzdür."}


,
  {//85 * 
metin: "79, Adalet Bakanlığı Disiplin Yönetmeliği'ne göre, 'disiplin soruşturması usul ve esasları' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Mücbir sebep hâli hariç olmak üzere memurun izinli veya raporlu olması savunma süresini uzatmaz." , " B) Devlet memurluğundan çıkarma cezası almış olan memurlar hakkında disiplin soruşturması yapılmaz." , " C)	Disiplin amiri tarafından disipline aykırı fiil veya hâlin öğrenilmesinden itibaren derhal disiplin soruşturmasına başlanır." , " D)	Disiplin amiri veya muhakkik, disipline aykırı fiilin mağduru veya tanığı olması hâlinde disiplin soruşturmasını yürütemez." , " E) Muhakkik, görevlendirildiği fiil veya hâl dışında yeni bir disipline aykırı fiil veya hâl tespit ederse kendiliğinden soruşturma yapamaz."],
dogruCevap: "B) Devlet memurluğundan çıkarma cezası almış olan memurlar hakkında disiplin soruşturması yapılmaz."}


,
  {//86 *
metin: "80. 5271 sayılı Ceza Muhakemesi Kanunu'na göre, aşağıdaki tanımlardan hangisi yanlıştır?",
secenekler: [" A) Soruşturma: Kanuna göre yetkili mercilerce suç şüphesinin öğrenilmesinden iddianamenin kabulüne kadar geçen evredir." , " B)	Kovuşturma: İddianamenin kabulüyle başlayıp, hükmün kesinleşmesine kadar geçen evredir." , " C)	Şüpheli: Kovuşturmanın başlamasından itibaren hükmün kesinleşmesine kadar, suç şüphesi altında bulunan kişidir." , " D)	Malen sorumlu: Yargılama konusu işin hükme bağlanması ve bunun kesinleşmesinden sonra, maddi ve mali sorumluluk taşıyarak hükmün sonuçlarından etkilenecek veya bunlara katlanacak kişidir." , " E) Müdafi: Şüpheli veya sanığın ceza muhakemesinde savunmasını yapan avukattır."],
dogruCevap: "C) Şüpheli: Kovuşturmanın başlamasından itibaren hükmün kesinleşmesine kadar, suç şüphesi altında bulunan kişidir."}


,
  {//87 *
metin: "81. 5271 sayılı Ceza Muhakemesi Kanunu'na göre, 'görev' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Adli yargı içerisindeki mahkemeler bakımından verilen görevsizlik kararlarına karşı itiraz yoluna gidilemez." , " B) Görev konusunda mahkemeler arasında uyuşmazlık çıktığında, görevli mahkemeyi ortak yüksek görevli mahkeme belirler." , " C)	Duruşmada suçun hukuki niteliğinin değiştiğinden bahisle görevsizlik kararı verilerek dosya alt dereceli mahkemeye gönderilemez." , " D) Yenilenmesi mümkün olmayanlar dışında, görevli olmayan hâkim veya mahkemece yapılan işlemler hükümsüzdür." , " E)	İddianamenin kabulünden sonra; işin, davayı gören mahkemenin görevini aştığı veya dışında kaldığı anlaşılırsa, mahkeme bir kararla işi görevli mahkemeye gönderir."],
dogruCevap: "A) Adli yargı içerisindeki mahkemeler bakımından verilen görevsizlik kararlarına karşı itiraz yoluna gidilemez."}

,
  {//88 *
metin: "82. 5271 sayılı Ceza Muhakemesi Kanunu'na göre, ' bağlantılı davalar' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Bir kişi, birden fazla suçtan sanık olur veya bir suçta her ne sıfatla olursa olsun birden fazla sanık bulunursa bağlantı var sayılır." , " B)	Bağlantılı suçlardan her biri değişik mahkemelerin görevine giriyorsa, bunlar hakkında birleştirilmek suretiyle alt dereceli mahkemede dava açılabilir." , " C) Birleştirilen davalarda, bu davaları gören mahkemenin tabi olduğu yargılama usulü uygulanır." , " D) İşin esasına girdikten sonra ayrılan davalara aynı mahkemede devam olunur." , " E) Suçun işlenmesinden sonra suçluyu kayırma, suç delillerini yok etme, gizleme veya değiştirme fiilleri de bağlantılı suç sayılır."],
dogruCevap: "B) Bağlantılı suçlardan her biri değişik mahkemelerin görevine giriyorsa, bunlar hakkında birleştirilmek suretiyle alt dereceli mahkemede dava açılabilir."}


,
  {//89 * 
metin: "83, 5271 sayılı Ceza Muhakemesi Kanunu'na göre, 'zorla getirme' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Zorla getirme kararı, şüpheli veya sanığın açıkça kim olduğunu, kendisiyle ilgili suçu, gerektiğinde eşkâlini ve zorla getirilmesi nedenlerini içerir." , " B)	Zorla getirme kararının bir örneği şüpheli veya sanığa verilir." , " C) Zorla getirme, bunun için haklı görülecek bir zamanda başlar ve kolluk kuvvetleri tarafından, sorguya çekilmenin veya ifade almanın sonuna kadar devam eder." , " D) Zorla getirme kararının yerine getirilememe-sinin nedenleri, köy veya mahalle muhtarı ile kolluk görevlisinin birlikte imzalayacakları bir tutanakla saptanır." , " E)	Çağrıya rağmen gelmeyen tanık, bilirkişi, mağdur ve şikâyetçi ile ilgili olarak da zorla getirme kararı verilebilir."],
dogruCevap: "C) Zorla getirme, bunun için haklı görülecek bir zamanda başlar ve kolluk kuvvetleri tarafından, sorguya çekilmenin veya ifade almanın sonuna kadar devam eder."}


 ,
  {//90 * 
metin: "84. 5271 sayılı Ceza Muhakemesi Kanunu'na göre, aşağıdakilerden hangisi ifade alma ve sorguda yasak usuller kapsamındadır?",
secenekler: ["A) İfade verenin veya sorguya çekilenin kişisel ve ekonomik durumu hakkında bilgi alınır." , " B) Yüklenen suç hakkında açıklamada bulunmamasının kanuni hakkı olduğu söylenir." , "C) Müdafi seçme hakkının bulunduğu ve onun hukukî yardımından yararlanabileceği, müdafiin ifade veya sorgusunda hazır bulunabileceği, kendisine bildirilir." , "D)	Şüphelinin aynı olayla ilgili olarak yeniden ifadesinin alınması ihtiyacı ortaya çıktığında, bu işlem ancak Cumhuriyet savcısı tarafından yapılabilir." , "E) Şüpheden kurtulması için somut delillerin toplanmasını isteyebileceği hatırlatılır ve kendisi aleyhine var olan şüphe nedenlerini ortadan kaldırmak ve lehine olan hususları ileri sürmek olanağı tanınır."],
dogruCevap: "D) Şüphelinin aynı olayla ilgili olarak yeniden ifadesinin alınması ihtiyacı ortaya çıktığında, bu işlem ancak Cumhuriyet savcısı tarafından yapılabilir."}

,
  {//91 *
metin: "85. Vergi Mahkemelerince verilen nihai kararlar üzerinden alınan nispi ve maktu harçlar (Başvurma harcı hariç) Bölge İdare Mahkemelerince veya Danıştayca mükellef lehine karar verilmesi hâlinde mükellefçe kazanılan miktar üzerinden, kesin kararın tebliği tarihinden itibaren----içinde geri verilir veya istek üzerine vergi borcuna mahsup edilir. <br> 492 sayılı Harçlar Kanunu'na göre, bu hükümde boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?",
secenekler: [" A) bir yıl" , " B) on beş ay" , " C) on sekiz ay" , " D)	iki yıl" , " E)	üç yıl"],
dogruCevap: "A) bir yıl"}


,
  {//92  * 
metin: "86, 492 sayılı Harçlar Kanunu'na göre, 'yargı harçları, harç alma ölçüleri ve nispetleri' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Değer tayini mümkün olan hâllerde dava dilekçelerinde değer gösterilmesi mecburidir." , " B) Gayrimenkulün tahliyesi davalarında, yazılı mukavele olsun veya olmasın bir yıllık kira bedeli üzerinden karar ve ilam harcı alınır." , " C)	Bir menkulün teslimine dair olan icra takiplerinde tahsil harcı; menkulün ilamda veya takip talebinde gösterilen değeri, bu yoksa takdir edilecek değer üzerinden hesaplanır." , " D) Her ne sebep ve suretle olursa olsun, icra takibinden vazgeçildiğinin zabıtnameye yazılması için vazgeçilen miktara ait tahsil harcının üçte biri alınır." , " E) Gayrimenkulün aynına taalluk eden davalarda ecrimisil ve tazminat gibi taleplerde de bulunulduğu takdirde harç, gayrimenkulün değeri ile talep olunan tazminat ve ecrimisil tutarı üzerinden alınır."],
dogruCevap: "D) Her ne sebep ve suretle olursa olsun, icra takibinden vazgeçildiğinin zabıtnameye yazılması için vazgeçilen miktara ait tahsil harcının üçte biri alınır."}

,
  {//93 *
metin: "87. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre; özel kanunlar gereği mahkemelere atanması öngörülen psikolog, pedagog, sosyal çalışmacı ve benzeri ünvanlı personel, ihtiyaç hâlinde aşağıdakilerden hangisi tarafından bölge adliye mahkemeleri başkanlığında da görevlendirilebilir?",
secenekler: [" A) İçişleri Bakanlığı" , " B) Adalet Bakanlığı" , " C)	Cumhurbaşkanlığı" , " D)	Hâkimler ve Savcılar Kurulu" , " E) Aile ve Sosyal Hizmetler Bakanlığı"],
dogruCevap: "B) Adalet Bakanlığı"}


,
  {//94 * 
metin: "88. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre, aşağıdakilerden hangisi 'Ortak Tutulacak Kayıtlar' bölümünde sayılmıştır?",
secenekler: [" A) İstinaf kaydı" , " B) Zimmet kaydı" , " C)	SEGBİS kaydı" , " D)	Bilirkişilik kaydı" , "E) Yakalama kaydı"],
dogruCevap: "B) Zimmet kaydı"}


,
  {//95 * 
metin: "89. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'te, aşağıdakilerden hangisi 'Birimdeki işlerin, niteliği ve kapsamı dikkate alınarak görev, yetki ve iş bölümü esaslarına göre elektronik ortamda dağıtılması.' şeklinde tanımlanmıştır?",
secenekler: [" A) Veri" , " B) Tevzi" , " C) Erişim" , " D)	Bilişim sistemi" , " E)	Vatandaş bilgi sistemi"],
dogruCevap: "B) Tevzi"}


,
  {//96 *
metin: "90. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre, aşağıdakilerden hangisi idari işler müdürünün görevlerindendir?",
secenekler: [" A) Kütüphanenin sevk ve idaresini yapmak" , " B)	Arşivin düzenli tutulmasını sağlamak" , " C) Kararın tebliğini sağlamak" , " D)	Mühür ve beratın muhafazasını sağlamak" , " E) Teminatın iadesi gereken hâllerde gerekli işlemleri yerine getirmek"],
dogruCevap: "A) Kütüphanenin sevk ve idaresini yapmak"}


,
  {//97 * 
metin: "91. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre, 'bölge idare mahkemesi adalet komisyonunun oluşumu, toplanması, çalışma ve karar verme usulleri' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A) Oylama gizli yapılır." , " B) Komisyon oy birliğiyle karar verir." , " C)	Önce usule ilişkin hususlar oylanır." , " D) Toplantı gündemi, toplantıdan en az üç gün önce üyelere dağıtılır." , " E) Başkan, önce kendi oyunu sonra kıdemli üyenin oyundan başlayarak oyları toplar ve açıklar."],
dogruCevap: "C) Önce usule ilişkin hususlar oylanır."}


,
  {//98 * 
metin: "92. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, dava dilekçesinin içeriğinde bulunması gereken hususlar arasında aşağıdakilerden hangisi yoktur?",
secenekler: [" A) Davacı ile davalının adı, soyadı ve adresleri" , " B)	Varsa tarafların kanuni temsilcilerinin ve davacı vekilinin eğitim durumu bilgileri" , " C)	Davanın konusu ve mal varlığı haklarına ilişkin davalarda, dava konusunun değeri" , " D)	Davacının iddiasının dayanağı olan bütün vakıaların sıra numarası altında açık özetleri" , " E)	İddia edilen her bir vakıanın hangi delillerle ispat edileceği"],
dogruCevap: "B)	Varsa tarafların kanuni temsilcilerinin ve davacı vekilinin eğitim durumu bilgileri"}
	


,
  {//99 *
metin: "93. Vekil ile takip edilen davada, vekilin azli hâlinde vekâlet veren, davayı takip etmez ve----içinde bir başka vekil de görevlendirmez ise tarafın yokluğu hâlinde uygulanacak hükümlere göre işlem yapılır. <br> 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, bu hükümde boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?",
secenekler: [" A) üç gün" , " B) beş gün" , " C) bir hafta" , " D)	on gün" , " E)	iki hafta"],
dogruCevap: "E) iki hafta"}


,
  {//100 *
metin: "94. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, 'duruşma' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Mahkeme, taraflardan birinin talebi üzerine talep eden tarafın veya vekilinin, aynı anda ses ve görüntü nakledilmesi yoluyla bulundukları yerden duruşmaya katılmalarına ve usul işlemleri yapabilmelerine karar verebilir." , " B)	Mahkeme, fiilî engel veya güvenlik sebebiyle duruşmanın il sınırları içinde başka bir yerde yapılmasına, yargı çevresi içinde yer aldığı bölge adliye mahkemesi adalet komisyonunun uygun görüşünü alarak karar verebilir." , " C)	Bir kimse (avukatlar hariç), ihtara rağmen mahkemenin düzenini bozar veya mahkeme huzurunda uygun olmayan bir söz söylemeye veya davranışta bulunmaya devam ederse derhâl yakalanır ve hakkında dört güne kadar disiplin hapsi uygulanır." , " D)	Duruşma gününün belli edilmesi için tarafların başvurması gereken hâllerde gün tespit ettiril-memişse, son işlem tarihinden başlayarak üç ay geçmekle dosya işlemden kaldırılır." , " E) Duruşmaya katılan taraf vekilleri; tanıklara, bilirkişilere ve duruşmaya çağrılan diğer kişilere, duruşma disiplinine uygun olarak doğrudan soru yöneltebilirler."],
dogruCevap: "D) Duruşma gününün belli edilmesi için tarafların başvurması gereken hâllerde gün tespit ettirilmemişse, son işlem tarihinden başlayarak üç ay geçmekle dosya işlemden kaldırılır."}


,
  {//101 * 
metin: "95. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, aşağıdakilerden hangisi istinaf dilekçesinde bulunan husus,ardan değildir?",
secenekler: [" A) Kararın hangi mahkemeden verilmiş olduğu ve tarihi ile sayısı" , " B)	Kararın başvurana tebliğ edildiği tarih" , " C) Talep sonucu" , " D)	Başvuru sebepleri ve gerekçesi" , " E)	Tarafların iddia ve savunmalarının özeti"],
dogruCevap: "E) Tarafların iddia ve savunmalarının özeti"}


,
  {//102 *
metin: "96. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, 'ihtiyati tedbir kararının uygulanması' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) İhtiyati tedbir kararı, kararın verildiği tarihten itibaren on beş gün içinde talep edilmek zorundadır." , " B) Tedbir kararının uygulanması, kararı veren mahkemenin yargı çevresinde bulunan veya tedbir konusu mal ya da hakkın bulunduğu yer icra dairesinden talep edilir." , " C) İhtiyati tedbir kararları hakkında kanun yoluna başvurulması hâlinde, tedbire ilişkin dosya ve delillerin sadece örnekleri ilgili mahkemeye gönderilir." , " D)	Mahkeme, kararında belirtmek suretiyle, tedbirin uygulanmasında, yazı işleri müdürünü de görevlendirebilir." , " E)	İhtiyati tedbir kararının uygulanması için, gerekirse zor kullanılabilir."],
dogruCevap: "A) İhtiyati tedbir kararı, kararın verildiği tarihten itibaren on beş gün içinde talep edilmek zorundadır."}


,
  {//103 *
metin: "97. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre, bölge adliye mahkemelerinin aşağıdaki kararlarından hangisi hakkında temyiz yoluna başvurulabilir?",
secenekler: [" A) Çekişmesiz yargı işlerinde verilen kararlar" , " B)	Geçici hukuki korumalar hakkında verilen kararlar" , " C) Yargı çevresi içindeki ilk derece mahkemeleri hâkimlerinin davayı görmeye hukuki veya fiilî engellerinin çıkması hâlinde, davanın o yargı çevresi içindeki başka bir mahkemeye nakline ilişkin kararlar" , " D)	Soybağına ilişkin sonuçlar doğuran davalar hariç olmak üzere, nüfus kayıtlarının düzeltilmesine ilişkin davalarla ilgili kararlar" , " E)	Hakem kararlarının iptali talebi üzerine verilen kararlar"],
dogruCevap: "E) Hakem kararlarının iptali talebi üzerine verilen kararlar"}


,
  {//104 *
metin: "98. Kasten işlenen suçlarda----yıl, taksirle işlenen suçlarda ise----yıldan fazla hapis cezasının infazı için doğrudan yakalama emri çıkarılır. <br> 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre, bu hükümde boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?",
secenekler: [" A) 1 - 3" , " B) 2 - 4" , " C) 3 - 5" , " D)	4 - 6" , " E) 5-10"],
dogruCevap: "C) 3 - 5"}

,
  {//105*
metin: "99. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre, 'adli para cezasının infazı' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: ["A) ünlük çalışma süresi, en az iki saat ve en fazla sekiz saat olacak şekilde Cumhuriyet savcılığınca belirlenir." , "B) Çocuklar hakkında hükmedilen adli para cezasının ödenmemesi hâlinde, bu ceza hapse çevrilemez." , " C)	Adli para cezasını içeren ilâm Cumhuriyet Başsavcılığına verilir." , " D) Hükümlü, hapis yattığı veya kamuya yararlı işte çalıştığı günlerin dışındaki günlere karşılık gelen parayı öderse hapisten çıkartılır veya kamuya yararlı işte çalıştırılma sona erer." , " E) Hükümde, adli para cezası takside bağlanmamış ise, bir aylık süre içinde adli para cezasının üçte birini ödeyen hükümlünün isteği üzerine geri kalan kısmının birer ay ara ile iki eşit taksitte ödenmesine izin verilir."],
dogruCevap: "A) Günlük çalışma süresi, en az iki saat ve en fazla sekiz saat olacak şekilde Cumhuriyet savcılığınca belirlenir."}


,
  {//106*
metin: "100. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre, hükümlünün istemiyle infazın ertelenmesi aşağıdakilerden hangisi hakkında uygulanabilir?",
secenekler: [" A) Terör suçlarından mahkûm olanlar" , " B)	Taksirle işlenen suçlarda beş yıl veya daha az süreli hapis cezaları olanlar" , "  C) Cinsel dokunulmazlığa karşı işlenen suçlardan mahkûm olanlar" , " D) Mükerrirlere özgü infaz rejimi uygulanmasına karar verilenler" , " E)	Disiplin veya tazyik hapsine mahkûm olanlar"],
dogruCevap: "B) Taksirle işlenen suçlarda beş yıl veya daha az süreli hapis cezaları olanlar"},
   
 
{//107* // 2016 YILI
metin: "  1. 2992 sayılı Adalet Bakanlığının Teşkilat ve Görevleri Hakkında Kanun Hükmünde Kararnamenin Değiştirilerek Kabulü Hakkında Kanun'a göre aşağıdakilerden hangisi Ceza İşleri Genel Müdürlüğünün görevlerindendir?",
secenekler: [" A) Türk Ticaret Kanunu ve Ticaret Sicili Tüzüğü gereğince Bakanlıkça yapılması gereken işlemleri yürütmek  " , " B)	Adli sicil ve adli istatistik hizmetlerinin yerine getirilmesi için bilgi işlem sistemini kurmak ve geliştirmek" , "  C) Cezaları infaz edilen hükümlülerin işe yerleştirilmeleri konusunda, infaz sonrası yardım müesseseleri ve diğer kurumlarla ilişkileri düzenlemek" , " D) Kamu davasının açılması ile ilgili olarak kanunların Adalet Bakanına verdiği yetkinin kullanılmasıyla ilgili çalışma ve işlemleri yapmak" , "E) İcra ve İflas Dairesi memurları hakkında ihbar ve şikâyetleri incelemek ve ceza verilmesi gereken hâllerde evrakı ilgili makama intikal ettirmek"],
dogruCevap: ") Kamu davasının açılması ile ilgili olarak kanunların Adalet Bakanına verdiği yetkinin kullanılmasıyla ilgili çalışma ve işlemleri yapmak"},

{//108*
metin: "  2. I. Adli Tıp Kurumu  II. Türkiye Adalet Akademisi  III.	Ceza İnfaz Kurumları ile Tutukevleri İşyurtları Kurumu  2992 sayılı Adalet Bakanlığının Teşkilat ve Görevleri Hakkında Kanun Hükmünde Kararnamenin Değiştirilerek Kabulü Hakkında Kanun'a göre yukarıdakilerden hangileri Adalet Bakanlığına bağlı kuruluşlardandır?",
secenekler: ["A) Yalnızl" , " B) I ve II" , "C) I ve III" , " D) II ve III" , " E) l, II ve III"],
dogruCevap: "C) I ve III"},


{//109*
metin: "  3. I. Tüzük II.	Yönetmelik III. Tebliğ  IV.	Genelge  V.	Diğer idari metinler 2992 sayılı Adalet Bakanlığının Teşkilat ve Görevleri Hakkında Kanun Hükmünde Kararnamenin Değiştirilerek Kabulü Hakkında Kanun'a göre Bakanlık, kanunla yerine getirmekle yükümlü olduğu hizmetleri yukarıdaki lerden hangileri ile düzenlemekle görevli ve yetkilidir?",
secenekler: [" A) Yalnızl" , "  B) I ve II" , " C) I, II ve III " , " D) I, II, III ve IV " , " E) l II, III, IV ve V"],
dogruCevap: "E) l II, III, IV ve V"},


{//110*
metin: "  4. 25/1 sayılı Adalet Bakanlığı Ceza İşleri Genel Müdürlüğünün Resmî Yazışmalar Konulu Genelgesi'ne göre resmî yazışmalarda dikkat edilmesi gereken aşağıdaki hususlardan hangisi yanlıştır?",
secenekler: [" A) Genelkurmay Başkanlığı ve diğer bakanlıklar ile uluslararası kurum ve kuruluşlarla yapılacak olan ve soruşturma kapsamı dışında kalan yazışmaların, Bakanlığımız aracı kılınmaksızın ağır ceza Cumhuriyet başsavcıları aracılığıyla yapılması" , " B)	Tüm bilgilerin ağır ceza Cumhuriyet başsavcılığınca kontrol edilmesinden ve varsa tespit edilen eksikliklerin giderilmesinden sonra, ilgili olan bütün yazıların birlikte bir üst yazıya bağlanıp Bakanlığa gönderilmesi" , " C) Bakanlıktan gönderilen yazılara ilişkin zarfların bizzat Cumhuriyet başsavcıları veya görevlendireceği bir Cumhuriyet savcısı tarafından ya da onların gözetimlerinde açılması" , " D) Yazışmalarda yarım kâğıt kullanılmayıp A4 kâğıt kullanılması, özellikle derkenar ile evrakın havale edilmesi işleminden kaçınılması" , " E) Merkez ve bağlı ilçe Cumhuriyet savcılarının Bakanlıkla olan yazışmalarının, aksi istenmedikçe mutlak surette bağlı bulundukları ağır ceza Cumhuriyet başsavcılığı aracı kılınmak suretiyle yapılması"],
dogruCevap: "A) Genelkurmay Başkanlığı ve diğer bakanlıklar ile uluslararası kurum ve kuruluşlarla yapılacak olan ve soruşturma kapsamı dışında kalan yazışmaların, Bakanlığımız aracı kılınmaksızın ağır ceza Cumhuriyet başsavcıları aracılığıyla yapılması"},


{//111*
metin: "   5. 28/1 sayılı Adalet Bakanlığı Ceza İşleri Genel Müdürlüğünün Cumhuriyet Savcılığı Kalem Hizmetleri ve Mahkemeler ile İcra ve İflas Dairelerinin Kasa ve Para Denetimi Konulu Genelgesi'ne göre mahkemeler ile icra ve iflas dairelerinin kasa hesaplarının yasal düzenlemelere uygun şekilde en az kaç ayda bir olmak üzere Cumhuriyet savcısı tarafından denetiminin yapılması gerekmektedir?",
secenekler: [" A) Bir" , " 	B) İki" , "  C) Üç" , " 	D) Dört" , "  E) Beş"],
dogruCevap: "C) Üç"},


{//112*
metin: "   6. 104/1 sayılı Adalet Bakanlığı Hukuk İşleri Genel Müdürlüğünün Mahkeme Emanet Paraları ile İcra İflas Dairelerince Tahsis Olunan Paraların Yatırılacağı Bankalar ve İcmal Cetvelleri Konulu Genelgesi'ne göre, her ağır ceza veya bölge idare mahkemesine bağlı yerlerin Cumhuriyet başsavcılığı veya idari yargı mahkemesi başkanlığı tarafından o yerde bankalara yatırılan her türlü emanet paraların miktarları ile bulundukları bankaları gösteren cetvellerin her yıl hangi tarihler arasındaki miktarlar esas alınarak bağlı olduğu ağır ceza Cumhuriyet başsavcılığına veya bölge idare mahkemesi başkanlığına gönderilmesi gerekir?",
secenekler: [" A) 01 Ocak ve 31 Aralık" , "  B) 01 Mart ve 30 Kasım" , " C) 30 Mayıs ve 01 Aralık" , " D) 30 Nisan ve 15 Aralık" , " E) 30 Haziran ve 31 Aralık"],
dogruCevap: "E) 30 Haziran ve 31 Aralık"},


{//113*
metin: "  7. 107 sayılı Adalet Bakanlığı Hukuk İşleri Genel Müdürlüğünün Zayi Olan Dosyaların Yenilenmesi Konulu Genelgesi'ne göre öncelikle zayi olduğu ileri sürülen dosyanın ilgili mahkeme veya icra dairelerinin kalem ve arşivinde titizlikle arandıktan sonra bulunamadığı takdirde düzenlenecek tutanağın onaylı sureti nereye gönderilecektir?",
secenekler: [" A) Hâkimler ve Savcılar Yüksek Kuruluna" , " B) Bir Üst Mahkeme Başkanlığına" , "C) Yargıtay Başsavcılığına" , " D) Adalet Bakanlığına" , " E) Yargıtay Başkanlığına"],
dogruCevap: "D) Adalet Bakanlığına"},


{//114*
metin: "  8. 79 sayılı Adalet Bakanlığı Personel Genel Müdürlüğünün Resmî Yazışma ve Tebligat İşlemlerinde Uyulması Gereken Esaslar Genelgesi'ne göre izinli ve raporlu iken ataması yapılanlara yapılması gereken tebligat işlemi ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) İlgilinin izinli veya raporlu olması tebligata engeldir." , " B) Ataması yapılanların göreve başlama süreleri izin ve rapor müddetinin bitiminde başlar." , " C) Başka yerdeki görevlere atananlar belli yol süresini izleyen iş günü içerisinde işe başlamak zorundadırlar." , " D) Aynı yerdeki görevlere atananlar, atama emirlerinin kendilerine tebliğ gününü izleyen gün işe başlamak zorundadırlar." , " E) Başka yerdeki görevlere atananlar, atama emirlerinin kendilerine tebliğ tarihinden itibaren on beş gün içerisinde o yere hareket etmek zorundadırlar."],
dogruCevap: "A) İlgilinin izinli veya raporlu olması tebligata engeldir."},


{//115*
metin: "  9.<br> I. Hâkimler ve savcılar azlolunamaz.<br> II.	Kendileri istemedikçe Anayasa'da gösterilen yaştan önce emekliye ayrılamaz.<br> III. Bir mahkemenin veya kadronun kaldırılması durumunda, aylık, ödenek ve diğer özlük haklarından yoksun kılınabilir. <br> IV. Meslekten çıkarılmayı gerektiren bir suçtan dolayı hüküm giymiş olanlar, görevini sağlık bakımından yerine getiremeyeceği kesin olarak anlaşılanlar veya meslekte kalmalarının uygun olmadığına karar verilenler hakkında kanundaki istisnalar saklıdır. T.C. Anayasası'na göre 'hâkimlik ve savcılık teminatı' ile ilgili yukarıdaki hükümlerden hangileri doğrudur?",
secenekler: [" A) I ve II" , " B) I, II ve IV" , " C) I, III ve IV" , " D) II, III ve IV" , " E) I, II, III ve IV"],
dogruCevap: "B) I, II ve IV"},


{//116*
metin: "  10. I. Hukuk mahkemeleri II.	Ceza mahkemeleri III.	Bölge adliye mahkemeleri 5235 sayılı Adli Yargı İlk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Gö rev ve Yetkileri Hakkında Kanun'a göre yuka-rıdakilerden hangileri adli yargı ikinci derece mahkemesidir?",
secenekler: [" A) Yalnızl" , "  B) Yalnız II" , " C) Yalnız III" , " D) I ve II" , " E) I, II ve III"],
dogruCevap: "C) Yalnız III"},


{//117*
metin: "   11. 5235 sayılı Adli Yargı İlk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Görev ve Yetkileri Hakkında Kanun'a göre bölge adliye mahkemelerinde 'personelin sicil raporlarını düzenlemek, izin isteklerini düşünceleriyle birlikte adalet komisyonuna aktarmak' görevi aşağıdakilerden hangisinindir?",
secenekler: [" A)	Bölge Adliye Mahkemesi Başkanı" , "   B)	Bölge Adliye Mahkemesi Ceza Daireleri" , "  C)	Bölge Adliye Mahkemesi Başkanlar Kurulu" , " D)	Bölge Adliye Mahkemesi Hukuk Daireleri" , " E)	Bölge Adliye Mahkemesi Daire Başkanları"],
dogruCevap: "E)	Bölge Adliye Mahkemesi Daire Başkanları"},

{//118*
metin: "  12. 2576 sayılı Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin Kurulu şu ve Görevleri Hakkında Kanun'a göre uyuşmazlık miktarı en fazla kaç Türk lirasını aşmayan, konusu belli parayı içeren idari işlemlere karşı açılan iptal davaları idare mahkemesi hâkimlerinden tek hâkimle çözümlenir?",
secenekler: [" A) Onbin" , "  B) Onbeşbin " , " C) Yirmibin" , "  D) Yirmibeşbin" , "  E) Otuzbin"],
dogruCevap: "D) Yirmibeşbin"},


{//119 * 
metin: "  13. 2802 sayılı Hâkimler ve Savcılar Kanunu'na göre adli yargı ilk derece mahkemesi adalet komisyonlarının, ağır ceza mahkemelerinin bulunduğu yerlerde Hâkimler ve Savcılar Yüksek Kurulunca belirlenen hâkim üyeleri aşağıdakilerden hangisidir?",
secenekler: [" A)	Başkan, bir asıl ve bir yedek" , "   B)	Başkan, iki asıl ve bir yedek" , "  C)	Başkan, bir asıl ve iki yedek" , "  D)	Başkan, iki asıl ve iki yedek" , "  E)	Başkan, üç asıl ve bir yedek"],
dogruCevap: "A)	Başkan, bir asıl ve bir yedek"},


{//120 *
metin: "  14. 5070 sayılı Elektronik İmza Kanunu'nda 'başka bir elektronik veriye eklenen veya elektronik veriyle mantıksal bağlantısı bulunan ve kimlik doğrulama amacıyla kullanılan elektronik veri' şeklinde tanımlanan kavram aşağıdakilerden hangisidir?",
secenekler: [" A) Elektronik veri" , "  B) Elektronik imza" , "  C) Elektronik sertifika" , " D) İmza oluşturma verisi" , "  E) İmza doğrulama aracı"],
dogruCevap: "B) Elektronik imza"},


{//121 * 
metin: "  15. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre 'elektronik ortamda yapılan elektronik işlemler' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Harç ve avans ödenebilir." , " B)	Dava dosyaları incelenebilir." , " C)	Güvenli elektronik imza kullanılarak dava açılabilir." , " D) Güvenli elektronik imza ile oluşturulan tutanak ve belgeler ayrıca fizikî olarak gönderilmez, belge örneği aranmaz." , "  E)	Kanun kapsamında fiziki olarak hazırlanması öngörülen tutanak ve belgeler güvenli elektronik imzayla elektronik ortamda hazırlanıp gönderilemez."],
dogruCevap: "E)	Kanun kapsamında fiziki olarak hazırlanması öngörülen tutanak ve belgeler güvenli elektronik imzayla elektronik ortamda hazırlanıp gönderilemez."}, 


{//122 *
metin: "  16. 5271 sayılı Ceza Muhakemesi Kanunu'na göre 'elektronik işlemler' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	UYAP'tan dış bilişim sistemlerine gönderilen bilgi ve belgeler ayrıca zorunlu olmadıkça fiziki ortamda gönderilmez." , " B)	Yargı birimlerinin ihtiyaç duyduğu nüfus, tapu, adli sicil kaydı gibi dış bilişim sistemlerinden UYAP vasıtasıyla temin edilen bilgi, belge ve kayıtlar, ayrıca fiziki olarak da istenir." , " C)	Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanmaz." , " D)	Zorunlu nedenlerle fiziki olarak düzenlenmiş belge veya kararlar, yetkili kişilerce taranarak UYAP'a aktarılır ve gerektiğinde ilgili birimlere elektronik ortamda gönderilir." , " E)	Güvenli elektronik imza ile imzalanan belge ve kararlar diğer kişi veya kurumlara elektronik ortamda gönderilir."],
dogruCevap: "B)	Yargı birimlerinin ihtiyaç duyduğu nüfus, tapu, adli sicil kaydı gibi dış bilişim sistemlerinden UYAP vasıtasıyla temin edilen bilgi, belge ve kayıtlar, ayrıca fiziki olarak da istenir." }, 


{//123 *
metin: "  17. Bölge Adliye ve Adli Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre 'UYAP'ın kullanılması' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Elektronik ortamda yapılan işlemlerde süre mesai saati sonunda biter." , "  B)	Fizikî olarak verilen ve gönderilen her türlü evrak, elektronik ortama aktarılarak UYAP'a kaydedilir ve ilgili birime gönderilir." , " C)	Güvenli elektronik imzalı belgenin elle atılan imzalı belgeyle çelişmesi hâlinde UYAP'ta kayıtlı olan güvenli elektronik imzalı belge geçerli kabul edilir." , "  D)	Taraf ve vekilleri ile diğer ilgililer güvenli elektronik imza ile imzalamak suretiyle UYAP vasıtasıyla birimlere elektronik ortamda bilgi ve belge gönderebilirler." , "  E)	Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanmaz."],
dogruCevap: " A)	Elektronik ortamda yapılan işlemlerde süre mesai saati sonunda biter."},


{//124 *
metin: "  18. Ceza Muhakemesinde Ses ve Görüntü Bilişim Sisteminin Kullanılması Hakkında Yönetmelik'e göre 'teknik esaslar' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Bilgi, belge ve delillerin elektronik ortamda anında iletilebilmesi gerekir." , "  B)	Görüntü ile sesin aynı anda güvenli bir şekilde iletilebilmesi ve kaydedilebilmesi gerekir." , "  C)	SEGBİS ile elde edilen kayıtlar, nitelikli elektronik imza ile imzalanarak güvenli bir şekilde talep eden makam tarafından saklanır." , " D)	SEGBİS ile elde edilen kayıtlar, ilgili mevzuatta öngörülen usule göre UYAP Bilişim Sisteminde yazılı tutanağa dönüştürülüp, elektronik imza ile imzalanır." , "  E)	Ses, ilgilinin yüz ifadelerini, vücut hareketlerini, tavır ve davranışlarını gözlemlemeye; görüntü, ilgilinin duygularını anlamaya ve söylediklerini anlaşılır şekilde dinlemeye imkân verecek nitelikte olur."],
dogruCevap: "E)	Ses, ilgilinin yüz ifadelerini, vücut hareketlerini, tavır ve davranışlarını gözlemlemeye; görüntü, ilgilinin duygularını anlamaya ve söylediklerini anlaşılır şekilde dinlemeye imkân verecek nitelikte olur."},


{//125*
metin: "  19. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre belgenin 'sayı' bölümü ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Belgelerde sayı bulunması zorunludur." , " B)	Elektronik ortamda güvenli elektronik imza ile hazırlanan belgelerin kayıt numarası, başına 'E.' ibaresi konularak yazılır." , " C)	'Sayı:' yan başlığı, başlığın son satırından itibaren iki satır boşluk bırakılarak ve yazı alanının solundan başlanarak yazılır." , " D)	'Sayı:' sırasıyla; Türkiye Cumhuriyeti Devlet Teşkilatı Numarası, belge kayıt numarası ve standart dosya planı kodu ile oluşur ve bunların arasına nokta işareti (.) konulur." , " E)	Belgede hem birim evrak bölümü hem de genel evrak bölümü tarafından verilen kayıt numarası bulunması hâlinde araya eğik çizgi işareti (/) konulur."],
dogruCevap: " D)	'Sayı:' sırasıyla; Türkiye Cumhuriyeti Devlet Teşkilatı Numarası, belge kayıt numarası ve standart dosya planı kodu ile oluşur ve bunların arasına nokta işareti (.) konulur."},


{//126 * 
metin: "  20. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelice göre 'bağlı idare başlık' örneği ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: ["A)	T.C.  BAŞBAKANLIK  Hazine Müsteşarlığı Kamu Finansmanı Genel Müdürlüğü " , " B)	T.C. <br>BAŞBAKANLIK HAZİNE MÜSTEŞARLIĞI <br>Kamu Finansmanı Genel Müdürlüğü" , " C)	T.C.BAŞBAKANLIK HAZİNE MÜSTEŞARLIĞI (Kamu Finansmanı Genel Müdürlüğü)" , "  D)	TÜRKİYE CUMHURİYETİ BAŞBAKANLIK  Hazine Müsteşarlığı<br> Kamu Finansmanı Genel Müdürlüğü" , " E)	T.C. <br> BAŞBAKANLIK  Hazine Müsteşarlığı Kamu Finansmanı Genel Müdürlüğü"],
dogruCevap: "E)	T.C.  BAŞBAKANLIK Hazine Müsteşarlığı Kamu Finansmanı Genel Müdürlüğü  !!!  İSTERSENİZ SORUNUN ASLINA İNTERENETTEN BİR BAKIN "  },

{//127
metin: "  21. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre belgenin 'İmza' bölümü ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	İmza, ad ve soyadın üzerinde bırakılan boşluğa atılır. El yazısıyla atılan imza, kaybolmayacak ve kâğıda işlemesini sağlayacak kalemle atılır." , " B)	Unvan, ad ve soyadın altına ilk harfleri büyük diğerleri küçük harflerle yazılır. Akademik unvanlar veya rütbeler adın ön tarafına ya da bir satır altına ilk harfleri büyük diğerleri küçük harflerle açık ya da kısaltılarak yazılabilir." , "  C)	Belgenin ikiden fazla yetkili tarafından imzalanması durumunda en üst unvan sahibinin adı, soyadı, unvanı ve imzası en solda olmak üzere yetkililer unvan sırasına göre soldan sağa doğru sıralanır." , " D)	Belgeyi, imza yetkisi devredilen makam imzaladığında, imzalayanın adı ve soyadı ikinci satıra, yetki devreden makamı gösteren 'Başbakan a.', 'Bakan a.', 'Müsteşar a.', 'Vali a.' biçimindeki ibare birinci satıra, imzalayan makamın unvanı ise üçüncü satıra yazılır." , " E)	Üst yazıya ilişkin olarak idare tarafından hazırlanan ve fiziksel ortamda hazırlanmış rapor ya da benzeri bir belge haricindeki ekler, imza sahibi ya da imza sahiplerinden en az biri tarafından imzalanır ya da paraflanır veyahut paraf zincirinde yer alanların en az biri tarafından paraflanır."],
dogruCevap: "D)	Belgeyi, imza yetkisi devredilen makam imzaladığında, imzalayanın adı ve soyadı ikinci satıra, yetki devreden makamı gösteren 'Başbakan a.', 'Bakan a.', 'Müsteşar a.', 'Vali a.' biçimindeki ibare birinci satıra, imzalayan makamın unvanı ise üçüncü satıra yazılır."},


{//128 * 
metin: "  22. 7201 sayılı Tebligat Kanunu'na göre 'tebliğ imkânsızlığı ve tebellüğden imtina' durumunda tebliğin yapılmış sayıldığı tarih aşağıdakilerden hangisidir?",
secenekler: [" A)	Tebliğ evrakının düzenlendiği tarih" , " B)	İhbarnamenin kapıya yapıştırıldığı tarih" , " C)	Tebellüğ belgesinin tebliği çıkaran merciye geldiği tarih" , " D)	Muhatabın ihbarname konusunda bilgi sahibi olduğu tarih" , " E)	Tebliğ evrakının teslim edildiği kişilerce muhataba verildiği tarih"],
dogruCevap: " B)	İhbarnamenin kapıya yapıştırıldığı tarih"},


{//129 *
metin: "  23. 7201 sayılı Tebligat Kanunu'na göre kendisine tebliğ yapılacak kimse imza edecek kadar yazı bilmez veya imza edemeyecek durumda ise tebliğ nasıl yapılır?",
secenekler: [" A)	Sol elinin başparmağı bastırılmak suretiyle" , " B)	Sağ elinin başparmağı bastırılmak suretiyle" , " C)	Sol elinin orta parmağı bastırılmak suretiyle" , " D)	Sol elinin işaret parmağı bastırılmak suretiyle" , " E)	Sağ elinin işaret parmağı bastırılmak suretiyle"],
dogruCevap: "A)	Sol elinin başparmağı bastırılmak suretiyle"},


{//130 *
metin: "  24. 7201 sayılı Tebligat Kanunu mucibince tebligat yapılması gereken hâllerde bir kimse kendisine veya başkasına ait isim veya adresi yanlış olarak bildirir ise fail hakkında hükmolunan hapis cezası aşağıdakilerden hangisidir?",
secenekler: [" A)	Üç aydan bir yıla kadar" , " B)	Altı aydan bir yıla kadar " , " C)	Altı aydan iki yıla kadar" , " D)	Bir yıldan iki yıla kadar" , " E)	İki yıldan üç yıla kadar"],
dogruCevap: "C)	Altı aydan iki yıla kadar"},


{//131 * 
metin: "  25. 7201 sayılı Tebligat Kanunu'na göre muhatap namına kendilerine tebligat yapılan kimseler tebliğ evrakını muhataplarına en kısa zamanda vermedikleri ve bundan gecikme veya zarar vukua geldiği takdirde fail hakkında hükmolu-nan hapis cezası aşağıdakilerden hangisidir?",
secenekler: [" A) Üç aya kadar" , "  B) Altı aya kadar" , "  C) Bir yıla kadar" , "  D) On sekiz aya kadar" , "  E) İki yıla kadar"],
dogruCevap: "C) Bir yıla kada"},


{//132*
metin: "  26. Tebligat Kanununun Uygulanmasına Dair Yönetmelik'e göre yabancı ülkelere gönderilecek olan ve belirli bir günü içeren tebliğ evrakının, tebliği çıkaran merci tarafından, belirlenen günden en az ne kadar zaman önce ilgili bakanlığa gönderilmesi gerekir?",
secenekler: [" A) Yirmi gün	" , " B) Bir ay" , " C) Kırk beş gün" , " 	D) İki ay" , " E) Üç ay"],
dogruCevap: " E) Üç ay"},


{//133 * 
metin: "  27. Tebligat Kanununun Uygulanmasına Dair Yönetmelik'e göre askerî kazada tebligatta tebellüğ ilmühaberi aşağıdakilerden hangisini içermez?",
secenekler: [" A)	Tebliğ olunan şahsın, adını, soyadını ve künyesini" , " B)	Tebliğ eden şahsın, adını, soyadını ve unvanını" , " C)	Tebliği çıkaran mercinin adını, tebliğin konusunu" , " D)	Tebliğ ve tebellüğ eden şahısların imzalarını" , " E)	Tebliğin nerede yapıldığını, tarihi ve saatini"],
dogruCevap: "B)	Tebliğ eden şahsın, adını, soyadını ve unvanını"},


{//134 * 
metin: "  28. I.İyi niyet II.	İspat yükü III.	Dürüst davranma IV.	Hâkimin takdir yetkisi 4721 sayılı Türk Medeni Kanunu'na göre yukarıdakilerden hangileri hukuki ilişkilerin kapsamıyla ilgilidir?",
secenekler: [" A) I ve II" , " 	B) I ve III" , "  C) II ve III	" , " D) II ve IV" , "  E) I, III ve IV"],
dogruCevap: "E) I, III ve IV"},


{//135*
metin: "  29. 5237 sayılı Türk Ceza Kanunu'na göre fiili işlediği sırada on beş yaşını doldurmuş olup da on sekiz yaşını doldurmamış olan kişiler hakkında verilecek hapis cezası kaç yıldan fazla olamaz?",
secenekler: [" A) On iki" , " 	B) On" , "  C) Yedi" , " 	D) Beş" , " E) Üç"],
dogruCevap: "A) On iki"},


{//136 *
metin: "  30. 2577 sayılı İdari Yargılama Usulü Kanunu'na göre 'tebligat ve cevap verme' ile ilgili aşağıda ki hükümlerden hangisi yanlıştır?",
secenekler: [" A)	Dava dilekçelerinin ve eklerinin birer örneği davalıya, davalının vereceği savunma davacıya tebliğ olunur. " , " B)	Taraflar, yapılacak tebliğlere karşı, tebliğ tarihinden itibaren otuz gün içinde cevap verebilirler." , "  C)	Taraflar, sürenin geçmesinden sonra verecekleri savunmalara veya ikinci dilekçelere dayanarak hak iddia edemezler." , "  D)	Davalara ilişkin işlem dosyalarının aslı veya onaylı örneği idarenin savunması ile birlikte, Danıştay veya ilgili mahkeme başkanlığına gönderilir." , "  E)	Danıştayda ilk derece mahkemesi sıfatıyla görülen davalarda savcının esas hakkındaki yazılı düşüncesinin taraflara tebliğinden itibaren taraflar, on beş gün içinde görüşlerini yazılı olarak bildirebilirler."],
dogruCevap: ")	Danıştayda ilk derece mahkemesi sıfatıyla görülen davalarda savcının esas hakkındaki yazılı düşüncesinin taraflara tebliğinden itibaren taraflar, on beş gün içinde görüşlerini yazılı olarak bildirebilirler."},


{//137 * 
metin: "  31. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre dava konusunun değer ve miktarına bakılmaksızın mal varlığı haklarına ilişkin davalarla, şahıs varlığına ilişkin davalarda görevli mahkeme, aksine bir düzenleme bulunmadıkça aşağıdakilerden hangisidir?",
secenekler: [" A)	Ticaret Mahkemesi" , " B)	Sulh Ceza Mahkemesi" , "  C)	Asliye Hukuk Mahkemesi" , " D)	Sulh Hukuk Mahkemesi" , " E)	Asliye Ceza Mahkemesi"],
dogruCevap: "C)	Asliye Hukuk Mahkemesi"},


{//138 * 
metin: "  32. 5271 sayılı Ceza Muhakemesi Kanunu'na göre aşağıdaki tanımlamalardan hangisi yanlıştır?",
secenekler: [" A)	Şüpheli: Soruşturma evresinde, suç şüphesi altında bulunan kişi" , " B)	Sanık: Kovuşturmanın başlamasından itibaren hükmün kesinleşmesine kadar, suç şüphesi altında bulunan kişi" , " C)	Müdafi: Şüpheli veya sanığın ceza muhakemesinde savunmasını yapan avukat" , " D)	Vekil: Katılan, suçtan zarar gören veya malen sorumlu kişiyi ceza muhakemesinde temsil eden avukat" , " E)	Soruşturma: İddianamenin kabulüyle başlayıp, hükmün kesinleşmesine kadar geçen evre"],
dogruCevap: "E)	Soruşturma: İddianamenin kabulüyle başlayıp, hükmün kesinleşmesine kadar geçen evre"},


{//139 * 
metin: "  33. 5271 sayılı Ceza Muhakemesi Kanunu'na göre 'görev' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Adli yargı içerisindeki mahkemeler bakımından verilen görevsizlik kararlarına karşı itiraz yoluna gidilebilir." , " B)	Yenilenmesi mümkün olmayanlar dışında, görevli olmayan hâkim veya mahkemece yapılan işlemler hükümsüzdür." , " C)	Görev konusunda mahkemeler arasında uyuşmazlık çıktığında, görevli mahkemeyi ortak yüksek görevli mahkeme belirler." , " D)	Duruşmada suçun hukuki niteliğinin değiştiğinden bahisle görevsizlik kararı verilerek dosya alt dereceli mahkemeye gönderilebilir." , " E)	İddianamenin kabulünden sonra; işin, davayı gören mahkemenin görevini aştığı veya dışında kaldığı anlaşılırsa, mahkeme bir kararla işi görevli mahkemeye gönderir."],
dogruCevap: "D)	Duruşmada suçun hukuki niteliğinin değiştiğinden bahisle görevsizlik kararı verilerek dosya alt dereceli mahkemeye gönderilebilir."},


{//140 * 
metin: "  34. 5271 sayılı Ceza Muhakemesi Kanunu'na göre kovuşturmanın görevli ve yetkili olan mahkemenin bulunduğu yerde yapılması kamu güvenliği için tehlikeli olursa, davanın naklini aşağıdakilerden hangisi ister?",
secenekler: [" A)	Adalet Bakanı Yargıtaydan ister." , " B)	Görevli ve yetkili mahkeme Yargıtaydan ister." , " C)	Hâkimler ve Savcılar Yüksek Kurulu Yargıtaydan ister." , " D)	Adalet Bakanı Hâkimler ve Savcılar Yüksek Kurulundan ister." , " E)	Görevli ve yetkili mahkeme Hâkimler ve Savcılar Yüksek Kurulundan ister."],
dogruCevap: "A)	Adalet Bakanı Yargıtaydan ister."},


{//141 * 
metin: "  35.<br> I. İlgili tarafın yüzüne karşı verilen karar kendisine açıklanır ve isterse kararın bir örneği de verilir.<br> II.	İlgili taraf serbest olmayan bir kişi veya tutuklu ise tebliğ edilen karar, kendisine okunmaz, anlatılmaz. <br> III.	Koruma tedbirlerine ilişkin olanlar hariç, aleyhine kanun yoluna başvurulabilecek hâkim veya mahkeme kararları, hazır bulunamayan ilgilisine tebliğ olunur. 5271 sayılı Ceza Muhakemesi Kanunu'na göre 'kararların açıklanması ve tebliği' ile ilgili yuka-rıdakilerden hangileri doğrudur?",
secenekler: [" A) Yalnızl" , " 	B) I ve II" , "  C) I ve III" , " 	D) II ve III" , "  E) I, II ve III"],
dogruCevap: "C) I ve III"},

{//142 * 
metin: "  36. <br> I. Eski hâle getirme isteminin reddine ilişkin karar kesindir.<br> II.	Eski hâle getirme isteminin kabulüne ilişkin karar kesindir.<br> III.	Süresi içinde usul işlemi yapılsaydı, esasa hangi mahkeme hükmedecek idiyse, eski hâle getirme dilekçesi hakkında da o mahkeme karar verir.<br> IV.	Eski hâle getirme dilekçesi, kararın yerine getirilmesini durdurmaz; ancak, mahkeme yerine getirmeyi erteleyebilir. 5271 sayılı Ceza Muhakemesi Kanunu'na göre 'eski hâle getirme dilekçesi üzerine verilecek karar' ile ilgili yukarıdakilerden hangileri doğrudur?",
secenekler: [" A) I ve IV" , "	B) III ve IV" , " C) I, II ve III" , " D) II, III ve IV" , "  E) I, II, III ve IV"],
dogruCevap: "D) II, III ve IV"},



{//143 * 
metin: "  37. 5271 sayılı Ceza Muhakemesi Kanunu'na göre 'hükmün gerekçesi ve hüküm fıkrasının içereceği hususlar' ile ilgili olarak hükmün gerekçesi, tümüyle tutanağa geçirilmemişse açıklanmasından itibaren en geç kaç gün içinde dava dosyasına konulur?",
secenekler: [" A) Yirmi" , "	B) On beş" , " C) On iki" , "  D) On" , " E) Beş"],
dogruCevap: "B) On beş"},


{//144 * 
metin: "  38. 5271 sayılı Ceza Muhakemesi Kanunu'na göre  mahkeme kararlarından hangisi temyiz edilebilir?",
secenekler: [" A)	Bölge adliye mahkemesi ceza dairelerinin bozma dışında kalan hükümleri" , " B)	İlk derece mahkemelerinden verilen beş yıl veya daha az hapis cezalarını artırmayan bölge adliye mahkemesi kararları" , " C)	Adli para cezasını gerektiren suçlarda ilk derece mahkemelerinden verilen hükümlere ilişkin her türlü bölge adliye mahkemesi kararları" , " D)	Sadece eşya veya kazanç müsaderesine ilişkin ilk derece mahkemesi kararları ile ilgili olarak istinaf başvurusunun esastan reddine dair kararları" , "  E)	İlk derece mahkemelerinin görevine giren ve kanunda üst sınırı iki yıla kadar (iki yıl dâhil) hapis cezasını gerektiren suçlara ilişkin her türlü bölge adliye mahkemesi kararları"],
dogruCevap: "A)	Bölge adliye mahkemesi ceza dairelerinin bozma dışında kalan hükümleri"},



{//145 * 
metin: "  39. 5271 sayılı Ceza Muhakemesi Kanunu'na göre Yargıtay ceza dairelerinden birinin kararına karşı Yargıtay Cumhuriyet Başsavcısı, resen veya istem üzerine, ilamın kendisine verildiği tarihten itibaren kaç gün içinde Ceza Genel Kuruluna itiraz edebilir?",
secenekler: [" A) Doksan" , " B) Yetmiş beş" , "  C) Altmış" , " D) Kırk" , " E) Otuz"],
dogruCevap: " E) Otuz"},



{//146*
metin: "  40. 492 sayılı Harçlar Kanunu'na göre hakem kararlarının infazı lazım geldiğine dair mahkeme başkanı veya hâkim tarafından verilen şerhlerden, hakem kararının mahiyetine göre aşağıdaki harçlardan hangisi alınır?",
secenekler: [" A)	Keşif harcı" , " B)	Celse harcı" , " C)	Başvuru harcı" , " D)	Karar ve ilam harcı" , " E)	Temyiz, istinaf ve itiraz harcı"],
dogruCevap: "D)	Karar ve ilam harcı"},


{//147 *
metin: "  41. 492 sayılı Harçlar Kanunu'na göre 'karşılık davalar ve davaya müdahale' kapsamında davaya müdahale eden kimse, kanun yollarına müracaat ederse iltihak ettiği taraftan alınan harca göre ödeyeceği harçla ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A)	Eşit harcı öder." , " B)	Harç ödemez." , " C)	Harcın % 50'sini öder." , " D)	Harcı % 50 fazlasıyla öder." , " E)	Harç miktarını mahkeme belirler."],
dogruCevap: "A)	Eşit harcı öder."},


{//148 * 
metin: "  42. 492 sayılı Harçlar Kanunu'na göre tashihi karar talebinin kabulü üzerine temyiz olunan hüküm tasdik edilirse yeniden ne kadar harç alınır?",
secenekler: ["A)	Ne kadar harç alınacağını hâkim belirler." , " B)	Temyiz olunan hükümden alınmış olunan harç kadar" , " C)	Temyiz olunan hükümden alınmış olan harcın yarısı kadar" , " D)	Temyiz olunan hükümden alınmış olunan harcın iki katı kadar" , " E)	Temyiz olunan hükümden alınmış olunan harcın bir buçuk katı kadar"],
dogruCevap: " B)	Temyiz olunan hükümden alınmış olunan harç kadar"},



{//149 *
metin: "  43. <br> I. Vasinin hesabının görülmesi dolayısıyla alınacak harçlar, vesayet altındaki şahsa izafeten vasiden alınır. <br> II.	Genel olarak yargı harçlarını davayı açan veya harca mevzu olan işlemin yapılmasını isteyen kişiler ödemekle mükelleftir. <br> III.	Herhangi bir istek olmaksızın resen yapılacak işlemlere ait harçlar, aksine hüküm yoksa lehine işlem yapılan kişilerden alınmaz. 492 sayılı Harçlar Kanunu'na göre 'mükellef' ile ilgili yukarıdakilerden hangileri doğrudur?",
secenekler: [" A) Yalnızl" , "	B) I ve II" , " C) I ve III" , " D) II ve III" , "E) I, II ve III"],
dogruCevap: "B) I ve II"},


{//150
metin: "  44. 'Davadan feragat veya davayı kabul veya sulh, muhakemenin ilk celsesinde vuku bulursa, karar ve ilam harcının —, daha sonra olursa — alınır.' 492 sayılı Harçlar Kanunu'na göre yukarıdaki hükümde yer alan boşluklara sırasıyla hangisi getirilmelidir?",
secenekler: [" A)	üçte biri - üçte ikisi" , " B)	üçte ikisi - üçte biri" , " C)	üçte ikisi - tamamı" , " D)	tamamı - üçte ikisi" , " E)	üçte biri - tamamı"],
dogruCevap: " A)	üçte biri - üçte ikisi"},



{//151 * 
metin: "  45. 492 sayılı Harçlar Kanunu'na göre vergi mahkemelerince verilen nihai kararlar üzerinden alınan nispi ve maktu harçlar (başvurma harcı hariç) Danıştayca mükellef lehine karar verilmesi hâlinde mükellefçe kazanılan miktar üzerinden, kesin kararın tebliği tarihinden itibaren en geç ne kadar zaman içinde geri verilir veya istek üzerine vergi borcuna mahsup edilir?",
secenekler: [" A) Üç ay" , "	B) Altı ay" , " C) Dokuz ay" , " D) Bir yıl " , " E) On sekiz ay"],
dogruCevap: "D) Bir yıl"},

{//152 * 
metin: "  46. 'Adli yargı ilk derece ceza mahkemeleri tarafından verilen kararların istinaf başvurusu üzerine Cumhuriyet başsavcılığınca yapılacak inceleme sonucu daire tarafından verilebilecek karar ile ilgili düşünceyi içeren ve bu düşünce yazısının hazırlanması sırasında yapılan işlemlerin tutulduğu kayıttır.' Bölge Adliye ve Adli Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre bölge adliye mahkemesi Cumhuriyet başsavcılığı yazı işleri müdürlüğü hizmetleri ile ilgili yukarıda tanımlanan kayıt hangisidir?",
secenekler: [" A) Esas kaydı" , " 	B) Temyiz kaydı" , " C) Tebliğname kaydı" , " D) Suç eşyası kaydı " , "E) İstinabe kaydı"],
dogruCevap: "C) Tebliğname kaydı"},



{//153 *
metin: "  47. Bölge Adliye ve Adli Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre bölge adliye mahkemesi ceza daireleri yazı işleri hizmetleri ile ilgili 'tarafların yokluğunda verilen kararların tebliğe çıkarılması' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Karar, vekille takip edilen davalarda vekile tebliğ olunur." , " B)	Karar, müdafi ile takip edilen davalarda müda fiye tebliğ olunur." , " C)	Karar, vekil veya müdafinin olmadığı davalarda sanığa ve katılana tebliğ olunur." , " D)	Karar, müdafinin birden fazla olduğu davalarda bunlardan birine tebliğ olunur." , "  E)	Karar, vekilin birden fazla olduğu davalarda bunlardan her birine ayrı ayrı tebliğ olunur."],
dogruCevap: " E)	Karar, vekilin birden fazla olduğu davalarda bunlardan her birine ayrı ayrı tebliğ olunur."},


{//154 * 
metin: "  48.<br> I. Evrak taranarak UYAP'a kaydedilir.<br> II.	Evrak UYAP'tan zabıt kâtibinin iş listesi ekranına gönderilir.<br> III.	Fiziki evrak ilgili personel tarafından aynı gün zimmet karşılığında teslim alınmak üzere ön büroda muhafaza edilir.<br> IV.	Başvuru sahibine, evrakın alındığına ve elektronik ortama aktarıldığına dair aynı zamanda havale yerine geçen bir alındı belgesi ücretsiz olarak verilir. Bölge Adliye ve Adli Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre, Cumhuriyet başsavcılığında bulunan dosyalara dilekçe, belge ya da diğer evrakı ibraz etmek isteyen kişinin UYAP'ta yapılan sorgulamada mağdur, şikâyetçi, suçtan zarar gören ve vekilleri ile sanık ve müdafi olduğunun anlaşılması hâlinde yukarıdaki işlemlerin yapılış sırası hangisidir?",
secenekler: [" A) I-II-III-IV	" , " B) I - IV - II - III" , " C)II-III-IV-I" , "  D) IV-1-III-II" , " E) III-I-II-IV"],
dogruCevap: "B) I - IV - II - III"},


{//155 * 
metin: "  49. Bölge Adliye ve Adli Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre aşağıdakilerden hangisi adli yargı ilk derece hukuk mahkemeleri yazı işleri hizmetlerinde yazı işleri müdürünün görev ve sorumluluklarından değildir?",
secenekler: [" A)	Arşivin düzenli tutulmasını sağlamak" , " B)	Talep hâlinde gerekçeli kararın tebliğini sağlamak" , " C)	Yargılamanın bulunduğu aşamanın gereklerini yerine getirmek" , " D)	Karar ve tutanakları dikkat ve itina ile yazarak imzasız bırakmamak" , " E)	Bilirkişilere fiziki ortamda teslimi gereken dosyalarla ilgili işlemleri yerine getirmek"],
dogruCevap: " D)	Karar ve tutanakları dikkat ve itina ile yazarak imzasız bırakmamak"},


{//156 * 
metin: "  50. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre eski hâle getirme, işlemin süresinde yapılamamasına sebep olan engelin ortadan kalkmasından itibaren en geç ne kadar zaman içinde talep edilmelidir?",
secenekler: [" A) Beş gün" , " B) Bir hafta" , " C) İki hafta" , "D) Yirmi gün" , " E) Bir ay"],
dogruCevap: " C) İki hafta"},


{//157 * 
metin: "  51. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre hangi dava yoluyla mahkemeden, dava linin, bir şeyi vermeye veya yapmaya yahut yapmamaya mahkûm edilmesi talep edilir?",
secenekler: [" A) Eda davası" , "	B) Tespit davası" , " C) İnşai dava" , " D) Kısmi dava E) Terditli dava"],
dogruCevap: "A) Eda davası"},


{//158 * 
metin: "  52. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre dava dilekçesinin içeriğinde aşağıdakilerden hangisiyle ilgili hususların eksik olması hâlinde, hâkim davacıya eksikliği tamamlaması için bir haftalık kesin süre verir?",
secenekler: [" A)	Dayanılan hukuki sebepler" , " B)	Davacının, varsa kanuni temsilcisinin veya vekilinin imzası" , " C)	İddia edilen her bir vakıanın hangi delillerle ispat edileceği" , " D)	Davanın konusu ve malvarlığı haklarına ilişkin davalarda, dava konusunun değeri" , " E)	Davacının iddiasının dayanağı olan bütün vakıaların sıra numarası altında açık özetleri"],
dogruCevap: "B)	Davacının, varsa kanuni temsilcisinin veya vekilinin imzası"},



{//159 * 
metin: "  53. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre yazılı yargılama kapsamında 'tarafların ikinci dilekçeleri' ile ilgili olarak davacı cevaba cevap dilekçesini, davalı da ikinci cevap dilekçesini dilekçelerin kendilerine tebliğinden itibaren en geç ne kadar zaman içinde verebilir?",
secenekler: [" A) Beş gün" , " B) Bir hafta" , " C) On gün" , " D) İki hafta E) Yirmi gün"],
dogruCevap: "D) İki hafta "},


{//160 * 
metin: "  54. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre 'hüküm, hükmün verilmesi ve tefhimi' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Mahkeme, usule veya esasa ilişkin bir nihai kararla davayı sona erdirir. Yargılama sonunda uyuşmazlığın esası hakkında verilen nihai karar, hükümdür." , " B)	Zorunlu nedenlerle sadece hüküm sonucunun tefhim edildiği hâllerde, gerekçeli kararın tefhim tarihinden başlayarak bir ay içinde yazılması gerekir." , " C)	Hükme ilişkin hususlar, niteliğine aykırı düşse bile, usule ilişkin nihai kararlar hakkında da uygulanır." , " D)	Hükmün tefhimi, her hâlde hüküm sonucunun duruşma tutanağına geçirilerek okunması suretiyle olur." , " E)	Hüküm, yargılamanın sona erdiği duruşmada verilir ve tefhim olunur."],
dogruCevap: " C)	Hükme ilişkin hususlar, niteliğine aykırı düşse bile, usule ilişkin nihai kararlar hakkında da uygulanır."},


{//161 * 
metin: "  55. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre 'feragat ve kabulün şekli ve zamanı' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Feragat ve kabul, kayıtsız ve şartsız olmalıdır." , " B)	Feragat ve kabul, hüküm kesinleşinceye kadar her zaman yapılabilir." , " C)	Feragat ve kabul, dilekçeyle veya yargılama sırasında sözlü olarak yapılır." , " D)	Feragat ve kabulün hüküm ifade etmesi, karşı tarafın ve mahkemenin muvafakatına bağlıdır." , " E)	Kısmen feragat veya kabulde, feragat edilen veya kabul edilen kısmın, dilekçede yahut tutanakta açıkça gösterilmesi gerekir."],
dogruCevap: "D)	Feragat ve kabulün hüküm ifade etmesi, karşı tarafın ve mahkemenin muvafakatına bağlıdır."},

{//162 * 
metin: "  56. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre 'adli yardım talebi' ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Adli yardım talebine ilişkin evrak, her türlü harç ve vergiye tabidir." , " B)	Adli yardım, asıl talep veya işin karara bağlanacağı mahkemeden istenir." , " C)	Adli yardım, icra ve iflas takiplerinde takibin yapılacağı yerdeki icra mahkemesinden istenir." , " D)	Talepte bulunan kişi, iddiasının özeti ile birlikte, iddiasını dayandıracağı delilleri ve yargılama giderlerini karşılayabilecek durumda olmadığını gösteren mali durumuna ilişkin belgeleri mahkemeye sunmak zorundadır." , " E)	Kanun yollarına başvuru sırasında adli yardım talebi bölge adliye mahkemesine veya Yargı-taya yapılır."],
dogruCevap: " A)	Adli yardım talebine ilişkin evrak, her türlü harç ve vergiye tabidir."},


{//163*
metin: "  57. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre bölge adliye mahkemelerinin aşağıdaki kararlarından hangisi hakkında temyiz yoluna başvurulabilir?",
secenekler: [" A)	Yargı çevresi içinde bulunan ilk derece mahkemeleri arasındaki yetki ve görev uyuşmazlıklarını çözmek için verilen kararlar" , " B)	Miktar veya değeri yirmibeşbin Türk lirasını (bu tutar dâhil) geçmeyen davalara ilişkin kararlar" , " C)	Soybağına ilişkin sonuçlar doğuran davalara ilişkin kararlar" , " D)	Geçici hukuki korumalar hakkında verilen kararlar" , " E)	Çekişmesiz yargı işlerinde verilen kararlar"],
dogruCevap: "C)	Soybağına ilişkin sonuçlar doğuran davalara ilişkin kararlar"},


{//164 * 
metin: "  58. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre kesinleşen ve yerine getirilmesi onaylanan cezanın infazı aşağıdakilerden hangisi tarafından izlenir ve denetlenir?",
secenekler: [" A)	Cumhuriyet savcısı" , " B)	Yargıtay Ceza Dairesi" , " C)	Ceza ve İnfaz Kurumu Müdürlüğü" , " D)	Hâkimler ve Savcılar Yüksek Kurulu" , " E)	Kararı veren hâkim ya da mahkeme"],
dogruCevap: "A)	Cumhuriyet "},


{//165 * 
metin: "  59. <br> I. Terör suçları, örgüt faaliyetleri çerçevesinde işlenen suçlardan mahkûm olanlar <br>II.	Cinsel dokunulmazlığa karşı işlenen suçlardan mahkûm olanlar <br>III.	Mükerrirlere özgü infaz rejimi uygulanmasına karar verilenler <br> IV.	Disiplin veya tazyik hapsine mahkûm olanlar 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre 'hükümlünün istemiyle infazın ertelenmesi ile ilgili hükümler' yukarıdakilerden hangileri hakkında uygulanmaz?",
secenekler: [" A) I ve IV" , " B) III ve IV" , " C) I, II ve III" , " D) II, III ve IV" , " E) I, II, III ve IV"],
dogruCevap: "E) I, II, III ve IV"},


{//166 * 
metin: "  60. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre koşullu salıverilme için infaz kurumunda geçirilmesi gereken sürelerden hangisi yanlıştır?",
secenekler: [" A)	Birden fazla müebbet hapis cezasına mahkûmiyet hâlinde otuz yıl" , " B)	Birden fazla süreli hapis cezasına mahkûmiyet hâlinde en fazla otuz yıl" , " C)	Birden fazla ağırlaştırılmış müebbet hapis cezasına mahkûmiyet hâlinde otuz altı yıl" , " D)	Bir müebbet hapis cezası ile süreli hapis cezasına mahkûmiyet hâlinde en fazla otuz yıl" , " E)	Bir ağırlaştırılmış müebbet hapis cezası ile süreli hapis cezasına mahkûmiyet hâlinde en fazla otuz altı yıl"],
dogruCevap: "B)	Birden fazla süreli hapis cezasına mahkûmiyet hâlinde en fazla otuz yıl"},


{//167 * 
metin: "  61. T.C. Anayasası'na göre egemenlik ile ilgili  aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Egemenlik, kayıtsız şartsız milletindir." , " B)	Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz." , " C)	Egemenlik yetkisi Türkiye Büyük Millet Meclisinin uhdesindedir." , " D)	Hiçbir kimse veya organ kaynağını Anayasa'dan almayan bir Devlet yetkisi kullanamaz. " , "E)	Türk Milleti, egemenliğini, Anayasa'nın koyduğu esaslara göre, yetkili organları eliyle kullanır."],
dogruCevap: "C)	Egemenlik yetkisi Türkiye Büyük Millet Meclisinin uhdesindedir."},



{//168 * 
metin: "  62. 'Herkes, dil, —, felsefi inanç, din, mezhep ve benzeri sebeplerle ayrım gözetilmeksizin kanun önünde eşittir.' Aşağıdakilerden hangisi T.C. Anayasası'nın kanun önünde eşitlik ilkesi ile ilgili hükümde boş bırakılan yerdeki kavramlardan biri değildir?",
secenekler: [" A) ırk" , " 	B) renk" , " C) cinsiyet" , " D) siyasi düşünce" , " E) tabiiyet"],
dogruCevap: "E) tabiiyet"},


{//169 * 
metin: "  63. T.C. Anayasası'na göre temel hak ve hürriyetler, yabancılar için aşağıdakilerden hangisine uygun olarak sınırlanabilir?",
secenekler: [" A) Milletlerarası hukuka uygun olarak kanunla sınırlanabilir." , " B)	Milletlerarası hukuka uygun olarak Yönetmelikle sınırlanabilir." , " C)	Avrupa Birliği müktesebatına uygun olarak Anayasa ile sınırlanabilir." , " D)	Milletlerarası hukuka uygun olarak Cumhurbaşkanlığı kararnamesi ile sınırlanabilir." , "  E)	Milletlerarası antlaşmalara uygun olarak kanun hükmünde kararname ile sınırlanabilir."],
dogruCevap: "A) Milletlerarası hukuka uygun olarak kanunla sınırlanabilir."},


{//170 * 
metin: "  64- T.C. Anayasası'na göre yakalanan veya tutuklanan kişilere, toplu suçlarda, yakalama veya tutuklama sebepleri ve haklarındaki iddiaların bildirim zamanının en üst sınırı aşağıdakilerden hangisidir?",
secenekler: [" A)	Sözlü olarak derhâl" , " B)	Emniyet sorgusu sırasında" , " C)	Savcı huzuruna çıkarılıncaya kadar" , " D)	Hâkim huzuruna çıkarılıncaya kadar" , " E)	Yakalama anında yazılı olarak derhâl"],
dogruCevap: "D)	Hâkim huzuruna çıkarılıncaya kadar"},


{//171 * 
metin: "  65.<br> I. Millî güvenlik <br>II.	Kamu düzeni <br>III.	Suç işlenmesinin önlenmesi <br>IV.	Genel sağlık ve genel ahlakın korunması <br>V.	Başkalarının hak ve özgürlüklerinin korunması T.C. Anayasası'na göre, yukarıdaki sebeplerden hangilerine bağlı olarak usulüne göre verilmiş hâkim kararının bulunması durumunda kişilerin konutuna girilebilir ve arama yapılabilir?",
secenekler: [" A) I, II ve III	" , " B) II, IVveV" , "  C) I, III, IV ve V" , "D) 1,11,111 ve IV" , " E) I, II, III, IV ve V"],
dogruCevap: "E) I, II, III, IV ve V"},


{//172 * 
metin: "  66. T.C. Anayasası'na göre suç ve cezalara ilişkin esaslarla ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Suçluluğu hükmen sabit oluncaya kadar, kimse suçlu sayılamaz." , " B)	Hiçbir idare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz." , " C)	Kimseye suçu işlediği zaman kanunda o suç için konulmuş olan cezadan daha ağır bir ceza verilemez." , " D)	Kimse, işlendiği zaman yürürlükte bulunan kanunun suç saymadığı bir fiilden dolayı cezalandırılmaz." , " E)	Hiç kimse kendisini ve kanunda gösterilen yakınlarını suçlayan bir beyanda bulunmaya veya bu yolda delil göstermeye zorlanamaz."],
dogruCevap: "B)	Hiçbir idare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz."},


{//173 * 
metin: "  67. T.C. Anayasası'na göre çalışma şartları ve dinlenme hakkı ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Dinlenmek, çalışanların hakkıdır." , " B)	Küçükler ve kadınlar çalışma şartları bakımından özel olarak korunurlar." , " C)	Bedeni ve ruhi yetersizliği olanlar çalışma şartları bakımından özel olarak korunurlar." , "  D)	Ücretli hafta ve bayram tatili ile ücretli yıllık izin hakları ve şartları kanunla düzenlenir." , " E)	Kamu yararının gerektirdiği hâllerde şahıslar yaşına, cinsiyetine ve gücüne uymayan işlerde çalıştırılabilir."],
dogruCevap: " E)	Kamu yararının gerektirdiği hâllerde şahıslar yaşına, cinsiyetine ve gücüne uymayan işlerde çalıştırılabilir."},


{//174 * 
metin: "  68. T.C. Anayasası'na göre toplu iş sözleşmeleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Toplu iş sözleşmesinin nasıl yapılacağı kanunla düzenlenir." , " B)	Kamu Görevlileri Hakem Kurulu kararlarına karşı temyiz yoluna gidilebilir." , " C)	Memurlar ve diğer kamu görevlileri, toplu sözleşme yapma hakkına sahiptirler." , "D)	Toplu sözleşme yapılması sırasında uyuşmazlık çıkması hâlinde taraflar Kamu Görevlileri Hakem Kuruluna başvurabilir." , " E)	İşçiler ve işverenler, karşılıklı olarak ekonomik ve sosyal durumlarını ve çalışma şartlarını düzenlemek amacıyla toplu iş sözleşmesi yapma hakkına sahiptirler."],
dogruCevap: " B)	Kamu Görevlileri Hakem Kurulu kararlarına karşı temyiz yoluna gidilebilir."},



{//175 * 
metin: "  69. T.C. Anayasası'na göre Türkiye Büyük Millet Meclisinin toplanma usulü ve tatil süreleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Meclis, bir yasama yılında en çok üç ay tatil yapabilir." , " B)	Türkiye Büyük Millet Meclisi, her yıl Ekim ayının ilk günü kendiliğinden toplanır." , " C)	Meclis Başkanı, üyelerin onda birinin yazılı istemi üzerine, Meclisi tatilde iken toplantıya çağırabilir." , " D)	Meclis, ara verme veya tatil sırasında, doğrudan doğruya veya Bakanlar Kurulunun istemi üzerine, Cumhurbaşkanınca toplantıya çağrılabilir." , " E)	Ara verme veya tatil sırasında toplanan Türkiye Büyük Millet Meclisinde, öncelikle bu toplantıyı gerektiren konu görüşülmeden ara verme veya tatile devam edilemez."],
dogruCevap: "C)	Meclis Başkanı, üyelerin onda birinin yazılı istemi üzerine, Meclisi tatilde iken toplantıya çağırabilir."},


{//176 
metin: "  70. T.C. Anayasası'na göre duruşmalar ve kararlar ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Mahkemelerde duruşmaların herkese açık olması esastır." , " B)	Bütün mahkemelerin her türlü kararları gerekçeli olarak yazılır." , " C)	Davaların en az giderle ve mümkün olan süratle sonuçlandırılması, yargının görevidir." , " D)	Harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gazilerin yargılanması hakkında kanunla özel hükümler konulur." , " E)	Genel ahlâkın veya kamu güvenliğinin kesin olarak gerekli kıldığı hâllerde duruşmaların bir kısmının veya tamamının kapalı yapılmasına karar verilebilir."],
dogruCevap: "D)	Harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gazilerin yargılanması hakkında kanunla özel hükümler konulur."},


{//177* 
metin: "  71. Mustafa Kemal, aşağıdaki okullardan hangisi ni bitirdikten sonra Harp Okuluna girmiştir?",
secenekler: [" A)	Harp Akademisini" , " B)	Mahalle Mektebini" , " C)	Manastır Askerî İdadisini" , " D)	Selanik Askerî Rüştiyesini" , " E)	Selanik Mülkiye Rüştiyesini"],
dogruCevap: "C)	Manastır Askerî İdadisini"},


{//178 *
metin: "  72. TBMM, aşağıdaki antlaşmalardan hangisini imzalayanları vatan haini ilan etmiştir?",
secenekler: [" A)	Uşi Antlaşması" , " B)	Sevr Antlaşması" , " C)	Gümrü Antlaşması" , " D)	Brest - Litowsk Antlaşması" , " E)	Mudanya Ateşkes Antlaşması"],
dogruCevap: "B)	Sevr Antlaşması"},


{//179 * 
metin: "  73. Aşağıdakilerden hangisi, Atatürk Dönemi'nde kabul edilen Türk Medeni Kanunu'nun kadın - erkek eşitliğini sağladığı konulardan biri değildir?",
secenekler: [" A) Miras" , " B) Velayet" , " C) Boşanma" , " D) Meslek seçme" , " E) Seçme - seçilme"],
dogruCevap: "E) Seçme - seçilme"},


{//180 * 
metin: "  74. Atatürk ilke ve inkılaplarında, aşağıdaki düşüncelerden hangisinin yeri yoktur?",
secenekler: [" A)	Toplumdaki sınıf mücadelesini destekleme" , " B)	Türk kültürünü çağdaş uygarlık düzeyine çıkarma" , " C)	Yönetimde millet egemenliğini devam ettirme" , " D)	Din ve devlet işlerini birbirinden ayrı tutma" , " E)	Yurtta ve dünyada barışın korunmasından yana olma"],
dogruCevap: "A)	Toplumdaki sınıf mücadelesini destekleme"},


{//181 * 
metin: "   75. Millî Güvenlik Kurulunda alınan kararların niteliği için, aşağıdakilerden hangisi söylenebilir?",
secenekler: [" A) Bağlayıcıdır." , " B) Zorlayıcıdır." , " C) Emredicidir." , " D) Tavsiye edicidir. " , " E) Kanun hükmündedir."],
dogruCevap: "D) Tavsiye edicidir."},

{//182 -------------
metin: "  76. Türk idare sistemi ve devlet teşkilatına göre aşağıdakilerden hangisi 'iki yanlı' bir idari işlemdir?",
secenekler: [" A) Tüzükler" , " 	B) İdari kararlar" , "  C) İdari sözleşmeler" , "  D) Yönetmelikler " , "  E) Kanun Hükmünde Kararnameleri"],
dogruCevap: "C) İdari sözleşmeler"},


{//183 ---------------
metin: "  77. I. Bakanlar Kurulunda eşgüdüm sağlarlar. II.	Başbakan tarafından verilecek görevleri yerine getirirler. III.	Özel önem ve öncelik taşıyan konularda tecrübelerinden istifade edilir. Başbakan yardımcılarıyla ilgili yukarıdakilerden hangileri doğrudur?",
secenekler: [" A) I, II ve III" , " 	B) II ve III" , " C) I ve III" , "D) I ve II" , " E) Yalnız I"],
dogruCevap: " A) I, II ve III"},


{//184 -----------
metin: "  78. Bakanlıkların merkez teşkilatında aşağıdakilerden hangisi ihtiyaca göre kurulabilecek danışma ve denetim birimlerinden biri değildir?",
secenekler: [" A)	Hukuk Müşavirliği" , " B)	Bakanlık Müşavirleri" , "  C)	Teftiş Kurulu Başkanlığı" , " D)	Personel Genel Müdürlüğü" , " E)	Basın ve Halkla İlişkiler Müşavirliği"],
dogruCevap: "D)	Personel Genel Müdürlüğü"},


{//185 ------- 
metin: "  79. Aşağıdakilerden hangisi hizmet yönünden yerinden yönetimin özelliklerinden biri değildir?",
secenekler: [" A)	Devletten ayrı bir tüzel kişilikleri vardır." , " B)	Merkezi idareden belli ölçüde özerktirler." , " C)	Devletten ayrı bir mal varlığına sahiptirler." , " D)	Merkezi idarenin hiyerarşik değil, vesayet denetimine tabidirler." , " E)	Ayrı bir iradeye sahip değildirler, bu şekilde hak ve borç altına giremezler."],
dogruCevap: " E)	Ayrı bir iradeye sahip değildirler, bu şekilde hak ve borç altına giremezler."},


{//186 -------
metin: "  80. Aşağıdakilerden hangisi başkentteki yardımcı kuruluşlardan biri değildir?",
secenekler: [" A) Sayıştay" , " 	B) Yargıtay" , " C) Danıştay" , "D) Millî Güvenlik Kurulu" , " E) Yüksek Planlama Kurulu"],
dogruCevap: "B) Yargıtay"},


{//187 * 
metin: "  81. 657 sayılı Devlet Memurları Kanunu'na göre, 5 yıl süreli yükseköğrenimi bitirenlerin (özel durumlar hariç) memuriyete giriş derece ve kademesi aşağıdakilerden hangisidir?",
secenekler: ["A) 8/1" , " B) 8/2" , " C) 8/3" , " D) 9/1" , " E) 9/2"],
dogruCevap: "E) 9/2"},


{//188 *
metin: "  82. 657 sayılı Devlet Memurları Kanunu'na göre günlük çalışmanın başlama ve bitme saatleri ile öğle dinlenme süresi, bölgelerin ve hizmetin özelliklerine göre merkezde aşağıdaki mercilerden hangisi tarafından belirlenir?",
secenekler: [" A) Başbakanlık" , " B) Bakanlar Kurulu" , " C) İçişleri Bakanlığı" , "  D) Maliye Bakanlığı " , " E) Devlet Personel Başkanlığı"],
dogruCevap: "B) Bakanlar Kurulu TABİKİ 2016 SORUSU OLDUĞU İÇİN DOĞRU CEVAP BU ANCAK ŞU ANDA CUMHURBAŞKANI "},

{//189 * 
metin: "  83. 657 sayılı Devlet Memurları Kanunu'na göre memura, aylık ve özlük hakları korunarak, verilecek raporda gösterilecek lüzum üzerine, kanser, verem ve akıl hastalığı gibi uzun süreli bir tedaviye ihtiyaç gösteren hastalığı hâlinde en fazla kaç aya kadar izin verilir?",
secenekler: [" A) On" , "	B) On iki" , " C) On dört" , " D) On altı" , " E) On sekiz"],
dogruCevap: "E) On sekiz"},


{//190 *
metin: "  84. 657 sayılı Devlet Memurları Kanunu'na göre özürsüz ve kesintisiz 3-9 gün göreve gelmemek aşağıdaki disiplin cezalarından hangisini gerektirir?",
secenekler: [" A)	Kademe ilerlemesinin durdurulması" , " B)	Devlet memurluğundan çıkarma" , " C)	Aylıktan kesme" , " D)	Uyarma" , " E)	Kınama"],
dogruCevap: "A)	Kademe ilerlemesinin durdurulması"},


{//191 *
metin: "  85. <br> I. İlgili kurumlardan bilgi alma <br> II.	Mahallen keşif yapma veya yaptırma <br> III.	İlgilinin özlük dosyasını ve her nevi evrakı inceleme  <br> IV.	Yeminli tanık ve bilirkişi dinleme veya niyabeten dinletme 657 sayılı Devlet Memurları Kanunu'na göre yüksek disiplin kurulları kendilerine intikal eden dosyaların incelenmesinde, gerekli gördükleri takdirde yukarıdakilerden hangilerini yapmaya yetkilidirler?",
secenekler: [" A) Yalnızl" , " B) Yalnız II" , " C) I ve II" , "	D) II, III ve IV" , " E) I, II, III ve IV"],
dogruCevap: "E) I, II, III ve IV"},


{//192
metin: "  86. Hissedince sana vurulduğumu, Anladım ne kadar yorulduğumu, Sakinleştiğimi, durulduğumu Denize dökülen bir pınar gibi. Bu dizelerde aşağıdaki ses olaylarından han gisi yoktur?",
secenekler: [" A) Ünlü daralması" , " B) Ünsüz yumuşaması" , " C) Ünlü değişimi" , " D) Ünsüz türemesi" , " E) Ünsüz sertleşmesi"],
dogruCevap: "A) Ünlü daralması"},


{//193
metin: "  87. (I) Anadolu'da hangi büyücek kasabaya ayak atsanız tuluat tiyatrolarından birine rastlarsınız. (II)	Hiç değilse çarşı duvarlarında kafilenin yakın bir zaman da buraya konup göçmüş olduğunu gösteren yırtık bir ilana tesadüf edersiniz. (III)	Oyunlar kasabanın bir tiyatrosu varsa orada, yoksa bir gazinoda veya kahvede oynanır. (IV)	Ahali için birkaç peyke, aralıksız kahve iskemleleri, oyuncular için yüksek bir kerevet yeter de artar bile. (V) Yeter ki gönüller şen, umutlar taze olsun. Bu parçada numaralanmış cümlelerin hangisinde yazım yanlışı vardır?",
secenekler: [" A) I." , " B) II." , " C) III." , " D) IV." , " E)V."],
dogruCevap: "B) II."},


{//194
metin: "  88. Aşağıdaki cümlelerden hangisinin öznesi isim tamlamasıdır?",
secenekler: [" A)	Bozburun Dağfnın eteklerinde, sarıçiçeklerle bezeli bir tarlanın kenarında yürüyoruz." , " B)	İstanbullular henüz baharın kokusuna alışma-mışken şiddetli sıcaklarla karşılaştılar." , " C)	Bölgenin güzelliği ekipteki herkesi farklı bir hayal âlemine sürüklemişti." , " D)	Mavi bir yolculuk, birçok insanın hayalini süsleyen bir seyahat biçimidir." , " E)	Toprak yolda yürüyen çocuklar birden kendilerini yeşil bir vadide buldular."],
dogruCevap: "C)	Bölgenin güzelliği ekipteki herkesi farklı bir hayal âlemine sürüklemişti."},

{//195
metin: "  89. O yıllarda öğrencilere devlet (I) kalacak yer (II) kıyafet (III) ders kitabı (IV) kırtasiye malzemeleri (V) cep harçlığı sağlıyordu. Bu cümlede numaralı yerlerden hangisine farklı bir noktalama işareti getirilmelidir?",
secenekler: [" A) I. " , "B) II. " , "C) III." , " D) IV. " , "E)V."],
dogruCevap: "A) I."},


{//196
metin: "  90. Özellikle iş başvurularında bir kimsenin eğitimini, iş deneyimini, sosyal etkinliklerini, kişisel özellikleriyle ilgili kendisinin verdiği bilgileri, değerlendirmeleri içeren forma — denir. Bu cümlede boş bırakılan yere aşağıdakiler-den hangisi getirilmelidir?",
secenekler: [" A) biyografi" , "	B) öz geçmiş" , " C) mektup" , " D) günlük E) dilekçe"],
dogruCevap: "B) öz geçmiş"},


{//197
metin: "  91. 'Ne kadar dikkatlice tasavvur edilse ve ne kadar titizlikle hazırlansa da hukuki düzenlemelerin her etik davranış sorunu ve çıkar çatışması durumuyla etkili bir şekilde mücadele etmesi beklenemez. Sorunlar, belirsiz çeşitlilikte vuku bulmaktadır ve genellikle ince ve zor muhakemeleri gerektirir. En iyi kanunlar veya düzenlemeler bile gayretle ve zekice uygulanmazlarsa amaçlarına ulaşamazlar. Hiçbir kanun ve düzenlemeler dizgesi kişinin dürüstlüğü ve kendini kamu menfaatine adamasından daha etkili olamaz.' Verilen metinden etikle ilgili çıkarılacak sonuç aşağıdakilerden hangisidir?",
secenekler: [" A)	Hukuki düzenlemeler etik dışı davranışları engellemede tek başına yeterlidir." , " B)	Kamusal alandaki çıkar çatışmaları, kanunların iyi düzenlenmesi durumunda kesin olarak engellenir." , " C)	Hangi tedbir alınırsa alınsın, sorunların sınırsızlığından ve çeşitliliğinden dolayı etik olmayan davranışlar engellenemez." , " D)	Hukuki düzenlemelerle birlikte, kişinin dürüstlüğü ve kendini kamu menfaatine adaması etik dışı davranışların engellenmesinde en etkili çözüm yollarından biridir." , " E)	Kamusal yaşamda etik ile ilgili sorunların kaynağı, mevzuatın uygulanma biçiminden çok, içeriği ile ilgilidir."],
dogruCevap: "D)	Hukuki düzenlemelerle birlikte, kişinin dürüstlüğü ve kendini kamu menfaatine adaması etik dışı davranışların engellenmesinde en etkili çözüm yollarından biridir."},


{//198 * 
metin: "  92. Aşağıdakilerden hangisinin etik dışı davranışa zemin hazırlama olasılığı diğerlerine göre daha düşüktür? GÖRÜLDÜĞÜ GİBİ YORUM SORMUŞLAR",
secenekler: [" A)	Bir kamu kurumunun ofis malzemesi tedariki için kurduğu ihale komisyonunda, aynı zamanda ihaleye katılacak şirketlerden birinde pay sahibi bir kamu görevlisinin üye olarak bulunması" , " B)	Atamaya yetkili amirin, aynı okuldan ve aynı diploma derecesiyle mezun olan, yapılan sınavda da aynı performansı gösteren iki aday arasından yalnız birisini tercih edecek olması" , " C)	Bir kamu dairesine personel alımı için yetkili komisyonda, adaylardan birisiyle yakın akrabalığı söz konusu olan bir kamu görevlisinin üye olarak bulunması" , " D)	Bir kamu kurumunun tedarikten sorumlu yetkilisinin, tedarikçi bir firmanın kendisine yaptığı bedava tatil önerisini kabul etmesi" , " E)	Bir vergi denetim memurunun, eşinin çalıştığı bir şirketi denetlemesi"],
dogruCevap: "B)	Atamaya yetkili amirin, aynı okuldan ve aynı diploma derecesiyle mezun olan, yapılan sınavda da aynı performansı gösteren iki aday arasından yalnız birisini tercih edecek olması"},

{//199 *
metin: "  93. Aşağıdakilerden hangisi Kamu Görevlileri Etik Kurulunun görevlerinden biri değildir?",
secenekler: [" A)	Hediye alma yasağının kapsamını belirlemek ve uygulanmasını izlemek" , " B)	Kamuda etik kültürünü yerleştirmek üzere çalışmalar yapmak veya yaptırmak" , " C)	Etik davranış ilkelerinin ihlal edildiği iddiasıyla resen inceleme ve araştırma yapmak" , " D)	Kamu görevlilerinin görevlerini yürütürken uymaları gereken etik davranış ilkelerini belirlemek" , " E)	Kurumların etik davranış ilkeleri ile ilgili uygulamada karşılaştıkları sorunlara yönelik son karar merci olarak disiplin işlemi tesis etmek "],
dogruCevap: "E)	Kurumların etik davranış ilkeleri ile ilgili uygulamada karşılaştıkları sorunlara yönelik son karar merci olarak disiplin işlemi tesis etmek"},


{//200 *
metin: "  94. Görevlilerin, kamu hizmetlerini yerine getirirken aşağıdakilerden hangisini esas almaları kamu hizmeti bilinciyle örtüşmez?",
secenekler: [" A)	Vatandaşlar arasında tarafsız davranmak" , " B)	Sürekli gelişimi sağlayacak tedbirler almak" , " C)	Hizmetleri yürütürken merkeze vatandaşı değil idareyi almak" , " D)	Hizmetlerin yerine getirilmesinde hesap verebilir olmak" , " E)	Hizmet sunanın kişisel menfaatini değil kamu yararını gözetmek"],
dogruCevap: "C)	Hizmetleri yürütürken merkeze vatandaşı değil idareyi almak"},


{//201
metin: "  95. Kaymakam Ali Bey, Köylere Hizmet Götürme Birliğinin bütçesinden kaymakamlık lojmanının tadilatını yaptırmış ve makam aracı almıştır. Verilen örnek olayda Kaymakam Ali Bey aşağı daki hangi etik ilkeye aykırı davranmıştır?",
secenekler: [" A)	Tarafsızlık" , " B)	Nezaket ve saygı" , " C)	Saydamlık ve katılımcılık" , " D)	Amaç ve misyona bağlılık" , " E)	Yetkili makamlara bildirim"],
dogruCevap: "D)	Amaç ve misyona bağlılık"},


{//202
  metin: " 96. Halkla ilişkiler ve propagandanın ayırt edici özellikleri aşağıdakilerin hangisinde yanlış erilmiştir? Halkla İlişkiler	Propaganda",
secenekler: [" A)	Esas oları doğru bilgi, iyi niyet ve dürüst harekettir.	Tek yönlüdür ve abartma üzerine kurulmuştur. İyi niyete her zaman yer vermez." , " B)	Fikir tartışmalarına daima açıktır.	Tartışma kabul etmez. Dogmatik ve otoriterdir." , " C)	Çok tekrar yolu ile ikna etmeye çalışır.	Gerçekleri açıklama yolu ile ikna etmeye çalışır." , " D)	Yanıltıcı değildir.	Yanıltıcı, kandırıcı olabilir." , " E)	Yıkıcı olmaz.	Gerekirse yıkıcı olabilir."],
dogruCevap: "C)	Çok tekrar yolu ile ikna etmeye çalışır.	Gerçekleri açıklama yolu ile ikna etmeye çalışır."},



{//203
metin: "  97. • Rockfeller hakkındaki 'Açgözlü Kapitalist İhtiyar' görüntüsünü 'Çocuklara onar sent harçlık veren, yardım işlerine milyonlarca dolar harcayan iyi yürekli adam' imajına dönüştürerek halkla ilişkiler anlayışını somutlaştırmıştır. • 'Kamuoyunu görmezlikten gelmek mümkün değildir. Kamu toplumdaki olaylardan mutlaka haberli kılınmalı, bunun için de basınla ilişkiler sağlıklı yürütülmelidir.' İlkelerini ortaya koymuştur. Halkla ilişkilerle ilgili olarak hakkında bilgi verilen isim aşağıdakilerden hangisidir?",
secenekler: [" A) Ivy Lee" , " B) Paul Garret" , " C) George Creel " , " D) Amos Kendall" , "  E) Edward Bernays"],
dogruCevap: "A) Ivy Lee"},


{//204
metin: "  98. Aşağıdakilerden hangisi halkla ilişkiler faaliyetlerine etki eden örgüt içi faktörlerden biri değildir?",
secenekler: [" A)	Mali durum" , " B)	Yönetimin becerisi" , " C)	Uygun teşkilatlanma" , " D)	Siyasi rejim ve ekonomik sistem" , " E)	Halkla ilişkiler birimi çalışanlarının yeterliliği"],
dogruCevap: "D)	Siyasi rejim ve ekonomik sistem"},
{//205
metin: "  99. Bir meşrubat pazarlama temsilcisi, Arabistan'daki görevinden hayal kırıklığı ile dönmüş ve niye başarılı olamadığını arkadaşlarına anlatmış: 'Beni Arabistan'a gönderdiklerinde bir sorun vardı. Arapça bilmiyordum. Bu yüzden onlara vermek istediğim mesajı yan yana üç resim hâlinde düzenledim. Birinci resimde bir adam... Çölde kumların üzerinde sürünüyor, susuzluktan kavrulmuş, ölmek üzere. İkinci resimde, kumların arasında bulduğu meşrubatı içiyor. Üçüncüde ise dipdiri, ayakta, canlı ve neşeli... - Eee, harika fikir. Anlamadılar mı? -Anladılar anladılar ama... Sorun da bu. Araplar sağdan sola okurlarmış meğer! Anlatılan örnek olayda müteşebbisin halkla ilişkiler bağlamında aşağıdaki faktörlerden hangisini göz ardı ettiği anlaşılmaktadır?",
secenekler: [" A)	Toplumun inanç biçimi" , " B)	Toplumun siyasi yapısı" , " C)	Toplumun kültürel yapısı" , "D)	Toplumun değer yargıları" , " E)	Toplumun ekonomik yapısı"],
dogruCevap: "C)	Toplumun kültürel yapısı"},


{//206
metin: "  100. 'Beklenmedik, aniden gelişen, hızlı hareket eden ve herhangi bir hazırlık yapılmadan karşı karşıya kalınan ve örgüt için iyi değerlendirilmezse çöküş, iyi değerlendirilirse bir fırsat anlamına gelebilen bir durum' olarak tanımlanabilen, çözümünde halkla ilişkiler uzmanlığı gerektiren kavram aşağıdakilerden hangisidir?",
secenekler: [" A) Kriz" , "	B) Kaos" , " C) Çatışma" , " D) Kargaşa" , " E) Rekabet"],
dogruCevap: "A) Kriz"},



//2017 YILI

{//207
 metin: " 1. <br> I.	Egemenlik, kayıtsız şartsız Türkiye Büyük Millet Meclisinindir. <br> II. Türk Milleti, egemenliğini, Anayasa’nın koyduğu esaslara göre, milletin eliyle kullanır.<br> III. Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz.<br> IV. Hiçbir kimse veya organ kaynağını Anayasa’dan almayan bir Devlet yetkisi kullanamaz. T.C. Anayasası’na göre egemenlik ile ilgili yukarıdaki hükümlerden hangileri doğrudur?",  
secenekler: ["A) I ve II	 ", "	 B) I ve III", " C) I ve IV	", "   D) II ve III ", " 	 E) III ve IV"],
dogruCevap: " E) III ve IV"},

{//208
metin: " 2. T.C. Anayasası’na göre 'Kanun önünde eşitlik' ile ilgili aşağıdaki hükümlerden hangisi yanlıştır?",
secenekler: [" A) Hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamaz.", " B) Devlet organları ve idare makamları bütün işlemlerinde kanun önünde eşitlik ilkesine uygun olarak hareket etmek zorundadırlar.", " C) Kadınlar ve erkekler eşit haklara sahiptir. Devlet, bu eşitliğin yaşama geçmesini sağlamakla yükümlüdür. Bu maksatla alınan tedbirler eşitlik ilkesine aykırı sayılır.", " D) Herkes, dil, ırk, renk, cinsiyet, siyasi düşünce, felsefi inanç, din, mezhep ve benzeri sebeplerle ayırım gözetilmeksizin kanun önünde eşittir.", " E) Çocuklar, yaşlılar, özürlüler, harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gaziler için alınacak tedbirler eşitlik ilkesine aykırı sayılmaz."],
dogruCevap: "C) Kadınlar ve erkekler eşit haklara sahiptir. Devlet, bu eşitliğin yaşama geçmesini sağlamakla yükümlüdür. Bu maksatla alınan tedbirler eşitlikilkesine aykırı sayılır"},


{//209
metin: " 3. T.C. Anayasası’nda yer alan “temel hak ve hürriyetler” ile ilgili “Herkes, kişiliğine bağlı, dokunulmaz, devredilmez, vazgeçilmez temel hak ve hürriyetlere sahiptir. Temel hak ve hürriyetler, kişinin topluma, ailesine ve diğer kişilere karşı ödev ve sorumluluklarını da ihtiva eder.” hükmü aşağıdakilerden hangisinin açıklamasıdır?",
secenekler: [" A) Yabancıların durumu", " B) Temel hak ve hürriyetlerin niteliği", " C) Temel hak ve hürriyetlerin sınırlanması", " D) Temel hak ve hürriyetlerin kötüye kullanılamaması", " E) Temel hak ve hürriyetlerin kullanılmasının durdurulması"],
dogruCevap: "B) Temel hak ve hürriyetlerin niteliği"},




  {//210
metin: " 4. <br> I.	Meşru müdafaa hâli <br> II.	Bir ayaklanma veya isyanın bastırılması <br> III.	Bir tutuklu veya hükümlünün kaçmasının önlenmesi <br> IV.	Yakalama ve tutuklama kararlarının yerine getirilmesi Yukarıdakilerden hangileri T.C. Anayasası’nda yer alan “herkes, yaşama, maddi ve manevi varlığını koruma ve geliştirme hakkına sahiptir.” hükmü dışındadır?",
secenekler: [" A) I ve II", "	   B) I, II ve III", " C) I, III ve IV", "  D) II, III ve IV", " E) I, II, III ve IV"],
dogruCevap: " E) I, II, III ve IV"},



  {//211
metin: " 5. <br> I. Suç işlenmesini önlemek <br> II.	Sosyal ve ekonomik gelişmeyi sağlamak  <br> III.	Suç soruşturma ve kovuşturması sebebiyle <br> IV.	Sağlıklı ve düzenli kentleşmeyi gerçekleştirmek ve kamu mallarını korumak T.C. Anayasası’na göre yukarıdaki amaçlardan hangileri “seyahat hürriyeti”ni kanunla sınırlandıran hükümlerdendir?",
secenekler: [" A) I ve III", "	  B) II ve IV	", "C) I, II ve III", "  D) II, III ve IV", "  E) I, II, III ve IV"],
dogruCevap: "A) I ve III"},


  {//212
metin: " 6. T.C. Anayasası’na göre düzeltme ve cevap yayımlanmazsa, yayımlanmasının gerekip gerekmediğine hâkim tarafından ilgilinin müracaat tarihinden itibaren en geç kaç gün içerisinde karar verilir?",
secenekler: [" A) Üç ", "   B) Beş", " C) Yedi ", "   D) On", "  E) On beş"],
dogruCevap: "C) Yedi"},



  {//213 * 
metin: " 7. T.C. Anayasası’na göre aşağıdakilerden hangisi kişinin milletvekili seçilmesine engeldeğildir?",
secenekler: [" A) Askerlikle ilişiği olmak", " B) En az ilkokul mezunu olmamak", " C) Resmî ihale ve alım satımlara fesat karıştırma suçuyla hüküm giymiş olmak", " D) Taksirli suçlardan toplam bir yıl veya daha fazla hapis cezasına hüküm giymiş olmak", " E) İhtilas, irtikâp, dolandırıcılık, sahtecilik suçlarından biriyle hüküm giyerek affa uğramış olmak"],
dogruCevap: "D) Taksirli suçlardan toplam bir yıl veya daha fazla hapis cezasına hüküm giymiş olmak"},



  {//214 * 
metin: " 8. T.C. Anayasası’na göre “yasama dokunulmazlığı” ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Türkiye Büyük Millet Meclisi üyeleri, Meclis çalışmalarındaki oy ve sözlerinden o oturumdaki Başkanlık Divanının teklifi üzerine Meclisçe başka bir karar alınmadıkça bunları Meclis dışında tekrarlamak ve açığa vurmaktan sorumlu tutulamazlar.", " B) Türkiye Büyük Millet Meclisi üyesi hakkında, seçiminden önce veya sonra verilmiş bir ceza hükmünün yerine getirilmesi, üyelik sıfatının sona ermesine bırakılır.", " C) Tekrar seçilen milletvekili hakkında soruşturma ve kovuşturma, Meclisin yeniden dokunulmazlığını kaldırmasına bağlıdır.", " D) Türkiye Büyük Millet Meclisindeki siyasi parti gruplarınca, yasama dokunulmazlığı ile ilgili görüşme yapılamaz ve karar alınamaz.", " E) Seçimden önce veya sonra bir suç işlediği ileri sürülen bir milletvekili, Meclisin kararı aranmaksızın yargılanabilir."],
dogruCevap: "E) Seçimden önce veya sonra bir suç işlediği ileri sürülen bir milletvekili, Meclisin kararı aranmaksızın yargılanabilir."},



  {//215*
metin: " 9. I. Siyasi haklar ve ödevler II.	Temel haklar ve ödevler III.	Kişinin hakları ve ödevleri IV.	Sosyal ve ekonomik haklar ve ödevler T.C. Anayasası’na göre sıkıyönetim ve olağanüstü hâller saklı kalmak üzere yukarıdakilerden hangileri kanun hükmünde kararnamelerle düzenlenemez?",
secenekler: [" A) II ve IV ", "  B) I, II ve III ", " C) I, III ve IV", "   D) II, III ve IV", "		 E) I, II, III ve IV"],
dogruCevap: "B) I, II ve III"},



  {//216*
metin: " 10. T.C. Anayasası’na göre Hâkimler ve Savcılar Kurulu ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Üyeler üç yıl için seçilir. Süresi biten üyeler bir kez daha seçilemez.", " B) Hâkimler ve Savcılar Kurulu on üç üyeden oluşur; iki daire hâlinde çalışır.", " C) Kurul üyeliği seçimi, üyelerin görev süresinin dolmasından önceki otuz gün içinde yapılır.", " D) Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz.", " E) Kurul, kendi üyeleri arasından daire başkanlarını ve daire başkanlarından birini de başkanvekili olarak seçer."],
dogruCevap: "A) Üyeler üç yıl için seçilir. Süresi biten üyeler bir kez daha seçilemez."},






  {//217* 
metin: " 11. <br> I.	Tüzük <br>II.	Anayasa <br>III.	Yönetmelik <br>IV.	Uluslararası Antlaşma Normlar hiyerarşisinde yukarıdakilerin baştan sona, doğru sıralanışı hangisidir? TÜZÜK MÜLGA OLMUŞ !!!!! ",
secenekler: [" A) II - I - IV - III", "  B) IV - II - I - III", " C) IV - II - III - I", "  D) II - IV - I - III", " E) II - III - I - IV"],
dogruCevap: "D) II - IV - I - III"},


  {//218* 
metin: " 12. Bakanlık bağlı, ilgili ve ilişkili kuruluşlarının Başbakanlık ya da diğer bakanlıklarla ilgilendirilmesi hangi usulle gerçekleştirilir?", 
secenekler: [" A) Parlamento Kararı", " B) Bakanlar Kurulu Kararı", " C) İlgili bakanın teklifi ve Başbakanın onayı", " D) Başbakanın teklifi ve Cumhurbaşkanının onayı", " E) İlgili bakanların mütalaası alınarak başbakanın tasdiki"],
dogruCevap: "D) Başbakanın teklifi ve Cumhurbaşkanının onayı"},



  {//219 * 
metin: " 13. Bakanlıkların merkez teşkilatında, ana hizmetbirimlerinin genel müdürlük şeklinde teşkilatlandırılabilmesi için bünyesinde en az kaç daire başkanlığı olmalıdır? ESKİ BİR SORU !!!!!! ",
secenekler: ["A) 2", "  B) 3", "C) 4 ", "  D) 5", " E) 6"],
dogruCevap: "B) 3"},



  {//220*
metin: " 14. İllerin kurulması, kaldırılması, merkezlerinin belirtilmesi, adlarının değiştirilmesi, bir ilçenin başka bir ile bağlanması kanun ile olur. Ancak illerin kanun hükmünde kararnamelerle kurulduğu örnekler de mevcuttur. Buna göre aşağıdakilerden hangisi kanun hükmünde kararname ile kurulan illerden biri değildir?",
secenekler: ["A) Düzce", "	   B) Karabük	", " C) Kilis	 ", "  D) Yalova", "  E) Osmaniye"],
dogruCevap: " E) Osmaniye"},


  {//221*
metin: " 15. Valilerin görev ve yetkileri ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Cumhuriyet Bayramında ilde yapılacak resmî törenlere başkanlık yapar ve tebrikleri kabul eder.", " B) İl sınırları içerisinde yerinden yönetim kuruluşları ile hiyerarşi yetkisi çerçevesinde alakadar olmakla mükelleftirler.", " C) İlde en üst amir sıfatıyla disiplin cezası verme, görevden uzaklaştırma, emir ve talimat verme gibi yetkileri kullanırlar.", " D) Memleketin sınır ve kıyı emniyetini ve sınır ve kıyı emniyeti ile ilgili bütün işleri yürürlükte bulunan hükümlere göre sağlar ve yürütürler.", " E) Kanun, tüzük, yönetmelik ve hükûmet kararlarının neşir ve ilanını ve uygulanmasını sağlamak ve Bakanlıkların talimat ve emirlerini yürütmekle ödevlidirler."],
dogruCevap: "B) İl sınırları içerisinde yerinden yönetim kuruluşları ile hiyerarşi yetkisi çerçevesinde alakadar olmakla mükelleftirler."},




  {//222 *
metin: " 16. 657 sayılı Devlet Memurları Kanunu’na göre  kadroları Millî İstihbarat Hizmetleri Sınıfına dâhil olanlara aşağıdakilerden hangisi tarafından tespit edilecek ek gösterge rakamları  uygulanır?",
secenekler: ["A) MİT Müsteşarı", "  B) Maliye Bakanı", " C) Başbakan", "  D) Bakanlar Kurulu ", "  E) Cumhurbaşkanı"],
dogruCevap: " E) Cumhurbaşkanı"},



  {//223*
metin: " 17. 657 sayılı Devlet Memurları Kanunu’na göre  Lise dengi mesleki veya teknik öğrenimi bitirenler için tesis edilen sınıflara giriş derece ve kademesi aşağıdakilerden hangisidir?",
secenekler: [" A) 9/1", "  B) 10/2 ", " C) 11/1 ", "  D) 12/2 ", " E) 13/1"],
dogruCevap: " D) 12/2"},



  {//224*
metin: " 18. 657 sayılı Devlet Memurları Kanunu’na göre mesleklerine ait öğrenimini bitirerek Devlet  Memurluğuna alınmış ve asli memur olarak  atanmış olanlardan mesleklerine ait hizmetlerde yetiştirilmek, eğitilmek, bilgilerini artırmak  veya staj yapmak üzere dış memleketlere  gönderilenlere en fazla kaç yıla kadar ayrılma  müsaadesi verilebilir?",
secenekler: ["A) Üç", "  B) Dört ", " C) Beş", " D) Yedi ", "  E) On "],
dogruCevap: " B) Dört"},


  {//225*
metin: " 19. 657 sayılı Devlet Memurları Kanunu’na göre “memurluktan çekilme” ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Olağanüstü mazeretle çekilenler, yasal süreye tabi olmadan üstüne haber vermeksizin çekilebilirler. ", " B) Devlet memuru bağlı olduğu kuruma yazılı olarak müracaat etmek suretiyle memurluktan çekilme isteğinde bulunabilir.", " C) Çekilmek isteyen memur yerine atanan kimsenin gelmesine veya çekilme isteğinin kabulüne kadar görevine devam eder.", " D) Yerine atanan kimse bir aya kadar gelmediği veya yerine bir vekil atanmadığı takdirde, üstüne haber vererek görevini bırakabilir.", " E) Mezuniyetsiz veya kurumlarınca kabul edilen mazereti olmaksızın görevin terk edilmesi ve bu terkin kesintisiz 10 gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın, çekilme isteğinde bulunulmuş sayılır."],
dogruCevap: "A) Olağanüstü mazeretle çekilenler, yasal süreye tabi olmadan üstüne haber vermeksizin çekilebilirler. "},


  {//226 *
metin: " 20. Memura, eşinin doğum yapması hâlinde, isteği üzerine - - - - gün babalık izni; kendisinin veya çocuğunun evlenmesi ya da eşinin, çocuğunun, kendisinin veya eşinin ana, baba ve kardeşinin ölümü hâllerinde isteği üzerine - - - - gün izin verilir. 657 sayılı Devlet Memurları Kanunu’na göre yukarıdaki hükümde boş bırakılan yerlere sırası ile hangisi getirilmelidir?",
secenekler: [" A) beş - beş", "  B) yedi - beş", "  C) yedi - on ", "  D) on - yedi", "  E) on - on"],
dogruCevap: " D) on - yedi"},



  {//227--------------
metin: " 21. “Düşmek” sözcüğü aşağıdakilerin hangisinde “Bu konunun üzerine çok düştün.” cümlesindeki anlamıyla kullanılmıştır?",
secenekler: [" A) Üzerine düşen vazifeyi yapmaktan asla çekinmezdi.", " B) Mirastan ona da bu ev düştü.", " C) Babam spora düştü bu aralar, spor salonundan çıkmıyor.", " D) Limanda iskelenin karşısına düşen kahveye doğru yürümüşlerdi.", " E) Babasının Sütlüce’de yeni bir ev alması bu tarihlere düşer."],
dogruCevap: "C) Babam spora düştü bu aralar, spor salonundan çıkmıyor."},



  {//228------------------
metin: " 22. Dünya edebiyatından usta kalemlerin yazdığı başarılı denemelerin hasretiyle yaşarım. Çünkü her şeyden önce, çok az yazılır ve çok azı çevrilir dilimize. Oysa edebiyat dediğimiz sonsuz boşlukta rastgele gezinirken soluklanacak; nerede olduğunuzu, neleri ne sebeple okuduğunuzu size anlatacak sabit duraklardır denemeler. Edebiyatın derinliklerine doğru yapılacak serüven dolu, keyifli, heyecanlı yolculuklardır bu metinler. Öyle gelir ki bana; sanki altınla, gümüşle, türlü çeşit mücevheratla doldurulmuş bir ganimet sandığıdır edebiyat. Edebî denemeler de onun içindeki en değerli, nadide parçalardır. Bu parçadan yola çıkılarak denemeyle ilgili aşağıdakilerden hangisi söylenemez?",
secenekler: [" A) Başka dillere çevrilmeye uygun bir tür değildir.", " B) İyi yazılmış örneklerine az rastlanır.", " C) Edebiyat dünyasının yol göstericileridir.", " D) Edebiyat içinde özel bir yere sahiptir.", " E) Edebiyattan zevk alınmasını sağlar."],
dogruCevap: "A) Başka dillere çevrilmeye uygun bir tür değildir."},



  {//229-----------------------
metin: " 23. Günlerden bir gün ( ) deniz kenarında gezinirken sandallarını büyük bir korkuyla bırakıp kaçan balıkçılar görmüş ( ) Ne oluyor, demiş balıkçılara ( ) Balıkçılar “Aman!” demiş, “Elaman! Elaman bu canavardan ( )” Bu cümlede ayraçlarla gösterilen yerlere aşağıdaki noktalama işaretlerinden hangileri getirilmelidir?",
secenekler: [" A) ( . ) ( ; ) ( ? ) ( . )", " B) ( . ) ( : ) ( , ) ( . )", " C) ( , ) ( . ) ( ? ) ( ! )", " D) ( , ) ( . ) ( , ) ( . )", " E) ( , ) ( . ) ( . ) ( ! )"],
dogruCevap: "E) ( , ) ( . ) ( . ) ( ! )"},



  {//230------------------
metin: " 24. Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
secenekler: [" A) Önümüzdeki yıl kardeşi üsteğmen olacakmış.", " B) Ankara’nın başkent olması bir zorunluluktu.", " C) Dünki toplantıdan bir sonuç çıkmayacağı belliydi.", " D) Osmangazi Köprüsü’nde trafik felç olmuştu.", "E) Biz de bir gün bu dünyadan ayrılacağız."],
dogruCevap: "C) Dünki toplantıdan bir sonuç çıkmayacağı belliydi"},


  {//231---------------------
metin: " 25. Yasama meclisleri, mahkemeler, kongreler vb. yerlerde yapılan toplantıların nasıl açıldığını, kimlerin neler konuştuğunu ve nasıl kapandığını objektif olarak anlatan veya herhangi bir olayın nasıl, ne zaman, nerede ve ne şekilde sonuçlandığını tespit eden kısa yazılara - - - - denir. Bu cümlede boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?",
secenekler: [" A) tutanak	", "  B) rapor", " C) özgeçmiş", "  D) dilekçe", "  E) genelge"],
dogruCevap: "A) tutanak"},


  {//232 * 
metin: " 26. Etik ve ahlak kavramlarının tanımsal özellikleri ile ilgili aşağıdaki karşılaştırmalardan hangisi yanlıştır?",
secenekler: [" A) Zaman geçse de değişmeyecek evrensel doğruyu arar, bunları ideal davranış kuralları hâline getirir |||| Toplumdan topluma ve zaman içerisinde Değişebilir. ", " B) Felsefi bir yaklaşımla üretilir, kendiliğinden öğrenilmez, eğitim gerektirir. |||| Eğitimsiz insanların bile sosyal çevresinden dolayı bir takım değerleri oluşur.", " C) Yaptırımları; meslek grubundan dışlamadır.|||| Yaptırımları; suçluluk duygusu, ayıplama ve kınamadır.", " D) Sosyal yapının tüm katmanlarını etkiler ve sosyal ilişkileri şekillendirir.|||| Daha ziyade kişilerin mesleği ya da ilgi alanında geçerli olup daha dar bir çerçevedehayat bulur.", " E) Bilgisel nitelikli bir alandır. |||| Olgusal nitelikli bir alandır."],
dogruCevap: "D) Sosyal yapının tüm katmanlarını etkiler ve sosyal ilişkileri şekillendirir. Daha ziyade kişilerin mesleği ya da ilgi alanında geçerli olup daha dar bir çerçevedehayat bulur. ETİK VE AHLAK ARASINDAKİ FARK GİBİ "},

{//233 * 
metin: " 27. Bir kurumun insan kaynakları müdürü, kurum personeli üzerinde bir anket uygulamak isteyen araştırmacının müracaatını incelemiş, ankette yer alan sorulardan bazılarının ileride başına iş açabileceğini düşünerek konuyu kurumun üst yöneticisine havale etmiştir. Verilen örnek olayda kurum müdürünün ortaya koyduğu davranış aşağıdaki etik sorunlardan hangisinin kapsamında değerlendirilir?",
secenekler: [" A) Adam kayırmacılık", " B) Takdir yetkisinin kullanımından kaçınma", " C) Çıkar çatışmasından kaçınma", " D) Hizmet kayırmacılığı", " E) Görev ve yetkilerin menfaat sağlama amacıyla kullanılması"],
dogruCevap: "B) Takdir yetkisinin kullanımından kaçınma"},




{//234 * 
metin: " 28. Etik, bir eylemin içeriği ne olursa olsun, ahlaki olarak tanımlanabilmesi için uyulması gereken koşulları biçimsel yollardan yeniden kurarak, ahlakla ilgili bütün sorunları çok genel, ilkesel ve soyut düzlemde tartışır. Bu nedenle etik, hangi somut amaçların tek tek iyi ve herkes için ulaşılmaya değer amaçlar olduğunu belirlemez, daha çok ölçütleri belirler ve bu ölçütlere göre öncelikli ve iyi amacın hangisi olduğunun bağlayıcı bir şekilde kabul edilmesi gerektiğini gösterir. Özetle etik ilkeler, iyi olanı değil, bir şeyin iyi olduğuna nasıl hükmedildiğini ve varıldığını ifade eder. Aşağıdakilerden hangisi etik ilkelerin oluşumunda analitik bir çabanın gerekliliği ile ilgili bu parçadan çıkarılabilecek bir sonuçtur?",
secenekler: [" A) Etik ilkeler yeni değer yargıları ortaya koyar.", " B) Yöresel ahlaki temellerden beslenen etik ilkeler evrensel nitelik taşır.", " C) Etik, bir toplum içinde kişilerin uymak zorunda oldukları davranış biçimlerini ifade eder.", " D) Etik, iyinin ne olduğuna ilişkin soyut ve kuramsal bir akıl yürütme sonucu ortaya çıkan ilkeleri ifade eder.", " E) Sosyal yaşam alanına ait her münferit davranış örneğini tek tek değerlendirerek bireylerin sosyal ve dinsel aidiyetlerini kontrol eder."],
dogruCevap: "D) Etik, iyinin ne olduğuna ilişkin soyut ve kuramsal bir akıl yürütme sonucu ortaya çıkan ilkeleri ifade eder."},



{//235 * 
metin: " 29.<br> I.	İyi davranışta bulunma ve kötü davranışlardan kaçınma konusunda, kamu görevlilerine rehberlik ederler. <br>II.	Sosyal dokuyu, ekonomik gelişmeyi, demokrasiyi ve hukuk devletini güçlendirirler. <br>III.	Değerlerin çatıştığı durumlarda karar vericilere ve uygulamacılara yol gösterirler.<br> IV.	Kamu hizmetlerinin maliyetini düşürür ve kalitesini yükseltirler. <br><br>Yukarıdakilerden hangileri yönetim etiğine ilişkin ilke ve değerlerin benimsenmesinin ve uygulanmasının sağlayacağı olumlu sonuçlardandır?",
secenekler: [" A) I, II, III ve IV", "  B) II, III ve IV", " C) II ve IV  ", "  D) I ve III", "  E) Yalnız I"],
dogruCevap: "A) I, II, III ve IV"},


 
{//236 * 
metin: " 30. Hizmet almak için kamu kurumlarına müracaat eden vatandaşlar, çoğu zaman iş ve işlemlerle ilgili hangi belgelerin gerektiğini, nereye müracaat edeceklerini, nasıl bir yol izleyeceklerini ve işlerinin ne kadar sürede tamamlanacağını bilememektedirler. Bu gibi durumlarda vatandaşlar, işlerinin hızlı ve sorunsuz görülebilmesi için, kendilerine yardımcı olacak bir tanıdık, eş-dost veya akraba aramakta ya da iş takipçisi ve aracılara yönelmektedir. Kamu kurumlarında etik dışı davranışlara zemin hazırlayan bu durumun düzeltilmesinde yerinde ve en süratli çözümü sağlayacak uygulama aşağıdakilerden hangisi olabilir?",
secenekler: [" A) Alo ihbar hatları", " B) Disiplin kurulları", " C) Danışma birimleri", " D) Randevu sistemleri", " E) Dilek ve şikâyet kutuları "],
dogruCevap: "C) Danışma birimleri"},



{//237 * 
metin: " 31. Aşağıdakilerden hangisi Türk Medeni Kanunu ile getirilen yeniliklerden birisi değildir?",
secenekler: [" A) Mirastan kadınla erkeğin eşit olarak yararlanması", " B) Evlenmede resmi nikâhın zorunlu olması", " C) Kadınların istediği mesleği seçebilmesi", " D) Mahkemelerde tanıklık yapmada kadınla erkeğin eşit sayılması", " E) Kadınlara seçimlerde oy kullanma hakkının verilmesi "],
dogruCevap: "E) Kadınlara seçimlerde oy kullanma hakkının verilmesi"},


 
{//238 *
metin: " 32. Kuvayımilliye ile ilgili;  I. Düzenli askeri birliklerdir. II. TBMM’ye karşı ayaklanmaların bastırılmasında yarar sağlamışlardır. III. Düşmanın ilerleyişini yavaşlatmışlardır. IV. İstanbul Hükûmetleri tarafından desteklenmişlerdir. yargılardan hangilerine ulaşılabilir?",
secenekler: [" A) Yalnız I	", "  B) I ve II", " C) II ve III ", "  D) I, II ve IV", "  E) II, III ve IV"],
dogruCevap: "C) II ve III"},


 
{//239*
metin: " 33. 16 Mart 1920’de İtilaf Devletlerinin İstanbul’u resmen işgal etmelerinin nedeni aşağıdakilerden hangisidir?",
secenekler: [" A) Damat Ferit Hükûmetinin politikaları", " B) Mebusan meclisinin Misakımillî’yi ilan etmesi", " C) Yunan ordusunun Anadolu’daki başarısızlıkları", " D) Boğazların Rusya’nın eline geçmesini önlemek", " E) İstanbul’daki asayiş olaylarının artması"],
dogruCevap: "B) Mebusan meclisinin Misakımillî’yi ilan etmesi"},



{//240*
metin: " 34. Balkan Antantı’nın kurulmasında aşağıdaki devletlerden hangilerinin yayılmacı politikaları etkili olmuştur?",
secenekler: ["A) İtalya - Almanya", " B) Fransa - İtalya", " C) Rusya - Fransa", " D) İngiltere - Almanya", " E) Japonya - İngiltere"],
dogruCevap: "A) İtalya - Almanya"},



{//241*
metin: " 35. Aşağıdakilerden hangisi terörün uluslararası boyut kazanmasında bir etken değildir?",
secenekler: [" A) Bazı devletlerin teröre destek vermesi", " B) Silah üretiminin kontrol altına alınması", " C) Ülkelerarası işbirliğinin sağlanamaması", " D) Ülkelerin ekonomik-siyasi çıkarlarını ön planda tutması", " E) Terör konusunda duyarlı olunmaması"],
dogruCevap: "B) Silah üretiminin kontrol altına alınması"},


{//242 *
metin: " 36. Aşağıdakilerden hangisi halkla ilişkiler sürecini reklam ve propaganda gibi iletişim türlerinden ayıran en önemli özelliktir?",
secenekler: [" A) İki yönlü olması", " B) Planlı bir çaba ürünü olması", " C) Belirli bir hazırlık gerektirmesi", " D) Kurumsal kimliğin önemsenmesi", " E) Belirli bir hedef kitleye hitap etmesi"],
dogruCevap: "A) İki yönlü olması"},



{//243*
metin: " 37. Halkla ilişkilerin niteliklerine ilişkin aşağıdakilerden hangisi söylenemez?",
secenekler: [" A) Doğruluk ve nesnellik gerektirir. ", "B) Sürekli ve sabırlı bir çalışmayı gerektirir.", " C) Karşılıklı bir alışverişi, etkileşim sürecini kapsar.", "  D) Hedef kitlede sempati ve güven kazanma amacını güder.", " E) Kurum ya da kuruluşun imajı hedef kitlenin menfaatinden önde tutulur."],
dogruCevap: "E) Kurum ya da kuruluşun imajı hedef kitleninmenfaatinden önde tutulur"},


 
{//244*
metin: " 38. Aşağıdakilerden hangisi halkla ilişkilerin amaçlarından biri olamaz?",
secenekler: [" A) İzlenen politika hakkında halkı aydınlatmak", " B) Halkın yönetimle olan ilişkilerini kolaylaştırmak", " C) Hizmetlerin daha iyi görülmesinde halkın işbirliğini sağlamak", " D) Halkın ilgisini yönetsel usullerdeki aksaklıklardan uzak tutmak", " E) İzlenen politikanın halk tarafından benimsenmesini sağlamak"],
dogruCevap: "D) Halkın ilgisini yönetsel usullerdeki aksaklıklardan uzak tutmak"},

 
{//245*
metin: " 39. Halkın çeşitli konulardaki fikir ve düşüncelerini anlamak, hem halkın ihtiyaçlarının bilinmesine hem de ona ulaşacak mesajların daha iyi düzenlenmesine imkân tanır. Halkın ne düşündüğünü anlamak, tavsiye ve şikâyetlerini öğrenmek bakımından aşağıdakilerden hangisi diğerlerine göre halkla ilişkiler sürecindeki basamakların en başında yer alır?",
secenekler: [" A) Referandum", " B) Kamuoyu araştırması", " C) Vatandaşların kişisel başvuruları", " D) Kurum içi haberleşme yöntemleri", " E) Temsil niteliği taşıyan kişi veya gruplarla temas "],
dogruCevap: " C) Vatandaşların kişisel başvuruları"},



{//246*
metin: " 40. <br> I.	Değerlendirme <br>II.	Bilgilerin toplanması ve yorumu <br>III.	İlgili topluluğa mesajların iletilmesi <br> IV.	Problemlerin tanımlanması ve nasıl çözüleceğinin kararlaştırılması<br><br> Halkla ilişkiler çalışmalarının başarılı biçimde yürütülebilmesi için takip edilmesi gereken yukarıdaki aşamaların baştan sona doğru sıralanışı hangisidir?",
secenekler: [" A) I - III - II - IV", "   B) II - III - I - IV", " C) II - IV - III - I", "   D) III - II - IV - I", "  E) IV - II - I - III"],
dogruCevap: "C) II - IV - III - I"},



{//247 * 
metin: " 41. 2992 sayılı Adalet Bakanlığının Teşkilat ve Görevleri Hakkında Kanun Hükmünde Kararnamenin Değiştirilerek Kabulü Hakkında Kanun’a göre Adli Sicil ve İstatistik Genel Müdürlüğü Bakanlığın görev ve yetkisine giren konularla ilgili istatistik bilgilerin; <br> I. Belirlenmesi <br>II. Toplanması <br>III. Sınıflandırılması <br>IV. Değerlendirilmesi ile ilgili hizmetlerden hangilerini yürütmekle görevlidir? SORU ESKİ BUNA DİKKAT EDELİM ",
secenekler: [" A) I ve III	", "   B) I ve IV ", " C) I, II ve III ", " D) II, III ve IV", " 	 E) I, II, III ve IV"],
dogruCevap: "E) I, II, III ve IV"},


 
{//248 *** 
metin: " 42. 2992 sayılı Adalet Bakanlığının Teşkilat ve Görevleri Hakkında Kanun Hükmünde Kararnamenin Değiştirilerek Kabulü Hakkında Kanun’a göre yurt dışı teşkilatında yer alan Adalet Müşavirliği kadrolarına ilişkin aşağıdaki hususlardan hangisi doğrudur? DİKKAT SORU ESKİ SORU  ",
secenekler: [" A) Yurt dışı sürekli görevi sona erenler tekrar atanamaz.", " B) Adalet müşavirleri hakkındaki siciller Adalet Bakanlığı Müsteşarı tarafından verilir.", "  C) Adalet müşavirlerinin görev, yetki ve sorumlulukları ile diğer hususlar Bakanlıkça çıkarılacak tüzükle düzenlenir.", " D) Adalet müşavirlerinin bu görevde geçirdikleri süreler ilgilinin kademe ve derece ilerlemesinde dikkate alınmaz.", " E) Adalet Müşavirliği kadrolarına, hâkimlik ve savcılık mesleğinde fiilen en az üç yıl görev yapmış bulunanlar arasından atama yapılır."],
dogruCevap: " B) Adalet müşavirleri hakkındaki siciller Adalet Bakanlığı Müsteşarı tarafından verilir. DEMEKKİ ESKİDEN MÜSTEŞAR VERİYORMUŞ  "},


 
{//249 **
metin: " 43. 2992 sayılı Adalet Bakanlığının Teşkilat ve Görevleri Hakkında Kanun Hükmünde Kararnamenin Değiştirilerek Kabulü Hakkında Kanun’a göre Bakanlığın taşra kuruluşlarının her kademedeki yöneticileri, yapmakla yükümlü bulundukları hizmet veya görevleri, Bakanlık emir ve direktifleri yönünde mevzuata, plan ve programlara uygun olarak düzenlemek ve yürütmekten aşağıdakilerden hangisine karşı sorumludur? DİKKAT SORU ESKİ SORU ",
secenekler: [" A) Bir üst yönetici kademeye", " B) Müsteşar yardımcılarına", "  C) Bakan yardımcısına ", " D) Müsteşara ", " E) Bakana"],
dogruCevap: "A) Bir üst yönetici kademeye"},



{//250 *
metin: " 44. 63/2 sayılı Adalet Bakanlığı Uluslararası Hukuk ve Dış İlişkiler Genel Müdürlüğünün Hukuki Konularda Uluslararası İstinabe Taleplerine Uygulanacak Esaslar Genelgesi’ne göre istinabe evrakının düzenlenmesinde dikkat edilecek hususlarla ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) İstinabe evrakı, Türkçesi ve gönderilecek devlet dilinde tercümesi olmak üzere ikişer takım olarak hazırlanır.", " B) İstinabe evrakının bütün sayfaları nüsha olarak ayrı ayrı yazılmalı, karbon kâğıdı veya fotokopi kullanılarak çoğaltılmamalıdır.", " C) İstinabe talebinde, dava veya cevap dilekçeleri ve bunların tercümelerine ek olarak davanın konusu, iddia ve savunma özet olarak yer almalıdır.", " D) İstinabe yolu ile dinlenecek kişiler farklı şehir veya yerleşim yerlerinde bulunmakta iseler, istinabe evrakı yetkili adli makamlara hitaben ayrı ayrı düzenlenir.", " E) İstinabe talebinin belirlenen duruşma gününe kadar yerine getirilememesi durumunda geri çevrilmemesi için evraka zorunlu hâller dışında duruşma tarihi yazılmamalıdır."],
dogruCevap: "C) İstinabe talebinde, dava veya cevap dilekçeleri ve bunların tercümelerine ek olarak davanın konusu, iddia ve savunma özet olarak yer almalıdır."},




{//251 *
metin: " 45. 69/3 sayılı Adalet Bakanlığı Uluslararası Hukuk ve Dış İlişkiler Genel Müdürlüğünün Cezai Konularda Uluslararası Tebligat konulu Genelgesi’nde belirtilen genel hükümlere ilişkin aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Cezai tebligatın konusunu adli kararların veya usule ait işlemlerin tebliği oluşturmaktadır.", "  B) Cezai tebligat herhangi bir masraf alınmadan yerine getirildiğinden maliye veznesine parayatırılması gerekmemektedir. ", " C) Yurt dışı tebligatın kaynakları; ikili anlaşma ve/ veya çok taraflı sözleşmeler, uluslararası adli yardımlaşma kuralları ile 7201 sayılı Tebligat Kanunu ve ilgili mevzuattır.", " D) Uluslararası sözleşmeler, tebligat taleplerinin, adli yardımlaşma isteyen tarafın kendi mevzuatında öngörülen şekillere uygun olarak yerine getirileceğini öngörmektedir.", " E) Kendilerine tebligat yapılacak Türk vatandaşı veya yabancı uyruklu şahıslar; şüpheli, sanık, hükümlü, mağdur, müşteki, katılan, yasal temsilci, tanık ya da bilirkişi olabilir."],
dogruCevap: "D) Uluslararası sözleşmeler, tebligat taleplerinin, adli yardımlaşma isteyen tarafın kendi mevzuatında öngörülen şekillere uygun olarak yerine getirileceğini öngörmektedir."},



{//252 * 
metin: " 46. 124/1 sayılı Adalet Bakanlığı Bilgi İşlem Dairesi Başkanlığının UYAP Uygulamaları Genelgesi’ne göre UYAP Bilişim Sisteminin kullanımında özen gösterilmesi gereken hususlara ilişkin aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Her türlü kalem hizmetlerinin UYAP üzerinden yürütülmesi", "  B) UYAP üzerindeki iş listelerinin teraküm oluşturacak şekilde incelenmesi", " C) Kamu kurum ve kuruluşlarından intikal eden bilgi ve belgelerin mümkün olduğu nispette elektronik ortamda istenmesi", " D) UYAP üzerinden sağlanan nüfus, adres, tapu, sabıka kaydı, yurt dışı adres bilgisi gibi bilgi ve belgelerin temini için ayrıca fiziki yazışma yapılmaması", " E) UYAP kapsamındaki bilgiler ile fiziki ortamdaki bilgiler arasında çelişkiye mahal verilmemesi, bir çelişki olması hâlinde UYAP kayıtlarına itibar edilmesi"],
dogruCevap: "B) UYAP üzerindeki iş listelerinin teraküm oluşturacak şekilde incelenmesi"},



{//253 * 
metin: " 47. 79 sayılı Adalet Bakanlığı Personel Genel Müdürlüğünün Resmî Yazışma ve Tebligat İşlemlerinde Uyulması Gereken Esaslar Genelgesi’ne göre aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Hâkimlerin izin, atama ve yetki gibi her türlü özlük haklarına ilişkin talepleri adalet komisyonları aracılığıyla Cumhuriyet başsavcılığı vasıtasıyla Bakanlığa iletilir.", " B) Cumhuriyet savcılarının izin, atama ve yetki gibi her türlü özlük haklarına ilişkin talepleri doğrudan Cumhuriyet başsavcılığı vasıtasıyla Bakanlığa iletilir.", " C) Personel Genel Müdürlüğü ile yapılacak her türlü yazışmalarda yazışma ile ilgili şahıs veya şahısların kurum sicil ve T.C. kimlik numaralarının yazılması gerekir.", " D) Hâkimlerle ilgili tebligat işlemlerine ilişkin her türlü yazışma doğrudan mahallî adalet komisyonu başkanlıklarınca yapılır.", " E) Cumhuriyet savcılarıyla ilgili tebligat işlemlerine ilişkin her türlü yazışma Cumhuriyet başsavcılıklarınca yapılır."],
dogruCevap: "D) Hâkimlerle ilgili tebligat işlemlerine ilişkin her türlü yazışma doğrudan mahallî adalet komisyonu başkanlıklarınca yapılır."},



{//254 *
metin: " 48. 128/1 sayılı Adalet Bakanlığı İdari ve Mali İşler Dairesi Başkanlığının Arşiv Hizmetleri Genelgesi’ne göre aşağıdaki kurumlardan hangisinin evrakı ile ilgili olarak teşekkül ettirilen kurum arşivi ayıklama ve imha komisyonuna Cumhuriyet başsavcısı veya görevlendireceği Cumhuriyet başsavcı vekili başkanlık etmez?",
secenekler: [" A) İcra ve iflas müdürlüklerinin", " B) Cumhuriyet başsavcılıklarının", " C) Adli yargı adalet komisyonlarının", " D) Denetimli serbestlik şube müdürlüklerinin", " E) Müdürlük teşkilatı olan ceza infaz kurumları ve tutukevlerinin"],
dogruCevap: "E) Müdürlük teşkilatı olan ceza infaz kurumları ve tutukevlerinin"},


 
{//255 * 
metin: " 49. T.C. Anayasası’na göre adliye mahkemelerince verilen ve kanunun başka bir adli yargı mercisine bırakmadığı karar ve hükümlerin son inceleme merci aşağıdakilerden hangisidir?",
secenekler: [" A) Yargıtay	", "  B) Anayasa Mahkemesi", " C) Danıştay", "   D) Uyuşmazlık Mahkemesi", "    E) Bölge Adliye Mahkemesi"],
dogruCevap: " A) Yargıtay	"},


 
{//256 *
metin: " 50. 5235 sayılı Adli Yargı İlk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Görev ve Yetkileri Hakkında Kanun’a göre ceza mahkemelerinin kuruluşu ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A) Asliye ceza mahkemeleri tek hâkimlidir.", "  B) Ceza mahkemeleri bulundukları il veya ilçenin adı ile anılır.", " C) İş durumunun gerekli kıldığı yerlerde ceza mahkemelerinin birden fazla dairesi oluşturulabilir.", " D) Ağır ceza mahkemesinde bir başkan ile yeteri kadar üye bulunur. Bu mahkeme bir başkan ve iki üye ile toplanır.", "  E) Ceza mahkemeleri, her il merkezi ile bölgelerin coğrafi durumları ve iş yoğunluğu göz önünde tutularak belirlenen ilçelerde Adalet Bakanlığının olumlu görüşü alınarak Hâkimler ve Savcılar Kurulunca kurulur."],
dogruCevap: " E) Ceza mahkemeleri, her il merkezi ile bölgelerin coğrafi durumları ve iş yoğunluğu göz önünde tutularak belirlenen ilçelerde Adalet Bakanlığının olumlu görüşü alınarak Hâkimler ve Savcılar Kurulunca kurulur."},

 {//257 * 
  metin: " 51. 2576 sayılı Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin Kuruluşu ve Görevleri Hakkında Kanun’a göre aşağıdakilerden hangisi Bölge İdare Mahkemesi   Başkanlar Kurulunun görevlerindendir?",
  secenekler: [" A) Daireler arasında çıkan iş bölümü uyuşmazlıklarını karara bağlamak", "   B) Bölge idare mahkemesinin genel yönetim   işlerini yürütmek", " C) Mahkemenin uyumlu, verimli ve düzenli çalışmasını sağlamak ve bu yolda uygun göreceği önlemleri almak", " D) Yargı çevresi içinde bulunan ilk derece mahkemeleri arasındaki görev ve yetki uyuşmazlıklarını çözmek", " E) İlk derece mahkemelerince verilen ve istinaf yolu açık olan nihai kararlara karşı yapılan istinaf başvurularını inceleyerek karara bağlamak"],
  dogruCevap: "A) Daireler arasında çıkan iş bölümü uyuşmazlıklarını karara bağlamak"},
  
  
    {//258 * 
  metin: " 52. 2802 sayılı Hâkimler ve Savcılar Kanunu’na göre idari yargı adalet komisyonlarının asıl üyelerinden kaçı Hâkimler ve Savcılar Kurulunca belirlenir?",
  secenekler: ["A) Bir", "  	 B) İki", " C) Üç", "  D) Dört", "  E) Beş"],
  dogruCevap: "B) İki"},
  
  
  
    {//259 * 
  metin: " 53. 5070 sayılı Elektronik İmza Kanunu’na göre tamamen veya kısmen sahte elektronik sertifika  oluşturanlar veya geçerli olarak oluşturulan  elektronik sertifikaları taklit veya tahrif edenler  ile bu elektronik sertifikaları bilerek kullananlar,  hapis cezasının yanında kaç günden az olmamak üzere adlî para cezasıyla cezalandırılır?",
  secenekler: [" A) Yirmi beş", "  B) Elli", " C) Yetmiş beş ", "  D) Doksan", "    E) Yüz"],
  dogruCevap: "E) Yüz"},
  
  
    {//260
  metin: " 54. <br> I.	Elektronik imzalı belgenin elle atılan imzalı belgeyle çelişmesi hâlinde elle atılan imzalı belge geçerli kabul edilir.<br> II. Kanunlarda gösterilen istisnalar hariç olmak üzere, dosyalar güvenli elektronik imza kullanılarak UYAP’tan incelenebilir ve her türlü ceza muhakemesi işlemi yapılabilir. <br>III. Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanmaz.<br> IV. Elektronik ortamdan fiziki örnek çıkartılması gereken hâllerde tutanak veya belgenin aslının aynı olduğu belirtilerek hâkim, Cumhuriyet savcısı veya görevlendirilen yetkili kişi tarafından imzalanır ve mühürlenir. <br><br> 5271 sayılı Ceza Muhakemesi Kanunu’na göre  “elektronik işlemler” ile ilgili yukarıdakilerden  hangileri doğrudur?",
  secenekler: [" A) I ve II", "	 B) I ve IV", " C) III ve IV", "  D) I, II ve III", " E) II, III ve IV"],
  dogruCevap: " E) II, III ve IV"},
  
  
  
    {//261 * 
  metin: " 55. Bölge Adliye ve Adli Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve  Yazı İşleri Hizmetlerinin Yürütülmesine Dair  Yönetmelik’e göre “UYAP’ın kullanılması” ile  ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A) Bütün dosyalar güvenli elektronik imza kullanılarak UYAP’ta incelenebilir ve her türlü muhakeme işlemi yapılabilir.", " B) Fiziki olarak verilen ve gönderilen her türlü   evrak, elektronik ortama aktarılarak UYAP’a kaydedilir ve ilgili birime gönderilir.", " C) Gelen evraktan sorumlu personel, UYAP üzerinden birimlere gönderilen ve iş listesine düşen belgeleri derhâl ilgili kişiye ya da doğrudan dosyasına aktarır.", " D) Taraf ve vekilleri ile diğer ilgililer güvenli elektronik imza ile imzalamak suretiyle UYAP vasıtasıyla birimlere elektronik ortamda bilgi ve belge gönderebilirler.", " E) Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlardabirden fazla nüshanın düzenlenmesini öngören  hükümler uygulanmaz."],
  dogruCevap: " A) Bütün dosyalar güvenli elektronik imza kullanılarak UYAP’ta incelenebilir ve her türlü muhakeme işlemi yapılabilir."},
  
  
  
    {//262 *
  metin: " 56. <br> I.	Taraf ve vekilleri ile diğer ilgililer güvenli elektronik imza ile imzalamak suretiyle UYAP vasıtasıyla dairelere veya mahkemelere elektronik ortamda bilgi ve belge gönderebilirler. <br> II. Gelen evraktan sorumlu personel, UYAP üzerinden mahkemelere gönderilen ve iş listesine   düşen belgeleri derhâl ilgili kişiye aktarır. <br>III. Fiziki ortamda yapılan işlemlerde süre mesai saati sonunda biter. <br> IV. Tutanak, belge ve kararlar elektronik ortamda düzenlenemez. <br><br> Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile  Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve  Esaslarına İlişkin Yönetmelik’e göre “UYAP’ın kullanılması” ile ilgili yukarıdakilerden hangileri  doğrudur?",
  secenekler: [" A) Yalnız I	", "   B) II ve IV", " C) III ve IV", "   D) I, II ve III", " 	 E) I, II, III ve IV"],
  dogruCevap: " D) I, II ve III"},
  
  
  
    {//263 * 
  metin: " 57. Ceza Muhakemesinde Ses ve Görüntü Bilişim  Sisteminin Kullanılması Hakkında Yönetmelik’e  göre SEGBİS ile elde edilen kayıtların tutanağa  dönüştürülmesi işlemi kovuşturma aşamasında  aşağıdakilerden hangisi tarafından yapılır?",
  secenekler: [" A) Hâkim", "  B) Zabıt kâtibi", " C) Esas mahkemesi", "  D) Yazı işleri müdürü", "  E) Cumhuriyet başsavcılığı"],
  dogruCevap: "C) Esas mahkemesi"},
  
  
    {//264 * 
  metin: " 58. <br> I.	Muhataba gönderilmek üzere fiziksel ortamda hazırlanan belgeler, paraflı nüshası hazırlayan idarede kalacak şekilde en az iki nüsha düzenlenir. <br> II. Elektronik ortamda hazırlanan belgelerde yalnızca “Times New Roman” yazı tipi kullanılır. <br> III. Metin içinde yer alan alıntılar tırnak içinde ve eğik (italik) olarak yazılabilir. <br> IV. Belge ekleri aynı form, format veya ebatlarda  Hazırlanmalıdır. <br><br> Resmî Yazışmalarda Uygulanacak Usul ve  Esaslar Hakkında Yönetmelik’e göre “belge özellikleri” ile ilgili yukarıdakilerden hangileri  doğrudur?",
  secenekler: [" A) I ve II", "	  B) I ve III", "C) II ve IV", " D) II, III ve IV", " E) I, II, III ve IV"],
  dogruCevap: "B) I ve III"},
  
  
    {//265 * 
  metin: " 59. İdare içi ve idare dışı görüş, bilgi ve belge talep yazıları günlü yazılır. İdareler, ilgili mevzuattaki özel hükümler saklı kalmak kaydıyla, süre belirtilmeyen belge taleplerini talebin kendilerine ulaşmasından itibaren en geç - - - - iş günü; süre belirtilmeyen bilgi ve görüş taleplerini ise talebin kendilerine ulaşmasından itibaren en geç - - - - iş günü içinde yerine getirir. Resmî Yazışmalarda Uygulanacak Usul ve  Esaslar Hakkında Yönetmelik’e göre “görüş, bilgi ve belge taleplerinde süre” ile ilgili yukarıdaki ifadede yer alan boşluklara sırasıyla  hangisi getirilmelidir? ",
  secenekler: [" A) üç - yedi", "  B) yedi - on", "C) beş - on beş", " D) on - yirmi", " E) on beş - otuz"],
  dogruCevap: "C) beş - on beş"},
  
  
    {//266 * 
  metin: " 60. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik’e göre “metin” bölümü  ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A) Paragrafa 1,25 cm içeriden başlanır ve metin iki yana hizalanır. Paragraflar arasında satır boşluğu bırakılmaz. İhtiyaç duyulması hâlinde paragraflar harf veya rakam ile sıralanabilir.", " B) Birden fazla sayfa tutan üst yazılarda sayı, tarih, konu, muhatap ve ilgi bilgilerine sadece ilk sayfada; imza, ek, dağıtım ve iletişim bilgilerine ise sadece son sayfada yer verilir.", " C) Metindeki kelime aralarında ve noktalama işaretlerinden sonra bir karakter boşluk bırakılır. Noktalama işaretleri kendinden önce gelen harfe bitişik yazılır.", " D) İlgi ile metin başlangıcı arasında iki satır, ilgi yoksa belgenin muhatabı ile metin başlangıcı arasında üç satır boşluk bulunur.", " E) Metin içinde geçen sayılar rakamla veya harfle yazılabilir. Gerekli görülmesi hâlinde sayılar rakamla yazıldıktan sonra parantez içinde harfle de gösterilebilir"],
  dogruCevap: " D) İlgi ile metin başlangıcı arasında iki satır, ilgi yoksa belgenin muhatabı ile metin başlangıcı arasında üç satır boşluk bulunur."},
  
  
  
    {//267 * 
  metin: " 61. 7201 sayılı Tebligat Kanunu’na göre “elektronik tebligat” ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A) Tebligata elverişli bir elektronik adres vererek bu adrese tebligat yapılmasını isteyen kişiye, elektronik yolla tebligat yapılabilir.", " B) Elektronik yolla tebligat, muhatabın elektronik adresine ulaştığı tarihi izleyen beşinci günün sonunda yapılmış sayılır.", " C) Sermayesi paylara bölünmüş komandit şirketlere elektronik yolla tebligat yapılması zorunludur.", " D) Elektronik tebligatın uygulanmasına ilişkin usul ve esaslar yönetmelikle belirlenir.", " E) Anonim ve limitet şirketlere elektronik yolla tebligat yapılamaz."],
  dogruCevap: " E) Anonim ve limitet şirketlere elektronik yolla tebligat yapılamaz."},
  
  
  
    {//268 * 
  metin: "  62. <br>I.	İlan alakalının ıttılaına en emin bir şekilde vasıl olacağı umulan ve varsa tebliği çıkaran mercinin bulunduğu yerde intişar eden birer gazetede ve ayrıca elektronik ortamda yapılır. <br>II. Mercinin, icabına göre birden fazla ilan yapılmasına karar vermesi durumunda ilanlar  arasındaki müddet beş günden aşağı olamaz.<br> III. Tebliğ olunacak evrak ve ilan sureti, tebliği çıkaran mercinin herkesin kolayca görebileceği bir yerine de asılır. <br> IV. Gerekiyorsa ikinci ilan, yabancı memleket gazeteleriyle de yaptırılabilir. <br><br>7201 sayılı Tebligat Kanunu’na göre ilanen   tebligatta “ilan şekli” ile ilgili yukarıdakilerden  hangileri doğrudur?",
  secenekler: [" A) Yalnız I	", "  B) I, II ve III", "  C) I, III ve IV", "	 D) II, III ve IV", "	 E) I, II, III ve IV"],
  dogruCevap: "C) I, III ve IV"},
  
  
    {//269 * 
  metin: " 63. <br> I.	Muhatap veya muhatap adına tebligat yapılabilecek kişiler, o adreste bulundukları hâlde hiçbirinin tebliğ anında gösterilen adreste mevcut olmamaları <br>II. Muhatap ya da kendilerine tebligat yapılabilecek kişilerin tebellüğden kaçınması <br>III. Muhatap, gösterilen adreste hiç oturmamış veya bu adresten sürekli olarak ayrılmış olsa dahi tebligatın, muhatabın adres kayıt sistemindeki yerleşim yeri adresine bu husus meşruhat verilerek çıkarılması <br><br> Tebligat Kanununun Uygulanmasına Dair  Yönetmelik’e göre tebliğ imkânsızlığı ve  tebellüğden kaçınma ile adres kayıt sistemin deki adreste bulunamama hâlinde yapılacak  işlemle ilgili yukarıdaki hâllerden hangileri  gerçekleştiği takdirde tebliğ olunacak evrakı,  tebliğ memuru o yerin muhtar veya ihtiyar  heyeti veya meclisi üyesinden birine ya da  kolluk amir veya memuruna imza karşılığında  teslim eder?",
  secenekler: ["A) Yalnız I	", "   B) I ve II", " C) I ve III ", "  D) II ve III", "  E) I, II ve III"],
  dogruCevap: "E) I, II ve III"},
  
  
  
    {//270 * 
  metin: " 64. Tebligat Kanununun Uygulanmasına Dair  Yönetmelik’e göre “usulsüz tebligat, gece ve tatil günlerinde tebligat” ile ilgili aşağıdakilerden  hangisi yanlıştır?",
  secenekler: [" A) Gece vakti tebligat yapılabilir. ", " B) Resmî tatil günlerinde tebligat yapılamaz.", " C) Muhatabın tebliği öğrendiğini beyan ettiği tarih, tebliğ tarihi olarak kabul edilir.", " D) Tebliğ, usulüne aykırı yapılmış olsa bile, muhatabı tebliği öğrenmiş ise geçerlidir. Aksi takdirde tebligat yapılmamış sayılır.", " E) Tebliğin usulüne aykırı yapılmış olması hâlinde, muhatabın tebliği öğrendiğinin ve bunun tarihinin iddia ve ispatı mümkün değildir"],
  dogruCevap: "B) Resmî tatil günlerinde tebligat yapılamaz."},
  
  
  
    {//271 * 
  metin: " 65. Elektronik Tebligat Yönetmeliği’ne göre “idare tarafından elektronik tebligatın alınması ve muhataba iletilmesi” ile ilgili aşağıdakilerden hangisi  yanlıştır?",
  secenekler: [" A) İdare ve hizmet sağlayıcılar, zaman damgası bilgisini ve mesaj özetini muhataba iletir, sisteminde tutmaz. ", " B) Olay kayıtları erişilebilir şekilde arşivlerde otuz yıl süreyle saklanır.", " C) Hizmet sağlayıcılar, muhatabın adresine elektronik tebligatın iletilip iletilmediğine ve gecikme oluşmuşsa bu gecikmeye ilişkin kayıtlar da dâhil tüm süreçlerin olay kayıtlarını tutar.", " D) Olay kayıtları günde en az bir defa olmak üzere zaman damgası eklenerek güvenli elektronik imzayla imzalanır.", " E) Hizmet sağlayıcılar, talep hâlinde elektronik tebligata ilişkin delil kayıtlarını yetkili mercilere elektronik ortamda sunmakla ve bu amaçla oluşturacağı sistemi hazır tutmakla yükümlüdür."],
  dogruCevap: "A) İdare ve hizmet sağlayıcılar, zaman damgası bilgisini ve mesaj özetini muhataba iletir, sisteminde tutmaz."},
  
  
  
    {//272 ------------
  metin: " 66. Hizmet sağlayıcı, elektronik imza kullanılarak hizmetin kullanıma kapatılması başvurusu yapıldığı hâllerde - - - -, fiziki başvurularda - - - - iş günü içinde muhatabın elektronik tebligat adresine elektronik tebligat mesajı gönderilmesini engeller. Elektronik Tebligat Yönetmeliği’ne göre yukarıdaki hükümde boş bırakılan yerlere sırasıyla  hangisi getirilmelidir?",
  secenekler: [" A) derhâl - üç", "  B) derhâl - beş", " C) bir - üç", "  	 D) üç - beş", "  E) beş - yedi"],
  dogruCevap: "B) derhâl - beş"},
  
  
  
    {//273 *
  metin: " 67. 4721 sayılı Türk Medeni Kanunu’nun “başlangıç hükümleri” ile ilgili aşağıdakilerden hangisi  yanlıştır?",
  secenekler: [" A) Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz.", " B) Kanun’un iyi niyete hukuki bir sonuç bağladığı durumlarda, asıl olan iyi niyetin varlığıdır.", "   C) Bu Kanun’un genel nitelikli hükümleri, özel hukuk ilişkilerine uygulanamaz.", " D) Kanun’da aksine bir hüküm bulunmadıkça, taraflardan her biri, hakkını dayandırdığı olguların varlığını ispatla yükümlüdür.", "E) Kanun’un takdir yetkisi tanıdığı veya durumun gereklerini ya da haklı sebepleri göz önünde tutmayı emrettiği konularda hâkim, hukuka ve hakkaniyete göre karar verir."],
  dogruCevap: "C) Bu Kanun’un genel nitelikli hükümleri, özel hukuk ilişkilerine uygulanamaz."},
  
  
  
  
    {//274 * 
  metin: " 68. <br> I.	Haksız fiillerinden sorumlu değildirler. <br>II. Yasal temsilcilerinin rızası olmadıkça, kendi işlemleriyle borç altına giremezler. <br> III. Karşılıksız kazanmada ve kişiye sıkı sıkıya bağlı hakları kullanmada yasal temsilcilerinin rızası gerekli değildir. <br><br> 4721 sayılı Türk Medeni Kanunu’na göre ayırt  etme gücüne sahip küçükler ve kısıtlılarla ilgili  yukarıdakilerden hangileri doğrudur?",
  secenekler: [" A) Yalnız I	", "  B) Yalnız III", " C) I ve II", " D) II ve III", " E) I, II ve III"],
  dogruCevap: "D) II ve III"},
  
  
  
    {//275 * 
  metin: " 69. <br> I.	Eklenti, asıl şeyden geçici olarak ayrılmakla bu niteliğini kaybeder. <br>II.	Bir şeye ilişkin tasarruflar, aksi belirtilmedikçe onun eklentisini de kapsar. <br>III. Eklenti, asıl şey malikinin anlaşılabilen arzusuna veya yerel âdetlere göre, işletilmesi, korunması veya yarar sağlaması için asıl şeye sürekli olarak özgülenen ve kullanılmasında birleştirme, takma veya başka bir biçimde asıl şeye bağlı kılınan taşınır maldır. <br>IV. Asıl şeye zilyet olan kimsenin sadece geçici olarak kullanması veya tüketmesi için özgülenen ya da asıl şeyin özel niteliği ile herhangi bir ilişkisi bulunmadan sadece korunmak, satılmak veya kiraya verilmek üzere onunla birleştirilen şeyler eklenti sayılmaz. <br><br>4721 sayılı Türk Medeni Kanunu’na göre  “eklenti” ile ilgili yukarıdakilerden hangileri  doğrudur?",
  secenekler: [" A) I ve IV", "   B) II ve IV", "C) I, II ve III", " D) II, III ve IV", " E) I, II, III ve IV"],
  dogruCevap: " D) II, III ve IV"},
  
  
    {//276 * 
  metin: " 70. 5237 sayılı Türk Ceza Kanunu’na göre dava  zaman aşımı ile ilgili olarak ağırlaştırılmış  müebbet hapis cezasını gerektiren suçlarda,  Kanun’da başka türlü yazılmış olan hâller dışında kaç yıl geçmesiyle kamu davası düşer?",
  secenekler: ["A) On ", " B) On beş", "C) Yirmi", "  D) Yirmi beş", "	 E) Otuz"],
  dogruCevap: "E) Otuz"},
  
  
  
    {//277 * 
  metin: " 71. 2577 sayılı İdari Yargılama Usulü Kanunu’na göre aşağıdakilerden hangisi idari davaların  açılması için mahkeme başkanlıklarına hitaben yazılacak dilekçelerde gösterilmesi gereken hususlardan biri değildir?",
  secenekler: [" A) Davanın konu ve sebepleri ile dayandığı deliller", " B) Tarafların ve varsa vekillerinin veya temsilcilerinin telefon numaraları", " C) Vergi, resim, harç, benzeri mali yükümler ve bunların zam ve cezalarına ilişkin davalarla tam yargı davalarında uyuşmazlık konusu miktar", " D) Tarafların ve varsa vekillerinin veya temsilcilerinin ad ve soyadları veya unvanları ve adresleri ile gerçek kişilere ait Türkiye Cumhuriyeti kimlik numarası ", "E) Vergi davalarında davanın ilgili bulunduğu verginin veya vergi cezasının nevi ve yılı, tebliğ edilen ihbarnamenin tarihi ve numarası ve varsa mükellef hesap numarası"],
  dogruCevap: "B) Tarafların ve varsa vekillerinin veya temsilcilerinin telefon numaraları"},
  
  
  
    {//278 * 
  metin: " 72. 6100 sayılı Hukuk Muhakemeleri Kanunu’na  göre yetki itirazının ileri sürülmesi ile ilgili  aşağıdakilerden hangisi yanlıştır? ",
  secenekler: ["A) Mahkeme, yetkisizlik kararında yetkili mahkemeyi göstermek zorunda değildir.", "B) Yetkinin kesin olmadığı davalarda, yetki itirazının, cevap dilekçesinde ileri sürülmesi gerekir.", "C) Yetkinin kesin olduğu davalarda taraflar, mahkemenin yetkisiz olduğunu her zaman ileri sürebilir.", " D) Yetkinin kesin olduğu davalarda, mahkeme yetkili olup olmadığını, davanın sonuna kadar kendiliğinden araştırmak zorundadır.", " E) Yetkinin kesin olmadığı davalarda, davalı, süresi içinde ve usulüne uygun olarak yetki itirazında bulunmazsa, davanın açıldığı mahkeme yetkili hâle gelir."],
  dogruCevap: "A) Mahkeme, yetkisizlik kararında yetkili mahkemeyi göstermek zorunda değildir."},
  
  
  
    {//279 * 
  metin: " 73. 5271 sayılı Ceza Muhakemesi Kanunu’na  göre “kararlar” ile ilgili aşağıdakilerden hangisi  yanlıştır?",
  secenekler: [" A) Koruma tedbirlerine ilişkin olanlar hariç, aleyhine kanun yoluna başvurulabilecek hâkim veya mahkeme kararları, hazır bulunamayan ilgilisine tebliğ olunur.", "  B) Duruşmada verilecek kararlar, Cumhuriyet savcısı, duruşmada hazır bulunan müdafi, vekil ve diğer ilgililer dinlendikten sonra verilir.", " C) Duruşma dışındaki kararlar, Cumhuriyet savcısının yazılı veya sözlü görüşü alındıktan sonra verilir.", " D) Karşı oylar hariç olmak üzere hâkim ve mahkemelerin her türlü kararı gerekçeli olarak yazılır.", " E) Kararlarda, başvurulabilecek kanun yolu, süresi, mercii ve şekilleri belirtilir."],
  dogruCevap: "D) Karşı oylar hariç olmak üzere hâkim ve mahkemelerin her türlü kararı gerekçeli olarak yazılır."},
  
  
  
    {//280 * 
  metin: "  74. Adalet Bakanlığı Disiplin Yönetmeliği’ne göre  yüksek disiplin kurulunda raportörlük görevi  kimler tarafından yürütülür?",
  secenekler: [" A) Zabıt kâtipleri", "  B) İcra hâkimleri", "  C) Tetkik hâkimleri", "	 D) Adalet uzmanları", "  E) Yazı işleri müdürleri"],
  dogruCevap: " C) Tetkik hâkimleri"},
  
  
  
    {//281 * 
  metin: " 75. 5271 sayılı Ceza Muhakemesi Kanunu’na göre  yabancı ülkelerde bulunup da diplomatik bağışıklıktan yararlanan Türk kamu görevlilerinin işledikleri suçlardan dolayı yetkili mahkeme  aşağıdakilerden hangisidir?",
  secenekler: [" A) Ankara mahkemesi", " B) Yerleşim yeri mahkemesi", " C) Yakalandığı yer mahkemesi", " D) Suçun işlendiği yere daha yakın olan yer mahkemesi", " E) Türkiye’de en son adresinin bulunduğu yer mahkemesi"],
  dogruCevap: "A) Ankara mahkemesi"},
  
  
  
    {//282 * 
  metin: " 76. <br> I.	Dinlenme sırasında on beş yaşını doldurmuş, on sekiz yaşından gün almamış olan <br> II. Ayırt etme gücüne sahip olmamaları nedeniyle yeminin niteliği ve önemini kavrayamayan <br> III. Soruşturma veya kovuşturma konusu suçlara iştirakten veya bu suçlar nedeniyle suçluyu kayırmaktan ya da suç delillerini yok etme, gizleme veya değiştirmekten şüpheli, sanık veya hükümlü olan<br><br> 5271 sayılı Ceza Muhakemesi Kanunu’na göre  yukarıdaki tanıklardan hangileri yeminsiz  dinlenir?",
  secenekler: ["A) Yalnız I", " B) Yalnız II", " C) I ve II", " D) II ve III", " E) I, II ve III"],
  dogruCevap: " D) II ve III"},
  
  
  
    {//283 * 
  metin: " 77. 5271 sayılı Ceza Muhakemesi Kanunu’na göre  ağır ceza mahkemesinin görevine giren işlerde,  tutukluluk süresi zorunlu hâller dışında en çok kaç yıldır?",
  secenekler: [" A) Bir", "  B) İki", " C) Üç", "  D) Dört", " E) Beş"],
  dogruCevap: " B) İki"},
  
  
  
    {//284 * 
  metin: " 78. <br> I.	Oturum tarihleri <br>II. Duruşmanın yapıldığı mahkemenin adı <br>III. Hâkimin, Cumhuriyet savcısının ve zabıt kâtibinin adı ve soyadı <br>IV. Duruşmanın seyrini ve sonuçlarını yansıtan ve yargılama usulünün bütün temel kurallarına uyulduğunu gösteren unsurlar <br><br> 5271 sayılı Ceza Muhakemesi Kanunu’na göre  duruşma tutanağının başlığında yukarıdakilerden hangilerinin belirtilmesi gerekir?",
  secenekler: ["A) Yalnız I 	", "  B) II ve III", " C) II ve IV", " D) I, II ve III", " E) I, II, III ve IV"],
  dogruCevap: "D) I, II ve III"},
  
  
  
    {//285 * 
  metin: " 79. 5271 sayılı Ceza Muhakemesi Kanunu’na göre  Yargıtay ceza dairelerinden birinin kararına  karşı Yargıtay Cumhuriyet Başsavcısı, ilamın  kendisine verildiği tarihten itibaren en geç kaç  gün içinde Ceza Genel Kuruluna itiraz edebilir?",
  secenekler: ["A) Kırk beş", "  B) Otuz", " C) Yirmi", "	  D) On beş", " E) On"],
  dogruCevap: "B) Otuz"},
  
  
  
    {//286 * 
  metin: " 80. <br> I.	(1) sayılı tarifede yazılı maktu harçlar ilgili bulunduğu işlemin yapılmasından önce peşin olarak ödenir. <br>II. Harç peşin veya süresinde ödenmemiş ise, müteakip muamelelere ancak harç ödendikten sonra devam olunur. <br> III.	Mahiyetleri icabı işin sonunda hesap edilip alınması gerekenler, harç alacağının doğması tarihinden itibaren 30 gün içinde ödenir. <br><br>   492 sayılı Harçlar Kanunu’na göre “maktu harçlarda ödeme zamanı” ile ilgili yukarıdakilerden hangileri doğrudur?",
  secenekler: [" A) Yalnız I", "  B) I ve II", " C) I ve III", "  D) II ve III", " E) I, II ve III"],
  dogruCevap: "B) I ve II"},
  
  
  
    {//287 * 
  metin: " 81. Karar ve ilam harçlarının - - - - peşin, geri kalanı kararın tebliğinden itibaren - - - - ay içinde ödenir. 492 sayılı Harçlar Kanunu’na göre yukarıdaki  hükümde boş bırakılan yerlere sırasıyla hangisi  getirilmelidir?",
  secenekler: ["A) dörtte biri - bir", "  B) üçte biri - iki", " C) yarısı - bir ", " D) üçte ikisi - iki", "	 E) dörtte üçü - üç"],
  dogruCevap: "A) dörtte biri - bir"},
  
  
  
    {//288
  metin: " 82. <br> I.	Danıştay <br> II.	Vergi Mahkemeleri <br> III.	Bölge İdare Mahkemeleri <br><br>492 sayılı Harçlar Kanunu’na göre vergi yargısı harçları, harca mevzu olan işlemlerden  dolayı yukarıdakilerden hangilerine başvuran  mükellefler tarafından ödenir?",
  secenekler: ["A) Yalnız I 	", "  B) Yalnız II", " C) I ve III", "   D) II ve III", " E) I, II ve III"],
  dogruCevap: "E) I, II ve III"},
  
  
  
    {//289 
  metin: " 83. Bölge Adliye ve Adli Yargı ilk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve  Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik’e göre aşağıdakilerden hangisi   bölge adliye mahkemesi yazı işleri müdürünün  görev ve sorumluluklarından biridir?",
  secenekler: [" A) Posta masraflarının aylık kontrolünü yapmak", " B) Göreve yeni başlayan personelin, UYAP ve ilk kullanıcı eğitimlerinin sağlıklı olarak verilmesine ilişkin süreçleri takip etmek ", " C) Hukuk dairelerinde talep hâlinde, ceza daireleri, Cumhuriyet başsavcılığı ve komisyonda talep olmaksızın kararların tebliğini sağlamak ", "D) UYAP ekranları ile ilgili birim ve kullanıcılarca yapılacak görüş, öneri ve sorun bildirimlerini izleyerek Bilgi İşlem Dairesi Başkanlığına iletilmesini sağlamak", " E) Doğru ve güvenilir adli istatistikler elde edilebilmesi amacıyla, verileri sisteme doğru, eksiksiz ve zamanında girmek ve bu verilerin usulüne uygun girildiğini denetlemek"],
  dogruCevap: "C) Hukuk dairelerinde talep hâlinde, ceza daireleri, Cumhuriyet başsavcılığı ve komisyonda talep olmaksızın kararların tebliğini sağlamak"},
  
  
  
    {//290 * 
  metin: "  84. Bölge Adliye ve Adli Yargı ilk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve  Yazı İşleri Hizmetlerinin Yürütülmesine Dair  Yönetmelik’e göre “yönetimi altında bulunan personelin gelişen bilişim teknolojileri çerçevesinde yetiştirilmesi ve eğitilmesini sağlamak” görevi  aşağıdakilerden hangisine aittir?",
  secenekler: ["A) Bilgi işlem şefi", " B) İdari işler müdürü", "C) Yazı işleri müdürü", " D) Bilgi işlem müdürü", " E) Bilgisayar işletmeni"],
  dogruCevap: "A) Bilgi işlem şefi"},
  
  
    {//291 * 
  metin: "  85. Bölge Adliye ve Adli Yargı ilk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve  Yazı İşleri Hizmetlerinin Yürütülmesine Dair  Yönetmelik’e göre bölge adliye mahkemesi   adalet komisyonu kararları en geç kaç gün  içinde yazılır ve ilgilisine tebliğe çıkarılır?",
  secenekler: [" A) Üç ", "  B) Beş", " C) Yedi", "  D) On", " E) On beş"],
  dogruCevap: "C) Yedi"},
  
  
  
    {//292 * 
  metin: " 86. Bölge Adliye ve Adli Yargı ilk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik’e göre ortak tutulacak kayıtlardan  olan “bölge adliye mahkemelerinden dış birimlere zorunlu nedenlerle fiziki olarak gönderilen evrak bilgilerinin tutulduğu kayıt” aşağıdakilerden hangisidir?",
  secenekler: [" A) Zimmet kaydı", "  B) İstinabe kaydı", " C) Muhabere kaydı", "  D) Tebliğname kaydı", " 	 E) Bilgi edinme kaydı"],
  dogruCevap: "A) Zimmet kaydı"},
  
  
  
    {//293 * 
  metin: " 87. Bölge Adliye ve Adli Yargı ilk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdari ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair  Yönetmelik’e göre ilgili kanunlar gereği gizli  kalması gereken belgeler ile kıymetli evrak ve saklanması lüzumlu görülen sair belgeler   aşağıdakilerden hangisinin sorumluluğunda saklanır?",
  secenekler: ["A) Hâkim", "  B) Zabıt kâtibi", "C) Yazı işleri müdürü", " D) İdari işler müdürü", " E) Bilgi işlem müdürü"],
  dogruCevap: "C) Yazı işleri müdürü"},
  
  
  
    {//294 * 
  metin: " 88. Bölge İdare Mahkemeleri, İdare Mahkemeleri  ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik’e göre “duruşma ve keşif esnasında izlenmesi gereken davranış kurallarını taraflara ve ilgililere açıklamak” görevi aşağıdakilerden hangisinindir?",
  secenekler: [" A) Hâkim", " B) Mübaşir", " C) Zabıt kâtibi", "  D) İdari işler müdürü", " 	 E) Cumhuriyet savcısı"],
  dogruCevap: "B) Mübaşir"},
  
  
    {//295 * 
  metin: " 89. <br> I.	Özlük kaydı <br>II. Karar kaydı <br>III. Personel nöbet kaydı <br> IV. Fazla ve esnek çalışma kaydı <br><br>Bölge İdare Mahkemeleri, İdare Mahkemeleri  ve Vergi Mahkemelerinin İdari İşler ile Yazı   İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik’e göre Bölge İdare  Mahkemesi Adalet Komisyonu tarafından yukarıdaki kayıtlardan hangilerinin UYAP’ta tutulması zorunludur?",
  secenekler: [" A) Yalnız I	 ", "  B) I ve IV", " C) II ve III ", "  D) II, III ve IV", " 	 E) I, II, III ve IV"],
  dogruCevap: "E) I, II, III ve IV"},
  
  
    {//296 
  metin: " 90. Bölge İdare Mahkemeleri, İdare Mahkemeleri  ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik’e göre sıra numarası ve  tevdi tarihi, dosyadaki taraflar, varsa kanuni  temsilcileri ile vekillerinin ad ve soyadları,  talebin türü, gönderen mahkemenin adı ve  dosya esas numarası, işlem sonucu, iade tarihi ve düşünceler sütunlarından oluşan kayıt  aşağıdakilerden hangisidir?",
  secenekler: [" A) Talimat kaydı", " B) Karar kaydı", " C) Esas kaydı", " D) Dava nakil istekleri kaydı", " E) Uyuşmazlığın giderilmesi başvuru kaydı"],
  dogruCevap: "A) Talimat kaydı"},
  
  
  
    {//297 *
  metin: " 91. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile   Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve  Esaslarına İlişkin Yönetmelik’e göre “harçların  hesaplanması” ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A) Harç, posta ücreti ve para cezaları elektronik ortamda tahsil edilebilir.", "  B) Tahsil işlemi bankalar aracılığıyla olabileceği gibi Barokart, kredi kartı ve benzeri araçlarla  da yapılabilir.", " C) Uyuşmazlık konusu miktarın belirtilmesi gereken hâllerde bu husus, dava dilekçesinde yazılı değilse eksiklik, davacıya tamamlattırılır.", " D) Daire veya mahkemelere verilen dava dilekçesi üzerine ödenmesi gereken harç ve masraflar zabıt kâtibi tarafından hesap edilerek tahsil edilir.", " E) Posta ücreti olarak tahsil edilen paraların, mutat ödemeler dikkate alınarak belirlenecek olan günlük ihtiyaçtan fazlası Bakanlıkça belirlenen bankaya yatırılır."],
  dogruCevap: "D) Daire veya mahkemelere verilen dava dilekçesi üzerine ödenmesi gereken harç ve masraflar zabıt kâtibi tarafından hesap edilerek tahsil edilir."},
  
  
  
    {//298 * 
  metin: " 92. 6100 sayılı Hukuk Muhakemeleri Kanunu’na  göre “görev” ile ilgili aşağıdaki hükümlerden  hangisi yanlıştır? ",
  secenekler: [" A) Göreve ilişkin kurallar, kamu düzenindendir.", " B) Mahkemelerin görevi, ancak kanunla düzenlenir.", " C) Dava konusunun değer veya tutarına bakılmaksızın taşınır ve taşınmaz mallarda, sadece zilyetliğin korunmasına yönelik olan davaları sulh hukuk mahkemeleri görür.", " D) Dava konusunun değer ve miktarına bakılmaksızın mal varlığı haklarına ilişkin davalarla, şahıs varlığına ilişkin davalarda görevli mahkeme, aksine bir düzenleme bulunmadıkça sulh hukuk mahkemesidir.", " E) Dava konusunun değer veya tutarına bakılmaksızın taşınır ve taşınmaz mal veya hakkın paylaştırılmasına ve ortaklığın giderilmesine ilişkin davaları sulh hukuk mahkemeleri görür."],
  dogruCevap: "D) Dava konusunun değer ve miktarına bakılmaksızın mal varlığı haklarına ilişkin davalarla, şahıs varlığına ilişkin davalarda görevli mahkeme, aksine bir düzenleme bulunmadıkça sulh hukuk mahkemesidir."},
  
  
  
    {//299 * 
  metin: " 93. 6100 sayılı Hukuk Muhakemeleri Kanunu’na  göre “ilk itirazlar” ile ilgili aşağıdakilerden hangisi yanlıştır? ",
  secenekler: [" A) İş bölümü itirazı ilk itirazlardandır.", "  B) İlk itirazlar, dava şartlarından önce incelenir.", "  C) İlk itirazlar, ön sorunlar gibi incelenir ve karara bağlanır.", "  D) Kesin yetki kuralının bulunmadığı hâllerde yetki itirazı ilk itirazlardandır.", "  E) İlk itirazların hepsi cevap dilekçesinde ileri sürülmek zorundadır; aksi hâlde dinlenemez."],
  dogruCevap: "B) İlk itirazlar, dava şartlarından önce incelenir."},
  
  
    {//300 * 
  metin: " 94. 6100 sayılı Hukuk Muhakemeleri Kanunu’na  göre cevap dilekçesinde aşağıdaki hususlardan hangisinin eksik olması hâlinde, bunun  giderilmesi için hâkim tarafından davalıya bir  haftalık ek süre verilir?",
  secenekler: [" A) Dayanılan hukuki sebepler", " B) Açık bir şekilde talep sonucu", " C) Davalının Türkiye Cumhuriyeti kimlik numarası", " D) Davalının savunmasının dayanağı olan bütün vakıaların sıra numarası altında açık özetleri", " E) Savunmanın dayanağı olarak ileri sürülen her bir vakıanın hangi delillerle ispat edileceği"],
  dogruCevap: "C) Davalının Türkiye Cumhuriyeti kimlik numarası"},
  
  
  
    {//301 *
  metin: "  95. 6100 sayılı Hukuk Muhakemeleri Kanunu’na  göre “bilirkişi incelemesi” ile ilgili aşağıdakilerden  hangisi yanlıştır?",
  secenekler: [" A) Bilirkişi, mahkemece kendisine tevdi olunan görevi bizzat yerine getirmekle yükümlü olup, görevinin icrasını kısmen yahut tamamen başka bir kimseye bırakamaz.", " B) Bilirkişinin oy ve görüşünü açıklayabilmesi için bir şey üzerinde inceleme yapması zorunlu ise  mahkeme kararı ile gerekli incelemeyi yapabilir.", " C) Bilirkişi, görevi sebebiyle yahut görevini yerine getirirken öğrendiği sırları saklamak, kendisi ve başkaları yararına kullanmaktan kaçınmakla yükümlüdür.", " D) Bilirkişi raporunun hazırlanması için verilecek süre iki ayı geçemez. Bilirkişinin talebi üzerine, kendisini görevlendiren mahkeme gerekçesini göstererek, süreyi iki ayı geçmemek üzere uzatabilir.", "  E) Mahkeme, bilirkişi olarak, yalnızca bir kişiyi  görevlendirebilir. Ancak, gerekçesi açıkça gösterilmek suretiyle, tek sayıda, birden fazla kişiden oluşacak bir kurulun bilirkişi olarak görevlendirilmesi de mümkündür."],
  dogruCevap: "D) Bilirkişi raporunun hazırlanması için verilecek süre iki ayı geçemez. Bilirkişinin talebi üzerine, kendisini görevlendiren mahkeme gerekçesini göstererek, süreyi iki ayı geçmemek üzere uzatabilir."},
  
  
    {//302 * 
  metin: " 96. 6100 sayılı Hukuk Muhakemeleri Kanunu’na  göre “hüküm nüshası” ile ilgili aşağıdakilerden  hangisi yanlıştır?",
  secenekler: [" A) Tarafların elinde bulunan hüküm nüshalarının farklı olması hâlinde muhabere kartonundaki esas alınır.", " B) Taraflardan her birine verilen hükmün bir nüshası da dosyasında saklanır.", " C) Taraflardan her birine verilen hüküm nüshası ilamdır.", " D) Yazılıp imza edilen ve mahkeme mührü ile mühürlenen nüshalar taraflardan her birine yazı işleri müdürü tarafından verilir. ", " E) Hüküm yazılıp imza edildikten ve mahkeme mührü ile mühürlendikten sonra nüshaları taraflardan her birine makbuz karşılığında verilir."],
  dogruCevap: "A) Tarafların elinde bulunan hüküm nüshalarının farklı olması hâlinde muhabere kartonundaki esas alınır."},
  
  
  
    {//303 *
  metin: "  97. <br> I. Yargılama ve takip giderleri için teminat göstermekten muafiyet <br>II.	Yapılacak tüm yargılama ve takip giderlerinden sürekli olarak muafiyet<br> III. Davanın avukat ile takibi gerekiyorsa, ücreti sonradan ödenmek üzere bir avukat temini <br>IV. Dava ve icra takibi sırasında yapılması gereken tüm giderlerin Devlet tarafından avans olarak ödenmesi <br><br>6100 sayılı Hukuk Muhakemeleri Kanunu’na  göre adli yardım kararı ilgiliye yukarıdakilerden hangilerini sağlar?",
  secenekler: [" A) I ve II", " 	   B) III ve IV	", " C) I, III ve IV ", "  D) II, III ve IV", "   E) I, II, III ve IV"],
  dogruCevap: "C) I, III ve IV"},
  
  
    {//304 * 
  metin: "  98. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı  Hakkında Kanun’a göre mahkeme, kesinleşen  ve yerine getirilmesini onayladığı cezaya ilişkin  hükmü aşağıdakilerden hangisine gönderir?",
  secenekler: [" A) Ceza ve Tevkifevleri Genel Müdürlüğüne", " B) Hâkimler ve Savcılar Kuruluna", " C) Bölge Adliye Mahkemelerine", " D) Yargıtay Ceza Dairesine", " E) Cumhuriyet Başsavcılığına"],
  dogruCevap: "E) Cumhuriyet Başsavcılığına"},
  
  
  
    {//305 * 
  metin: " 99. <br> I.	Hükümlü, hapis cezası veya güvenlik tedbirinin infazı için gönderilen çağrı kâğıdının tebliği üzerine on gün içinde gelmez, kaçar ya da kaçacağına dair şüphe uyandırırsa, Cumhuriyet savcısı yakalama emri çıkarır. <br> II. Kasten işlenen suçlarda bir yıl, taksirle işlenen  suçlarda ise üç yıldan fazla hapis cezasının infazı için doğrudan yakalama emri çıkarılır.<br> III.	Adli para cezasından çevrilen hapsin infazında hükümlüye öncelikle çağrı kâğıdı gönderilir. <br><br>  5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun’a göre “yakalama emri” ile   ilgili yukarıdakilerden hangileri doğrudur?",
  secenekler: [" A) Yalnız I	", "   B) I ve II", " C) I ve III ", "   D) II ve III", "  E) I, II ve III"],
  dogruCevap: "C) I ve III"},
  
  
  
    {//306 * 
  metin: " 100. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin  İnfazı Hakkında Kanun’a göre “adli para cezasının infazı” ile ilgili aşağıdakilerden hangisi  yanlıştır?",
  secenekler: [" A) Adli para cezasını içeren ilam Cumhuriyet başsavcılığına verilir.", " B) Çocuklar hakkında hükmedilen adli para cezasının ödenmemesi hâlinde, bu ceza hapse çevrilemez.", " C) Adli para cezasından çevrilen hapsin infazı ertelenemez ve bunun infazında koşullu salıverilme hükümleri uygulanmaz.", " D) Hükümde adli para cezası takside bağlanmamış ise bir aylık süre içinde adli para cezasının tamamı ödenmelidir.", " E) Hükümlü, hapis yattığı veya kamuya yararlı  işte çalıştığı günlerin dışındaki günlere karşılık gelen parayı öderse hapisten çıkartılır veya kamuya yararlı işte çalıştırılma sona erer."],
  dogruCevap: "D) Hükümde adli para cezası takside bağlanmamış ise bir aylık süre içinde adli para cezasının tamamı ödenmelidir."},
//2020 YILI 1.SINAV

{//307
  metin: "  1. Memura, aylık ve özlük hakları korunarak, verilecek raporda gösterilecek lüzum üzerine, kanser, verem ve akıl hastalığı gibi uzun süreli bir tedaviye ihtiyaç gösteren hastalığı hâlinde----aya   kadar, diğer hastalık hâllerinde ise----aya kadar izin verilir.  657 sayılı Devlet Memurları Kanunu'na göre verilen hükümde boş bırakılan yerlere sırasıyla hangisi getirilmelidir?",
  secenekler: [" A) 6-3" , " B)12- 6" , " C)12	- 8" , " D)	18 -12 E)	24-12"],
  dogruCevap: "D)	18 -12"},
  
  
  {//308
  metin: "  2. 657 sayılı Devlet Memurları Kanunu'na göre bir çocuğu eşiyle birlikte veya münferit olarak evlat edinen memurlar ile memur olmayan eşin münferit olarak evlat edinmesi hâlinde memur olan eşlerine istekleri üzerine yirmi dört aya kadar aylıksız izin verilebilmesi için çocuğun kaç yaşını doldurmamış olması gerekir?",
  secenekler: ["A) Üç " , "B) Dört" , " C) Beş" , " D) Altı" , " E) Yedi"],
  dogruCevap: "A) Ü"},
  
  
  {//309
  metin: "  3. 657 sayılı Devlet Memurları Kanunu'na göre 'Özürsüz olarak bir veya iki gün göreve gelmemek' fiili aşağıdaki disiplin cezalarından hangisini gerektirir?",
  secenekler: [" A)	Uyarma" , "B)	Kınama" , " C)	Aylıktan kesme" , " D)	Devlet memurluğundan çıkarma" , "E)	Kademe ilerlemesinin durdurulması"],
  dogruCevap: "B)	Kınama"},
  
  
  {//310
  metin: "  4. 657 sayılı Devlet Memurları Kanunu'nda belirtilen aile yardımı ödeneğindeki gösterge rakamlarını, Cumhurbaşkanı kaç katına kadar artırmaya yetkilidir?",
  secenekler: ["A) 3" , " B) 4 " , "C) 5" , " D) 7 " , "E) 10"],
  dogruCevap: "A) 3"},
  
  
  {//311
  metin: "  5. 657 sayılı Devlet Memurları Kanunu'na göre asli devlet memurluğuna atandıktan sonra en geç hangi süre içinde yetkili amirlerin huzurunda yemin ederek ve yemin belgesini imzalayarak göreve başlanır?",
  secenekler: ["A) 3 gün" , "B) 5 gün" , "C) 7 gün" , "D) 1 ay" , "E) 3 ay"],
  dogruCevap: "D) 1 ay"},
  
  
  {//312
  metin: "  6. Her yazar, şöyle ya da böyle, insan psikolojisinden beslenerek kurar metnini. Edebiyat psikolojiden, psikoloji de edebiyattan beslenir. Hâl böyleyken derdi de dermanı da içindedir bir bakıma. Edebî karakterler, öyküler üzerinden, benliğimize neyi katıp katmayacağımızı belirlememize yardım eder. Benliğimizi yeniden inşa ederken, bir psikoterapist hassaslığıyla herhangi bir şeyi dayatmadan, serbest çağrışımlarımıza kulak vermemizi sağlar. Elbette edebiyatın 'bir gül bahçesi' vaat ettiği savunulamaz, tıpkı psikoterapistin de vaat etmediği gibi. Bu parçada asıl anlatılmak istenen aşağıdaki-lerden hangisidir?",
  secenekler: ["A)	Edebiyat, bir bakıma insanı anlamlandırma sanatıdır." , "B)	Edebî metinler kurgusal gerçeklerdir." , "C)	Kitaplarla okuyucunun kişiliği arasında dinamik bir ilişki kurulması gerekir." , "D)	Edebî kitapların insanın ruhuna dokunan bir rolü vardır." , "E)	Edebî metin okuyucuyu etkilediğinde okur artık kendi yaratıcı gücünü kullanmaya başlar."],
  dogruCevap: "D)	Edebî kitapların insanın ruhuna dokunan bir rolü vardır."},
  
  
  {//313
  metin: "  7. Kenara attığımız bazı düşünceler hayatın I ilerleyen zamanlarında karşımıza çıkar. Zamanında fırsatını II bulmuşken halledemediğimiz, kafamızda çözemediğimiz meseleler hep ayağımıza bağ olur. III  Numaralanmış sözlerin anlamları sırasıyla aşağıdakilerin hangisinde verilmiştir?",
  secenekler: [" A)	Benimsememek - Eskiden - Dikkatli davranmamak" , " B)	Önemsememek - Tam vaktinde - Engel olmak" , " C)	Olgunlaştırmadığımız - Devrinde - Harekete geçmek" , "   D)	Belli belirsiz - Çağında - Destek olmak" , "E)	Özümsememek - Süresinde - Ertelemek"],
  dogruCevap: "B)	Önemsememek - Tam vaktinde - Engel olmak"},
  
  
  {//314
  metin: "  8. Aşağıdaki cümlelerin hangisinde ayraç içinde verilen anlam ilişkisi doğrudur?",
  secenekler: [" A)	İçme suyu sıkıntısı çekmemek için suyu tasarruflu kullanıyordu. (Amaç - sonuç)" , "B)	Sıcaklığın iyice düştüğü günlerde hasta olmamak için sıkı giyinmiştim. (Sebep - sonuç)" , " C)	Bu hafta yapılması planlanan kutlama, sınavlardan dolayı ertelendi. (Amaç - sonuç)" , "D)	İngilizceyi daha güzel konuşabilmek için yurt dışına gitmek zorunda kaldım. (Sebep - sonuç)" , " E)	Daha çok para kazanayım diye insanları aldatmaktan çekinmiyorlar. (Sebep - sonuç)"],
  dogruCevap: "A)	İçme suyu sıkıntısı çekmemek için suyu tasarruflu kullanıyordu. (Amaç - sonuç)"},
  
  
  {//315
  metin: "  9. Azıcık toprak bulaşır onun tırnaklarının arasına, saksıdaki fesleğenin suyunu kontrol etmiş ve gözlerini kapatmıştı. Yanlış yere köklerini saldığı için üzgündü. Bu parçada aşağıdaki sözcük türlerinden han gisi kullanılmamıştır?",
  secenekler: [" A) Bağlaç" , " B) Sıfat" , " C) Zarf" , " D) Edat" , " E) Zamir"],
  dogruCevap: "C) Zarf"},
  
  
  {//316
  metin: "  10. Resmî Yazışmalarda Uygulanacak Usul Ve Esaslar Hakkında Yönetmelik'e göre 'ek' ile ilgili aşağıdakilerden hangisi doğrudur?",
  secenekler: [" A)	Belgede ek olması hâlinde 'Ek:' başlığı imza bölümünden sonra uygun satır boşluğu bırakılarak ve yazı alanının solundan başlanarak yazılır." , "B)	Olur belgelerinde ise 'Ek:' başlığı oluru alınan makamın metin bölümünden sonra satır boşluğu bırakılmadan ve yazı alanının solundan başlanarak yazılır." , "C)	Belge eklerinin muhataba gönderilmediği durumlarda 'Ek konulmadı' veya 'Ek-...konulmadı' ifadesi yazılmaz." , "D)	Ek listesi yazı alanına sığmayacak kadar uzunsa ayrı bir sayfada, 'EK BAŞLIĞI' altında yazılır ve 'Ek: Ek Başlığı' şeklinde gösterilir." , "E)	Belgenin sadece bir eki olması durumunda 'Ek:' başlığının sağında eki belirtecek ibareye yer verilmez."],
  dogruCevap: "A)	Belgede ek olması hâlinde 'Ek:' başlığı imza bölümünden sonra uygun satır boşluğu bırakılarak ve yazı alanının solundan başlanarak yazılır."},
  
  
  {//317
  metin: "  11. 1990'h yıllarda halkla ilişkileri 'Örgütün stratejikl ilişkisini düzenleme bağlamında halkla ilişkiler stratejik ilişkileri yönetmedir.' şeklinde tanımla- I yan kişi aşağıdakilerden hangisidir?",
  secenekler: [" A)	Edward Bernays" , "B)	Stephenson " , "C)	Nessmann" , "D)	Simon" , " E)	Hutton "],
  dogruCevap: "E)	Hutton"},
  
  
  {//318
  metin: "  12. Finansal halkla ilişkilerde kullanılan yıllık raporların önemli bir parçası olan kuruluş başkanının yazdığı mektupta yer verilmesi gereken hususlarla ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Kâr payı politikası ve kayıtları anlatılmalıdır." , " B)	Yıllık raporlarda sadece metne yer verilmelidir." , " C)	Kısaca yılın başlıca başarılarını anlatan genel bir özet verilmelidir." , " D)	İlk paragrafta kuruluşun geçen yılın satış ve kazançlarındaki en önemli tarafın altı çizilmelidir." , " E)	Toplam kalite yönetimi veya 'yeniden düzenleme' gibi önemli programları ve çalışanların yaptıkları özel katkılar belirtilmelidir."],
  dogruCevap: " B)	Yıllık raporlarda sadece metne yer verilmelidir."},
  
  
  {//319
  metin: "  13. Halkla ilişkiler sürecinin temel kavramlarından biri olan uzun süreli planlar genellikle kaç yıldan daha uzun süreyi kapsar?",
  secenekler: [" A) Bir " , "B) İki" , " C) Üç" , " D) Dört " , "E) Beş"],
  dogruCevap: "E) Beş"},
  
  
  {//320
  metin: "  14. Aşağıda verilen halkla ilişkiler ve propaganda nın özelliklerinden hangisi yanlıştır?   'Halkla İlişkiler	Propaganda'",
  secenekler: [" A)	Esas olan doğru bilgi, iyi niyet, dürüst harekettir." , " B)	Fikir tartışmalarına daima açıktır." , " C)	Çok tekrar yolu ile ikna etmeye çalışır." , "  D)	Yanıltıcı değildir." , " E)	Yıkıcı olmaz. Tek yönlüdür ve abartma üzerine kurulmuştur. İyi niyete her zaman yer vermez. Tartışma kabul etmez. Dogmatik ve otoriterdir. Gerçekleri açıklama yolu ile ikna etmeye çalışır. Yanıltıcı, kandırıcı olabilir.Gerekirse yıkıcı olabilir."],
  dogruCevap: "C)	Çok tekrar yolu ile ikna etmeye çalışır."},
  
  
  
  
  {//321
  metin: "  15. Küçük bir köyde yaşayan Kazım Bey kendisine tebliğ edilen vergi cezasını ödemek üzere ilçedeki vergi dairesine gelmiştir. Nereye ve kime başvuracağını bilememektedir. Ne yapması gerektiğini sormak üzere kapısını açık bulduğu ilk odaya girmiş ve elindeki belgeyi masasında oturan memur Ilyas Bey'e uzatmıştır. Dışarıda hava çok soğuk olduğu için yaşlı adamın kasketi başında ve elleri ceplerindedir. Memur İlyas Bey, başını eline aldığı belgeden kaldırmadan, sert bir ses tonuyla 'Çıkar elini cebinden!' diye seslenmiştir. Kazım Bey, kendisine söylenmediğini düşünerek aynı şekilde durmaya devam etmiştir. İlyas Bey bu kez 'Sana ellerini cebinden çıkar, dedim.' diye bağırarak belgeyi Kazım Bey'in eline tutuşturmuş, 'Önce devlet dairesine nasıl girileceğini öğren, ondan sonra gel.' diyerek Kazım Bey'e kapıyı göstermiştir. Anlatılan örnek olay memur İlyas Bey'in görevini yerine getirirken uyması gereken aşağıdaki esaslardan hangisiyle çok daha ilgilidir?",
  secenekler: [" A)	Nezaket ve saygı" , " B)	Saygınlık ve güven" , " C)	Dürüstlük ve tarafsızlık" , " D)	Amaç ve misyona bağlılık" , " E)	Yetkili makamlara bildirim"],
  dogruCevap: "A)	Nezaket ve saygı"},
  
  
  {//322
  metin: "  16. • Aracılık •	Seçimlerde kamu imkânlarını kullanma•	Görev, unvan ve yetki kullanarak ticaret yapma •	Görev sırasında elde edilen bilgilerin açıklanması •	Kamu görevlisinin ayrıldıktan sonra kurumla iş yapması Verilenlerden kaç tanesi çıkar çatışması türlerinden olan görev ve yetkilerin menfaat sağlama amacıyla kullanılmasının çeşitlerindendir?",
  secenekler: [" A) 1" , " B) 2" , " C) 3" , " D) 4" , " E) 5"],
  dogruCevap: "D) 4"},
  
  
  {//323
  metin: "  17. Klasik ombudsman kurumunun sahip olması gereken özellikler ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Parti tutmamak" , " B)	Bağımsız faaliyet göstermek" , " C)	Uzman niteliklere sahip olmak" , " D)	Yürütme organından bağımsız olmamak" , " E)	Yurttaşlarca bilinir ve rahat ulaşılabilir olmak"],
  dogruCevap: "D)	Yürütme organından bağımsız olmamak"},
  
  
  {//324
  metin: "  18. 'Kamu görevlilerinin görevlerini tarafsız ve objektif şekilde icra etmelerini etkileyen ya da etkiliyor-muş gibi gözüken ve kendilerine, yakınlarına, arkadaşlarına ya da ilişkide bulunduğu kişi ya da kuruluşlara sağlanan her türlü menfaati ve onlarla ilgili mali ya da diğer yükümlülükleri ve benzeri şahsi çıkarlara sahip olmaları hâlini ifade eder.' şeklinde aşağıdaki etik davranış ilkelerinden hangisi tanımlanmıştır?",
  secenekler: [" A)	Saygınlık ve güven" , " B)	Savurganlıktan kaçınma" , " C)	Amaç ve misyona bağlılık" , " D)	Hizmet standartlarına uyma" , " E)	Çıkar çatışmasından kaçınma"],
  dogruCevap: " E)	Çıkar çatışmasından kaçınma"},
  
  
  {//325
  metin: "  19. Adalet Bakanlığı Teftiş Kurulu ve müfettişlerin görev, yetki ve sorumlulukları ile çalışma usulleri aşağıdakilerden hangisi ile düzenlenir?",
  secenekler: [" A)	Tüzük" , " B)	Kanun" , " C)	Genelge" , " D)	Yönetmelik" , " E)	Cumhurbaşkanlığı kararnamesi"],
  dogruCevap: " D)	Yönetmelik"},
  
  
  {//326
  metin: "  20. Bölge İdare Mahkemesi Adalet Komisyonu ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Komisyon eksiksiz toplanır ve çoğunlukla karar verir." , " B)	Hâkimler ve Savcılar Kurulu daire başkan veya üyeleri arasından üç yedek üye belirler." , " C)	Her bölge idare mahkemesinde bir bölge idare mahkemesi adalet komisyonu bulunur." , " D)	Başkanın yokluğunda asıl üye olan kıdemli daire başkanı, asıl üyelerin yokluğunda ise kıdemine göre yedek üyeler komisyona katılır." , " E)	Komisyon, bölge idare mahkemesi başkanının başkanlığında, Hâkimler ve Savcılar Kurulunca daire başkanları arasından belirlenen iki asıl üyeden oluşur."],
  dogruCevap: "B)	Hâkimler ve Savcılar Kurulu daire başkan veya üyeleri arasından üç yedek üye belirler."},
  
  
  {//327
  metin: "  21. Ulusal Yargı Ağı Bilişim Sistemi'nin (UYAP) kullanılması ile ilgili aşağıdakilerden hangisi  yanlıştır?",
  secenekler: [" A)	Elektronik ortamda yapılan işlemlerde süre gün sonunda biter." , " B)	Güvenli elektronik imza ile oluşturulan tutanak ve belgeler ayrıca fizikî olarak gönderilir ve belge örneği saklanır." , " C)	Dava ve diğer yargılama işlemlerinin elektronik ortamda gerçekleştirildiği hâllerde UYAP kullanılarak veriler kaydedilir ve saklanır." , " D)	Elektronik ortamdan fizikî örnek çıkartılması gereken hâllerde tutanak veya belgenin aslının aynı olduğu belirtilerek hâkim veya görevlendirdiği yazı işleri müdürü tarafından imzalanır ve mühürlenir." , " E)	Mahkemelerde görülmekte olan dava, çekişmesiz yargı, geçici hukuki koruma ve diğer tüm işlemlerde UYAP'ın kullanılmasına dair usul ve esaslar yönetmelikle düzenlenir."],
  dogruCevap: "B)	Güvenli elektronik imza ile oluşturulan tutanak ve belgeler ayrıca fizikî olarak gönderilir ve belge örneği saklanır."},
  
  
  {//328
  metin: "  22. 5018 sayılı Kamu Malî Yönetimi ve Kontrol Kanunu'na göre malî yıl içinde yedek ödenek ten yapılan aktarmaların tür, tutar ve idareler itibarıyla dağılımı aşağıdakilerden hangisi tarafından ilan edilir?",
  secenekler: [" A)	TBMM" , " B)	İçişleri Bakanı" , " C)	Meclis Başkanı" , " D)	Cumhurbaşkanı" , " E)	Hazine ve Maliye Bakanı"],
  dogruCevap: " D)	Cumhurbaşkanı"},
  
  
  {//329
  metin: "  23. Aşağıdakilerden hangisi T.C. Anayasası'nın de ğiştirilemeyecek hükümlerinden biri değildir?",
  secenekler: [" A)	Devletin şekli" , " B)	Devletin başkenti" , " C)	Devletin bütünlüğü" , " D)	Cumhuriyetin nitelikleri" , " E)	Temel hak ve hürriyetlerin niteliği"],
  dogruCevap: "E)	Temel hak ve hürriyetlerin niteliği"},
  
  
  {//330
  metin: "  24. T.C. Anayasası'na göre aşağıdakilerden hangisi sosyal ve ekonomik haklar ve ödevlerdendir?",
  secenekler: ["A)	Zorla çalıştırma yasağı" , " B)	Bilim ve sanat hürriyeti" , " C)	Özel hayatın gizliliği ve korunması" , " D)	Ailenin korunması ve çocuk hakları" , " E)	Toplantı ve gösteri yürüyüşü düzenleme hakkı"],
  dogruCevap: "D)	Ailenin korunması ve çocuk hakları"},
  
  
  {//331
  metin: "  25. T.C. Anayasası'na göre eğitim ve öğretim kurumlarında okutulacak yabancı diller ile ya bancı dille eğitim ve öğretim yapan okulların tabi olacağı esaslar aşağıdakilerden hangisi ile düzenlenir?",
  secenekler: [" A)	Tüzük" , " B)	Kanun" , " C)	Genelge" , " D)	Yönetmelik" , " E)	Cumhurbaşkanı kararnamesi"],
  dogruCevap: "B)	Kanun"},
  
  
  {//332
  metin: "  26. T.C. Anayasası'na göre bir siyasi partinin temelli kapatılmasına beyan veya faaliyetleriyle sebep olan kurucuları dâhil üyeleri, Anayasa Mahkemesinin temelli kapatmaya ilişkin kesin kararının Resmî Gazete'de gerekçeli olarak yayımlanmasından başlayarak kaç yıl süreyle bir başka partinin kurucusu, üyesi, yöneticisi ve deneticisi olamazlar?",
  secenekler: [" A) Beş" , " B) Altı" , " C) Yedi" , " D) Dokuz" , " E) On"],
  dogruCevap: "A) Beş"},
  
  
  {//333
  metin: "  27. T.C. Anayasası'na göre seçimlerin genel yönetim ve denetimi ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Seçimler, yargı organlarının genel yönetim ve denetimi altında yapılır." , " B)	Yüksek Seçim Kurulu on bir asıl ve iki yedek üyeden oluşur." , " C)	Yüksek Seçim Kurulunun kararları aleyhine başka bir mercie başvurulamaz." , " D)	Yüksek Seçim Kurulunun ve diğer seçim kurullarının görev ve yetkileri kanunla düzenlenir." , " E)	Yüksek Seçim Kuruluna Yargıtay ve Danış-taydan seçilmiş üyeler arasından ad çekme ile ikişer yedek üye ayrılır."],
  dogruCevap: "B)	Yüksek Seçim Kurulu on bir asıl ve iki yedek üyeden oluşur."},
  
  
  {//334
  metin: "  28. T.C. Anayasası'na göre Türkiye Büyük Millet Meclisinin bilgi edinme ve denetim yollarından olan yazılı soru, en geç kaç gün içinde cevaplanmak üzere milletvekillerinin, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak soru sormalarından ibarettir?",
  secenekler: [" A) Beş" , " B) Yedi" , " C) On" , "D) On beş" , " E) Otuz"],
  dogruCevap: "D) On beş"},
  
  
  {//335
  metin: "  29. T.C. Anayasası'na göre olağanüstü hâl ilanı kararı, verildiği gün Resmî Gazete'de yayımlanır ve aynı gün aşağıdakilerden hangisinin onayına sunulur?",
  secenekler: [" A)	İçişleri Bakanı" , " B)	Cumhurbaşkanı" , " C)	Millî Savunma Bakanı" , " D)	Genel Kurmay Başkanı" , " E)	Türkiye Büyük Millet Meclisi"],
  dogruCevap: "E)	Türkiye Büyük Millet Meclisi"},
  
  
  {//336
  metin: "  30. T.C. Anayasası'na göre mahallî idareler ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Mahallî idarelerin seçimleri, ilgili mevzuat esaslarına göre beş yılda bir yapılır." , " B)	Mahallî idarelerin kuruluş ve görevleri ile yetkileri, yerinden yönetim ilkesine uygun olarak kanunla düzenlenir." , " C)	Mahallî idarelerin belirli kamu hizmetlerinin görülmesi amacı ile kendi aralarında İçişleri Bakanının izni ile birlik kurmaları, görevleri, yetkileri, maliye ve kolluk işleri ve merkezi idare ile karşılıklı bağ ve ilgileri yönetmelikle düzenlenir." , " D)	Mahallî idareler; il, belediye veya köy halkının mahallî müşterek ihtiyaçlarını karşılamak üzere kuruluş esasları kanunla belirtilen ve karar organları, gene kanunda gösterilen, seçmenler tarafından seçilerek oluşturulan kamu tüzelkişileridir." , " E)	Merkezi idare, mahallî idareler üzerinde, mahallî hizmetlerin idarenin bütünlüğü ilkesine uygun şekilde yürütülmesi, kamu görevlerinde birliğin sağlanması, toplum yararının korunması ve mahallî ihtiyaçların gereği gibi karşılanması amacıyla, kanunda belirtilen esas ve usuller dairesinde idari vesayet yetkisine sahiptir."],
  dogruCevap: "C)	Mahallî idarelerin belirli kamu hizmetlerinin görülmesi amacı ile kendi aralarında İçişleri Bakanının izni ile birlik kurmaları, görevleri, yetkileri, maliye ve kolluk işleri ve merkezi idare ile karşılıklı bağ ve ilgileri yönetmelikle düzenlenir."},
  
  
  {//337
  metin: "  31. T.C. Anayasası'na göre Adalet Bakanlığının merkez, bağlı ve ilgili kuruluşlarında geçici veya sürekli olarak çalıştırılacak hâkim ve savcılar ile adalet müfettişlerini ve hâkim ve savcı mesleğinden olan iç denetçileri, muvafa katlerini alarak atama yetkisi aşağıdakilerden hangisine aittir?",
  secenekler: [" A)	Sayıştay" , " B)	Danıştay" , " C)	Adalet Bakanı" , " D)	Cumhurbaşkanı" , " E)	Hâkimler ve Savcılar Kurulu"],
  dogruCevap: "C)	Adalet Bakanı"},
  
  
  {//338
  metin: "  32. T.C. Anayasası'na göre mahallî idarelerin hel sap ve işlemlerinin denetimi ve kesin hükme bağlanması aşağıdakilerden hangisi tarafından yapılır?",
  secenekler: [" A)	Vali" , " B)	Sayıştay" , " C)	Danıştay" , " D)	İçişleri Bakanı" , " E)	Belediye Başkanı "],
  dogruCevap: "B)	Sayıştay"},
  
  
  {//339
  metin: "  33. Aşağıdakilerden hangisi Trablusgarp Savaşı sonunda Osmanlı Devleti ile İtalya arasında imzalanan bir antlaşmadır?",
  secenekler: [" A) Nöyyi" , " B) Versay" , " C) Uşi" , " D) Triyanon" , " E) Sen Jermen"],
  dogruCevap: "C) Uşi"},
  
  {//340
  metin: "  34. Çukurova bölgesinin Fransız ve Ermenilere verilmesine karşı kurulmuş olan millî cemiyet aşağıdakilerden hangisidir?",
  secenekler: [" A)	Kilikyalılar Cemiyeti" , " B)	Millî Kongre Cemiyeti" , " C)	İzmir Müdafaa-i Hukuk Cemiyeti" , " D)	Trakya-Paşaeli Müdafaa-i Hukuk Cemiyeti" , " E)	Trabzon Muhafaza-i Hukuk-u Millîye Cemiyeti"],
  dogruCevap: "A)	Kilikyalılar Cemiyeti"},
  
  
  {//341
  metin: "  35. Aşağıdaki ilkelerden hangisi Atatürk tarafından ortaya konulan bir ekonomi siyasetidir?",
  secenekler: [" A) Cumhuriyetçilik" , " B) Halkçılık" , " C) Milliyetçilik	" , " D) Laiklik" , " E) Devletçilik"],
  dogruCevap: "E) Devletçilik"},
  
  
  {//342
  metin: "  36. Serbest Cumhuriyet Fırkası aşağıdakilerden hangisi tarafından kurulmuştur?",
  secenekler: [" A)	Rauf Orbay" , " B)	Fethi Okyar" , " C)	Refet Bele" , " D)	İsmet İnönü" , " E)	Ali Fuat Cebesoy"],
  dogruCevap: "B)	Fethi Okyar"},
  
  {//343
  metin: "  37. Aşağıdakilerden hangisi yerinden yönetimin varlık şartlarından biri değildir?",
  secenekler: [" A)	Tüzel kişilik" , " B)	Personel bağımsızlığı" , " C)	Mali bağımsızlık" , " D)	Vesayet denetimi" , " E)	Hiyerarşi denetimi"],
  dogruCevap: "E)	Hiyerarşi denetimi"},
  
  {//344
  metin: "  38. Aşağıdakilerden hangisi kamu tüzel kişiliğine sahip olmanın mutlak sonuçlarından biri değildir?",
  secenekler: [" A)	Kamu tüzel kişilerinin malları haczedilemez." , " B)	Kamu tüzel kişileri re'sen icra yetkisine sahiptir." , " C)	Kamu tüzel kişilerinin sözleşme hürriyeti vardır." , " D)	Kamu tüzel kişileri düzenleme yetkisine sahiptir." , " E)	Kamu tüzel kişilerinin gelirleri kamu geliri statüsündedir."],
  dogruCevap: "C)	Kamu tüzel kişilerinin sözleşme hürriyeti vardır."},
  
  
  {//345
  metin: "  39. Hiyerarşi yetkisinin özellikleri ile ilgili aşağıda-kilerden hangisi yanlıştır?",
  secenekler: [" A)	Kendiliğinden veya ilgililerin başvurusu üzerine kullanılabilir." , " B)	Vazgeçilemeyen bir yetkidir." , " C)	Aynı kamu tüzel kişisi içinde geçerli bir yetkidir." , " D)	Bu yetkinin kullanılması belirli bir sebebe bağlı değildir." , " E)	Bir özel yetkidir."],
  dogruCevap: "E)	Bir özel yetkidir."},
  
  
  {//346
  metin: "  40. Valinin başkanlığında toplanan İl İdare Kurulu içinde aşağıdakilerden hangisi yer almaz?",
  secenekler: [" A)	Mal Müdürü" , " B)	İl Sağlık Müdürü" , " C)	Hukuk İşleri Müdürü" , " D)	İl Milli Eğitim Müdürü" , " E)	Çevre ve Şehircilik İl Müdürü"],
  dogruCevap: " A)	Mal Müdürü"},
  
   {//347
  metin: "   41. 5271 sayılı Ceza Muhakemesi Kanunu'na görev ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Adlî yargı içerisindeki mahkemeler bakımından verilen görevsizlik kararlarına karşı itiraz yoluna gidilebilir." , " B)	Yenilenmesi mümkün olmayanlar dışında, görevli olmayan hâkim veya mahkemece yapılan işlemler hükümsüzdür." , " C)	Görev konusunda mahkemeler arasında uyuşmazlık çıktığında, görevli mahkemeyi ortak yüksek görevli mahkeme belirler." , " D)	Duruşmada suçun hukukî niteliğinin değiştiğinden bahisle görevsizlik kararı verilerek dosya alt dereceli mahkemeye gönderilir." , " E)	İddianamenin kabulünden sonra; işin, davayı gören mahkemenin görevini aştığı veya dışında kaldığı anlaşılırsa, mahkeme bir kararla işi görevli mahkemeye gönderir."],
  dogruCevap: " D)	Duruşmada suçun hukukî niteliğinin değiştiğinden bahisle görevsizlik kararı verilerek dosya alt dereceli mahkemeye gönderilir."},
  
  
  {//348
  metin: "  42. 5271 sayılı Ceza Muhakemesi Kanunu'na göre aşağıdakilerden hangisi tanıklıktan çekinemez?",
  secenekler: [" A)	Şüpheli veya sanığın nişanlısı" , " B)	Evlilik bağı kalmasa bile şüpheli veya sanığın eşi" , " C)	Şüpheli veya sanıkla aralarında evlâtlık bağı bulunanlar" , " D)	Herhangi bir kan veya kayın hısımlığı olmasa bile şüpheli veya sanığın komşusu" , " E)	Şüpheli veya sanığın kan hısımlığından veya kayın hısımlığından üstsoy veya altsoyu"],
  dogruCevap: "D)	Herhangi bir kan veya kayın hısımlığı olmasa bile şüpheli veya sanığın komşusu"},
  
  
  {//349
  metin: "  43. 5271 sayılı Ceza Muhakemesi Kanunu'na göre bilirkişi incelemesi yaptırılmasına ilişkin kararda, cevaplandırılması uzmanlığı, özel veya teknik bilgiyi gerektiren sorularla inceleme konusu ve görevin yerine getirileceğinin belirtileceği süre işin niteliğine göre en az kaç ayı geçemez?",
  secenekler: [" A) Bir" , "	B) İki" , " C) Üç" , " D) Dört" , " E) Beş"],
  dogruCevap: "C) Üç"},
  
  
  {//350
  metin: "  44. 5271 sayılı Ceza Muhakemesi Kanunu'na göre soruşturma evresinde, ifade almada en çok kaç avukat hazır bulunabilir?",
  secenekler: [" A) İki" , " B) Üç" , " C) Dört" , " D) Beş" , " E) Altı"],
  dogruCevap: "B) Üç"},
  
  
  {//351
  metin: "  45. 5271 sayılı Ceza Muhakemesi Kanunu'na göre duruşma ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Duruşma herkese açıktır." , " B)	Kapalı duruşmanın içeriği hiçbir iletişim aracıyla yayımlanamaz." , " C)	Açıklığın kaldırılması kararı, nedenleriyle birlikte tutanağa geçirilir." , " D)	Birden çok Cumhuriyet savcısı ve birden çok avukat aynı zamanda duruşmaya katılamazlar." , " E)	Sanık, on sekiz yaşını doldurmamış ise duruşma kapalı yapılır; hüküm de kapalı duruşmada açıklanır."],
  dogruCevap: "D)	Birden çok Cumhuriyet savcısı ve birden çok avukat aynı zamanda duruşmaya katılamazlar"},
  
  
  {//352
  metin: "  46. 492 sayılı Harçlar Kanunu'na göre mükellefiyetle ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: ["A)	Karşılık davalar, müstakil davalar gibi harca tabidir." , " B)	Davaya müdahale eden kimse, kanun yollarına müracaat ederse iltihak ettiği taraftan alınan harca eşit harcı ödemek mecburiyetindedir." , " C)	Tashihi karar talebinin kabulü üzerine temyiz olunan hüküm tasdik edilirse, temyiz olunan hükümden alınan harcın yarısı kadar yeniden harç alınır." , " D)	Hakem kararlarının infazı lazım geldiğine dair mahkeme başkanı veya hâkim tarafından verilen şerhlerden, hakem kararının mahiyetine göre, karar ve ilam harcı alınır." , " E)	Muameleden kaldırılan dosya, Hukuk Usulü Muhakemeleri Kanunu'nda belirtilen süre içinde yenilenmediği takdirde, davanın görülebilmesi yeniden harç verilmesine bağlıdır."],
  dogruCevap: " C)	Tashihi karar talebinin kabulü üzerine temyiz olunan hüküm tasdik edilirse, temyiz olunan hükümden alınan harcın yarısı kadar yeniden harç alınır."},
  
  
  {//353
  metin: "  47. 492 sayılı Harçlar Kanunu'na göre harcın ödenmesi ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	İlama dayanmayan takip isteklerinden alacak miktarının yüzde on beşi peşin alınır." , " B)	Yargı harçları harca konu olan işlemleri yapan mahkeme veya daire tarafından alınır." , " C)	Mahiyetleri icabı işin sonunda hesap edilip alınması gerekenler, harç alacağının doğması tarihinden itibaren 15 gün içinde ödenir." , " D)	Harç peşin veya süresinde ödenmemiş ise, müteakip muamelelere ancak harç ödendikten sonra devam olunur." , " E)	Bakiye karar ve ilam harcının ödenmemiş olması, hükmün tebliğe çıkarılmasına, takibe konulmasına ve kanun yollarına başvurulmasına engel teşkil etmez."],
  dogruCevap: " A)	İlama dayanmayan takip isteklerinden alacak miktarının yüzde on beşi peşin alınır."},
  
  
  {//354
  metin: "  48. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelice göre 'Bir bilişim sistemine bağlanarak kullanım imkânı kazanılmasını ifade eder.' şeklinde aşağıdakilerden hangisi tanımlanmıştır?",
  secenekler: [" A)	Veri" , " B)	Kurul" , " C)	Erişim" , " D)	Elektronik ortam" , " E)	Güvenli elektronik imza"],
  dogruCevap: "C)	Erişim"},
  
  
  {//355
  metin: "  49. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre aşağıdakilerden hangisi bilgi işlem müdürünün görev ve sorumluluklarından biri değildir?",
  secenekler: [" A)	Arıza, bakım ve onarım hizmetlerini takip ederek sorunları gidermek" , " B)	Zabıt kâtibi, mübaşir, hizmetli ve diğer görevliler arasında iş bölümü yapmak" , " C)	Birim internet sitelerinin güncellenmesini ve kontrolünün yapılmasını sağlamak" , " D)	UYAP, SEGBİS ve diğer bilgi işlem sistemlerinin eksiksiz ve verimli bir biçimde çalışmasını sağlamak" , " E)	Göreve başlayan ve ayrılan personele verilecek veya iptal edilecek yetkilerin denetim ve kontrolünü yapmak."],
  dogruCevap: "B)	Zabıt kâtibi, mübaşir, hizmetli ve diğer görevliler arasında iş bölümü yapmak"},
  
  
  {//356
  metin: "  50. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre ''Ceza dairesince, UYAP üzerinden gönderilemeyen veya fizikî olarak gönderilmesi gereken evrakın teslimine ilişkin belgelerin konulduğu ve saklandığı kartondur.' şeklinde aşağıdakilerden hangisi tanımlanmıştır?",
  secenekler: ["A)	Karar kartonu" , " B)	Zimmet kartonu" , " C)	İş cetvelleri kartonu" , " D)	İnceleme raporları kartonu" , " E)	Yayınlanan kararlar kartonu"],
  dogruCevap: "B)	Zimmet kartonu"},
  
  
  
  {//357
  metin: "  51. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre Adlî Yargı İlk Derece Mahkemesi Adalet Komisyonu kararları en geç kaç gün içinde yazılır ve ilgilisine tebliğe çıkarılır?",
  secenekler: ["A) 3 " , "B) 5 " , " C) 7 D) 10 " , "E) 15"],
  dogruCevap: "C) 7"},
  
  {//358
  metin: "  52. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre ara kararların yerine getirilmesi ile ilgili işlemlerin gecikmesinden zabıt kâtibi ile birlikte aşağıdakilerden hangisi sorumludur?",
  secenekler: [" A)	Hâkim" , " B)	Yazı işleri müdürü" , " C)	Mübaşir" , " D)	İdari işler müdürü" , " E)	Bilgi işlem müdürü"],
  dogruCevap: "B)	Yazı işleri müdürü"},
  
  
  {//359
  metin: "  53. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre aşağıdaki kayıt türlerinden hangisi sıra numarası ve tevdi tarihi, dosyadaki taraflar, varsa kanunî temsilcileri ile vekillerinin ad ve soyadları, talebin türü, gönderen mahkemenin adı ve dosya esas numarası, işlem sonucu, iade tarihi ve düşünceler sütunlarından oluşur?",
  secenekler: [" A)	Esas" , " B)	Karar" , " C)	İstinaf" , " D)	Temyiz" , " E)	Talimat"],
  dogruCevap: "E)	Talimat"},
  
  
  {//360
  metin: "  54. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre duruşma ve keşif günleri kaydında belirlenen duruşma tarihi ve saatini gösteren çağrı kâğıdı, taraflara duruşma tarihinden en az kaç gün önce gönderilir?",
  secenekler: [" A) 3" , " B) 5" , " C)10" , " D) 15" , " E) 30"],
  dogruCevap: "E) 30"},
  
  
  {//361
  metin: "  55. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre SMS aracılığıy la hakkındaki dava işlemlerinden bilgi almak isteyenleri UYAP SMS abonesi yapma görevi aşağıdakilerden hangisine aittir?",
  secenekler: [" A)	Zabıt kâtibi" , " B)	Ön büro personeli" , " C)	Yazı işleri müdürü" , " D)	İdari işler müdürü" , " E)	Bilgi işlem müdürü"],
  dogruCevap: "B)	Ön büro personeli"},
  
  
  {//362
  metin: "  56. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre dosyalar başkan veya hâkimin tensibi ile inceleme, müzakere ya da duruşma gününden önce aşağıdaki-lerden hangisi tarafından çıkartılıp, hâkimin tetkikine sunulur?",
  secenekler: [" A)	Mübaşir" , " B)	Zabıt kâtibi" , " C)	Yazı işleri müdürü" , " D)	İdari işler müdürü" , " E)	Bilgi işlem müdürü"],
  dogruCevap: "A)	Mübaşir"},
  
  
  
  {//363
  metin: "  57. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre ilam ve suretlerin verilmesi, harç ve para cezalarının tahsili ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Taraflardan her birine verilen hüküm nüshası ilamdır." , " B)	Tarafların elinde bulunan hüküm nüshalarının farklı olması hâlinde karar kartonundaki esas alınır." , " C)	Taraflar, harcın ödenmiş olup olmamasına bakılmaksızın ilamı her zaman alabilirler." , "  D)	Suretler yazı işleri müdürü tarafından aslına uygunluğu belirtilip onaylanarak verilir." , "   E)	Bakiye karar ve ilam harcının ödenmemiş olması, hükmün tebliğe çıkarılmasına ve hükmün kesinleştirilmesine engeldir."],
  dogruCevap: "E)	Bakiye karar ve ilam harcının ödenmemiş olması, hükmün tebliğe çıkarılmasına ve hükmün kesinleştirilmesine engeldir."},
  
  
  {//364
  metin: "  58. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre yetki ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Bir şubenin işlemlerinden doğan davalarda, o şubenin bulunduğu yer mahkemesi de yetkilidir." , " B)	Genel yetkili mahkeme, davalı gerçek veya tüzel kişinin davanın açıldığı tarihteki yerleşim yeri mahkemesidir." , " C)	Tarafların üzerinde serbestçe tasarruf edemeyecekleri konular ile kesin yetki hâllerinde, yetki sözleşmesi yapılamaz." , " D)	Mahkemelerin yetkisi, diğer kanunlarda yer alan yetkiye ilişkin hükümler saklı kalmak üzere, bu Kanun'daki hükümlere tabidir. " , " E)	Tacirler veya kamu tüzel kişileri, aralarında doğmuş veya doğabilecek bir uyuşmazlık hakkında, birden fazla mahkemeyi sözleşmeyle yetkili kılamazlar."],
  dogruCevap: "E)	Tacirler veya kamu tüzel kişileri, aralarında doğmuş veya doğabilecek bir uyuşmazlık hakkında, birden fazla mahkemeyi sözleşmeyle yetkili kılamazlar."},
  
  
  
  {//365
  metin: "  59. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre davaya vekâlet ile ilgili aşağıdakilerden  hangisi yanlıştır?",
  secenekler: [" A)	Bir tarafın avukat tutmak istemesi sebebiyle, yargılama başka bir güne bırakılır." , " B)	Dava ehliyeti bulunan herkes, davasını kendisi veya tayin ettiği vekil aracılığıyla açabilir ve takip edebilir." , " C)	Dava için birden fazla vekil görevlendirilmiş ise vekillerden her biri, vekâletten kaynaklanan yetkileri, diğerinden bağımsız olarak kullanabilir." , " D)	Kendisinin de hazır olduğu duruşmada, vekili tarafından yapılan açıklamalara derhâl ve açıkça itiraz etmeyen taraf, bu açıklamalara rıza göstermiş sayılır." , " E)	Hâkim, taraflardan birisinin, davasını bizzat takip edecek yeterlikte olmadığını görürse, ona uygun bir süre tanıyarak, davasını vekil aracılığıyla takip etmesine karar verebilir."],
  dogruCevap: "A)	Bir tarafın avukat tutmak istemesi sebebiyle, yargılama başka bir güne bırakılır."},
  
  
  {//366
  metin: "  60. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre davanın açılması ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Dava dilekçesi, mahkeme tarafından davalıya tebliğ edilir." , " B)	Dava, dava dilekçesinin kaydedildiği tarihte açılmış sayılır." , " C)	Dava dilekçesinin kaydına ilişkin usul ve esaslar genelgede belirlenir." , " D)	Bir davada taraf değişikliği, ancak karşı tarafın açık rızası ile mümkündür." , " E)	Davacı, hüküm kesinleşinceye kadar, ancak davalının açık rızası ile davasını geri alabilir."],
  dogruCevap: "C)	Dava dilekçesinin kaydına ilişkin usul ve esaslar genelgede belirlenir."},
  
  
  {//367
  metin: "  61. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre işlemden kaldırıldığı tarihten başlayarak kaç ay içinde yenilenmeyen davalar, sürenin dolduğu gün itibarıyla açılmamış sayılır ve mahkemece kendiliğinden karar verilerek kayıt kapatılır?",
  secenekler: [" A) Üç" , "	B) Dört" , " C) Beş" , "D) Altı" , " E) Yedi"],
  dogruCevap: " A) Üç"},
  
  
  {//368
  metin: "  62. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre hüküm, hükmün verilmesi ve tefhimi ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: ["A)	Hükmün tefhimini, duruşmada bulunanlar ayakta dinler." , " B)	Hüküm, yargılamanın sona erdiği duruşmada verilir ve tefhim olunur." , " C)	Mahkeme, usule veya esasa ilişkin bir nihai kararla davayı sona erdirir." , " D)	Hükmün tefhimi, her hâlde hüküm sonucunun duruşma tutanağına geçirilerek okunması suretiyle olur." , " E)	Zorunlu nedenlerle sadece hüküm sonucunun tefhim edildiği hâllerde, gerekçeli kararın tefhim tarihinden başlayarak üç ay içinde yazılması gerekir."],
  dogruCevap: "E)	Zorunlu nedenlerle sadece hüküm sonucunun tefhim edildiği hâllerde, gerekçeli kararın tefhim tarihinden başlayarak üç ay içinde yazılması gerekir."},
  
  
  {//369
  metin: "  63. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre adli yardım ile ilgili aşağıdakilerden han gisi yanlıştır?",
  secenekler: [" A)	Adli yardım, hükmün kesinleşmesine kadar devam eder." , " B)	Adli yardım, daha önce yapılan yargılama giderlerini kapsamaz." , " C)	Adli yardım talebine ilişkin evrak, her türlü harç ve vergiden muaftır." , " D)	Mahkeme, adli yardım talebi hakkında duruşma yapmaksızın karar veremez." , " E)	Adli yardım, asıl talep veya işin karara bağlanacağı mahkemeden; icra ve iflas takiplerinde ise takibin yapılacağı yerdeki icra mahkemesinden istenir."],
  dogruCevap: " D)	Mahkeme, adli yardım talebi hakkında duruşma yapmaksızın karar veremez."},
  
  
  {//370
  metin: "  64. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre iyileştirmeye gereksinimleri olmadığı saptanan hükümlülere ilişkin infaz rejiminde, bu hükümlülerin kişilikleriyle orantılı bireyselleştirilmiş programlara yer verilmesine özen gösterilen hususlar aşağıdakilerin hangisinde düzenlenir?",
  secenekler: [" A)	Tüzük" , " B)	Kanun" , " C)	Genelge" , " D)	Yönetmelik" , " E)	Cumhurbaşkanlığı kararnamesi"],
  dogruCevap: " D)	Yönetmelik"},
  
  
  {//371
  metin: "  65. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre hakkında verilen cezaların doğrudan açık ceza infaz kurumlarında yerine getirilebilmesi için hükümlünün taksirli suçlardan toplam kaç yıl veya daha az süreyle hapis cezasına mahkûm olması gerekir?",
  secenekler: [" A) Beş" , " B) Altı" , " C) Yedi" , " D) Sekiz" , " E) Dokuz"],
  dogruCevap: "A) Beş"},
  
  
  {//372
  metin: "  66. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre koşullu salıveril me için infaz kurumunda geçirilmesi gereken süre bir müebbet hapis cezası ile süreli hapis cezasına mahkûmiyet hâlinde en fazla kaç yıldır?",
  secenekler: [" A) On sekiz" , " B) Yirmi beş" , " C) Yirmi sekiz" , "D) Otuz" , " E) Otuz altı"],
  dogruCevap: "D) Otuz"},
  
  
  {//373
  metin: "  67. • Cezai işlemlerle ilgili ihbar ve şikâyetleri inceleyip gereğini yapmak • Soruşturma veya kovuşturma yapılması Adalet Bakanfnın veya Adalet Bakanlığının iznine ya da talebine bağlı suçlarla ilgili işlemleri yapmak ve sonuçlarını takip etmek Cumhurbaşkanlığı Teşkilatı Hakkında Cumhur başkanlığı 1 Numaralı Kararnamesi'ne göre verilen görev ve yetkiler Adalet Bakanlığının hangi hizmet birimine aittir?",
  secenekler: [" A)	Teftiş Kurulu Başkanlığı" , " B)	Özel Kalem Müdürlüğü" , " C)	Ceza İşleri Genel Müdürlüğü" , " D)	Strateji Geliştirme Başkanlığı" , " E)	Hukuk İşleri Genel Müdürlüğü"],
  dogruCevap: "C)	Ceza İşleri Genel Müdürlüğü"},
  
  
  {//374
  metin: "  68. Cumhurbaşkanlığı Teşkilatı Hakkında Cumhurbaşkanlığı 1 Numaralı Kararnamesi'ne göre Adalet Bakanlığına gönderilen kanun teklifleri hakkında görüş bildirmek görev ve yetkisi Adalet Bakanlığının hangi hizmet biri mine aittir?",
  secenekler: [" A)	Teftiş Kurulu Başkanlığı" , " B)	Mevzuat Genel Müdürlüğü" , " C)	Eğitim Dairesi Başkanlığı" , " D)	Hukuk İşleri Genel Müdürlüğü" , " E)	Ceza ve Tevkifevleri Genel Müdürlüğü"],
  dogruCevap: "B)	Mevzuat Genel Müdürlüğü"},
  
  
  {//375
  metin: "  69. Cumhurbaşkanlığı Teşkilatı Hakkında Cumhurbaşkanlığı 1 Numaralı Kararnamesi'ne göre aşağıdakilerden hangisi Adalet Bakanlığı Ceza ve Tevkifevleri Genel Müdürlüğünün görev ve yetkilerinden değildir?",
  secenekler: [" A)	Hükümlü ve tutukluların sevk ve nakil işlerini yürütmek" , " B)	Hükümlülerin müşahedeye tabi tutulma işlerini yürütmek" , " C)	Kurumlarda hükümlülerin ve tutukluların eğitim ve öğrenim işlerini düzenlemek" , " D)	Rücu hususunun değerlendirilmesi amacıyla ilgili kurum ve kuruluşlara bildirimde bulunmak" , " E)	Cezaları infaz edilen hükümlülerin işe yerleştirilmeleri konusunda, infaz sonrası yardım müesseseleri ve diğer kurumlarla işbirliği yapmak"],
  dogruCevap: "D)	Rücu hususunun değerlendirilmesi amacıyla ilgili kurum ve kuruluşlara bildirimde bulunmak"},
  
  
  {//376
  metin: "  70. 25/1 sayılı Adalet Bakanlığı Ceza İşleri Genel Müdürlüğü Resmi Yazışmalar Konulu Genelgesi'ne göre dikkat ve özen gösterilmesi istenilenlerle ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Yazışmaların gizlilik ve ivedilik derecesine dikkat edilmesi" , " B)	Yazının merkez ve mülhakat Cumhuriyet başsavcılıklarını da ilgilendirmesi durumunda derhâl ilgili yerlere gönderilmesi" , " C)	Merkez ve bağlı ilçe Cumhuriyet savcılarının Bakanlıkla olan yazışmalarının, aksi istenmedikçe mutlak surette aracısız yapılması" , " D)	Yazının Türk Dil Kurumu tarafından hazırlanan İmlâ Kılavuzu ve Türkçe Sözlük esas alınarak dilbilgisi kurallarına göre yaşayan Türkçe ile yazılması" , " E)	Türkiye Büyük Millet Meclisi ile uluslararası kurum ve kuruluşlarla yapılacak olan ve soruşturma kapsamı dışında kalan yazışmaların, Adalet Bakanlığı aracı kılınmak suretiyle yerine getirilmesi"],
  dogruCevap: "C)	Merkez ve bağlı ilçe Cumhuriyet savcılarının Bakanlıkla olan yazışmalarının, aksi istenmedikçe mutlak surette aracısız yapılması"},
  
  
  {//377
  metin: "  71. 154/1 sayılı Adalet Bakanlığı Ceza İşleri Genel Müdürlüğü Ailenin Korunması ve Kadına Karşı Şiddetin Önlenmesine Dair Kanunun Uygulanması Konulu Genelgesi'ne göre 6284 sayılı Kanun kapsamında verilen tedbir kararlarının, Kanun'un amacı dikkate alınarak ivedilikle ve etkin bir şekilde uygulanması ile ilgili aşağıda-kilerden hangisi yanlıştır?",
  secenekler: [" A)	Cumhuriyet savcılığınca önleyici ve koruyucu tedbir talebinde bulunulması hâlinde, mahkemece verilen tedbir kararlarının takip ve denetimi açısından ilgili kurumlara ve kolluğa iletilmesi için Cumhuriyet savcılığına gönderilmesi" , " B)	Koruyucu ve önleyici tedbir taleplerinin kabulüne ve reddine dair kararların, mahkeme tarafından şiddet uygulayana ve korunan kişiye tebliğ edilmesi" , " C)	Tedbirlere ilişkin başvurular ile bu başvuruların kabul ya da reddine dair kararların ŞÖNİM'e UYAP üzerinden bildirilmesi" , " D)	Korunan kişi hakkında barınma tedbirine hükmedilmesi hâlinde tebliğin yapılması için kararın ŞÖNİM'e gönderilmesi" , " E)	Önleyici tedbir kararlarının uygulanmasının kolluk birimleri marifeti ile izlenmesi"],
  dogruCevap: "B)	Koruyucu ve önleyici tedbir taleplerinin kabulüne ve reddine dair kararların, mahkeme tarafından şiddet uygulayana ve korunan kişiye tebliğ edilmesi"},
  
  
  {//378
  metin: "  72. 124/1 sayılı Adalet Bakanlığı Bilgi İşlem Dairesi Başkanlığı UYAP Uygulamaları Konulu Genelgesi'ne göre UYAP Bilişim Sistemi kullanılarak soruşturma ve kovuşturma işlemleri ile diğer adlî ve idarî işlemlerin etkin, verimli, hızlı, düzenli, şeffaf ve usul ekonomisine uygun biçimde yürütülmesi amacıyla istenenlerle ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Her türlü kalem hizmetlerinin UYAP üzerinden yürütülmesi" , " B)	Tüm birimlerde her türlü veri girişinin eksiksiz ve doğru biçimde yapılması" , " C)	Elektronik imza sertifikalarının geçerlilik süresinin takibinin yapılarak süresinde temin edilmesi için önceden gerekli başvurularda bulunulması" , " D)	Zorunluluk sebebiyle haricen oluşturulan belgeler ile sistem haricinde gelen belgelerin ekleriyle birlikte taranarak UYAP ortamına aktarılması" , " E)	UYAP kapsamındaki bilgiler ile fiziki ortamdaki bilgiler arasında çelişkiye mahal verilmemesi, bir çelişki olması hâlinde fiziki ortamdaki belgelere itibar edilmesi"],
  dogruCevap: "E)	UYAP kapsamındaki bilgiler ile fiziki ortamdaki bilgiler arasında çelişkiye mahal verilmemesi, bir çelişki olması hâlinde fiziki ortamdaki belgelere itibar edilmesi"},
  
  
  {//379 *
  metin: "  73. 128/1 sayılı Adalet Bakanlığı İdari ve Mali İşler Dairesi Başkanlığı Arşiv Hizmetleri Konulu Genelgesi'ne göre merkezdeki birimler için birimler arası yazışmalar birim arşivinde kaç yıl saklanır?",
  secenekler: [" A) İki" , " B) Beş" , "  C) Yedi" , " D) On üç" , " E) Yirmi beş"],
  dogruCevap: "A) İki"},
  
  
  {//380
  metin: "  75. T.C. Anayasası'na göre hâkimlik ve savcılık mesleği ile ilgili aşağıdakilerden hangisi yan lıştır?",
  secenekler: [" A)	Hâkimler ve savcılar adli ve idari yargı hâkim ve savcıları olarak görev yaparlar." , " B)	Hâkimler, mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre görev ifa ederler." , " C)	Hâkimler ve savcılar, kanunda belirtilenlerden başka, resmî ve özel hiçbir görev alamazlar." , " D)	Hâkim ve savcı olup da adalet hizmetindeki idari görevlerde çalışanlar, hâkimler ve savcılar hakkındaki hükümlere tabidirler." , " E)	Hâkimler ve savcılar altmış yaşını bitirinceye kadar hizmet görürler; askeri hâkimlerin yaş haddi, yükselme ve emeklilikleri yönetmelikte gösterilir."],
  dogruCevap: "E)	Hâkimler ve savcılar altmış yaşını bitirinceye kadar hizmet görürler; askeri hâkimlerin yaş haddi, yükselme ve emeklilikleri yönetmelikte gösterilir."},
  
  
  {//381
  metin: "  76. 5235 sayılı Adlî Yargı ilk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Görev ve Yetkileri Hakkında Kanun'a göre ceza mahkemelerinin kuruluşu ile ilgili aşağıdaki-lerden hangisi yanlıştır?",
  secenekler: ["A)	Asliye ceza mahkemeleri tek hâkimlidir." , " B)	Özel kanunlarla kurulan diğer ceza mahkemelerinin kuruluşuna ilişkin hükümler saklıdır." , " C)	Ağır ceza mahkemesinde bir başkan ile yeteri kadar üye bulunur. Bu mahkeme bir başkan ve en az dört üye ile toplanır." , " D)	İş durumunun gerekli kıldığı yerlerde ceza mahkemelerinin birden fazla dairesi oluşturulabilir. Bu daireler numaralandırılır." , " E)	Ceza mahkemeleri, her il merkezi ile bölgelerin coğrafî durumları ve iş yoğunluğu göz önünde tutularak belirlenen ilçelerde Hâkimler ve Savcılar Kurulunun olumlu görüşü alınarak Adalet Bakanlığınca kurulur."],
  dogruCevap: " C)	Ağır ceza mahkemesinde bir başkan ile yeteri kadar üye bulunur. Bu mahkeme bir başkan ve en az dört üye ile toplanır."},
  
  
  {//382
  metin: "  77. 2576 sayılı Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin Kurulu şu ve Görevleri Hakkında Kanun'a göre bölge idare mahkemeleri, idare mahkemeleri ve vergi mahkemeleri, bölgelerin coğrafi durumları ve iş hacmi göz önünde tutularak aşağıdaki-lerden hangisi tarafından kurulur?",
  secenekler: [" A)	Cumhurbaşkanı" , " B)	İçişleri Bakanlığı" , " C)	Adalet Bakanlığı" , " D)	Hâkimler ve Savcılar Kurulu" , " E)	Türkiye Büyük Millet Meclisi"],
  dogruCevap: "C)	Adalet Bakanlığı"},
  
  
  {//383
  metin: "  79. İdarî para cezasını gerektiren eylemlerin işlendikleri tarihten itibaren geriye doğru----yıl içinde ----kez işlenmesi hâlinde Kurum tarafından elektronik sertifika hizmet sağlayıcısı tüzel kişinin faaliyet izninin iptaline karar verilir. 5070 sayılı Elektronik İmza Kanunu'na göre verilen hükümde boş bırakılan yerlere sırasıyla hangisi getirilmelidir?",
  secenekler: [" A) bir - üçüncü" , " B) iki - ikinci" , " C) iki - üçüncü" , " D) üç - ikinci" , " E) üç - üçüncü"],
  dogruCevap: "E) üç - üçüncü"},
  
  
  {//384
  metin: "  80. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre elektronik işlemler ile ilgili aşağıdakiler den hangisi yanlıştır?",
  secenekler: ["A)	Ulusal Yargı Ağı Bilişim Sistemi (UYAP) adalet hizmetlerinin elektronik ortamda yürütülmesi amacıyla oluşturulan bilişim sistemidir." , " B)	Güvenli elektronik imza ile oluşturulan tutanak ve belgeler ayrıca fizikî olarak gönderilmez, belge örneği aranmaz." , " C)	Elektronik ortamda, güvenli elektronik imza kullanılarak harç ve avans ödenemez." , " D)	Mahkemelerde görülmekte olan dava, çekişmesiz yargı, geçici hukuki koruma ve diğer tüm işlemlerde UYAP'ın kullanılmasına dair usul ve esaslar yönetmelikle düzenlenir." , " E)	Elektronik ortamdan fizikî örnek çıkartılması gereken hâllerde tutanak veya belgenin aslının aynı olduğu belirtilerek hâkim veya görevlendirdiği yazı işleri müdürü tarafından imzalanır ve mühürlenir."],
  dogruCevap: "C)	Elektronik ortamda, güvenli elektronik imza kullanılarak harç ve avans ödenemez."},
  
  
  {//385
  metin: "  81. 5271 sayılı Ceza Muhakemesi Kanunu'na göre ceza muhakemesi işlemlerinin UYAP'ta yapılmasına dair usul ve esaslar, aşağıdakilerden hangisi tarafından çıkarılacak yönetmelikle düzenlenir?",
  secenekler: [" A) Adalet Bakanlığı" , " B)	İçişleri Bakanlığı" , "  C)	Cumhurbaşkanlığı" , " D)	Hâkimler ve Savcılar Kurulu" , " E)	Sanayi ve Teknoloji Bakanlığı"],
  dogruCevap: " A) Adalet Bakanlığı"},
  
  
  {//386
  metin: "  82. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre UYAP'ın kullanılması ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Fizikî olarak verilen ve gönderilen her türlü evrak, elektronik ortama aktarılarak UYAP'a kaydedilir ve ilgili birime gönderilir." , " B)	Taraf ve vekilleri ile diğer ilgililer güvenli elektronik imza ile imzalamak suretiyle UYAP vasıtasıyla birimlere elektronik ortamda bilgi ve belge gönderebilirler." , " C)	Kanunlarda gösterilen istisnalar hariç olmak üzere, dosyalar güvenli elektronik imza kullanılarak UYAP'ta incelenebilir ve her türlü muhakeme işlemi yapılabilir." , " D)	Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanır." , " E)	Elektronik ortamda yapılan işlemlerde süre gün sonunda biter. Elektronik ortamda yapılacak işlemlerin, ertesi güne sarkmaması açısından saat 00:00'a kadar yapılması zorunludur."],
  dogruCevap: "D)	Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanır."},
  
  
  {//387
  metin: "  83. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre UYAP'ın kullanılması ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Tutanak, belge ve kararlar elektronik ortamda düzenlenemezler." , " B)	Gelen evraktan sorumlu personel, UYAP üzerinden mahkemelere gönderilen ve iş listesine düşen belgeleri derhâl ilgili kişiye aktarır." , "  C)	Kullanıcı, kendi kullanıcı adı ile yapılan tüm işlemlerden sorumlu olup kullanıcı adı, her türlü şifre, parola ve elektronik imza cihazını başkaları ile paylaşamaz." , " D)	Kanunlarda gösterilen istisnalar hariç olmak üzere, dosyalar güvenli elektronik imza kullanılarak UYAP'ta incelenebilir ve her türlü muhakeme işlemi yapılabilir." , " E)	Taraf ve vekilleri ile diğer ilgililer güvenli elektronik imza ile imzalamak suretiyle UYAP vasıtasıyla dairelere veya mahkemelere elektronik ortamda bilgi ve belge gönderebilirler."],
  dogruCevap: "A)	Tutanak, belge ve kararlar elektronik ortamda düzenlenemezler."},
  
  
  {//388
  metin: "  84. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre hazırlanan belgelerde 'Times New Roman' yazı stilinde esas alınan harf büyüklüğü aşağıdaki lerden hangisidir?",
  secenekler: ["A) 10" , " B) 11" , "C) 12" , " D)13 " , " E)14"],
  dogruCevap: "C) 12"},
  
  {//388
  metin: "  85. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre logo ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Belge üzerinde en fazla üç logo kullanılabilir." , " B)	İdare logo kullanmak istediğinde sayfanın üst boşluğu 0,5 cm olarak düzenlenir." , " C)	Logo tek kullanıldığında belgenin en üst orta kısmında 'T.C.' ibaresini ortalayacak şekilde yer alır." , " D)	İki ayrı logo kullanıldığında 'Başlık' alanını ortalayacak şekilde hiyerarşi yönünden üst olan idareye ait logo solda, alt olan idareye ait logo sağda kullanılır." , " E)	Bir kavram veya etkinlik gibi hususlarla ilgili logo kullanılmak istendiğinde, 'Başlık' alanını ortalayacak şekilde idareye ait olan logo solda; diğer logo sağda kullanılır."],
  dogruCevap: "A)	Belge üzerinde en fazla üç logo kullanılabilir."},
  
  
  {//389
  metin: "  86. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre tarih ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Gün ve ay iki haneli, yıl ise dört haneli olarak düzenlenir." , " B)	Ay adları, harfle de yazılabilir. Bu durumda gün, ay ve yıl arasına eğik çizgi konulur." , " C)	Tarih; sayı ile aynı satırda olmak üzere yazı alanının en sağında gün, ay, yıl olarak rakamla ve aralarına nokta işaretikonularak yazılır." , " D)	Zorunlu hâllerde veya olağanüstü durumlarda hazırlanan belgede tarih, belgenin imzalandığı zamanı belirtir ve belge imzalandığı tarihte kayıt altına alınır." , " E)	Tutanak, rapor, tebliğ-tebellüğ belgesi ve benzeri belgelerde tarih, metnin bitiminde yer alabilir."],
  dogruCevap: "B)	Ay adları, harfle de yazılabilir. Bu durumda gün, ay ve yıl arasına eğik çizgi konulur."},
  
  {//390
  metin: "  87. 7201 sayılı Tebligat Kanunu'na göre tebligat esasları ile ilgili aşağıdakilerden hangisi yan I ıştır?",
  secenekler: [" A)	Adresi meçhul olanlara tebligat ilanen yapılır." , " B)	Tebligat, tebliğ yapılacak şahsa bilinen en son adresinde yapılır." , " C)	Yabancı bir memlekette resmi bir vazife ile bulunan Türk memurlarına tebligat, Dışişleri Bakanlığı vasıtasıyla yapılır." , " D)	Subaylar hariç olmak üzere astsubaylar ve erata yapılacak tebliğler, kıta kumandanı ve müessese amiri gibi en yakın üste yapılır." , " E)	Kendisine tebliğ yapılacak şahıs adresinde bulunmazsa tebliğ kendisi ile aynı konutta oturan kişilere veya hizmetçilerinden birine yapılır."],
  dogruCevap: "D)	Subaylar hariç olmak üzere astsubaylar ve erata yapılacak tebliğler, kıta kumandanı ve müessese amiri gibi en yakın üste yapılır."},
  
  
  {//391
  metin: "  88. 7201 sayılı Tebligat Kanunu'na göre ilanen tebliğe karar veren merciin, icabına göre tebliğ tarihi için tayin ettiği müddet kaç günü geçemez?",
  secenekler: [" A) Üç	" , " B) Beş	" , " C) Yedi	" , " D) On" , "   E) On beş	"],
  dogruCevap: "E) On beş"},
  
  
  {//392
  metin: "  89. 7201 sayılı Tebligat Kanunu'na göre kazai tebligat ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: ["A)	Vekil vasıtasıyla takip edilen davalarda, vekiller yekdiğerine tebligat yapamazlar." , " B)	Cumhuriyet Başsavcılığına yapılacak tebligat, tebliğ olunacak varaka aslının kendisine gösterilmesiyle olur." , " C)	Bu Kanun hükümlerine göre kendilerine tebliğ yapılması caiz olan kimselerin o davada hasım olarak alakaları varsa muhatap namına kendilerine tebliğ yapılamaz." , " D)	Celse esnasında kazai merci tarafından sıfatları tespit edilen avukat kâtiplerine ve stajyerlerine müteakip celse gün ve saatinin bildirilmesi avukata tebliğ hükmündedir." , " E)	Kendisine veya adresine kanunun gösterdiği usullere göre tebliğ yapılmış olan kimse, adresini değiştirirse, yenisini hemen tebliği yaptırmış olan kaza merciine bildirmeye mecburdur."],
  dogruCevap: "A)	Vekil vasıtasıyla takip edilen davalarda, vekiller yekdiğerine tebligat yapamazlar."},
  
  
  {//393
  metin: "  90. 7201 sayılı Tebligat Kanunu'nun uygulanmasına ilişkin usul ve esasların belirlenmesi için çıkarılacak yönetmelikte aşağıdakilerden hangisi görüşü alınan bakanlıklardan biridir?",
  secenekler: [" A)	Sağlık Bakanlığı" , " B)	İçişleri Bakanlığı" , " C)	Adalet Bakanlığı" , " D)	Dışişleri Bakanlığı" , " E)	Millî Eğitim Bakanlığı"],
  dogruCevap: "B)	İçişleri Bakanlığı"},
  
  
  {//394
  metin: "  91. Tebligat Kanununun Uygulanmasına Dair Yönetmelik'e göre tebliğ mazbatasında muhatabın birden fazla adresine yer verildiği durumlarda aşağıdakilerden hangisi yapılır?",
  secenekler: ["A)	İlk yazılan adrese tebliğ yapılır." , " B)	Tebliğ mazbatası tebligatı çıkaran mercie iade edilir." , " C)	Tebliğ mazbatası ilk yazılan adresin muhtarına verilir." , " D)	Muhatabın en son bulunduğu adresin muhtarına tebliğ mazbatası verilir." , " E)	Muhatap iki adreste de yoksa bu adreslerde yer alan herhangi bir komşuya tebliğ mazbatası verilir."],
  dogruCevap: " B)	Tebliğ mazbatası tebligatı çıkaran mercie iade edilir."},
  
  
  {//395
  metin: "  92. Elektronik Tebligat Yönetmeliğine göre kullanıma kapatılan elektronik tebligat adresi kaç ay süreyle adres sahibinin erişimine açık tutulur?",
  secenekler: [" A) Altı" , " B) Yedi" , " C) Dokuz" , " D) On iki" , " E) On beş"],
  dogruCevap: "A) Altı"},
  
  
  {//396
  metin: "   93. I. Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korur. II.	Kanunda uygulanabilir bir hüküm yoksa hâkim, örf ve âdet hukukuna göre, bu da yoksa kendisi kanun koyucu olsaydı nasıl bir kural koyacak idiyse ona göre karar verir. III.	Kanunun iyi niyete hukukî bir sonuç bağladığı durumlarda, asıl olan iyi niyetin varlığıdır ancak durumun gereklerine göre kendisinden beklenen özeni göstermeyen kimse iyi niyet iddiasında bulunamaz. 4721 sayılı Türk Medeni Kanunu'na göre başlangıç hükümleri ile ilgili verilenler doğru yanlış olarak değerlendirildiğinde sıralama hangisidir?	I.	II.	III.",
  secenekler: [" A)	Yanlış	Doğru	Yanlış" , " B)	Doğru	Doğru	Yanlış" , " C)	Doğru	Yanlış	Yanlış" , " D)	Yanlış	Doğru	Doğru" , " E)	Yanlış	Yanlış	Doğru"],
  dogruCevap: "D)	Yanlış	Doğru	Doğru"},
  
  
  
  {//397
  metin: "  94. 4721 sayılı Türk Medeni Kanunu'na göre mülki yet ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Bir şeyin maliki, onun ürünlerinin de maliki olur." , " B)	Eklenti, asıl şeyden geçici olarak ayrılmakla bu niteliğini kaybeder." , " C)	Bir şeye malik olan kimse, o şeyin bütünleyici parçalarına da malik olur." , " D)	Doğal ürünler asıl şeyden ayrılıncaya kadar onun bütünleyici parçasıdır." , " E)	Bir şeye malik olan kimse, hukuk düzeninin sınırları içinde, o şey üzerinde dilediği gibi kullanma, yararlanma ve tasarrufta bulunma yetkisine sahiptir."],
  dogruCevap: "B)	Eklenti, asıl şeyden geçici olarak ayrılmakla bu niteliğini kaybeder."},
  
  
  {//398
  metin: "  95. Süreli hapis cezası, kanunda aksi belirtilmeyen hâllerde----aydan az,----yıldan fazla olamaz.  5237 sayılı Türk Ceza Kanunu'na göre verilen hükümde boş bırakılan yerlere sırasıyla aşağı-dakilerden hangisi getirilmelidir?",
  secenekler: [" A) bir - on" , " B) bir - on beş" , "  C) bir - yirmi" , " D) iki - on" , " E) iki - yirmi"],
  dogruCevap: "C) bir - yirmi"},
  
  
  {//399
  metin: "  96. 5237 sayılı Türk Ceza Kanunu'na göre aşağı-dakilerden hangisi adlî para cezası, beş günden az ve kanunda aksine hüküm bulunmayan hâllerde kaç günden fazla olmamak üzere belirlenen tam gün sayısının, bir gün karşılığı olarak takdir edilen miktar ile çarpılması suretiyle hesaplanan meblağın hükümlü tarafından Devlet Hazinesine ödenmesinden ibarettir?",
  secenekler: [" A)	Beş yüz kırk" , " B)	Altı yüz yirmi" , " C)	Altı yüz seksen" , " D)	Yedi yüz on beş" , " E)	Yedi yüz otuz"],
  dogruCevap: "E)	Yedi yüz otuz"},
  
  {//400
  metin: "  97. 2577 sayılı İdari Yargılama Usulü Kanunu'na göre Danıştay, bölge idare mahkemeleri, idare ve vergi mahkemelerinin esasa ve yürütmenin durdurulmasına ilişkin kararlarının icaplarına göre idarenin, gecikmeksizin işlem tesis etmeye veya eylemde bulunmaya mecbur olduğu süre kararın idareye tebliğinden başlayarak kaç günü geçemez?",
  secenekler: [" A)	Yedi" , " B)	On" , " C)	Orı beş" , " D)	Yirmi" , " E)	Otuz"],
  dogruCevap: "E)	Otuz"},
  
  
  {//401
  metin: "  98. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre süreler ile ilgili aşağıdakilerden hangisi yanlıştır?",
  secenekler: [" A)	Resmî tatil günleri, süreye dâhildir." , " B)	Sürenin son gününün resmî tatil gününe rastlaması hâlinde, süre tatili takip eden ilk iş günü gün sonunda biter." , " C)	Süre; hafta, ay veya yıl olarak belirlenmiş ise başladığı güne son hafta, ay veya yıl içindeki karşılık gelen günün tatil saatinde biter." , " D)	Süreler gün olarak belirlenmiş ise tebliğ veya tefhim edildiği gün hesaba katılmaz ve süre son günün tatil saatinde biter." , " E)	Süreler, taraflara tebliğ tarihinden veya kanunda öngörülen hâllerde, tefhim tarihinden itibaren işlemeye başlar."],
  dogruCevap: " B)	Sürenin son gününün resmî tatil gününe rastlaması hâlinde, süre tatili takip eden ilk iş günü gün sonunda biter."},
  
  
  {//402
  metin: "  99. 5271 sayılı Ceza Muhakemesi Kanunu'na göre süreler ve eski hâle getirme ile ilgili aşağıdaki-lerden hangisi yanlıştır?",
  secenekler: [" A)	Süresi içinde usul işlemi yapılsaydı, esasa hangi mahkeme hükmedecek idiyse, eski hâle getirme dilekçesi hakkında da o mahkeme karar verir." , " B)	Dilekçe verildiği anda usule ilişkin yapılamayan işlemler de yerine getirilir." , " C)	Eski hâle getirme isteminin kabulüne ilişkin karar kesindir; reddine ilişkin karara karşı itiraz yoluna gidilebilir." , " D)	Eski hâle getirme dilekçesi, kararın yerine getirilmesini durdurur." , " E)	Eski hâle getirme dilekçesi, engelin kalkmasından itibaren yedi gün içinde, süreye uyul-duğunda usule ilişkin işlemleri yapacak olan mahkemeye verilir."],
  dogruCevap: "D)	Eski hâle getirme dilekçesi, kararın yerine getirilmesini durdurur."},
  
  
  {//403
  metin: "  100. Adalet Bakanlığı Disiplin Yönetmeliği'ne göre kademe ilerlemesinin durdurulması cezasına ilişkin Bakanlık Disiplin Kurulunun kararı hariç olmak üzere, disiplin kurullarının tüm kararları, imzalandığı tarihi izleyen en geç kaç gün içinde ilgili memura tebliğ edilir?",
  secenekler: [" A)	Beş " , " B)	On" , " C)	On beş" , " D)	Yirmi" , " E)	Yirmi beş"],
  dogruCevap: "C)	On beş"},
 // 2020 YILI İKİNCİ SINAV
 
 {//404 
metin: "  1. 657 sayılı Devlet Memurları Kanunu'na göre genel haklar ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Devlet memurları, bu Kanun'da belirtilen esaslara göre memurluktan çekilebilirler." , " B)	Devlet memurlarının, özel kanununda yazılı belirli şartlar içinde, emeklilik hakları vardır." , " C)	Kanunlarda yazılı hâller dışında Devlet memurunun memurluğuna son verilmez, aylık ve başka hakları elinden alınamaz." , " D)	Devlet memurları, Anayasada ve özel kanununda belirtilen hükümler uyarınca sendikalar ve üst kuruluşlar kuramazlar." , " E)	Müracaat ve şikâyetler incelenerek en kısa zamanda ilgiliye bildirilir. Müracaat ve şikâyetlerle ilgili esas ve usuller Cumhurbaşkanınca hazırlanacak bir yönetmelikle düzenlenir."],
dogruCevap: "D)	Devlet memurları, Anayasada ve özel kanununda belirtilen hükümler uyarınca sendikalar ve üst kuruluşlar kuramazlar."},



{//405
metin: "  2. 657 sayılı Devlet Memurları Kanunu'na göre 5 yıl süreli yükseköğrenimini bitirenlerin (istisnai durumlar hariç) memuriyete giriş derece ve kademeleri aşağıdakilerden hangisidir?",
secenekler: [" A) 9/1" , "	B) 9/2" , " C) 9/3" , " D) 10/1" , " E) 10/2"],
dogruCevap: "B) 9/2"},


{//406
metin: "  3. 657 sayılı Devlet Memurları Kanunu'na göre adaylık ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Temel eğitim ile hazırlayıcı eğitim aynı kurumda yapılır." , " B)	Adaylık süresi içinde ilişkileri kesilenler ilgili kurumlarca derhâl Devlet Personel Başkanlığına bildirilir. C)	Aday olarak atanmış Devlet memurunun adaylık süresi bir yıldan az iki yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz." , " D)	Adaylık süresi içinde aylıktan kesme veya kademe ilerlemesinin durdurulması cezası almış olanların disiplin amirlerinin teklifi ve atamaya yetkili amirin onayı ile ilişikleri kesilir." , " E)	Eğitim süreleri, programları, değerlendirme esasları ve hangi kurumların sorumluluğunda yapılacağı ve diğer hususlar Millî Eğitim Bakanlığınca hazırlanacak bir yönetmelikle düzenlenir."],
dogruCevap: "E)	Eğitim süreleri, programları, değerlendirme esasları ve hangi kurumların sorumluluğunda yapılacağı ve diğer hususlar Millî Eğitim Bakanlığınca hazırlanacak bir yönetmelikle düzenlenir."},


{//407
metin: "  4. 657 sayılı Devlet Memurları Kanunu'na göre 'görevin işbirliği içinde yapılması ilkesine aykırı davranışlarda bulunmak' fiili aşağıdaki disiplin cezalarından hangisini gerektirir?",
secenekler: [" A)	Uyarma" , " B)	Kınama" , " C)	Aylıktan kesme" , " D)	Devlet memurluğundan çıkarma" , " E)	Kademe ilerlemesinin durdurulması"],
dogruCevap: " A)	Uyarma"},


{//408
metin: "  5. 657 sayılı Devlet Memurları Kanunu'na göre görevinden uzaklaştırılan Devlet memurları hakkında görevden uzaklaştırmayı izleyen en geç kaç iş günü içinde soruşturmaya başlanması şarttır?",
secenekler: [" A) 3" , " B) 5" , " C) 7 " , "D) 10 " , "E) 15"],
dogruCevap: "D) 10"},


{//409
metin: "  6. Ortaokul birdeyken, edebiyatla temasım Yaşar Kemal'in İnce Memed'ini, Orhan Kemal'in 'Cemile'sini, Hemingvay'in 'Çanlar Kimin İçin Çalıyor'unu, Dostoyevski'nin 'Suç ve Ceza'sını okuyarak başladı. Lise yıllarımda ise öyküler yazmaya başladım. Aldığım öykü ödülleri bile var. Aslında ben okuyarak, yazarak insanlardan kaçtım. Başka bir dünyaya, kelimelerden oluşan bir dünyaya. Bu parçada sözü edilen yazarla ilgili aşağıda-kilerden hangisine değinilmemiştir?",
secenekler: ["A)	Hikâye ödüllerinin bulunduğuna" , " B)	Yerli ve yabancı yazarların eserini okuduğuna" , "C)	Edebiyatla ilgilenmeye başladığı döneme" , " D)	Okuyup yazdıkça insanlardan uzaklaştığına" , " E)	Yazmayı okumaktan çok sevdiğine"],
dogruCevap: "E)	Yazmayı okumaktan çok sevdiğine"},


{//410
metin: "  7. Aşağıdaki cümlelerin hangisinde 'bakarak, nazaran' anlamında bir söz kullanılmıştır?",
secenekler: [" A)	Bundan sonra da bir iki ay boyunca Ankara'da kalacağım." , "B)	İnsanoğlu kuş misali bugün burada yarın nerede?" , "C)	Kış aylarında pantolon, elbiseye göre daha kullanışlıdır." , " D)	Dün gece salonumuz ağzına kadar doluydu." , "E)	Bütün çabalara rağmen hasta kadın kurtarılamadı."],
dogruCevap: "C)	Kış aylarında pantolon, elbiseye göre daha kullanışlıdır."},


{//411
metin: "  8. 'Doğal' sözcüğü aşağıdaki cümlelerin hangisinde 'olağan, alışılmış' anlamında kullanılmıştır?",
secenekler: [" A)	Pazarda köyden gelen doğal ürünler tercih edilmeye başlandı. " , "B)	Arkadaşım o denli doğaldı ki giderek şaşırtıcı olmaktan çıkmıştı." , " C)	Bazı çiçekler sadece doğal ortamlarında yetiş-tirilebiliyor." , " D)	Doğal güzellikler eskisi kadar turist çekmiyordu." , " E)	Bölgenin doğal liman özelliği taşıması ticaret açısından çok önemliydi."],
dogruCevap: "B)	Arkadaşım o denli doğaldı ki giderek şaşırtıcı olmaktan çıkmıştı."},


{//412
metin: "  9. Aşağıdaki cümlelerden hangisi sadece zarf tümleci ve yüklemden oluşmuştur?",
secenekler: [" A)	Doğa ile tarihin iç içe geçtiği yerleri görmek ister misiniz? " , "B)	Şiddetli yağmur sonrası araba sular altında kaldı." , " C)	Geçmişin güzel günlerini en iyi anlatan yazar olarak tanıdık." , "D)	Servi ormanını gerdanlık gibi taşıyan bu millî park çok beğeniliyor. E)	Güneşin yakıcı yüzünü gösterdiği bu aylarda rotanızı Ege'ye çevirmelisiniz."],
dogruCevap: " C)	Geçmişin güzel günlerini en iyi anlatan yazar olarak tanıdık."},


{//413
metin: "  10. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre 'ilgi' ile ilgili aşağıdakilerden hangisi doğrudur?",
secenekler: [" A)	'Sayı', 'Konu' ve 'İlgi' yan başlıklarından sonra kullanılan iki nokta ':' işareti bir satır aşağıya yazılır." , " B)	'İlgi:' yan başlığı, muhatap bölümünün son satırından itibaren iki satır boşluk bırakılarak ve yazı alanının solundan başlanarak yazılır." , " C)	İlgide,'... tarihli ve sayılı ...' ibaresi kullanılır ve ilginin sonuna (!) işareti konulur." , " D)	İlgide belirtilen belge, muhatapta bulunmadığı durumlarda söz konusu belge, muhatabına gönderilmez. " , "E)	İlgide yer alan bilgiler bir satırı geçerse, devamı 'İlgi:' yan başlığının ve sıralamayı gösteren harflerin altı iki satır boş bırakılarak yazılır."],
dogruCevap: " B)	'İlgi:' yan başlığı, muhatap bölümünün son satırından itibaren iki satır boşluk bırakılarak ve yazı alanının solundan başlanarak yazılır."},


{//414
metin: "  11. Aşağıdakilerden hangisi 'Crystallizing Public Opinion' adlı kitabında halkla ilişkileri 'kamu ile organizasyon arasında uyumu ve anlayışı sağlama' olarak tanımlamıştır?",
secenekler: ["A)	Edward Bernays" , "B)	Stephenson " , "C)	Lvy Lee " , " D)	Harlow " , " E)	Hutton"],
dogruCevap: "A)	Edward Bernays"},


{//415
metin: "  12. Aşağıdakilerden hangisi halkla ilişkiler ve kriz yönetiminde krizi oluşturan çevresel nedenlerden biri değildir?",
secenekler: ["A)	Ekonomik sistem" , "B)	İşletmenin yapısı" , " C)	Toplumsal kültürel nedenler" , " D)	Hukuki ve siyasi nedenler " , "E)	Teknolojik gelişmeler"],
dogruCevap: "B)	İşletmenin yapısı"},


{//416
metin: "  13. Köcher ve Birchmeir'e göre aşağıdakilerden hangisi halkla ilişkiler kampanyasının 'değerlendirme' safhasında uygulamanın tam manasıyla gerçekleştirilmemesinin nedenlerinden biri değildir?",
secenekler: [" A)	Mekân" , " B)	Zaman " , " C)	Finans durumu" , " D)	Gereklilik hakkında şüphe" , " E)	Araştırma durumu hakkında güvensizlik"],
dogruCevap: "A)	Mekân"},


{//417
metin: "  14. Basın ve halkla ilişkilerde yazma teknikleri ve örneklerle ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Bildiri, açıklama mesaj, deklarasyon duyuru ve uyarılarda 'dedi, söyledi, konuştu' gibi konuşma içeren sözcükler kullanılmamalıdır." , " B)	Düz metinleri habere dönüştürürken (Redaksiyon) cümle sıralarını ve sözcükleri aynen uygulama zorunluluğu vardır." , " C)	Kuruluş adına gerçekleştirilen redaksiyon işlemlerinde sözcükler; 'bildirildi, belirtildi, anlatıldı, vurgulandı, kaydedildi, görüşüne yer verildi, savunuldu vb.' biçiminde değiştirilmelidir." , " D)	Sözlü olarak yapılan basın açıklamalarının yazımlarında, 'dedi, söyledi vb.'gibi konuşmaya yönelik sözcükler kullanılmaktadır." , " E)	Kişilerde 'bildirdi, belirtti, anlattı, vurguladı, kaydetti, savundu, görüşüne yer verdi, dile getirdi, anımsattı, işaret etti, dikkati çekti vb.' gibi yazıya yönelik sözcüklere yer verilmelidir."],
dogruCevap: " B)	Düz metinleri habere dönüştürürken (Redaksiyon) cümle sıralarını ve sözcükleri aynen uygulama zorunluluğu vardır."},



{//418
metin: "  15. Etik komisyonları, kurum içinden en az kaç kişiden oluşmaktadır?",
secenekler: [" A) 6" , " B)5" , " C) 4" , " D) 3" , " E) 2"],
dogruCevap: "D) 3"},


{//419
metin: "  16. Selahattin Bey uzun çalışma hayatı boyunca zorla sahip olduğu evinin tapusunu kaybetmiş, bir komşusu kendisine evin tapusunu bulan kimsenin evini satabileceğini söylemiştir. Telaşla tapu müdürlüğüne gelen Selahattin Bey, durumu sormak üzere doğrudan tapu müdürünün odasına girmiştir. Önünde incelemesi gereken onlarca evrak bulunan tapu müdürü, yaşlı adamı dinlemiş, belgeyi bulan adamın evini satamayacağını defalarca uygun bir dille kendisine anlatmış. Ancak yaşlı adam anlatılanlarla ikna olmamıştır. Bunun üzerine tapu müdürü gülümseyerek yaşlı adama, tapusunu kaybettiğine dair bir dilekçe yazmasını, bunu dosyaya koyacaklarını, böylece kimsenin evini satamayacağını söyleyerek ikna olmasını sağlamıştır. Verilen örnek olayda tapu müdürü görevini yerine getirirken uyulması gereken aşağıdaki esaslardan hangisine çok daha uygun davranmıştır?",
secenekler: [" A)	Dürüstlük ve tarafsızlığa " , "B)	Saygınlık ve güvene " , "C)	Nezaket ve saygıya" , " D)	Amaç ve misyona bağlılığa E)	Yetkili makamlara bildirime"],
dogruCevap: "C)	Nezaket ve saygıya"},

{//420
metin: "  17.I.	Hayırsever Sıdıka Hanım, ilkokuldaki dersliklerde kullanılmak üzere 20 bilgisayar bağışlamıştır. Bilgisayarların demirbaş kaydı yapılmış ve okulun internet sitesinde duyurulmuştur. II.	Selim Bey, kızının okuduğu okula matematik öğretmeni Semra Hanımın kullanması için dizüstü bilgisayar hediye etmiş, okul müdürü bilgisayarı demirbaşa kaydetmiş, ardından Selim Beyin kızının derslerine giren matematik öğretmeni Semra Hanıma tahsis etmiştir. III.	İş insanı Sadık Bey, hastaneye diyaliz makinesi bağışlamıştır. Verilenler hediye alma yasağı kapsamında ve kapsam dışında olarak değerlendirildiğinde doğru sıralama aşağıdakilerden hangisi olur?I.	II.	III.",
secenekler: ["A)	Kapsam Dışı	Kapsam Dışı	Kapsam Dışı" , " B)	Yasak  Kapsamında	Kapsam Dışı	Kapsam Dışı" , " C)	Yasak  Kapsamında	Yasak  Kapsamında	Kapsam Dışı" , " D)	Kapsam Dışı	Yasak  Kapsamında	Kapsam Dışı" , " E)	Kapsam Dışı	Yasak  Kapsamında	Yasak  Kapsamında"],
dogruCevap: "D)	Kapsam Dışı	Yasak  Kapsamında	Kapsam Dışı"},



{//421
metin: "  18. • Adam kayırmacılık  •	İyi niyetle verilen hediyeler •	Yapılan iş için özel ücret alma •	Kendisine ve/veya yakınlarına çıkar sağlama •	Kamu görevlisinin ayrıldıktan sonra kurumla iş yapması Verilenlerden kaç tanesi çıkar çatışması türlerinden olan eski kamu görevlileriyle ilişkilerin çeşitlerindendir?",
secenekler: [" A) 1" , " B) 2" , "  C) 3 " , " D) 4" , " E) 5"],
dogruCevap: "A) 1"},


{//422
metin: "  19. Aşağıdakilerden hangisi Adalet Bakanlığının hizmet birimlerinden biri değildir?",
secenekler: [" A)	İcra İşleri Dairesi Başkanlığı" , "B)	Mevzuat Genel Müdürlüğü" , " C)	İnsan Hakları Dairesi Başkanlığı" , " D)	Hukuk Hizmetleri Genel Müdürlüğü" , " E)	Uluslararası Hukuk Genel Müdürlüğü"],
dogruCevap: " E)	Uluslararası Hukuk Genel Müdürlüğü"},


{//423
metin: "  20. Bölge İdare Mahkemesi Adalet Komisyonu bölge idare mahkemesi başkanının başkanlı ğında, Hâkimler ve Savcılar Kurulunca daire başkanları arasından belirlenen kaç asıl üye den oluşur?",
secenekler: [" A) İki" , "B) Üç" , " C) Dört" , "D) Beş" , " E) Altı"],
dogruCevap: "A) İki"},


{//424
metin: "  21. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre mahkemelerde görülmekte olan dava, çekişmesiz yargı, geçici hukuki koruma ve diğer tüm işlemlerde Ulusal Yargı Ağı Bilişim Sistemi (UYAP)'ın kullanılmasına dair usul ve esaslar aşağıdakilerden hangisi ile düzenlenir?",
secenekler: [" A)	Kanun" , " B)	Cumhurbaşkanlığı Kararnamesi" , " C)	Tüzük" , " D)	Yönetmelik" , " E)	Genelge"],
dogruCevap: "D)	Yönetmelik"},


{//425
metin: "  22. 5018 sayılı Kamu Malî Yönetimi ve Kontrol Kanunu'na göre aşağıdakilerden hangisi genel bütçe kapsamındaki kamu idarelerin dendir?",
secenekler: [" A)	Vakıflar Genel Müdürlüğü" , " B)	Türkiye Bilimler Akademisi" , " C)	Savunma Sanayi Başkanlığı" , " D)	Tapu ve Kadastro Genel Müdürlüğü" , " E)	Yükseköğrenim Kredi ve Yurtlar Kurumu"],
dogruCevap: " D)	Tapu ve Kadastro Genel Müdürlüğü"},


{//426
metin: "  23. T.C. Anayasası'nın genel esasları ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Türkiye Devleti, ülkesi ve milletiyle bölünmez bir bütündür." , " B)Türk	Milleti, egemenliğini, Anayasanın koyduğu esaslara göre, yetkili organları eliyle kullanır." , " C)	Anayasa hükümleri, yasama, yürütme ve yargı organlarını, idare makamlarını ve diğer kuruluş ve kişileri bağlayan temel hukuk kurallarıdır." , " D)	Yürütme yetkisi ve görevi, Türkiye Büyük Millet Meclisi tarafından, Anayasaya ve kanunlara uygun olarak kullanılır ve yerine getirilir." , " E)	Herkes, dil, ırk, renk, cinsiyet, siyasi düşünce, felsefi inanç, din, mezhep ve benzeri sebeplerle ayırım gözetilmeksizin kanun önünde eşittir."],
dogruCevap: "D)	Yürütme yetkisi ve görevi, Türkiye Büyük Millet Meclisi tarafından, Anayasaya ve kanunlara uygun olarak kullanılır ve yerine getirilir."},


{//427
metin: "  24. T.C. Anayasası'na göre aşağıdakilerden hangisi kişinin hakları ve ödevlerindendir?",
secenekler: [" A)	Çalışma hakkı ve ödevi" , " B)	Eğitim ve öğrenim hakkı ve ödevi" , " C)	Ailenin korunması ve çocuk hakları" , " D)	Toplu iş sözleşmesi ve toplu sözleşme hakkı" , " E)	Toplantı ve gösteri yürüyüşü düzenleme hakkı"],
dogruCevap: "E)	Toplantı ve gösteri yürüyüşü düzenleme hakkı"},


{//428
metin: "  25. T.C. Anayasası'na göre eğitim ve öğrenim hakkı ve ödevi ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Kimse, eğitim ve öğrenim hakkından yoksun bırakılamaz." , " B)	Eğitim ve öğretim hürriyeti, Anayasaya sadakat borcunu ortadan kaldırmaz." , " C)	Öğrenim hakkının kapsamı yönetmelikle tespit edilir ve düzenlenir." , " D)	İlköğretim kız ve erkek bütün vatandaşlar için zorunludur ve Devlet okullarında parasızdır." , " E)	Eğitim ve öğretim kurumlarında sadece eğitim, öğretim, araştırma ve inceleme ile ilgili faaliyetler yürütülür."],
dogruCevap: "C)	Öğrenim hakkının kapsamı yönetmelikle tespit edilir ve düzenlenir."},


{//429
metin: "  26. T.C. Anayasası'na göre parti üyesi olabilmek için en az kaç yaşını doldurmuş olmak gerekir?",
secenekler: [" A) On altı" , "	B) On sekiz" , " C) Yirmi bir	" , " D) Yirmi üç" , " E) Yirmi beş"],
dogruCevap: "B) On sekiz"},


{//430
metin: "  27. T.C. Anayasası'na göre Türkiye Büyük Millet Meclisi üyeliklerinde boşalan üyeliklerin sayı sı, üye tamsayısının en az yüzde kaçını bulduğu hâllerde, ara seçimlerinin üç ay içinde yapılmasına karar verilir?",
secenekler: [" A) Üç" , " B) Beş" , " C) Yedi" , " D) Dokuz" , " E) On"],
dogruCevap: "B) Beş"},


{//431
metin: "  28. T.C. Anayasası'na göre aşağıda verilen görev ve yetkilerden hangisi Türkiye Büyük Millet Meclisine aittir?",
secenekler: [" A)	Savaş ilanına karar vermek" , " B)	Kanunları yayımlamak" , " C)	Milletlerarası andlaşmaları onaylamak ve yayımlamak" , " D)	Türk Silahlı Kuvvetlerinin kullanılmasına karar vermek" , " E)	Millî güvenlik politikalarını belirlemek ve gerekli tedbirleri almak"],
dogruCevap: "A)	Savaş ilanına karar vermek"},


{//432
metin: "  29. Cumhurbaşkanının görev süresi----yıldır. Bir kimse en fazla----defa Cumhurbaşkanı seçilebilir. T.C. Anayasası'na göre yukarıdaki hükümde boş bırakılan yerlere sırasıyla hangileri getirilmelidir?",
secenekler: [" A) dört - bir" , "	B) dört - iki" , " C) beş - bir	" , "D) beş - iki" , " E) yedi - bir"],
dogruCevap: "D) beş - iki"},


{//433
metin: "  30. T.C. Anayasası'na göre Millî Güvenlik Kurulu ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Millî Güvenlik Kurulu; Cumhurbaşkanının başkanlığında, Cumhurbaşkanı yardımcıları, Adalet, Millî Savunma, İçişleri, Dışişleri Bakanları, Genelkurmay Başkanı, Kara, Deniz ve Hava kuvvetleri komutanlarından kurulur." , " B)	Millî Güvenlik Kurulu; Devletin millî güvenlik siyasetinin tayini, tespiti ve uygulanması ile ilgili alınan tavsiye kararları ve gerekli koordinasyonun sağlanması konusundaki görüşlerini Cumhurbaşkanına bildirir." , " C)	Millî Güvenlik Kurulunun gündemi; Cumhurbaşkanı yardımcıları ve Genelkurmay Başkanının önerileri dikkate alınarak Cumhurbaşkanınca düzenlenir." , " D)	Cumhurbaşkanı katılamadığı zamanlar Millî Güvenlik Kurulu Genelkurmay Başkanının başkanlığında toplanır." , "E)	Millî Güvenlik Kurulu Genel Sekreterliğinin teşkilatı ve görevleri Cumhurbaşkanlığı kararnamesiyle düzenlenir."],
dogruCevap: " D)	Cumhurbaşkanı katılamadığı zamanlar Millî Güvenlik Kurulu Genelkurmay Başkanının başkanlığında toplanır."},




{//434
metin: "  31. T.C. Anayasası'na göre Anayasa Mahkemesi ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Anayasa Mahkemesi on beş üyeden kurulur." , " B)	Anayasa Mahkemesi üyeleri on iki yıl için seçilirler." , " C)	Bir kimse en fazla iki defa Anayasa Mahkemesi üyesi seçilebilir." , " D)	Anayasa Mahkemesi üyeleri altmış beş yaşını doldurunca emekliye ayrılırlar." , " E)	Anayasa Mahkemesi üyeleri arasından gizli oyla ve üye tam sayısının salt çoğunluğu ile dört yıl için bir Başkan ve iki başkanvekili seçilir."],
dogruCevap: " C)	Bir kimse en fazla iki defa Anayasa Mahkemesi üyesi seçilebilir."},


{//435
metin: "  32. T.C. Anayasası'na göre Anayasa Mahkemesinde doğrudan doğruya iptal davası açma hakkı, iptali istenen kanun, Cumhurbaşkanlığı karama mesi veya içtüzüğün Resmî Gazetede yayımlanmasından başlayarak kaç gün sonra düşer?",
secenekler: [" A) On" , "	B) On beş" , "C) Otuz" , "D) Kırk beş" , " E) Altmış"],
dogruCevap: "E) Altmış"},


{//436
metin: "  33. Aşağıdakilerden hangisi Osmanlı Devleti'nin I. Dünya Savaşı'nda kendi toprakları dışında savaştığı cephelerdendir?",
secenekler: [" A) Suriye-Filistin " , " B) Irak" , " C) Makedonya" , "	D) Hicaz-Yemen" , " E) Kafkas"],
dogruCevap: " C) Makedonya"},


{//437
metin: "  34. Aşağıdaki cemiyetlerden hangisi Millî Mücadele Dönemi'nde Türkler aleyhine basın yayın yoluyla yapılan olumsuz propagandaları önlemek amacıyla faaliyet göstermiştir?",
secenekler: [" A)	Millî Kongre Cemiyeti" , " B)	Kilikyalılar Cemiyeti" , "  C)	İzmir Redd-i İlhak Cemiyeti" , " D)	Wilson Prensipleri Cemiyeti" , " E)	İngiliz Muhipleri Cemiyeti"],
dogruCevap: " A)	Millî Kongre Cemiyeti"},


{//438
metin: "  35. Lozan Barış Antlaşması ile Türkiye aşağıdaki dev letlerin hangisinden savaş tazminatı almıştır?",
secenekler: [" A) Ermenistan" , "	B) İngiltere" , " C) Bulgaristan" , " D) Fransa" , " E) Yunanistan"],
dogruCevap: "E) Yunanistan"},


{//439
metin: "  36. Aşağıdakilerden hangisi siyasi alanda yapılan inkılaplardandır?",
secenekler: [" A)	Hıfzıssıhha Müessesesinin kurulması" , " B)	Cumhuriyetin ilan edilmesi" , " C)	Türk Medeni Kanunu'nun kabulü" , " D)	Uluslararası ölçü birimlerine geçilmesi" , " E)	Türk Dil Kurumunun açılması"],
dogruCevap: "B)	Cumhuriyetin ilan edilmesi"},


{//440
metin: "  37. Aşağıdakilerden hangisi yerinden yönetimin yararlarından biridir?",
secenekler: [" A)	Bölgeler arasında eşitsizlikleri arttırabilir." , " B)	Yerinden yönetim kırtasiyecilik ve bürokrasiyi azaltır." , " C)	Yerel yönetimler partizanca uygulamalara yol açabilir." , " D)	Yerinden yönetim kuruluşlarının mali denetimleri güçtür." , " E)	Yerinden yönetim kuruluşları yeterli mali ve teknik imkânlara sahip değillerse hizmetin yürütülmesinde aksaklık doğabilir."],
dogruCevap: "B)	Yerinden yönetim kırtasiyecilik ve bürokrasiyi azaltır."},


{//441
metin: "  38. Aşağıda verilen hiyerarşi ile idari vesayet ara sındaki farklardan hangisi yanlıştır?	Hiyerarşi	İdari vesayet",
secenekler: [" A)	İstisnai bir yetkidir.	Genel bir yetkidir." , " B)	Kanun olmasa bile mevcut bir yetkidir.	Kanunla verilir." , " C)	Emir ve talimat verme yetkisi içerir.	Emir ve talimat verme yetkisi içermez." , " D)	Geniş yoruma tabi tutulur.	Dar yoruma tabi tutulur." , " E)	Tek ve aynı tüzel kişi içinde yer alan bir ilişkidir.	İki ayrı tüzel kişi arasında yer alan bir ilişkidir."],
dogruCevap: "A)	İstisnai bir yetkidir.	Genel bir yetkidir."},


{//442
metin: "  39. Cumhurbaşkanlığı Politika Kurullarının sekretarya hizmetleri aşağıdakilerden hangisi tarafından yerine getirilir?",
secenekler: [" A)	Cumhurbaşkanlığı İdari İşler Başkanlığı" , " B)	Cumhurbaşkanı Özel Kalem Müdürlüğü" , " C)	Cumhurbaşkanlığı Güvenlik İşleri Genel Müdürlüğü" , " D)	Cumhurbaşkanlığı Hukuk ve Mevzuat Genel Müdürlüğü" , " E)	Cumhurbaşkanlığı Personel ve Prensipler Genel Müdürlüğü"],
dogruCevap: "A)	Cumhurbaşkanlığı İdari İşler Başkanlığı"},




{//443
metin: "  40. Belediye başkanlığının herhangi bir nedenle boşalması durumunda, vali tarafından belediye meclisinin en geç kaç gün içinde toplanması sağlanır?",
secenekler: ["A) Üç" , "B) Beş" , "  C) On" , "  D) On beş" , " E) Yirmi"],
dogruCevap: "C) On"},


{//444
metin: "  41. 4721 sayılı Türk Medeni Kanunu'na göre kişilik ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Her insanın hak ehliyeti vardır." , " B)	Erginlik on sekiz yaşın doldurulmasıyla başlar." , " C)	Ayırt etme gücüne sahip ve kısıtlı olmayan her ergin kişinin fiil ehliyeti vardır." , " D)	Fiil ehliyetine sahip olan kimse, kendi fiilleriyle hak edinebilir ve borç altına girebilir." , " E)	On dört yaşını dolduran küçük, kendi isteği ve velisinin rızasıyla mahkemece ergin kılınabilir."],
dogruCevap: "E)	On dört yaşını dolduran küçük, kendi isteği ve velisinin rızasıyla mahkemece ergin kılınabilir."},


{//445
metin: "  42. 4721 sayılı Türk Medeni Kanunu'na göre fiil ehliyetsizliği ve hısımlık ile ilgili aşağıdakiler den hangisi yanlıştır?",
secenekler: [" A)	Ayırt etme gücü bulunmayanların, küçüklerin ve kısıtlıların fiil ehliyeti yoktur." , " B)	Ayırt etme gücüne sahip küçükler ve kısıtlılar haksız fiillerinden sorumludurlar." , " C)	Kan hısımlığının derecesi, hısımları birbirine bağlayan doğum sayısıyla belli olur." , " D)	Kayın hısımlığı, kendisini meydana getiren evliliğin sona ermesiyle ortadan kalkar." , " E)	Eşlerden biri ile diğer eşin kan hısımları, aynı tür ve dereceden kayın hısımları olur."],
dogruCevap: " D)	Kayın hısımlığı, kendisini meydana getiren evliliğin sona ermesiyle ortadan kalkar."},


{//446
metin: "   43. Gaiplik kararının istenebilmesi için, ölüm tehlikesinin üzerinden en az----veya son haber tarihinin üzerinden en az----geçmiş olması gerekir.4721 sayılı Türk Medeni Kanunu'na göre yukarıdaki hükümde boş bırakılan yerlere sırasıyla hangileri getirilmelidir?",
secenekler: [" A) altı ay - üç yıl" , " B) altı ay - beş yıl" , " C) dokuz ay - üç yıl" , " D) bir yıl - üç yıl" , " E) bir yıl - beş yıl"],
dogruCevap: "E) bir yıl - beş yıl"},


{//447
metin: "  44. 5237 sayılı Türk Ceza Kanunu'na göre işlediği suç nedeniyle hapis cezasına mahkûm edilen yabancı, koşullu salıverilmeden yararlandıktan ve her hâlde cezasının infazı tamamlandık tan sonra, durumu, sınır dışı işlemleriyle ilgili olarak değerlendirilmek üzere derhâl aşağıda-kilerden hangisine bildirilir?",
secenekler: [" A)	Adalet Bakanlığı" , " B)	Dışişleri Bakanlığı" , " C)	İçişleri Bakanlığı" , " D)	Cumhurbaşkanlığı" , " E)	Millî Savunma Bakanlığı"],
dogruCevap: " C)	İçişleri Bakanlığı"},


{//448
metin: "  45. 2577 sayılı İdari Yargılama Usulü Kanunu'na göre tebligat ve cevap verme ile ilgili aşağıda kilerden hangisi yanlıştır?",
secenekler: [" A)	Taraflar, tebliğden itibaren on beş gün içinde görüşlerini yazılı olarak bildirebilirler." , " B)	Davacının ikinci dilekçesi davalıya, davalının vereceği ikinci savunma da davacıya tebliğ edilir." , " C)	Taraflar, yapılacak tebliğlere karşı, tebliğ tarihinden itibaren otuz gün içinde cevap verebilirler." , " D)	Dava dilekçelerinin ve eklerinin birer örneği davalıya, davalının vereceği savunma davacıya tebliğ olunur." , " E)	Taraflar, sürenin geçmesinden sonra verecekleri savunmalara veya ikinci dilekçelere dayanarak hak iddia edemezler."],
dogruCevap: "A)	Taraflar, tebliğden itibaren on beş gün içinde görüşlerini yazılı olarak bildirebilirler."},


{//449
metin: "  46. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre süreler ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Resmî tatil günleri, süreye dâhildir." , " B)	Sürenin son gününün resmî tatil gününe rastlaması hâlinde, süre tatili takip eden ilk iş günü çalışma saati sonunda biter." , " C)	Süre; hafta, ay veya yıl olarak belirlenmiş ise başladığı güne son hafta, ay veya yıl içindeki karşılık gelen günün tatil saatinde biter." , " D)	Süreler gün olarak belirlenmiş ise tebliğ veya tefhim edildiği gün hesaba katılır ve süre son günün gün bitiminde biter." , " E)	Süreler, taraflara tebliğ tarihinden veya kanunda öngörülen hâllerde, tefhim tarihinden itibaren işlemeye başlar."],
dogruCevap: "D)	Süreler gün olarak belirlenmiş ise tebliğ veya tefhim edildiği gün hesaba katılır ve süre son günün gün bitiminde biter."},



{//450
metin: "  47. 5271 sayılı Ceza Muhakemesi Kanunu'na göre kovuşturmanın başlamasından itibaren hükmün kesinleşmesine kadar, suç şüphesi altında bulunan kişiyi ifade eder şeklinde aşa ğıdakilerden hangisi tanımlanmıştır?",
secenekler: [" A) Şüpheli" , " B) Sanık" , " C) Müdafi" , " D) Vekil" , " E) Kovuşturma"],
dogruCevap: " B) Sanık"},


{//451
metin: "  48. Adalet Bakanlığı Disiplin Yönetmeliği'ne göre Adalet Bakanlığı Disiplin Kurulu aşağıdakilerden hangisinin başkanlığında oluşur?",
secenekler: [" A)	Teftiş Kurulu Başkanı" , " B)	İcra İşleri Dairesi Başkanı" , " C)	Ceza İşleri Genel Müdürü" , " D)	Hukuk İşleri Genel Müdürü" , " E)	Adli Sicil ve İstatistik Genel Müdürü"],
dogruCevap: " D)	Hukuk İşleri Genel Müdürü"},


{//452
metin: "  49. 5271 sayılı Ceza Muhakemesi Kanunu'na göre Cumhuriyet savcısı veya mahkeme başkanı veya hâkim tarafından çağrılan tanığa, her yıl aşağıdakilerden hangisince hazırlanan tarifeye göre kaybettiği zaman ile orantılı bir tazminat verilir?",
secenekler: [" A)	Hazirıe ve Maliye Bakanlığı" , " B)	Cumhurbaşkanlığı" , " C)	Adalet Bakanlığı" , " D)	Ulaştırma ve Alt Yapı Bakanlığı" , " E)	Aile, Çalışma ve Sosyal Hizmetler Bakanlığı"],
dogruCevap: " C)	Adalet Bakanlığı"},


{//453
metin: "  50. 5271 sayılı Ceza Muhakemesi Kanunu'na göre elkonulan eşyanın muhafazası veya elden çıkarılması ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Elkonulan eşya, zarara uğraması veya değerinde esaslı ölçüde kayıp meydana gelme tehlikesinin varlığı hâlinde, hükmün kesinleşmesinden önce elden çıkarılabilir." , " B)	Elden çıkarma kararı, soruşturma evresinde mahkeme, kovuşturma evresinde hâkim tarafından verilir." , " C)	Karar verilmeden önce eşyanın sahibi olan şüpheli, sanık veya ilgili diğer kişiler dinlenir; elden çıkarma kararı, kendilerine bildirilir." , " D)	Elkonulan eşyanın değerinin muhafazası ve zarar görmemesi için gerekli tedbirler alınır." , " E)	Elkonulan eşya, delil olarak saklanmasına gerek kalmaması hâlinde, rayiç değerinin derhâl ödenmesi karşılığında, ilgiliye teslim edilebilir."],
dogruCevap: " B)	Elden çıkarma kararı, soruşturma evresinde mahkeme, kovuşturma evresinde hâkim tarafından verilir."},


{//454
metin: "  51. Karar veya hükümlerin kesinleştiğinin ilgilisine tebliğinden itibaren----ve her hâlde karar veya hükümlerin kesinleşme tarihini izleyen----içinde tazminat isteminde bulunulabilir. 5271 sayılı Ceza Muhakemesi Kanunu'na göre yukarıdaki hükümde boş bırakılan yerlere sırasıyla hangileri getirilmelidir?",
secenekler: ["A) üç ay - bir yıl" , "B) dört ay - iki yıl" , " C) altı ay - iki yıl" , " D) altı ay - üç yıl" , " E) bir yıl - üç yıl"],
dogruCevap: "A) üç ay - bir yıl"},


{//455
metin: "  52. 5271 sayılı Ceza Muhakemesi Kanunu'na göre kişi dışarı çıkarılması sırasında direnç gösterir veya karışıklıklara neden olursa yakalanır ve hâkim veya mahkeme tarafından, avukatlar hariç, verilecek bir kararla derhâl kaç güne kadar disiplin hapsine konulabilir?",
secenekler: [" A) Orı beş" , " B) Dokuz" , " C) Yedi" , " D) Beş" , " E) Dört"],
dogruCevap: "E) Dört"},


{//456
metin: "  53. 5271 sayılı Ceza Muhakemesi Kanunu'na göre uzlaştırma ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Uzlaşma teklifinde bulunulması veya teklifin kabul edilmesi, soruşturma konusu suça ilişkin delillerin toplanmasına ve koruma tedbirlerinin uygulanmasına engel değildir."," B)	Uzlaşma teklifinde bulunulması hâlinde, kişiye uzlaşmanın mahiyeti ve uzlaşmayı kabul veya reddetmesinin hukukî sonuçları anlatılır." , " C)	Bu Kanun'da belirlenen hâkimin davaya bakamayacağı hâller ile reddi sebepleri, uzlaştırmacı görevlendirilmesi ile ilgili olarak göz önünde bulundurulur." , " D)	Uzlaştırmanın sonuçsuz kalması hâlinde tekrar uzlaştırma yoluna gidilebilir." , " E)	Uzlaştırmacı, müzakereler sırasında izlenmesi gereken yöntemle ilgili olarak Cumhuriyet savcısıyla görüşebilir; Cumhuriyet savcısı, uzlaştırmacıya talimat verebilir."],
dogruCevap: " D)	Uzlaştırmanın sonuçsuz kalması hâlinde tekrar uzlaştırma yoluna gidilebilir."},


{//457
metin: "   54. 492 sayılı Harçlar Kanunu'na göre davadan feragat veya davayı kabul veya sulh, muhake menin ilk celsesinde vuku bulursa, karar ve ilam harcının ne kadarı alınır?",
secenekler: [" A) Üçte biri" , " B) Yarısı" , " C) Üçte ikisi" , " D) Beşte üçü" , " E) Tamamı"],
dogruCevap: "A) Üçte biri"},


{//458
metin: "  55. 492 sayılı Harçlar Kanunu'na göre nispi ve maktu harçlar, ihbarname esasına göre, ihbarnamenin tebliği tarihinden itibaren en geç ne kadar süre içinde ilgili vergi dairesine ödenir?",
secenekler: ["A) 15 gün" , "	B) 1 ay" , " C) 3 ay" , " D) 6 ay" , " E) 1 yıl"],
dogruCevap: "	B) 1 ay"},


{//459
metin: "  56. • Bölge adliye mahkemesinin her türlü alım, satım, hesap, maaş ve diğer ödemeler ile ilgili işlemlerini yapmak. • Bölge adliye mahkemesinde görev yapan şoför, teknisyen ve yardımcı hizmetler sınıfına giren personelin sevk ve idaresini sağlamak.  Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre yukarıda verilen görev ve sorumluluklar hangisine aittir?",
secenekler: [" A)	Yazı işleri müdürü " , "B)	Bilgi işlem müdürü" , "C)	İdarî işler müdürü " , "D)	Bilgi işlem şefi" , " E)	Mübaşir"],
dogruCevap: "C)	İdarî işler müdürü "},


{//460
metin: "  57. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre göreve başlayan ve ayrılan personele verilecek veya iptal edilecek yetkilerin denetim ve kontrolünü yapmak görev ve sorumluluğu aşağıdakilerden hangisine aittir?",
secenekler: ["A) İdarî işler müdürü " , "B) Mübaşir " , "C) Yazı işleri müdürü " , "D) Bilgi işlem şefi " , "E) Bilgi işlem müdürü"],
dogruCevap: "E) Bilgi işlem müdürü"},
{//461
metin: "  58. • Zimmet kartonu •	Değişik işler kartonu •	Duruşma listesi kartonu•	Posta gönderileri kartonu •	Ön inceleme değerlendirme kartonu  Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre yukarıda verilen kartonlardan kaç tanesinin fiziki olarak da tutulması gerekir?",
secenekler: [" A) 5 " , "B) 4" , " C) 3" , " D) 2" , " E) 1"],
dogruCevap: "D) 2"},







{//462
metin: "  59. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelice göre Bölge Adliye Mahkemesi Adalet Komisyonu yazı işleri müdürlüğünde bölge adliye mahkemesinde görev yapan başkan, daire başkanlan ve üyelerin göreve ilişkin gizli olmayan kişisel ve mesleki bilgilerinin tutulmasının zorunlu olduğu kayıt aşağıdakilerden hangisidir?",
secenekler: [" A)	Özlük kaydı" , " B)	Dava işleri kaydı" , " C)	Hâkim bilgi kaydı" , " D)	Personel nöbet kaydı" , " E)	Komisyon gündem kaydı"],
dogruCevap: "C)	Hâkim bilgi kaydı"},


{//463
metin: "  60. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre Adlî Yargı İlk Derece Mahkemesi Adalet Komisyonunun oluşumu ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Başkanın yokluğunda komisyona asıl üye başkanlık eder." , " B)	Komisyonda, bir yazı işleri müdürü ile yeteri kadar personelden oluşan büro bulunur." , " C)	Asıl üyenin komisyona başkanlık etmesi veya yokluğunda yedek üye, Cumhuriyet başsavcısının yokluğunda ise kendisine vekâlet eden Cumhuriyet savcısı komisyona katılır." , " D)	Asıl ve yedek üyelerin yoklukları hâlinde, birinci sınıfa ayrılma incelemesine tâbi tutulup da ayrılamayanlar hariç, en kıdemli hâkimden başlayarak komisyon oluşturulur." , " E)	Komisyon, ağır ceza mahkemelerinin bulunduğu yerlerde; başkanı, bir asıl ve bir yedek üyesi Adalet Bakanı tarafından belirlenecek hâkimler ile o yer Cumhuriyet başsavcısından oluşur."],
dogruCevap: "E)	Komisyon, ağır ceza mahkemelerinin bulunduğu yerlerde; başkanı, bir asıl ve bir yedek üyesi Adalet Bakanı tarafından belirlenecek hâkimler ile o yer Cumhuriyet başsavcısından oluşur."},


{//464
metin: "  61. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre bölge idare mahkemeleri, idare mahkemeleri ve vergi mahkemelerinin idarî işleriyle, yazı işleri hizmetlerinin yürütülmesine dair genel esaslar ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Başkanlar kurulu yazı işleri hizmetleri başkanın denetimi altında, başkanlık yazı işleri müdürü ve onun yönetimindeki memur ve diğer görevliler tarafından yürütülür." , " B)	Bölge idare mahkemesi başkanlığında, dairelerinde ve adalet komisyonunda yeterli sayıda idarî işler müdürlüğü ile ihtiyaç duyulan diğer müdürlükler kurulur." , " C)	Yazı işleri ve idarî işler müdürü, yerine getirmekle yükümlü olduğu görevleri müdürlükte görevli personele devredebilir." , " D)	Yazı işleri hizmetleri başkanın denetimi altında, ilgili yazı işleri müdürü ve onun yönetiminde zabıt kâtibi, memur, mübaşir, hizmetli ve diğer görevliler tarafından yürütülür." , " E)	Bölge idare mahkemesi başkanlığında, dairelerinde, adalet komisyonunda ve mahkemelerde bir yazı işleri müdürü, yeterli sayıda zabıt kâtibi, memur, mübaşir, hizmetli ve diğer görevliler bulunur."],
dogruCevap: "C)	Yazı işleri ve idarî işler müdürü, yerine getirmekle yükümlü olduğu görevleri müdürlükte görevli personele devredebilir."},


{//465
metin: "  62. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre daireler ve mahkemelerde davaların aşamalarının işlendiği kayıt türü aşağıdakilerden hangisidir?",
secenekler: [" A) Esas	" , "B) Talimat" , " C) Karar	" , "D) İstinaf" , " E) Temyiz"],
dogruCevap: "A) Esas	"},


{//466
metin: "  63. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre dava dilekçesinin esas kaydına işlenmesi ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Dava dilekçesi, ön büro veya tevzi işiyle görevlendirilen yazı işleri personeline teslim edilir." , " B)	Dava dilekçesi, dava harca tabi ise harç ve posta ücreti, harca tabi değilse posta ücreti tahsil edildikten sonra tevzi edilir ve tevzi formunun bir örneği başvuru sahibine verilir." , " C)	Dava, dava dilekçesinin harç ve posta ücreti yatırılarak UYAP'a kaydedildiği tarihte açılmış sayılır." , " D)	Herhangi bir nedenle harcı veya posta ücreti verilmeden veya eksik harç veya posta ücreti ile dava açılmış olduğu tespit edilince dava iptal edilir." , " E)	Tevzi işlemi tamamlandığında, dosya hangi mahkemeye gönderilmiş ise o mahkemenin esas kaydından numara alır ve sistem tarafından aynı anda tevzi formu düzenlenir."],
dogruCevap: "D)	Herhangi bir nedenle harcı veya posta ücreti verilmeden veya eksik harç veya posta ücreti ile dava açılmış olduğu tespit edilince dava iptal edilir."},


{//467
metin: "  64. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre başka bir mahkemeden görevsizlik veya yetkisizlik kararıyla gönderilen dava dosyaları, derhâl aşağıdakilerden hangisine işlenir?",
secenekler: [" A)	Esas kaydı" , "B)	İstinaf kaydı" , "C)	Temyiz kaydı" , " D)	Yürütmeyi durdurma itiraz kaydı" , " E)	Uyuşmazlığın giderilmesi başvuru kaydı"],
dogruCevap: "A)	Esas kaydı"},


{//468
metin: "  65. Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin İdari İşler ile Yazı İşleri Hizmetlerinin Yürütülmesi Usul ve Esaslarına İlişkin Yönetmelik'e göre dosyaların incelenmesi ve örnek alma ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Taraf vekilleri UYAP Avukat Bilgi Sistemi vasıtasıyla dava dosyalarını inceleyebilir ve örnek alabilirler." , " B)	Avukatlar ve stajyerler, vekâletname olmaksızın dava dosyalarını zabıt kâtibinin gözetiminde her zaman inceleyebilirler." , " C)	İncelemenin yapıldığına dair düzenlenen dosya inceleme tutanağı avukat veya avukat stajyeri ile zabıt kâtibi tarafından imzalanarak dosyasında saklanır." , " D)	Taraflar dava dosyasını yazı işleri müdürünün gözetimi altında inceleyebilir." , " E)	Taraflar güvenli elektronik imza sahibi olmak koşuluyla UYAP Vatandaş veya Kurum Bilgi Sistemi vasıtasıyla tarafı oldukları dava ve işlere ait tüm evrakı inceleyebilir ve örnek alabilirler."],
dogruCevap: "D)	Taraflar dava dosyasını yazı işleri müdürünün gözetimi altında inceleyebilir."},



{//469
metin: "  66. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre yetki itirazının ileri sürülmesi ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Mahkeme, yetkisizlik kararında yetkili mahkemeyi de gösterir." , " B)	Yetki itirazında bulunan taraf, yetkili mahkemeyi bildirmek zorunda değildir." , " C)	Yetkinin kesin olmadığı davalarda, yetki itirazının, cevap dilekçesinde ileri sürülmesi gerekir." , " D)	Yetkinin kesin olduğu davalarda, mahkeme yetkili olup olmadığını, davanın sonuna kadar kendiliğinden araştırmak zorundadır." , " E)	Yetkinin kesin olmadığı davalarda, davalı, süresi içinde ve usulüne uygun olarak yetki itirazında bulunmazsa, davanın açıldığı mahkeme yetkili hâle gelir."],
dogruCevap: "B)	Yetki itirazında bulunan taraf, yetkili mahkemeyi bildirmek zorunda değildir."},





{//470
metin: "  67. 6100 sayılı Hukuk Muhakemeleri Kanunu'na  göre davaya vekâlet ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: ["A)	Dava ehliyeti bulunan herkes, davasını kendisi veya tayin ettiği vekil aracılığıyla açabilir ve takip edebilir." , " B)	Vekâletnamesinin aslını veya onaylı örneğini vermeyen avukat, dava açamaz ve yargılamayla ilgili hiçbir işlem yapamaz." , " C)	Dava için birden fazla vekil görevlendirilmiş ise vekillerden her biri, vekâletten kaynaklanan yetkileri, diğerinden bağımsız olarak kullanabilir." , " D)	Hâkim, taraflardan birisinin, davasını bizzat takip edecek yeterlikte olmadığını görürse, ona uygun bir süre tanıyarak, davasını vekil aracılığıyla takip etmesine karar verebilir." , " E)	Kamu kurum ve kuruluşlarının avukatlarına, yetkili amirleri tarafından usulüne uygun olarak düzenlenip verilmiş olan temsil belgelerinin geçerli olabilmesi için noterce onaylanması gerekir."],
dogruCevap: "E)	Kamu kurum ve kuruluşlarının avukatlarına, yetkili amirleri tarafından usulüne uygun olarak düzenlenip verilmiş olan temsil belgelerinin geçerli olabilmesi için noterce onaylanması gerekir."},



{//471
metin: "  68. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre adli tatile tabi olan dava ve işlerde, bu Kanun'un tayin ettiği sürelerin bitmesi tatil zamanına rastlarsa, bu süreler ayrıca bir kara ra gerek olmaksızın adli tatilin bittiği günden itibaren ne kadar süre uzatılmış sayılır?",
secenekler: [" A) Bir hafta" , " B) On gün" , " C) İki Hafta" , " D) Yirmi gün" , " E) Bir ay"],
dogruCevap: "A) Bir hafta"},


{//472
metin: "  69. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre davanın açılması ile ilgili dava dilekçesinde aşağıdaki hususlardan hangisinin eksikliği durumunda hâkim davacıya eksikliği tamamlaması için bir haftalık kesin süre verir?",
secenekler: [" A)	Mahkemenin adı" , " B)	Dayanılan hukuki sebepler" , " C)	Varsa tarafların kanuni temsilcilerinin ve davacı vekilinin adı, soyadı ve adresleri" , " D)	Davanın konusu ve malvarlığı haklarına ilişkin davalarda, dava konusunun değeri " , "E)	Davacının iddiasının dayanağı olan bütün vakıaların sıra numarası altında açık özetleri"],
dogruCevap: "C)	Varsa tarafların kanuni temsilcilerinin ve davacı vekilinin adı, soyadı ve adresleri"},





{//473
metin: "  70. Davacı, cevap dilekçesinin kendisine tebliğinden  itibaren----içinde cevaba cevap dilekçesi; davalı da davacının cevabının kendisine tebliğinden itibaren----içinde ikinci cevap dilekçesi verebilir. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre yukarıdaki hükümde boş bırakılan yerlere sırasıyla hangileri getirilmelidir?",
secenekler: [" A)	bir hafta - üç hafta" , " B)	iki hafta - iki hafta" , " C)	üç hafta - üç hafta" , " D)	on beş gün - bir ay" , " E)	bir ay - bir ay"],
dogruCevap: "B)	iki hafta - iki hafta"},


{//474
metin: "  71. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre davaya son veren taraf işlemleri ile ilgiliaşağıdakilerden hangisi yanlıştır?",
secenekler: ["A)	Feragat, davacının, talep sonucundan kısmen veya tamamen vazgeçmesidir." , "B)	Feragat ve kabul, kesin hüküm gibi hukuki sonuç doğurur." , "C)	Feragat ve kabul, dilekçeyle veya yargılama sırasında sözlü olarak yapılır." , " D)	Kısmi feragat veya kabul yapılamaz." , " E)	Kabul, davacının talep sonucuna, davalının kısmen veya tamamen muvafakat etmesidir."],
dogruCevap: "D)	Kısmi feragat veya kabul yapılamaz."},


{//475
metin: "  72. Hapis cezasının infazı, gebe olan veya doğurduğu tarihten itibaren----yıl----ay geçmemiş bulunan kadınlar hakkında geri bırakılır. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre yukarıdaki hükümde boş bırakılan yerlere sırasıyla hangileri getirilmelidir?",
secenekler: [" A) beş - dokuz" , " B) üç - altı" , " C) üç - üç" , " D) bir - dokuz" , " E) bir - altı"],
dogruCevap: "E) bir - altı"},


{//476
metin: "  73.I.	Erteleme, her defasında iki yılı geçmemek üzere en fazla üç kez uygulanabilir.  II.	Erteleme isteminin kabulü, güvence gösterilmesine veya diğer bir şarta bağlanabilir. III.	Erteleme süresi içinde, hükümlü hakkında kasten işlenen bir suçtan dolayı kamu davası açılması hâlinde, erteleme kararı kaldırılarak ceza derhal infaz olunur. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre hükümlünün istemiyle infazın ertelenmesi ile ilgili yukarıda verilenler doğru yanlış olarak değerlendirildiğinde sıralama nasıl olur?",
secenekler: [" A)" , "B)" , "C)" , "D)" , "E)"],
dogruCevap: "C)"},


{//477
metin: "  74. 5275 sayılı Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun'a göre adlî para cezasının infazı ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Çocuklar hakkında hükmedilen adlî para cezasının ödenmemesi hâlinde, bu ceza hapse çevrilemez." , " B)	Adlî para cezası yerine çektirilen hapis süresi iki yılı geçemez. Birden fazla hükümle adlî para cezalarına mahkûmiyet hâlinde bu süre üç yılı geçemez." , " C)	Hükümlü, hapis yattığı veya kamuya yararlı işte çalıştığı günlerin dışındaki günlere karşılık gelen parayı öderse hapisten çıkartılır veya kamuya yararlı işte çalıştırılma sona erer." , " D)	İnfaz edilen hapsin veya kamuya yararlı işte çalışmanın süresi, adlî para cezasını tamamıyla karşılamamış olursa, geri kalan adlî para cezasının tahsili için ilâm, Cumhuriyet Başsavcılığınca mahallin en büyük mal memuruna verilir." , " E)	Hükümde, adlî para cezası takside bağlanmamış ise, bir aylık süre içinde adlî para cezasının üçte birini ödeyen hükümlünün isteği üzerine geri kalan kısmının birer ay ara ile iki eşit taksitte ödenmesine izin verilir."],
dogruCevap: "B)	Adlî para cezası yerine çektirilen hapis süresi iki yılı geçemez. Birden fazla hükümle adlî para cezalarına mahkûmiyet hâlinde bu süre üç yılı geçemez."},


{//478
metin: "  75. Cumhurbaşkanlığı Teşkilatı Hakkında Cumhurbaşkanlığı 1 Numaralı Kararnamesi'ne göre aşağıdakilerden hangisi Adalet Bakanlı ğının hizmet birimlerinden biri değildir?",
secenekler: [" A)	Ceza ve Tevkifevleri Genel Müdürlüğü" , " B)	Hukuk İşleri Genel Müdürlüğü" , " C)	Andlaşmalar Genel Müdürlüğü" , "D)	Bilgi İşlem Genel Müdürlüğü " , " E)	Mevzuat Genel Müdürlüğü"],
dogruCevap: "C)	Andlaşmalar Genel Müdürlüğü"},



{//479
metin: "  76. Cumhurbaşkanlığı Teşkilatı Hakkında Cumhurbaşkanlığı 1 Numaralı Kararnamesi'ne göre aşağıdakilerden hangisi Adalet Bakanlığı Ceza İşleri Genel Müdürlüğünün görev ve yetkilerindendir?",
secenekler: [" A)	Kanun yararına temyiz yoluna başvurulması işlemlerini yürütmek" , " B)	Adlî konulara ilişkin kanunlarla ilgili inceleme ve araştırma yapmak, önerilerde bulunmak" , "C)	Görev alanına giren konularda velayet ve vesayetin kaldırılması ve küçüklere vasi tayinine dair işlemleri takip etmek" , " D)	Yurtdışında işlenen ve Türk yargı yetkisine giren suçlar konusunda adli makamlara bilgi ve belge sağlanmasına yardımcı olmak" , " E)	Ceza muhakemesinde ön ödeme, uzlaştırma ve kamu davasının açılmasının ertelenmesi gibi alternatif uyuşmazlık çözüm usullerinin geliştirilmesi ve etkin şekilde uygulanmasını sağlamak"],
dogruCevap: "E)	Ceza muhakemesinde ön ödeme, uzlaştırma ve kamu davasının açılmasının ertelenmesi gibi alternatif uyuşmazlık çözüm usullerinin geliştirilmesi ve etkin şekilde uygulanmasını sağlamak"},


{//480
metin: "  77. Cumhurbaşkanlığı Teşkilatı Hakkında Cumhurbaşkanlığı 1 Numaralı Kararnamesi'ne göre Bakanlığın görev ve yetkisine giren konularla ilgili istatistiki bilgilerin belirlenmesi, toplanması, sınıflandırılması ve değerlendirilmesi ile ilgili hizmetleri yürütmek Adalet Bakanlığının hangi hizmet birimine ait görev ve yetkilerdendir?",
secenekler: [" A)	Teftiş Kurulu Başkanlığı " , "B)	Eğitim Dairesi Başkanlığı" , " C)	Personel Genel Müdürlüğü" , " D)	Bilgi İşlem Genel Müdürlüğü" , " E)	Adli Sicil ve İstatistik Genel Müdürlüğü"],
dogruCevap: "E)	Adli Sicil ve İstatistik Genel Müdürlüğü"},


{//481
metin: "  78. 25/1 sayılı Adalet Bakanlığı Ceza İşleri Genel Müdürlüğü Resmi Yazışmalar Konulu Genelgesi'ne göre dikkat ve özen gösterilmesi istenilenlerle ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Özellikle derkenar ile evrakın havale edilmesi" , " B)	Yazışmalarda yarım kâğıt kullanılmayıp A4 kâğıt kullanılması" , " C)	Yazı gereğinin tekide mahal bırakılmaksızın süratle yerine getirilmesi" , " D)	Türkiye Büyük Millet Meclisi ile uluslararası kurum ve kuruluşlarla yapılacak olan ve soruşturma kapsamı dışında kalan yazışmaların, Adalet Bakanlığı aracı kılınmak suretiyle yerine getirilmesi" , " E)	Yürütülen soruşturmalar dolayısıyla diğer bakanlıklarca yapılacak olan yazışmaların Adalet Bakanlığı aracı kılınmaksızın ağır ceza Cumhuriyet başsavcıları aracılığıyla ilgili yönetmelik hükümlerine uygun olarak yapılması"],
dogruCevap: "A)	Özellikle derkenar ile evrakın havale edilmesi" },


{//482
metin: "  79. 154/1 sayılı Adalet Bakanlığı Ceza İşleri Genel Müdürlüğü Ailenin Korunması ve Kadına Karşı Şiddetin Önlenmesine Dair Kanunun Uygulanması Konulu Genelgesi'ne göre aşağıdakiler-den hangisi yanlıştır?",
secenekler: [" A)	Aile ve aile bireylerinin korunmalarına yönelik düzenlemelere hem ulusal hem de uluslararası metinlerde yer verilmiştir." , " B)	İlgili kanunda aile bireylerinin ve tek taraflı ısrarlı takip mağduru olan kişilerin korunması ile bu kişilere yönelik şiddetin önlenmesi amacıyla alınacak tedbirlere ilişkin usul ve esaslar belirlenmiştir." , "C)	Cumhuriyet başsavcılıklarına yapılan şikâyet başvurularında gerekli soruşturma işlemlerinin ikmali için müracaat evrakının doğrudan kolluğa havalesi istenmiştir." , " D)	Kural olarak gizli olan soruşturma evresiyle ilgili ifade, tutanak, belge, ses ve video kaydı gibi delillerin internet ve sosyal medya gibi platformlarda paylaşılmasının önüne geçilmesi istenmiştir." , " E)	Hâkim tarafından verilen önleyici tedbir kararlarının tefhim veya tebliğ edilmemesi kararın uygulanmasına engel teşkil etmeyeceğinden, kararın infaz edecek birime teslim edildiği tarihte infazına başlanması istenmiştir."],
dogruCevap: "C)	Cumhuriyet başsavcılıklarına yapılan şikâyet başvurularında gerekli soruşturma işlemlerinin ikmali için müracaat evrakının doğrudan kolluğa havalesi istenmiştir."},


{//483
metin: "  80. 124/1 sayılı Adalet Bakanlığı Bilgi İşlem Dairesi Başkanlığı UYAP Uygulamaları Konulu Genelgesi'ne göre UYAP Bilişim Sistemi kullanılarak soruşturma ve kovuşturma işlemleri ile diğer adlî ve idarî işlemlerin etkin, verimli, hızlı, düzenli, şeffaf ve usul ekonomisine uygun biçimde yürütülmesi amacıyla istenenlerle ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	UYAP üzerinde iş listelerinin kontrol edilerek teraküme sebebiyet verilmemesi" , " B)	UYAP üzerinden sağlanan, nüfus, adres, tapu, sabıka kaydı, yurt dışı adres bilgisi gibi, bilgi ve belgelerin temini için ayrıca fizikî yazışma yapılması" , "C)	Güvenli elektronik imza ile imzalanarak UYAP üzerinden gönderilen belgelerin ayrıca elle atılan imza ile imzalanmış aslının istenmemesi" , " D)	UYAP'ın geliştirilmesi ve uygulama birliğinin sağlanması açısından öneri ve değişiklik taleplerinin UYAP birim sorumluları vasıtasıyla Adalet Bakanlığı Bilgi İşlem Dairesi başkanlığına bildirilmesi" , " E)	Her türlü bilirkişilik işlemlerinin, UYAP Bilirkişi Bilgi Sistemi üzerinden yapılması"],
dogruCevap: " B)	UYAP üzerinden sağlanan, nüfus, adres, tapu, sabıka kaydı, yurt dışı adres bilgisi gibi, bilgi ve belgelerin temini için ayrıca fizikî yazışma yapılması"},




{//484
metin: "  81. İlgili yıla ilişkin faaliyet raporları, Komisyonlar tarafından izleyen yılın----günü itibarıyla yayımlanır ve adliye internet sitesinden kamuoyuna duyurulur. 168 sayılı Adalet Bakanlığı Strateji Geliştirme Başkanlığı Adli ve İdari Yargı Faaliyet Raporları Konulu Genelgesi' ne göre yukarıdaki hükümde boş bırakılan yere hangisi getirilmelidir?",
secenekler: [" A) 31 Mart	" , "B) 31 Mayıs" , " C) 31 Temmuz" , " D) 31 Ağustos3 E) 31 Aralık"],
dogruCevap: "A) 31 Mart	"},



{//485 *
metin: "  82. 128/1 sayılı Adalet Bakanlığı İdari ve Mali İşleri Dairesi Başkanlığı Arşiv Hizmetleri Konulu Genelgesi'ne göre merkezdeki birimler için evrak kayıt defterleri kurum arşivinde kaç yıl aklanır?",
secenekler: [" A) 5 " , "B) 10" , " C) 15" , " D) 20" , " E) 25"],
dogruCevap: "E) 25"},

{// 486
metin: "  84. 2576 sayılı Bölge İdare Mahkemeleri, İdare Mahkemeleri ve Vergi Mahkemelerinin Kuruluşu ve Görevleri Hakkında Kanun'a göre aşağıdakilerden hangisi bölge idare mahkemeleri, idare mahkemeleri ve vergi mahkemelerinin kuruluş ve yargı çevrelerinin tespitinde görüşü alınanlardan biridir?",
secenekler: [" A)	İçişleri Bakanlığı" , " B)	Adalet Bakanlığı" , " C)	Dışişleri Bakanlığı" , " D)	Cumhurbaşkanlığı" , " E)	Hâkimler ve Savcılar Kurulu"],
dogruCevap: "A)	İçişleri Bakanlığı"},




{//487
metin: "  85. 5235 sayılı Adlî Yargı ilk Derece Mahkemeleri ile Bölge Adliye Mahkemelerinin Kuruluş, Görev ve Yetkileri Hakkında Kanun'a göre hukuk mahkemeleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Özel kanunlarda başkaca hüküm bulunmadığı takdirde, ihtisaslaşmanın sağlanması amacıyla, gelen işlerin yoğunluğu ve niteliği dikkate alınarak, daireler arasındaki iş dağılımı Hâkimler ve Savcılar Kurulu tarafından belirlenebilir." , " B)	İş durumunun gerekli kıldığı yerlerde hukuk mahkemelerinin birden fazla dairesi oluşturulabilir." , " C)	Sulh hukuk ve asliye hukuk mahkemeleri çift hâkimlidir." , " D)	Hukuk mahkemeleri bulundukları il veya ilçenin adı ile anılır." , " E)	Daireler, tevzi edilen davalara bakmak zorundadır."],
dogruCevap: "C)	Sulh hukuk ve asliye hukuk mahkemeleri çift hâkimlidir."},



{//488
metin: "  86. 2802 sayılı Hâkimler ve Savcılar Kanunu'na göre atamaları doğrudan Bakanlıkça yapılan lar dışındaki adlî ve idarî yargı ile ceza infaz kurumları ve tutukevleri personelinin geçici olarak görevlendirmesini, yetki alanı içerisin de kaç ayı geçmemek üzere yapmak Adalet Komisyonlarının görevlerindendir?",
secenekler: [" A) Üç" , "B) Altı" , " C) Dokuz" , " D) On iki" , " E) On beş"],
dogruCevap: "B) Altı"},



{//489
metin: "  87. 5070 sayılı Elektronik İmza Kanunu'na göre aşağıdakilerden hangisi imza doğrulama veri sinin tanımıdır?",
secenekler: [" A)	Elektronik imza oluşturmak üzere, imza oluşturma verisini kullanan yazılım veya donanım aracını ifade eder." , " B)	Başka bir elektronik veriye eklenen veya elektronik veriyle mantıksal bağlantısı bulunan ve kimlik doğrulama amacıyla kullanılan elektronik veriyi ifade eder." , " C)	Elektronik imzayı doğrulamak amacıyla imza doğrulama verisini kullanan yazılım veya donanım aracını ifade eder." , " D)	Elektronik imzayı doğrulamak için kullanılan şifreler, kriptografik açık anahtarlar gibi verileri ifade eder." , " E)	İmza sahibinin imza doğrulama verisini ve kimlik bilgilerini birbirine bağlayan elektronik kaydı ifade eder."],
dogruCevap: "D)	Elektronik imzayı doğrulamak için kullanılan şifreler, kriptografik açık anahtarlar gibi verileri ifade eder."},






{//490
metin: "  88. 6100 sayılı Hukuk Muhakemeleri Kanunu'na göre aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Elektronik ortamda yapılan işlemlerde süre gün sonunda biter." , " B)	Elektronik ortamda, güvenli elektronik imza kullanılarak dava açılamaz." , " C)	Bu Kanun kapsamında fizikî olarak hazırlanması öngörülen tutanak ve belgeler güvenli elektronik imzayla elektronik ortamda hazırlanabilir ve gönderilebilir." , " D)	Güvenli elektronik imza ile oluşturulan tutanak ve belgeler ayrıca fizikî olarak gönderilmez, belge örneği aranmaz." , " E)	Mahkemelerde görülmekte olan dava, çekişmesiz yargı, geçici hukuki koruma ve diğer tüm işlemlerde UYAP'ın kullanılmasına dair usul ve esaslar yönetmelikle düzenlenir."],
dogruCevap: "B)	Elektronik ortamda, güvenli elektronik imza kullanılarak dava açılamaz."},





{//491
metin: "  89.I.	Ceza muhakemesi işlemlerinin UYAP'ta yapılmasına dair usul ve esaslar, Adalet Bakanlığı tarafından çıkarılacak yönetmelikle düzenlenir. II.	Elektronik imzalı belgenin elle atılan imzalı belgeyle çelişmesi hâlinde UYAP'ta kayıtlı olan güvenli elektronik imzalı belge geçerli kabul edilir. III.	Her türlü ceza muhakemesi işlemlerinde Ulusal Yargı Ağı Bilişim Sistemi (UYAP) kullanılır. 5271 sayılı Ceza Muhakemesi Kanunu'na göre yukarıdaki tabloda verilenler doğru yanlış olarak değerlendirildiğinde sıralama nasıl olur? 	I.	II.	III.",
secenekler: ["A)	Yanlış	Doğru	Yanlış" , " B)	Doğru	Yanlış	Doğru" , " C)	Doğru	Doğru	Doğru" , " D)	Yanlış	Doğru	Doğru" , "E)	Doğru	Doğru	Yanlış"],
dogruCevap: "C)	Doğru	Doğru	Doğru"},





{//492
metin: "  90. Bölge Adliye ve Adlî Yargı İlk Derece Mahkemeleri ile Cumhuriyet Başsavcılıkları İdarî ve Yazı İşleri Hizmetlerinin Yürütülmesine Dair Yönetmelik'e göre UYAP'ın kullanılması ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	UYAP'tan dış bilişim sistemlerine gönderilen bilgi ve belgeler hiçbir şekilde fizikî ortamda gönderilemez." , " B)	Elektronik ortamda düzenlenen ve güvenli elektronik imza ile imzalanan evrak UYAP kapsamındaki birimlere elektronik ortamda gönderilir. Ayrıca fizikî olarak gönderilmez." , " C)	Güvenli elektronik imza ile imzalanan belge ve kararlarda, mühürleme işlemi ile kanunlarda birden fazla nüshanın düzenlenmesini öngören hükümler uygulanmaz." , " D)	Kanunlarda gösterilen istisnalar hariç olmak üzere, dosyalar güvenli elektronik imza kullanılarak UYAP'ta incelenebilir ve her türlü muhakeme işlemi yapılabilir." , " E)	UYAP kullanıcıları iş listesini günlük olarak kontrol etmek, işlemlerin gereğini yerine getirmek, ihtiyaç duyulan alanlarda veri ve bilgilerin derlenmesi, değerlendirilmesi ile gerekli adlî istatistiklerin üretilmesine esas bilgileri güvenilirlik, tutarlılık ve güncellik ilkelerine uygun olarak UYAP ortamına doğru, eksiksiz ve zamanında girmekle yükümlüdür."],
dogruCevap: "A)	UYAP'tan dış bilişim sistemlerine gönderilen bilgi ve belgeler hiçbir şekilde fizikî ortamda gönderilemez."},





{//493
metin: "  91. Ceza Muhakemesinde Ses ve Görüntü Bilişim Sisteminin Kullanılması Hakkında Yönetmelik'e göre aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	İlgililere görüntü ve ses kaydının yapılacağı konusunda bilgi verilir." , " B)	Mağdur çocukların tanıklığında soruşturma ve kovuşturma işleminin SEGBİS ile kaydının alınması zorunludur." , " C)	Dinleme sırasında dinlenecek kişinin bulunduğu yerde Cumhuriyet savcısı veya hâkimin hazır bulunması, talep eden makamın isteğine bağlıdır." , " D)	SEGBİS ile adli yardımlaşma talepleri sesli ve görüntülü iletişim tekniğinin uygulanması talebi örneği doldurularak Bakanlık aracılığıyla gerçekleştirilir." , " E)	Soruşturma ve kovuşturma aşamasında talep eden makam tarafından kabul edilen mazeretleri nedeniyle hazır bulunamayan kişi SEGBİS ile dinlenebilir fakat SEGBİS üzerinden duruşmalara katılamaz."],
dogruCevap: "E)	Soruşturma ve kovuşturma aşamasında talep eden makam tarafından kabul edilen mazeretleri nedeniyle hazır bulunamayan kişi SEGBİS ile dinlenebilir fakat SEGBİS üzerinden duruşmalara katılamaz."},



{//494
metin: "  92. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre aşağıdaki-lerden hangisinde formatın tanımı verilmiştir?",
secenekler: [" A)	Biçimli belgeyi ifade eder." , " B)	Elektronik dosya türlerini ifade eder." , " C)	Kâğıt ortamında yapılan işlemleri ifade eder." , " D)	Belgenin hazırlanmasından tasfiyesine kadar olan sürecini ifade eder." , " E)	İlgili mevzuattaki özel hükümlere göre belgenin fiziksel ortamda hazırlanması gereken hâlleri ifade eder."],
dogruCevap: "B)	Elektronik dosya türlerini ifade eder."},



{//495
metin: "  93. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre zorunlu hâllerde veya olağanüstü durumlarda hazırlanacak belgeler, paraflı nüshası hazırlayan ida rede kalacak şekilde en az kaç nüsha olarak düzenlenir?",
secenekler: [" A) Bir " , "B) İki " , "C) Üç " , "D) Dört" , " E) Beş"],
dogruCevap: "B) İki "},



{//496
metin: "  94. Belgenin yazı alanı sayfanın üst, sol ve sağ kenarından ----cm boşluk bırakılarak düzenlenir. İdare, logo kullanmak istediğinde sayfanın üst boşluğu----cm olarak düzenlenir. Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik'e göre yukarıdaki hükümde boş bırakılan yerlere sırasıyla hangileri getirilmelidir?",
secenekler: [" A) 1,5-0,5" , " B)1 -0,5" , " C)1 -1" , " D) 1,5-1" , " E) 0,5 -1"],
dogruCevap: "A) 1,5-0,5"},



{//497
metin: "  95. 7201 sayılı Tebligat Kanunu'na göre elektronik yolla tebligat, muhatabın elektronik adresine ulaştığı tarihi izleyen kaçıncı günün sonunda yapılmış sayılır?",
secenekler: [" A) Bir " , "B) İki" , " C) Üç" , " D) Dört" , " E) Beş"],
dogruCevap: "E) Beş"},




{//498
metin: "  96. Tebliğin konusu ile hangi merci tarafından çıkarıldığı bilgilerinin yer aldığı ve----gün içinde başvurulmadığı takdirde tebliğin yapılmış sayılacağı ihtarını içeren bildirim, muhataba o ülkenin mevzuatının izin verdiği yöntemle gönderilir. 7201 sayılı Tebligat Kanunu'na göre siyasî temsilcilik aracılığıyla yabancı ülkedeki Türk vatandaşlarına tebligat ile ilgili yukarıdaki hükümde boş bırakılan yere hangisi getirilmelidir?",
secenekler: [" A) On" , " B) On beş " , " C) Yirmi" , " D) Otuz" , " E) Kırk beş"],
dogruCevap: "D) Otuz"},

{//499
metin: "  97. 7201 sayılı Tebligat Kanunu'na göre ilan şekli ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	İkinci ilan, yabancı memleket gazeteleriyle de yaptırılabilir." , " B)	Merci, icabına göre ikinci defa ilan yapılmasına karar verebilir." , " C)	İki ilan arasındaki müddet iki haftadan aşağı olamaz." , " D)	Tebliğ olunacak evrak ve ilan sureti, tebliği çıkaran merciin herkesin kolayca görebileceği bir yerine asılır." , " E)	İlan alakalının ıttılaına en emin bir şekilde vasıl olacağı umulan ve varsa tebliği çıkaran merciin bulunduğu yerde intişar eden birer gazetede ve ayrıca elektronik ortamda yapılır."],
dogruCevap: "C)	İki ilan arasındaki müddet iki haftadan aşağı olamaz."},





{//500
metin: "  98. Tebligat Kanununun Uygulanmasına Dair Yönetmelik'e göre yabancı ülkelere gönderilecek olan ve belirli bir günü içeren tebliğ evrakının, tebliği çıkaran merci tarafından, belirlenen günden en az kaç ay önce ilgili bakanlığa gönderilmesi gerekir?",
secenekler: [" A) Bir " , "B) İki" , " C) Üç" , " D) Dört" , " E) Beş"],
dogruCevap: "C) Üç"},





{//501
metin: "  99. Tebligat Kanununun Uygulanmasına Dair Yönetmelik'e göre yabancı ülkelerde Türk vatandaşına yapılacak tebligat ile ilgili aşağıdakilerden hangisi yanlıştır?",
secenekler: [" A)	Türkiye Büyükelçiliği veya Konsolosluğu tarafından tebliğ işleminin gerçekleştirilmesinden sonra evrak doğrudan ilgili kazaî mercie gönderilir." , " B)	Tebliğin konusu ile hangi merci tarafından çıkarıldığı bilgilerinin yer aldığı ve otuz gün içinde başvurulmadığı takdirde tebliğin yapılmış sayılacağı ihtarını içeren bildirim, muhataba o ülkenin mevzuatının izin verdiği yöntemle gönderilir." , " C)	Muhatap Türkiye Büyükelçiliği veya Konsolosluğuna başvurduğu takdirde tebliğ evrakını almaktan kaçınırsa, bu hususta düzenlenecek tutanak tarihinde tebliğ yapılmış sayılır." , " D)	Tebellüğden kaçınma hâlinde bu husus mazbataya yazılarak tebliğ yapan tarafından imzalanır." , " E)	Bildirimin o ülkenin mevzuatına göre muhataba tebliğ edildiği belgelendirildiğinde, tebliğ tarihinden itibaren on beş gün içinde Türkiye Büyükelçiliği veya Konsolosluğuna başvurulmadığı takdirde tebligat on beşinci günün bitiminde yapılmış sayılır."],
dogruCevap: " E)	Bildirimin o ülkenin mevzuatına göre muhataba tebliğ edildiği belgelendirildiğinde, tebliğ tarihinden itibaren on beş gün içinde Türkiye Büyükelçiliği veya Konsolosluğuna başvurulmadığı takdirde tebligat on beşinci günün bitiminde yapılmış sayılır."},

{//502
metin: "  100. Elektronik Tebligat Yönetmeliği'ne göre işlem ve delil kayıtları erişilebilir şekilde, güvenliği, gizliliği ve bütünlüğü sağlanarak muhatabın UETS'ye erişim kayıtları kaç yıl arşivde muhafaza edilir?",
secenekler: [" A) On" , " B) Orı iki" , " C) On beş" , " D) Yirmi " , "E) Otuz"],
dogruCevap: "A) On"},









]; 

let soruIndex = -1; // Başlangıçta hiçbir soru gösterilmemiş

function soruyuGoster(index) {
  const soruContainer = document.querySelector('.soruContainer');
  const soruDiv = document.getElementById("soruDiv");
  const cevaplaButton = document.getElementById("cevaplaButton");
  const kapatButton = document.getElementById("kapatButton");
  const dogruCevap = document.getElementById("dogruCevap");
  const cevaplarDiv = document.getElementById("cevaplar");

  // Her soru gösterildiğinde cevaplarDiv içeriğini temizle
  cevaplarDiv.innerHTML = "";

  // Eğer bir soru gösteriliyorsa, önceki soruyu temizle
  soruDiv.innerHTML = "";

  // İlgili soruyu göster
  soruIndex = index;

  soruDiv.innerHTML = "<p id='cevap-1'>" + sorular[soruIndex].metin + "</p>";

  sorular[soruIndex].secenekler.forEach(function (secenek, index) {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "cevapSecenek";
    radioInput.value = secenek;
   

    const label = document.createElement("text-area");
    label.textContent = secenek;

    soruDiv.appendChild(radioInput);
    soruDiv.appendChild(label);
    soruDiv.appendChild(document.createElement("br"));
    soruDiv.appendChild(document.createElement("br"));
  });

  // "Cevapla" ve "Kapat" butonlarını göster
  cevaplaButton.style.display = "inline-block";
  kapatButton.style.display = "inline-block";

  // SoruContainer'ı görünür hale getir
  //soruContainer.style.display = "none";

  // Doğru cevap alanını gizle
  dogruCevap.style.display = "none";
}

function cevapla() {
  const dogruCevap = sorular[soruIndex].dogruCevap;
  const secilenCevap = document.querySelector('input[name="cevapSecenek"]:checked');
  const dogruCevapElement = document.getElementById("dogruCevap");
  const cevaplarDiv = document.getElementById("cevaplar");
  cevaplarDiv.style.fontSize = "5px";
  

  if (secilenCevap) {
    // Doğru cevap alanını göster
    dogruCevapElement.textContent = " ===> " + dogruCevap;
    dogruCevapElement.style.display = "block";
  } else {
    alert("Lütfen bir cevap seçin.");
  }

  // "Cevapla" ve "Kapat" butonlarını gizle
  const cevaplaButton = document.getElementById("cevaplaButton");
  const kapatButton = document.getElementById("kapatButton");
  
}

function kapat() {
  const soruContainer = document.querySelector('.soruContainer');
  const soruDiv = document.getElementById("soruDiv");
  const cevaplaButton = document.getElementById("cevaplaButton");
  const kapatButton = document.getElementById("kapatButton");
  const dogruCevap = document.getElementById("dogruCevap");
  const cevaplarDiv = document.getElementById("cevaplar");

  // Her kapat butonuna tıklamada cevaplarDiv içeriğini temizle
  cevaplarDiv.innerHTML = "";

  // SoruDiv'u temizle
  soruDiv.innerHTML = "";

  // "Cevapla" ve "Kapat" butonlarını gizle
  cevaplaButton.style.display = "none";
  kapatButton.style.display = "none";

  // SoruContainer'ı gizle
  soruContainer.style.display = "none";

  // Doğru cevap alanını temizle ve gizle
  dogruCevap.textContent = "";
  dogruCevap.style.display = "none";
}
