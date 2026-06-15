// risingSignDescriptions.ts
// 12 yükselen burç için SEO içerik metinleri — sonuç ekranında gösterilir.
// Sıralama Koç..Balık (src/lib/risingSign.ts içindeki SIGNS ile AYNI sıra).
// NOT: Bu metinler taslaktır; Demet Baltacı kendi üslubuna göre düzeltebilir/onaylayabilir.
// Kullanım: kullanıcı sonucu çıktığında RISING_DESCRIPTIONS[burcIndex].text gösterilir;
// başlık olarak "{tr} Yükselen" + yöneticisi "{ruler}" rozeti kullanılabilir.

export interface RisingDescription {
  tr: string;     // burç adı
  ruler: string;  // yönetici gezegen
  text: string;   // ~90-110 kelimelik açıklama (SEO + kullanıcı)
}

export const RISING_DESCRIPTIONS: RisingDescription[] = [
  {
    tr: "Koç",
    ruler: "Mars",
    text:
      "Koç yükselen, çevrenize bıraktığınız ilk izlenimde enerji, cesaret ve hareket taşır. Yöneticiniz Mars olduğu için duruşunuz dinamik, bakışınız doğrudandır; bir ortama girdiğinizde fark edilirsiniz. İnsanlar sizi girişken, hızlı karar veren ve mücadeleci biri olarak tanır. Yeni başlangıçlardan çekinmez, önünüze çıkan engeli aşmaya odaklanırsınız. Zaman zaman aceleci ya da fazla dolaysız görünebilirsiniz, ama bu aynı zamanda samimiyetinizin göstergesidir. Koç yükselenler genellikle genç ve canlı bir görünüme sahiptir; yaşamı bir meydan okuma gibi karşılar, harekete geçmekten asla korkmazsınız.",
  },
  {
    tr: "Boğa",
    ruler: "Venüs",
    text:
      "Boğa yükselen, dışarıya sakin, güven veren ve sıcak bir izlenim yansıtır. Yöneticiniz Venüs olduğu için duruşunuzda doğal bir çekicilik ve zarafet vardır; aceleye getirilmeyen, oturaklı bir hâliniz olur. İnsanlar yanınızda kendini huzurlu hisseder, çünkü istikrarlı ve sadık biri olduğunuzu sezerler. Konfora, güzelliğe ve hayatın somut zevklerine değer verirsiniz. Kolay kolay öfkelenmezsiniz ama bir karara vardığınızda da o kararı sabırla sonuna kadar taşırsınız. Boğa yükselenler çoğu zaman sıcak bir bakışa ve hoş bir sese sahiptir; varlığınız, bulunduğunuz ortama dinginlik katar.",
  },
  {
    tr: "İkizler",
    ruler: "Merkür",
    text:
      "İkizler yükselen, çevresine meraklı, konuşkan ve hızlı zekâlı bir izlenim verir. Yöneticiniz Merkür olduğu için ifadeniz canlı, hâliniz hareketlidir; genellikle yaşından genç görünen, kıvrak bir enerjiniz olur. İnsanlar sizi sosyal, esprili ve her konuda sohbet edebilen biri olarak tanır. Yeni bilgilere, insanlara ve fikirlere doymak bilmeyen bir ilginiz vardır. Zaman zaman bir yerde durmakta zorlanabilir, dikkatiniz hızla dağılabilir; ama bu çok yönlülüğünüzün de kaynağıdır. İkizler yükselenler iletişimde ustadır; bir ortama girdiğinizde havayı kolayca yumuşatır, çevrenizdekileri konuşmaya ve gülümsemeye davet edersiniz.",
  },
  {
    tr: "Yengeç",
    ruler: "Ay",
    text:
      "Yengeç yükselen, dışarıya şefkatli, korumacı ve duygusal bir izlenim yansıtır. Yöneticiniz Ay olduğu için ifadeniz yumuşak, bakışınız sıcaktır; insanlar yanınızda anlaşıldığını ve güvende olduğunu hisseder. Sevdiklerinize ve ailenize düşkünlüğünüz, ilk tanışmada bile sezilir. Çevrenizdekilerin ruh hâline karşı son derece duyarlısınızdır; bir odanın enerjisini hemen okursunuz. Zaman zaman kendinizi koruma içgüdüsüyle bir kabuğa çekilebilir, mesafeli görünebilirsiniz; ama bu, hassas iç dünyanızı korumak içindir. Yengeç yükselenler genellikle sıcak, davetkâr bir varlığa sahiptir; insanlar size içini açmakta zorlanmaz.",
  },
  {
    tr: "Aslan",
    ruler: "Güneş",
    text:
      "Aslan yükselen, bir ortama girdiğinde dikkat çeken, sıcak ve karizmatik bir izlenim bırakır. Yöneticiniz Güneş olduğu için duruşunuzda doğal bir gurur ve ışık vardır; insanlar sizi kendinden emin, cömert ve etkileyici biri olarak tanır. Sahne sizin gibilere göredir; takdir edilmek sizi besler, siz de çevrenize bu sıcaklığı geri verirsiniz. Görünümünüze ve bıraktığınız etkiye önem verir, kendinizi ifade etmekten çekinmezsiniz. Zaman zaman gururlu ya da gösterişli görünebilirsiniz, ama altında geniş ve içten bir kalp yatar. Aslan yükselenler çoğu zaman güçlü bir duruşa ve akılda kalan bir varlığa sahiptir.",
  },
  {
    tr: "Başak",
    ruler: "Merkür",
    text:
      "Başak yükselen, çevresine zarif, düzenli ve özenli bir izlenim verir. Yöneticiniz Merkür olduğu için bakışınız dikkatli, hâliniz ölçülüdür; ayrıntıları fark eden, sakin bir gözlemci enerjiniz vardır. İnsanlar sizi mütevazı, çalışkan ve güvenilir biri olarak tanır. Görünümünüzde sadelik ve temizlik öne çıkar; abartıdan çok inceliği seversiniz. Bir işe hizmet etme, faydalı olma arzunuz daha ilk tanışmada hissedilir. Zaman zaman fazla eleştirel ya da titiz görünebilirsiniz, ama bu mükemmeli arayışınızın doğal bir sonucudur. Başak yükselenler genellikle dingin, derli toplu ve insana güven veren bir varlığa sahiptir.",
  },
  {
    tr: "Terazi",
    ruler: "Venüs",
    text:
      "Terazi yükselen, dışarıya zarif, uyumlu ve cana yakın bir izlenim yansıtır. Yöneticiniz Venüs olduğu için duruşunuzda doğal bir incelik ve denge vardır; gülümsemeniz ve nazik tavrınız insanları kolayca kendinize ısındırır. İnsanlar sizi diplomatik, hoşgörülü ve estetik duygusu güçlü biri olarak tanır. Çatışmadan çok uzlaşmayı, kabalıktan çok zarafeti seçersiniz. İlişkiler ve ortaklıklar sizin için yaşamın merkezindedir; karşınızdakini anlamaya gerçekten çaba gösterirsiniz. Zaman zaman karar vermekte zorlanabilir, herkesi memnun etme isteğiyle kendinizi geri plana atabilirsiniz. Terazi yükselenler çoğu zaman çekici, dengeli ve hoş bir varlığa sahiptir.",
  },
  {
    tr: "Akrep",
    ruler: "Mars / Plüton",
    text:
      "Akrep yükselen, çevresine yoğun, gizemli ve etkileyici bir izlenim bırakır. Yöneticiniz Mars ve Plüton olduğu için bakışınız derin, varlığınız manyetiktir; insanlar sizi ilk anda tam olarak çözemez, bu da merak uyandırır. Duygularınızı kolay kolay ele vermez, kontrollü ve ölçülü bir duruş sergilersiniz. İnsanlar sizi güçlü, kararlı ve sadık biri olarak tanır; yüzeyin altını görme yeteneğiniz daha ilk tanışmada sezilir. Zaman zaman mesafeli ya da temkinli görünebilirsiniz, çünkü güveni hak edene açılırsınız. Akrep yükselenler genellikle delici bir bakışa ve insanı içine çeken, unutulmaz bir varlığa sahiptir.",
  },
  {
    tr: "Yay",
    ruler: "Jüpiter",
    text:
      "Yay yükselen, dışarıya özgür, neşeli ve maceracı bir izlenim yansıtır. Yöneticiniz Jüpiter olduğu için hâliniz iyimser, enerjiniz genişleyicidir; insanlar yanınızda kendini iyi ve umutlu hisseder. Sizi samimi, açık sözlü ve hayata meraklı biri olarak tanırlar. Yeni yerler, fikirler ve deneyimler sizi çeker; bir yere ya da kalıba sığmaktan hoşlanmazsınız. Dürüstlüğünüz bazen fazla dolaysız görünebilir, ama art niyet taşımadığınız hemen anlaşılır. Yay yükselenler çoğu zaman güleryüzlü, hareketli ve özgürlüğüne düşkün bir duruşa sahiptir; varlığınız çevrenize coşku ve genişlik duygusu taşır.",
  },
  {
    tr: "Oğlak",
    ruler: "Satürn",
    text:
      "Oğlak yükselen, çevresine ciddi, ağırbaşlı ve güven veren bir izlenim bırakır. Yöneticiniz Satürn olduğu için duruşunuz olgun, hâliniz ölçülüdür; yaşınızdan daha oturaklı bir izlenim verebilirsiniz. İnsanlar sizi disiplinli, sorumluluk sahibi ve hedefine kararlılıkla yürüyen biri olarak tanır. İlk tanışmada biraz mesafeli görünseniz de, bu güveni ciddiye almanızdandır; tanıdıkça arkasındaki sıcaklık ortaya çıkar. Başarıya ve saygınlığa verdiğiniz önem, daha baştan hissedilir. Zaman zaman fazla temkinli ya da kontrollü görünebilirsiniz. Oğlak yükselenler genellikle sağlam, ciddi ve insana güven telkin eden bir varlığa sahiptir.",
  },
  {
    tr: "Kova",
    ruler: "Satürn / Uranüs",
    text:
      "Kova yükselen, çevresine özgün, farklı ve zihinsel bir izlenim verir. Yöneticiniz Satürn ve Uranüs olduğu için duruşunuzda bağımsız, sıra dışı bir hava vardır; kalıplara uymaktan çok kendi tarzınızı yaratırsınız. İnsanlar sizi dostça ama biraz mesafeli, fikirleri güçlü ve geleceğe dönük biri olarak tanır. Herkese eşit yaklaşan, insancıl bir bakışınız vardır; toplulukların içinde rahat edersiniz ama yine de kendinize ait bir alanı korursunuz. Zaman zaman çözülmesi zor ya da uzak görünebilirsiniz, çünkü duygularınızı zihninizden süzerek ifade edersiniz. Kova yükselenler çoğu zaman akılda kalan, alışılmadık ve özgür bir varlığa sahiptir.",
  },
  {
    tr: "Balık",
    ruler: "Jüpiter / Neptün",
    text:
      "Balık yükselen, dışarıya yumuşak, hayalperest ve sezgisel bir izlenim yansıtır. Yöneticiniz Jüpiter ve Neptün olduğu için bakışınız derin ve rüya gibi, hâliniz şefkatlidir; insanlar yanınızda yargılanmadığını hisseder. Sizi anlayışlı, merhametli ve sanatsal ruhlu biri olarak tanırlar. Çevrenizin duygularını âdeta içinize çeker, söylenmeyeni bile sezersiniz. Sınırlarınız bazen belirsizleşebilir; kolayca etkilenen, akışa bırakan bir yanınız vardır. Zaman zaman dalgın ya da bu dünyaya ait değilmiş gibi görünebilirsiniz, ama bu zenginliğiniz aynı zamanda sezgisel gücünüzün kaynağıdır. Balık yükselenler genellikle sıcak, yumuşak ve içe işleyen bir varlığa sahiptir.",
  },
];
