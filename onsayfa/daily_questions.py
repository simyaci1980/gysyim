import os
import json
from datetime import date


def _load_from_static():
    # try to load a JSON questions file at static/data/questions.json
    here = os.path.dirname(__file__)
    repo_root = os.path.normpath(os.path.join(here, '..'))
    path = os.path.join(repo_root, 'static', 'data', 'questions.json')
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, list) and data:
                    return data
        except Exception:
            return None
    return None


def _builtin_questions():
    # Fallback question set from script.js (first 20 questions)
    return [
        {
            'metin': 'Bölge idare mahkemelerinin tüm birimleri ile idare mahkemeleri ve vergi mahkemelerinin iş süreçlerindeki her türlü veri, bilgi ve belge akışı ile dokümantasyon işlemleri nerede yapılır?',
            'secenekler': ['UYAP', 'DAHASI', 'BUCA', 'DOLUR', 'ENİYİS'],
            'dogruCevap': 'UYAP'
        },
        {
            'metin': 'Resmî yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik\'e göre, \'antet\' bölümünde aşağıdakilerden hangisi yer alır?',
            'secenekler': ['Belgenin gönderildiği idarenin adı', 'Belgede ilgi kısmına yazılan idarenin adı', 'Belgeyi gönderen idarenin adı', 'Belgenin konusu', 'Belgenin hangi ortamda hazırlandığı'],
            'dogruCevap': 'Belgeyi gönderen idarenin adı'
        },
        {
            'metin': 'Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik\'e göre, \'metin\' ile ilgili aşağıdakilerden hangisi doğrudur?',
            'secenekler': ['Metin içinde geçen sayıların parantez içinde harfle de yazılması zorunludur', 'Dört ve dörtten çok haneli sayılar sondan sayılmak üzere üçlü gruplara ayrılarak yazılır ve araya virgül işareti konulur', 'Metin içinde yer alan alıntılar tırnak içinde ve/veya eğik (italik) olarak yazılabilir', 'Metin içerisinde kısaltma kullanılacaksa ilk kullanımdan itibaren kısa şekilde yazılır ve belgenin sonuna kısaltma cetveli eklenir', 'Paragraflar arasında bir satır boşluk bırakılır'],
            'dogruCevap': 'Metin içinde yer alan alıntılar tırnak içinde ve/veya eğik (italik) olarak yazılabilir'
        },
        {
            'metin': 'Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik\'e göre, \'sayı\' ile ilgili aşağıdakilerden hangisi doğrudur?',
            'secenekler': ['Aynı kurumda hazırlanmış bazı belgeler aynı sayıya sahip olabilirler', 'Kayıt numarası, belge hazırlanırken EBYS üzerinden alınır', 'Sayıyı oluşturan harf ve rakamların arasına alt tire işareti konur', 'Sayıda en sona standart dosya planı kodu yazılır', '\'Sayı:\' yan başlığı, başlığın son satırından itibaren bir satır boşluk bırakılarak yazılır'],
            'dogruCevap': 'Kayıt numarası, belge hazırlanırken EBYS üzerinden alınır'
        },
        {
            'metin': 'Aşağıdakilerden hangisi T.C. Anayasası\'nın \'kanun önünde eşitlik\' hükmü kapsamında değildir?',
            'secenekler': ['Kadınlar ve erkekler eşit haklara sahiptir. Devlet, bu eşitliğin yaşama geçmesini sağlamakla yükümlüdür', 'Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz', 'Çocuklar, yaşlılar, özürlüler, harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gaziler için alınacak tedbirler eşitlik ilkesine aykırı sayılmaz', 'Hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamaz', 'Devlet organları ve idare makamları bütün işlemlerinde kanun önünde eşitlik ilkesine uygun olarak hareket etmek zorundadırlar'],
            'dogruCevap': 'Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, aşağıdakilerden hangisi sosyal ve ekonomik haklar ve ödevler arasındadır?',
            'secenekler': ['Konut hakkı', 'Mülkiyet hakkı', 'Zorla çalıştırma yasağı', 'Konut dokunulmazlığı', 'Vergi ödevi'],
            'dogruCevap': 'Konut hakkı'
        },
        {
            'metin': 'T.C. Anayasası\'nda \'Hiç kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz.\' hükmü hangi başlık altında düzenlenmiştir?',
            'secenekler': ['Hak arama hürriyeti', 'Suç ve cezalara ilişkin esaslar', 'Yargı yetkisi', 'Kanuni hâkim güvencesi', 'Duruşmaların açık ve kararların gerekçeli olması'],
            'dogruCevap': 'Kanuni hâkim güvencesi'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, \'temel haklar ve ödevler\' ile ilgili aşağıdakilerden hangisi yanlıştır?',
            'secenekler': ['Herkes, kişiliğine bağlı, dokunulmaz, devredilmez, vazgeçilmez temel hak ve hürriyetlere sahiptir', 'Türkiye Cumhuriyetinde temel hak ve ödevler yalnızca Türk vatandaşları için tanınır', 'Temel hak ve hürriyetler, kişinin topluma, ailesine ve diğer kişilere karşı ödev ve sorumluluklarını da ihtiva eder', 'Anayasa hükümlerinden hiçbiri, Devlete veya kişilere, Anayasa ile tanınan temel hak ve hürriyetlerin yok edilmesini veya Anayasada belirtilenden daha geniş şekilde sınırlandırılmasını amaçlayan bir faaliyette bulunmayı mümkün kılacak şekilde yorumlanamaz', 'Anayasada yer alan hak ve hürriyetlerden hiçbiri, Devletin ülkesi ve milletiyle bölünmez bütünlüğünü bozmayı ve insan haklarına dayanan demokratik ve laik Cumhuriyeti ortadan kaldırmayı amaçlayan faaliyetler biçiminde kullanılamaz'],
            'dogruCevap': 'Türkiye Cumhuriyetinde temel hak ve ödevler yalnızca Türk vatandaşları için tanınır'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, \'yasama\' ile ilgili aşağıdakilerden hangisi yanlıştır?',
            'secenekler': ['Türkiye Büyük Millet Meclisi ve Cumhurbaşkanlığı seçimleri beş yılda bir aynı günde yapılır', 'Savaş sebebiyle yeni seçimlerin yapılmasına imkân görülmezse, Türkiye Büyük Millet Meclisi, seçimlerin bir yıl geriye bırakılmasına karar verebilir', 'Yüksek Seçim Kurulunun ve diğer seçim kurullarının görev ve yetkileri yönetmelikle düzenlenir', 'Seçimler, yargı organlarının genel yönetim ve denetimi altında yapılır', 'Türkiye Büyük Millet Meclisi üyeleri, seçildikleri bölgeyi veya kendilerini seçenleri değil, bütün Milleti temsil ederler'],
            'dogruCevap': 'Yüksek Seçim Kurulunun ve diğer seçim kurullarının görev ve yetkileri yönetmelikle düzenlenir'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, Cumhurbaşkanı yardımcıları ve bakanlar ile ilgili aşağıdakilerden hangisi yanlıştır?',
            'secenekler': ['Cumhurbaşkanı yardımcıları ve bakanlar, milletvekili seçilme yeterliliğine sahip olanlar arasından Cumhurbaşkanı tarafından atanır ve görevden alınır', 'Cumhurbaşkanı yardımcıları ve bakanlar, Cumhurbaşkanına karşı sorumludur', 'Cumhurbaşkanı yardımcıları ve bakanlar, Anayasada belirtilen şekilde Türkiye Büyük Millet Meclisi önünde ant içerler', 'Yüce Divanda seçilmeye engel bir suçtan mahkûm edilen Cumhurbaşkanı yardımcısı veya bakanın görevi sona erer', 'Cumhurbaşkanı yardımcıları ve bakanlar, görevleriyle ilgili suçlarda yasama dokunulmazlığına ilişkin hükümlerden yararlanır'],
            'dogruCevap': 'Cumhurbaşkanı yardımcıları ve bakanlar, görevleriyle ilgili suçlarda yasama dokunulmazlığına ilişkin hükümlerden yararlanır'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, Millî Güvenlik Kurulunda aşağıdakilerden hangisi yer almaz?',
            'secenekler': ['Jandarma Genel Komutanı', 'Genelkurmay Başkanı', 'Kara, Deniz ve Hava Kuvvetleri Komutanları', 'Millî Savunma Bakanı', 'İçişleri Bakanı'],
            'dogruCevap': 'Jandarma Genel Komutanı'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, \'Cumhurbaşkanlığı kararnameleri\' ile ilgili aşağıdakilerden hangisi doğrudur?',
            'secenekler': ['Anayasanın ikinci kısmının birinci ve ikinci bölümlerinde yer alan temel haklar, kişi hakları ve ödevleriyle dördüncü bölümde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı kararnamesiyle düzenlenir', 'Cumhurbaşkanlığı kararnamesiyle kamu tüzel kişiliği kurulamaz', 'Kanunda açıkça düzenlenen konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz', 'Cumhurbaşkanlığı kararnamesi ile kanunlarda farklı hükümler bulunması hâlinde, Cumhurbaşkanlığı kararnamesi hükümleri uygulanır', 'Yürütme yetkisine ilişkin konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz'],
            'dogruCevap': 'Kanunda açıkça düzenlenen konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları en geç kaç gün içinde yayımlar?',
            'secenekler': ['Beş', 'Yedi', 'On', 'On beş', 'Otuz'],
            'dogruCevap': 'On beş'
        },
        {
            'metin': 'T.C. Anayasası\'na göre, \'hâkimlik ve savcılık mesleği\' ile ilgili aşağıdakilerden hangisi yanlıştır?',
            'secenekler': ['Hâkimler ve savcılar idari görevleri yönünden Hâkimler ve Savcılar Kuruluna bağlıdırlar', 'Hâkimler ve savcılar altmış beş yaşını bitirinceye kadar hizmet görürler; askerî hâkimlerin yaş haddi, yükselme ve emeklilikleri kanunda gösterilir', 'Hâkimler ve savcılar, kanunda belirtilenlerden başka, resmî ve özel hiçbir görev alamazlar', 'Hâkimler, mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre görev ifa ederler', 'Hâkimler ve savcılar adli ve idari yargı hâkim ve savcıları olarak görev yaparlar'],
            'dogruCevap': 'Hâkimler ve savcılar idari görevleri yönünden Hâkimler ve Savcılar Kuruluna bağlıdırlar'
        },
        {
            'metin': 'Türkiye Cumhuriyeti Anayasası kaç yılında kabul edilmiştir?',
            'secenekler': ['1920', '1921', '1982', '2001'],
            'dogruCevap': '1982'
        },
        {
            'metin': 'Adalet Bakanlığı merkezi nerededir?',
            'secenekler': ['Ankara', 'İstanbul', 'İzmir', 'Bursa'],
            'dogruCevap': 'Ankara'
        },
        {
            'metin': 'Ceza kanununda suç işleyen kimseye ne uygulanır?',
            'secenekler': ['Ceza', 'İhtar', 'Uyarı', 'Para cezası'],
            'dogruCevap': 'Ceza'
        }
    ]


def get_daily_question():
    arr = _load_from_static() or _builtin_questions()
    today = date.today()
    # deterministic index by date
    idx = (today.toordinal()) % len(arr)
    return arr[idx]
